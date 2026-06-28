-- Async scrape cache for retailers with no usable product API
-- (Amazon, The RealReal, Nordstrom). The scrape-warm-background function
-- populates this table via Firecrawl; the curate function only READS it, so the
-- slow (8-60s) scrape never blocks a user request. Rows are public, read-only
-- catalog data — anyone may read; only the service role writes them.

create table if not exists public.scraped_products (
  id           uuid primary key default gen_random_uuid(),
  query_key    text not null,
  retailer     text not null,
  title        text not null,
  price        numeric,
  image_url    text,
  product_url  text not null,
  review_score numeric,
  review_count int,
  brand        text,
  scraped_at   timestamptz not null default now()
);

create index if not exists scraped_products_query_idx
  on public.scraped_products (query_key, scraped_at desc);

alter table public.scraped_products enable row level security;

drop policy if exists "scraped products: public read" on public.scraped_products;
create policy "scraped products: public read"
  on public.scraped_products for select using (true);
