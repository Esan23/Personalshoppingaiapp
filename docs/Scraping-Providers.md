# Scraped Retailers (Amazon · The RealReal · Nordstrom)

These three retailers have **no usable free product-search API**:

| Retailer | Why scraping | Official option (not used) |
|----------|--------------|----------------------------|
| **Amazon** | PA-API is gated behind the Associates program and throttled by affiliate sales | Product Advertising API 5.0 |
| **The RealReal** | Public API is vendor/consignor-only, not marketplace listings | Virtual Inventory Vendor API |
| **Nordstrom** | Catalog runs on internal/partner-only APIs; nothing public | Partner/VIP portal only |

Trine pulls them by extracting their **search-results pages** with [Firecrawl](https://www.firecrawl.dev) structured-JSON scraping — one vendor, one key, one schema.

## Architecture: async cache (scrape never blocks a request)
Live testing showed a scrape takes **8–60s** (even a Firecrawl cache hit is ~8s, because the page caches but the LLM extraction re-runs) — far beyond Netlify's ~10s synchronous limit. So scraping is fully decoupled from the user request:

```
User → /app → curate ─ reads public.scraped_products (cache, <100ms) ─→ Claude ranks → 3 picks
                  │
                  └─ on cache MISS → fires scrape-warm-background (returns 202 instantly)
                                          │
                                          └─ Firecrawl scrapes 3 sites (8–60s, 15-min budget)
                                             → writes rows into scraped_products
                                             → next identical query is cache-warm
```

| Piece | File | Role |
|-------|------|------|
| Cache table | [`supabase/migrations/0004_scraped_products.sql`](../supabase/migrations/0004_scraped_products.sql) | `public.scraped_products`, public-read RLS, service-role writes |
| Scrapers | [`netlify/lib/scrapers.ts`](../netlify/lib/scrapers.ts) | `searchKeywords`, `scrapeRetailers` (Firecrawl, enhanced proxy) |
| Reader | [`netlify/functions/curate.ts`](../netlify/functions/curate.ts) | `readScrapedCache` + `triggerScrapeWarm` on miss |
| Warmer | [`netlify/functions/scrape-warm-background.ts`](../netlify/functions/scrape-warm-background.ts) | background fn: scrape → upsert cache |

The cache feeds the **same candidate pool** as eBay/Best Buy, so Claude ranks all sources together into the final three. The cache is budget-agnostic; curate applies the per-request budget/review filters when reading.

## Configuration
Set in Netlify (and `.env` for local `netlify dev`):

| Var | Used by | Purpose |
|-----|---------|---------|
| `FIRECRAWL_API_KEY` | both fns | Enables scraping. Unset = scraped retailers are simply absent. |
| `SUPABASE_SERVICE_ROLE_KEY` | background fn | Writes the cache (bypasses RLS). Server-side secret. |
| `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` | curate | Reads the cache (already set for auth). |

`curate` also reaches the warmer via Netlify's auto-provided `URL` env var — no config needed.

## Live test results (2026-06-28)
Ran the real pipeline (query: *"leather crossbody bag"*) with a live Firecrawl key:

| Site | Result | First scrape | Cached page |
|------|--------|-------------|-------------|
| **Nordstrom** | ✅ 6 real products (Tory Burch, Kate Spade, AllSaints) | ~36s | ~8s |
| **The RealReal** | ✅ 6 real products (Celine, Chloé, Cartier, Margiela) | ~60s | ~8s |
| **Amazon** | ❌ 0 products — anti-bot served a non-product page | ~9s | — |

Proven Firecrawl settings (in `scrapers.ts`): **`proxy: "enhanced"`, `onlyMainContent: false`, `waitFor: 3500`, `timeout: 60000`**.

## Operational notes
- **First query for a term shows no scraped results** — it triggers the warm, and the term appears on the *next* identical query (once cached). Cache TTL is 24h (`SCRAPE_TTL_MS`).
- **Amazon is unreliable** via search-page scraping (anti-bot). For real Amazon coverage use a dedicated API like Rainforest; the adapter stays but contributes nothing when blocked.
- **Cost.** `proxy: "enhanced"` bills up to 5 credits/request × 3 sites per *uncached* term. Only cache misses scrape, so cost scales with distinct queries, not traffic.
- **Concurrency.** Two misses for the same term before the first warm finishes can trigger two scrapes; the warmer's freshness check minimizes this. A row-level lock could be added if needed.
- **ToS.** Firecrawl performs retrieval as its commercial offering; review each retailer's ToS and Firecrawl's terms for your use case.

## Verifying (once `FIRECRAWL_API_KEY` + `SUPABASE_SERVICE_ROLE_KEY` are set)
1. Run an `/app` query in a category these sites carry (e.g. *"a leather crossbody bag under $300"*) — first call warms the cache.
2. Check Supabase **Table Editor → `scraped_products`** for new rows (or the background function logs).
3. Re-run the same query — results now include `Amazon` / `The RealReal` / `Nordstrom`.

> `ANTHROPIC_API_KEY` is still required — without it `curate` returns the demo tier before reading the cache.
