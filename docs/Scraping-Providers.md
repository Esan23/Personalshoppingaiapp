# Scraped Retailers (Amazon · The RealReal · Nordstrom)

These three retailers have **no usable free product-search API**:

| Retailer | Why scraping | Official option (not used) |
|----------|--------------|----------------------------|
| **Amazon** | PA-API is gated behind the Associates program and throttled by your affiliate sales | Product Advertising API (PA-API 5.0) |
| **The RealReal** | Public API is vendor/consignor-only (inventory pipeline), not marketplace listings | Virtual Inventory Vendor API |
| **Nordstrom** | Catalog runs on internal/partner-only APIs; nothing public | Partner/VIP portal only |

So Trine pulls them by extracting their **search-results pages** with [Firecrawl](https://www.firecrawl.dev) structured-JSON scraping — one vendor, one key, one schema for all three.

## How it works
Implemented in [`netlify/functions/curate.ts`](../netlify/functions/curate.ts) as three adapters (`fetchAmazon`, `fetchRealReal`, `fetchNordstrom`) that all call one helper, `scrapeProducts(searchUrl, key)`:

1. The user's natural-language query is reduced to product keywords (`searchKeywords()` — strips prices, ages, filler).
2. Each adapter builds that site's search URL:
   - Amazon — `https://www.amazon.com/s?k=<kw>&high-price=<budget>`
   - The RealReal — `https://www.therealreal.com/products?keywords=<kw>`
   - Nordstrom — `https://www.nordstrom.com/sr?keyword=<kw>`
3. Firecrawl `POST /v2/scrape` runs with `formats: [{ type: "json", schema }]` and returns a `{ products: [...] }` array (title, price, image, url, rating, reviewCount, brand).
4. Rows map to Trine's `Product` shape and flow into the same candidate pool as eBay/Best Buy — **Claude ranks all of them together** into the final three.

## Configuration
Set in Netlify (and `.env` for local `netlify dev`):

| Var | Purpose |
|-----|---------|
| `FIRECRAWL_API_KEY` | Enables all three scrapers. Unset = they're skipped (no behavior change). |
| `SCRAPE_TIMEOUT_MS` | Per-scrape hard cap, default `8000`. |

## Operational notes (important)
- **Paid + slower than the APIs.** Each scrape costs Firecrawl credits and takes seconds (vs. sub-second for eBay/Best Buy). The Firecrawl request uses `proxy: "auto"` (auto-escalates to anti-bot proxies, up to 5 credits) and `maxAge: 1 day` so **repeat queries hit Firecrawl's cache** — fast and not re-billed.
- **Graceful degradation.** Each scraper runs in parallel and is wrapped in `withTimeout(..., SCRAPE_TIMEOUT_MS, [])`, so a slow or failed scrape simply contributes nothing — it never delays or breaks the eBay/Best Buy/AI results.
- **Netlify 10s function limit.** Default synchronous functions time out at ~10s. Keep `SCRAPE_TIMEOUT_MS` low enough that scrape time + the Claude ranking call stays under it. On a first (uncached) query the scrapers may be skipped; once Firecrawl has the page cached, results appear. For heavy/reliable scraping, move `curate` to a background-function + cache architecture or a plan with longer timeouts.
- **Search-page selectors drift.** Because we extract rendered search pages (not a stable API), layout changes can reduce yield. The LLM-schema extraction is resilient, but if a site returns nothing, re-check its search URL and the schema prompt.
- **Terms of service.** Firecrawl performs the retrieval as its commercial offering; review each retailer's ToS and Firecrawl's terms for your use case. Affiliate compliance (e.g. Amazon Associates) is separate from data access.

## Verifying it works (once `FIRECRAWL_API_KEY` is set)
A `/app` query in a category these sites carry (e.g. "a leather crossbody bag under $300") should return options whose `retailer` includes `Amazon`, `The RealReal`, or `Nordstrom`. Without `ANTHROPIC_API_KEY` the function stops at the demo tier before scraping, so both keys are required for live scraped results.
