# FULL-AUDIT-REPORT — cheap-iptv.tv

- **Audit date:** 2026-07-28
- **Business type detected:** Subscription e-commerce / digital service (single-product SaaS-adjacent). Not a local business. No physical location, no products.json feed.
- **Locale target:** en-GB (single-language site).
- **Deploy/source drift observed:** live `<title>` says "From £3.33" and hero says "£3.33"; current source branch `seo/sub-pages-cluster-2026-05` still says "From £4.99". A recent build was shipped from a different branch — audit findings below refer to source unless prefixed with **[LIVE]**.

---

## SEO Health Score: **64 / 100**

| Category | Weight | Score | Weighted |
|---|---:|---:|---:|
| Technical SEO | 22% | 65 | 14.3 |
| Content Quality | 23% | 55 | 12.7 |
| On-Page SEO | 20% | 78 | 15.6 |
| Schema / Structured Data | 10% | 55 | 5.5 |
| Performance (CWV, estimated — no CrUX access) | 10% | 60 | 6.0 |
| AI Search Readiness (GEO) | 10% | 70 | 7.0 |
| Images | 5% | 60 | 3.0 |
| **Total** | 100% |  | **64.1** |

---

## Executive Summary

### Top 5 critical issues

1. **`Organization.logo` schema URL is a 404 on every page.** All JSON-LD blocks reference `${SITE_URL}/buy-iptv-uk.webp`, but only `/public/cheap-iptv.webp` exists. Google's rich-results parser will silently drop the logo; every Organization block is effectively invalid. Referenced in `src/app/page.tsx:24`, `src/app/cheapest-iptv/page.tsx:92`, `src/app/iptv-service-provider/page.tsx:97`, `src/app/iptv-subscription/page.tsx:95`, `src/app/blog/[slug]/page.tsx:97`.
2. **Duplicate URL in the live sitemap.** `/blog/iptv-vs-traditional-tv` appears at positions 3 and 15 (WebFetch on `/sitemap.xml`). Search engines flag duplicate sitemap entries as a signal of low-effort site management.
3. **`AggregateRating` in `Product` schema claims 50,000 reviews with 4.9/5 but the page shows only 6 testimonials.** Google's structured-data policy requires that aggregate ratings be substantiated by reviews visible on the page (or via linked `Review` schema). This is a rich-results guideline violation and, at 50,000, reads as review spam — risk of manual action.
4. **Brand-name inconsistency inside the blog corpus.** Blog articles at `src/app/blog/[slug]/page.tsx:6-48` repeatedly reference "Premium IPTV" as the recommended provider ("Premium IPTV sends these via both email and WhatsApp", "Premium IPTV was built..."). The site is branded "Cheap IPTV". This is a copy-paste artefact from an earlier template — hurts E-E-A-T, confuses AI citation engines, and reads as thinly-rewritten affiliate content.
5. **Contact email uses a different root domain.** `CONTACT_EMAIL = "contact@buy-iptv-uk.com"` in `src/lib/constants.ts:3`. A subscription commerce site whose customer-service email lives on a different domain than the trading domain is an E-E-A-T red flag and often a Trustpilot dispute trigger. It also weakens the Organization schema's `contactPoint`.

### Top 5 quick wins

1. Rename the JSON-LD `logo` URL from `/buy-iptv-uk.webp` to `/cheap-iptv.webp` (5-min single-file constant, then a search/replace) — fixes 6+ broken schema references.
2. Delete the duplicate `/blog/iptv-vs-traditional-tv` from the live sitemap (looks like a hand-edited XML on the live deploy, since source `src/app/sitemap.ts` doesn't emit it twice). Reconcile the live deployment with source.
3. Add an OpenGraph image (`openGraph.images`) to the root layout — currently the Twitter card is set to `summary_large_image` with no image resolved, so social previews render blank. Use the existing `/cheap-iptv.webp` at minimum.
4. Strip the `AggregateRating` block from the homepage Product schema until real reviews exist, or drop `reviewCount` to a number the page can defend (six visible testimonials → `reviewCount: 6`, tied to per-review schema).
5. Do a project-wide find/replace of "Premium IPTV" → "cheap-iptv.tv" (or contextual rewrite) inside `src/app/blog/[slug]/page.tsx` blogContent.

---

## Technical SEO

### Robots & indexability
- **[LIVE] `robots.txt`** — hand-crafted; correctly Allow-lists GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Bingbot, CCBot. Includes `Host:` directive and sitemap reference. Positive signal for GEO. **However** this does not match `src/app/robots.ts`, which only disallows `/api/`, `/_next/`, `/admin/`. A rebuild from source will overwrite the LLM allowlist. **Sync required.**
- **Meta robots** — homepage and sub-pages emit correct `index, follow` with `max-image-preview: large`. Good.

### Sitemap
- **[LIVE] Duplicate URL:** `/blog/iptv-vs-traditional-tv` appears twice (positions 3 and 15).
- **[LIVE] Contains `/iptv-channels`** — not present in `src/app/sitemap.ts`. Confirmed present at 200 OK by WebFetch — so the page exists on the live deployment but is missing from current source, further evidence of deploy/source drift.
- **[LIVE] Contains `/blog/cheap-iptv-subscription-uk-guide`** — also missing from source `BLOG_POSTS`.
- **Source sitemap lists `/blog/live-uk-sports-streaming-guide`** — but this URL is not present in the live sitemap. Redirect from `premier-league-streaming-guide` → `live-uk-sports-streaming-guide` exists in `next.config.ts:22`, so the intended target is not being indexed.

### Canonicals
- All sub-pages set `alternates.canonical`. Homepage sets `canonical: "/"`. Good.
- `hreflang` for `en-GB` self-references homepage. No conflicting language variants — acceptable for a single-language UK site.

### HTTPS / headers
- `next.config.ts` sets `poweredByHeader: false` (good), `compress: true` (good), `productionBrowserSourceMaps: false` (good).
- No custom security headers (`Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options`, `Referrer-Policy`). Not directly ranking factors but part of technical hygiene.

### Redirects
- Two `permanent: true` (301) redirects wired for renamed blog slugs (`iptv-vs-sky-comparison`, `premier-league-streaming-guide`). Correctly implemented.

---

## Content Quality

### Sub-pages (`/cheapest-iptv`, `/iptv-service-provider`, `/iptv-subscription`)
- Word counts ~2,000–2,400. Sensible depth for the target head keywords.
- Genuine editorial voice, byline (`cheap-iptv.tv editorial team`), `<time dateTime>` present, `Last updated` visible in copy. Strong E-E-A-T scaffolding.
- Cross-linking between the three cluster pages is well-executed — each sub-page routes readers to the sibling pages contextually.
- Author is **`Organization`**, not `Person`. Google's Sept 2025 QRG update weights named-author signals higher — add a real `Person` author with a bio page.

### Blog corpus
- Only **4 blog posts** in source (`BLOG_POSTS` in `src/lib/constants.ts:352-389`). Live sitemap shows 5 (one extra live-only post + one duplicate).
- Body content lives in `blogContent` object in `src/app/blog/[slug]/page.tsx:6-48`. Each post is 5–7 short paragraphs, ~500–800 words. This is **thin** for guide/tutorial content — competitors ranking for "best IPTV UK 2026" run 3,000–5,000 word listicles.
- **Brand-confusion pollution (repeat of Critical #4):** blog posts reference "Premium IPTV" as if it were the site's product. Example: `"Premium IPTV UK was built specifically to address the problems..."` (best-iptv-uk-guide-2026), `"Premium IPTV recommends IPTV Smarters Pro"` (how-to-setup-iptv-firestick). Reads as an unfinished rewrite of syndicated content.
- Legal-grey references: "top-tier UK football" etc. are already sanitized (per recent commit `d8cb751 chore: scrub banned broadcaster/league references`) — good. Keep this policy.

### Unverified quantitative claims (compliance risk)
The site repeats these claims verbatim in metadata, hero, testimonials and schema:
- 37,000+ channels
- 198,000+ films & series
- 50,000+ UK subscribers
- 4.9/5 rating

None are substantiated with a source, third-party audit, or Trustpilot/Reddit link. Under UK ASA CAP rules ("Substantiation" 3.7) claims like "50,000 UK subscribers" and "4.9/5" require documented evidence. This is a marketing-compliance risk on top of a schema-guidelines risk.

### Duplication
- FAQ answers on `/cheapest-iptv`, `/iptv-service-provider`, `/iptv-subscription` overlap conceptually but are worded differently — acceptable.
- Every sub-page ends with the same reused `<TrustSection />` and `<CTASection />` components — no near-duplicate boilerplate flagged as thin.

---

## On-Page SEO

- Titles are keyword-led, natural and within Google's ~60-char SERP width for the sub-pages. Homepage title `Cheap IPTV 2026 | Cheapest UK IPTV Service From £4.99` (source) or `... From £3.33` (live) is a strong pattern.
- Meta descriptions are concrete and CTA-driven.
- H1 hierarchy is clean in source (one `<h1>` per page). WebFetch reported "2 H1s" on live — this is a parser artefact from the pill-badge span rendered above the heading, not a real duplicate H1 in the DOM.
- Internal linking on the three cluster pages is exemplary (each links to the other two + supporting pages).
- **Homepage internal linking is weak** — `NAV_LINKS` (in `src/lib/constants.ts:5-11`) only points to on-page anchors (`/#features`, `/#pricing`, etc.) — the sub-pages `/cheapest-iptv`, `/iptv-service-provider`, `/iptv-subscription` are **not reachable from the header or footer** on the homepage. This starves them of PageRank.
- **Legal/footer links (`LEGAL_LINKS`)** point to `/terms`, `/privacy`, `/dmca`, `/refund` — good. But `/contact` and `/blog` are also nav-worthy and not consistently present in the primary nav.

---

## Schema & Structured Data

### Detected schema types
- Homepage: `Organization`, `WebSite`, `WebPage`, `Product` (with `AggregateRating`), `FAQPage`
- Sub-pages: `Organization`, `WebPage`, `FAQPage`
- Blog posts: `Article`

### Problems
1. **Broken `logo` URL in every Organization block** — recap of Critical #1. `/buy-iptv-uk.webp` returns 404.
2. **`Product.aggregateRating` unsubstantiated** — recap of Critical #3.
3. **`Product.offers` missing `priceValidUntil`** — Google Search Console will emit a warning; not a hard error.
4. **No `BreadcrumbList` schema on sub-pages or blog posts** — breadcrumbs render in SERP snippets when correctly marked up.
5. **`FAQPage` schema on commercial pages** — since Google's Aug 2023 restriction, only government & healthcare sites get FAQ rich results from this. Existing `FAQPage` blocks are not a penalty but no longer produce SERP enhancements. Kept for potential LLM/AI-citation benefit (Info-level).
6. **No `HowTo` schema on the Fire Stick guide** — correct choice (deprecated Sept 2023).
7. **Blog `Article.author` is `Organization`** — swap to `Person` with `url` pointing to an author bio page for stronger E-E-A-T.
8. **No `ImageObject` for the Product image** — `Product.image` is present as a URL string only. Enrich with dimensions and a real product/product-mock image (not the logo).
9. **`WebSite` schema missing `potentialAction: SearchAction`** — no site-search feature exists, so this is fine to omit.

---

## Performance (CWV — estimated)

No live CrUX/PSI data was fetched (no Google API creds were exchanged). Estimates from source:
- `HeroSection.tsx` uses `framer-motion` + `ParticleBackground` + 5 blurred aurora blobs + 4 floating orbs on the first viewport → heavy paint work. Likely **LCP hit** on mid-range mobile.
- All top-of-page components declared `"use client"` — the hero, features, pricing, testimonials sections all ship JS. First-load JS will be well above the 170 KB Next.js recommendation.
- Fonts: `Inter` (preloaded) + `Outfit` (preload:false) — sensible.
- Images: only 1 webp in `/public`. `next.config.ts` correctly whitelists `avif, webp` with 30-day cache TTL.
- `optimizePackageImports: ["lucide-react", "framer-motion"]` — good.

**Recommended verification:** run PageSpeed Insights on `/`, `/cheapest-iptv`, `/blog/best-iptv-uk-guide-2026`. Target INP < 200 ms, LCP < 2.5 s, CLS < 0.1.

---

## Images

- Only two public images: `cheap-iptv.webp` (logo) and the `favicon_io/` bundle. Everything else is Lucide SVG icons — good for perf, but limits `image` search visibility.
- No dedicated OG image asset — recommend a 1200×630 branded card at `/og/home.webp` (and per-cluster-page variants).
- `alt` text audit needs a live render — the Navbar and Footer both use `<Image src="/cheap-iptv.webp">` without visible `alt` attributes in the excerpt read. Verify each `<Image>` sets a descriptive `alt`.

---

## AI Search Readiness (GEO)

**Positive**
- Extensive LLM bot Allow list on live `robots.txt` (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, Bingbot, CCBot).
- Sub-pages use clean H2/H3 hierarchy with topical paragraphs — well-formed for extraction into AI Overviews.
- Byline + `dateModified` on sub-pages helps AI systems distinguish freshness.

**Negative**
- **No `llms.txt`** at the domain root. Adding a `/llms.txt` that summarises the four plans, key facts, and links to the three cluster pages will improve citation rate on Perplexity and ChatGPT web-search.
- Blog "Premium IPTV" brand contamination will confuse citation attribution.
- `Product.aggregateRating` overreach hurts trustworthiness scoring in citation-selection heuristics.

---

## Business-model & compliance observations
These are not standard SEO items, but they shape how organic and AI-citation channels will treat the domain:

1. **IPTV grey-market context** — regulated ad platforms (Google Ads, Meta Ads) restrict IPTV subscription advertising in the UK. Organic search is disproportionately important for this niche, which raises the stakes of every issue above.
2. **Contact email on a different domain (`buy-iptv-uk.com`)** — see Critical #5. Consider `contact@cheap-iptv.tv`.
3. **`WHATSAPP_NUMBER` and `buildWhatsAppCheckoutUrl`** — the checkout is WhatsApp-mediated. This is fine but means no on-site `Order`/`OrderStatus` schema is possible. Consider a `Service` schema alongside `Product` to describe the offering.

---

## Synthesis (10-principle walkthrough)

- **PERCEIVE (observe-external / observe-internal / listen):** Live site drifts from source; multiple schema blocks exist but reference a 404 logo; sitemap has a duplicate.
- **ANALYZE (think / connect-lateral / connect-system):** The broken logo, unsubstantiated review count, and brand confusion in the blog all point to a single root cause — a template/rebrand that was never fully finished. Sub-pages (recent work) are clean; homepage + blog (older work) carry the debt.
- **VALIDATE (feel / accept):** The falsifiability check for each recommendation is included in the action plan. Highest confidence: fixing the logo URL is a mechanical win. Lowest confidence: exact CWV numbers pending PSI.
- **ACT (create / grow):** Prioritise the schema fixes (10-minute wins, unlock rich results) before the content rewrite (weeks of work). Add `/llms.txt` early — cheap, cache-warm bet on citation growth. Leading indicators to monitor without re-audit: GSC "Products" rich-results errors, GSC "Sitemap" errors, GSC "Coverage" (watch for the ghost URLs `/iptv-channels` and `cheap-iptv-subscription-uk-guide`), Perplexity brand mention count.
