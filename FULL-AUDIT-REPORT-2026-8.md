 SEO Audit — cheap-iptv.tv                                                  
                                                                             
  Date: 2026-08-15 · Method: Live crawl + repo inspection (Next.js 16 source   at D:\iptv-lp\cheap-iptv) · Scope: 16-URL sitemap + response headers +     
  schema graph + AI-search signals.                                                                                                                       
  ---                                                                        
  Executive Summary                                                          
                                                                             
  SEO Health Score: 80 / 100 — well-engineered, above-average for the        
  vertical.

  Business type: Digital product / niche e-commerce (IPTV subscription),
  UK-only, one-time payment. YMYL-adjacent, with a legally-sensitive vertical   (see §Legal-adjacent note below).

  Signature strengths: Rich JSON-LD graph (Organization → WebSite → WebPage →   Product with MerchantReturnPolicy), skilfully written llms.txt, explicit
  AI-crawler allowlist, strong security headers, per-page canonicals, Article   + BreadcrumbList on blog posts, internal-link mesh from money-pages into
  blog cluster.

  Top-3 things holding the score down:
  1. Conflicting response headers (X-Frame-Options: DENY and SAMEORIGIN sent
  simultaneously — Cloudflare is double-setting them).
  2. Content footprint is tiny for the competitive term "cheap iptv uk" — 4
  blog posts, 16 total URLs.
  3. Article image in JSON-LD is the site logo on all blog posts — makes
  rich-result eligibility weaker and social previews generic.

  Top-3 quick wins (< 2 hours each):
  1. Add Service + refined Offer.priceValidUntil handling and remove
  duplicate CF headers (Transform Rule in Cloudflare).
  2. Give each blog post a unique 1200×675 hero image and use it in
  Article.image + og:image.
  3. Refresh sitemap lastModified to a live value (drop the hard-coded
  2026-06-29 for content that has actually been touched).

  ---
  Synthesis (10-principle walk)

  - PERCEIVE / observe-external: Live crawl shows HTTP/2 + Cloudflare,
  prerendered Next.js, HIT cache, 490 ms TTFB, 182 KB HTML. Robots.txt
  explicitly allows 12 AI bots. Sitemap is a clean 16-URL urlset.
  - PERCEIVE / observe-internal: Repo is Next.js 16 App Router with Tailwind
  v4, React 19. Central constants.ts drives content and pricing — clean
  single source of truth. IndexNow script already deployed. Content Security
  Policy is real.
  - PERCEIVE / listen: Content copy is written for humans first (money-page
  prose is genuinely readable, not stuffed). E-E-A-T byline + editorial-team
  author schema is in place — the operator has thought about author signals.
  - ANALYZE / think: First principles for this vertical — Google's ranking
  for "cheap iptv uk" is heavily influenced by trust and legal signals, not
  just on-page SEO. Copyright grey area caps the ceiling regardless of
  technical work. So the marginal SEO win from more technical polish is small   compared to the marginal win from more topical content coverage and
  defensible entity signals.
  - ANALYZE / connect-lateral: The Product schema with 4 Offer objects +
  MerchantReturnPolicy is exceptional — this is the same pattern that wins
  Merchant Listings / product carousels for SaaS-like plans. Combine with a
  Service schema and you double-cover intent.
  - ANALYZE / connect-system: The bottleneck is content breadth, not
  technical setup. 4 blog posts cannot outrank content clusters of 30-80
  posts held by competitors. Every technical fix below multiplies whatever
  content depth you add, so content is the compounding investment.
  - VALIDATE / feel: The site "feels" trustworthy in code: named support
  team, real refund mechanics, non-cancelling one-time payment model,
  disclosed WhatsApp number. Missing: any external trust proof (Trustpilot
  widget, real review platform integration).
  - VALIDATE / accept: How would we know a recommendation failed?
  Falsifiability criteria are attached to each item below.
  - ACT / create + grow: Priority-ordered action plan follows.

  ---
  Category Scores

  ┌─────────────────────────────┬────────┬───────┬───────────┐
  │          Category           │ Weight │ Score │ Weighted  │
  ├─────────────────────────────┼────────┼───────┼───────────┤
  │ Technical SEO               │ 22%    │ 78    │ 17.2      │
  ├─────────────────────────────┼────────┼───────┼───────────┤
  │ Content Quality             │ 23%    │ 70    │ 16.1      │
  ├─────────────────────────────┼────────┼───────┼───────────┤
  │ On-Page SEO                 │ 20%    │ 88    │ 17.6      │
  ├─────────────────────────────┼────────┼───────┼───────────┤
  │ Schema / Structured Data    │ 10%    │ 88    │ 8.8       │
  ├─────────────────────────────┼────────┼───────┼───────────┤
  │ Performance (CWV, lab-only) │ 10%    │ 75    │ 7.5       │
  ├─────────────────────────────┼────────┼───────┼───────────┤
  │ AI Search Readiness         │ 10%    │ 92    │ 9.2       │
  ├─────────────────────────────┼────────┼───────┼───────────┤
  │ Images                      │ 5%     │ 70    │ 3.5       │
  ├─────────────────────────────┼────────┼───────┼───────────┤
  │ Total                       │ 100%   │       │ ~80 / 100 │
  └─────────────────────────────┴────────┴───────┴───────────┘

  (Performance is a lab-only estimate — no CrUX/PSI credentials available in
  this session. Run /seo google if you want field CWV.)

  ---
  Findings by Category

  Technical SEO — 78

  Working well
  - HTTP/2, HSTS preload (max-age=63072000; includeSubDomains; preload) —
  next.config.ts:24.
  - CSP present with sensible directives — next.config.ts:8-20.
  - Explicit AI-bot allowlist in robots.ts:8-21 (12 crawlers).
  - Prerendered pages served from Cloudflare edge (x-nextjs-cache: HIT,
  s-maxage=31536000).
  - Permanent 301s preserve link equity from retired posts —
  next.config.ts:59-77.

  Issues
  - 🔴 Duplicate + conflicting X-Frame-Options — response sends both DENY
  (from Next) and SAMEORIGIN (from Cloudflare). Also duplicate
  x-content-type-options and two different referrer-policy values. Browsers
  pick the most restrictive; still, this indicates a config conflict and
  looks broken in header scans.
  - 🟠 CSP allows 'unsafe-inline' on script-src — needed for JSON-LD but
  weakens XSS defense. Comment at next.config.ts:4-7 correctly explains why.
  Not fixable without a rendering change; note for future.
  - 🟡 X-XSS-Protection: 1; mode=block and X-Permitted-Cross-Domain-Policies:   master-only are being added by Cloudflare — both are legacy headers with
  no modern effect. Harmless, but noise.
  - 🟡 Sitemap lastModified is hard-coded to 2026-06-29 for all primary
  content (sitemap.ts:10). Today is 2026-08-15. If content hasn't actually
  changed since June, the date is honest; if it has, this misrepresents
  freshness.

  On-Page SEO — 88

  Working well
  - Title template %s | Cheap IPTV — layout.tsx:27.
  - Every route sets its own title, description, and canonical
  (cheapest-iptv/page.tsx:18-46, blog/[slug]/page.tsx:90-108).
  - H1/H2/H3 hierarchy is clean, keyword-rich but not stuffed.
  - Homepage → money-page internal linking is deliberate
  (InternalLinksSection.tsx).
  - Related-reading blocks per blog post spread link equity into cluster +
  money pages (blog/[slug]/page.tsx:61-82).
  - hreflang: en-GB self-declared correctly for a UK-only site —
  layout.tsx:48-53.

  Issues
  - 🟡 Meta descriptions on money pages are strong; the blog index meta
  (blog/page.tsx:5-8) reads a little generic — one keyword-lite pass would
  tighten it.
  - 🟡 Only 4 internal-link blocks per money page. Compared to the number of
  on-topic cluster pages a competitive term could support, internal linking
  is under-utilised (a symptom of the small footprint, not a bug in the
  linking code).

  Content Quality (E-E-A-T) — 70

  Working well
  - Named author (AUTHOR in constants.ts:12-15), byline on money pages and
  blog posts.
  - 2,200-2,600 word homepage; 1,200-1,400 word blog posts — well above
  thin-content thresholds.
  - Money-page copy is genuinely useful and not AI-slop.
  - Retired sports/broadcaster posts redirected (next.config.ts:66-77) —
  smart DMCA hygiene.

  Issues
  - 🟠 Content footprint too small for the vertical. Ranking sustainably for
  "cheap iptv uk" needs 30-60 supporting posts (device setup guides, "IPTV on   ", "IPTV vs ", troubleshooting posts). You have 4.
  - 🟠 Testimonials are unverifiable (initials + city, no external platform).   Fine for on-page trust, do not wrap them in AggregateRating schema —
  Google penalises unverified rating markup.
  - 🟡 Author entity is generic ("Editorial Team"). A single named person
  with a bio, photo, and social profiles would strengthen E-E-A-T by a
  meaningful margin for a YMYL-adjacent vertical.

  Schema / Structured Data — 88

  Working well
  - Full graph on homepage: Organization + WebSite + WebPage + Product with 4   Offer objects each containing MerchantReturnPolicy — app/page.tsx:44-131.
  This is genuinely excellent — most competitors don't do this.
  - FAQPage on homepage and /cheapest-iptv.
  - Article + BreadcrumbList on every blog post —
  blog/[slug]/page.tsx:123-158.
  - @id linking is used (organizationId, websiteId, webpageId) — Google
  parses this as a real graph.

  Issues
  - 🟠 Article.image uses LOGO_URL on every post — should be a unique post
  hero (blog/[slug]/page.tsx:130). Google's own guidance: article image must
  be representative of the article, ≥1200 px wide.
  - 🟡 FAQPage schema is on commercial pages — since Google's Aug-2023
  restriction, FAQ rich results only render for government/health sites. It
  still helps AI-answer engines cite you, so keep it, but don't count on
  Google rich results. Info-priority, not a fix.
  - 🟡 No WebSite.potentialAction (SearchAction) — even without an on-site
  search endpoint, adding a stub can help with future sitelinks-searchbox
  eligibility (low value).
  - 🟡 hasMerchantReturnPolicy.applicableCountry: "GB" is correct; consider
  adding hasMerchantReturnPolicy.refundType for completeness.

  Performance (lab estimate only) — 75

  - Homepage HTML: 182 KB (largish for a mostly-text page — Framer Motion and   Lucide are bundled; already tree-shaken via optimizePackageImports).
  - TTFB from a Middle-East residential connection: 488 ms — solid, mostly
  reflects distance to CF edge.
  - No client-side data fetching, all pages prerendered — good.
  - Fonts self-hosted via next/font with display: swap and preload: true for
  Inter — good.
  - Not measured in this run: LCP, INP, CLS field data. Run /seo google with
  CrUX credentials for real numbers.

  AI Search Readiness — 92

  Excellent — this is the site's differentiator.
  - llms.txt is genuinely well-written (public/llms.txt): brand facts,
  quotable statements, plan pricing, key pages, common questions. Rare in the   wild.
  - Robots.txt explicitly allow-lists 12 AI crawlers.
  - Homepage prose contains numeric, self-contained factual claims ("37,000+
  channels", "£3.33/month on 24-month term", "60-second activation") that AI
  answer engines can extract cleanly.

  Only thing missing: no Speakable schema for the FAQ block (minor —
  Assistant does not require it, but it's cheap to add).

  Images — 70

  - Logo alt present in Navbar + Footer (Navbar.tsx:51, Footer.tsx:21).
  - Next.js image pipeline serving AVIF + WebP (next.config.ts:43-46) with
  30-day cache.
  - /cheap-iptv.webp at 9.9 KB is served correctly and referenced in
  LOGO_URL.
  - Missing: unique hero images per blog post; no OG image variety across
  pages; no image-sitemap.

  ---
  Legal-adjacent note (non-scoring)

  The vertical (paid IPTV, .tv TLD, "37,000+ channels" including premium
  sports/entertainment) sits in a well-documented copyright grey area in the
  UK. Google's algorithmic behaviour in this niche is materially different
  from a normal e-commerce site — some IPTV keywords are algorithmically
  demoted regardless of on-page quality, and Merchant Center / Google Ads
  eligibility is limited.

  You've already made the sensible mitigations: DMCA page, refund policy,
  removed sports-branded post titles via 301s, no explicit trademark mentions   in blog copy. Nothing to fix. Just calibrate expectations — this audit's
  score is against SEO-craft, not what's achievable in SERPs.

  ---
  Prioritized Action Plan

  🔴 Critical (fix this week)

  C1 — Kill the conflicting response headers
  - Where: Cloudflare dashboard → Rules → Transform Rules → HTTP Response
  Header Modification. Remove Cloudflare's X-Frame-Options,
  X-Content-Type-Options, Referrer-Policy, X-XSS-Protection,
  X-Permitted-Cross-Domain-Policies injection so Next's headers are the sole
  source of truth.
  - Why (THINK): Two X-Frame-Options values in one response is a config
  smell; browsers apply the strictest, so functionally there's no security
  regression, but header-scan tools flag it as broken and Google's own header   inspection may treat it as ambiguous.
  - Falsifiability (ACCEPT): curl -sI https://cheap-iptv.tv/ | grep -ci
  "^x-frame-options" returns exactly 1 after the fix.
  - Leading indicator (GROW): securityheaders.com grade goes from A to A+.
  - Effort: 30 min.

  🟠 High (fix within 2 weeks)

  H1 — Unique hero image per blog post
  - Where: Add heroImage field to BLOG_POSTS in constants.ts:377,
  generate/commission 4 images (1200×675, WebP, ≤ 80 KB), reference from
  Article.image in blog/[slug]/page.tsx:130 and via openGraph.images in
  generateMetadata at blog/[slug]/page.tsx:98-107.
  - Depends on (CONNECT-system): Nothing — unblocked.
  - Falsifiability: Rich Results Test on /blog/best-iptv-uk-guide-2026 shows
  the post-specific image, not the logo. Social share preview on WhatsApp/X
  shows the new image.
  - Leading indicator: GSC → Article rich-result impressions on /blog/* after   14 days.
  - Effort: 3-4 h (mostly generating images — you have /seo image-gen).

  H2 — Fix sitemap.ts freshness signals
  - Where: src/app/sitemap.ts:10. Replace the hard-coded lastReviewed =
  2026-06-29 with either (a) a real per-URL last-touched date sourced from
  git, or (b) a rolling "reviewed within last 30 days" heuristic that only
  bumps when content actually changed.
  - Why: A sitemap that ages backwards signals staleness. Google trusts
  sitemaps that match reality.
  - Falsifiability: GSC → Sitemaps → last read date advances; specific URLs
  show correct lastmod in GSC URL Inspection.
  - Leading indicator: Google's re-crawl frequency in server logs (Cloudflare   Bot Analytics).
  - Effort: 1-2 h.

  H3 — Ship 4-6 cluster posts around device setup + comparisons
  - Where: New entries in BLOG_POSTS + blogContent (blog/[slug]/page.tsx:6).
  - Suggested slugs (SERP-defensible, no trademark risk):
    - how-to-setup-iptv-android-tv
    - how-to-setup-iptv-samsung-smart-tv
    - iptv-buffering-fixes-uk
    - iptv-vpn-do-you-need-one
    - iptv-uk-broadband-speed-requirements
    - m3u-vs-xtream-codes-explained
  - Why: These are informational-intent, top-of-funnel, low legal risk, and
  each unlocks internal links to the money pages you already have. The /seo
  cluster command can produce a full SERP-clustered brief for each.
  - Falsifiability: GSC → 30 days after publish, each new URL has ≥ 5
  impressions per week; if not, thin-content problem or the seed keyword was
  mis-targeted.
  - Leading indicator: Organic sessions to /blog/* in GA4.
  - Effort: 8-12 h per post if done well; front-load two, iterate.

  🟡 Medium (fix this month)

  M1 — Add Service schema alongside Product
  - Where: app/page.tsx:98-131. Add a second @type: "Service" block with
  serviceType: "IPTV subscription", areaServed: "GB", provider: {@id:
  organizationId}, offers referencing the same Offer objects. This
  double-covers "service" and "product" intent classifications by Google.
  - Falsifiability: Schema.org validator returns no errors; Rich Results Test   parses both.
  - Effort: 45 min.

  M2 — Named individual author + author page
  - Where: Replace AUTHOR in constants.ts:12-15 with a real person's name,
  add /authors/<slug> page with bio, photo, credentials, external social
  links (LinkedIn), then reference this URL as Article.author.url.
  - Why: E-E-A-T for a YMYL-adjacent vertical materially benefits from a
  real, verifiable person.
  - Falsifiability: The author name appears in Google's Knowledge Graph API
  results within 90 days of publishing 6+ articles under that byline.
  - Effort: 3-5 h.

  M3 — Refactor priceValidUntil off Date.now() at render time
  - Where: app/page.tsx:28. Currently uses new Date().getFullYear() + 1. This   works but always says "next Dec 31" — Google prefers dates that reflect a
  real offer window. Consider pinning to a real business-decided expiry,
  updated during quarterly SEO passes.
  - Falsifiability: Merchant listing snippets show a sensible price validity
  window in Search.
  - Effort: 15 min.

  M4 — Add SearchAction stub to WebSite schema
  - Where: app/page.tsx:69-77. Add potentialAction: { "@type":
  "SearchAction", target:
  "https://cheap-iptv.tv/search?q={search_term_string}", "query-input":
  "required name=search_term_string" }. Ship a minimal /search route later.
  - Effort: 30 min for the schema; separate task to build search.

  🔵 Low (backlog)

  - L1 — Add Speakable schema to homepage FAQ block for voice-assistant
  citation eligibility.
  - L2 — Publish image-sitemap.xml referencing the hero images from H1.
  - L3 — Consider a Trustpilot integration (real reviews) — high-effort but
  the only clean route to AggregateRating schema in this vertical without
  violating Google's rating guidelines.
  - L4 — Add Product.review block per plan for AI answer-engine grounding (do   NOT add aggregateRating without a verifiable source).
  - L5 — Investigate serving the homepage's animated aurora blobs behind
  prefers-reduced-motion to shave CLS on low-end mobile.
  - L6 — Consider migrating contact@buy-iptv-uk.com mail forwarding to a
  contact@cheap-iptv.tv alias — the cross-domain contact address is
  documented in code comments as intentional, but it looks off-brand in
  schema and copy.

  ---
  Files to Change (map)

  ┌────────────────────┬─────────────────────────────────────────────────┐
  │   Recommendation   │                      Files                      │
  ├────────────────────┼─────────────────────────────────────────────────┤
  │ C1 (headers)       │ Cloudflare Transform Rule; no code change       │
  ├────────────────────┼─────────────────────────────────────────────────┤
  │ H1 (post hero)     │ src/lib/constants.ts:377,                       │
  │                    │ src/app/blog/[slug]/page.tsx:98-108,130         │
  ├────────────────────┼─────────────────────────────────────────────────┤
  │ H2 (sitemap)       │ src/app/sitemap.ts:10-35                        │
  ├────────────────────┼─────────────────────────────────────────────────┤
  │ H3 (cluster posts) │ src/lib/constants.ts:377,                       │
  │                    │ src/app/blog/[slug]/page.tsx:6-57               │
  ├────────────────────┼─────────────────────────────────────────────────┤
  │ M1 (Service        │ src/app/page.tsx:97-131                         │
  │ schema)            │                                                 │
  ├────────────────────┼─────────────────────────────────────────────────┤
  │ M2 (real author)   │ src/lib/constants.ts:12, new                    │
  │                    │ src/app/authors/[slug]/page.tsx                 │
  ├────────────────────┼─────────────────────────────────────────────────┤
  │ M3                 │ src/app/page.tsx:28                             │
  │ (priceValidUntil)  │                                                 │
  ├────────────────────┼─────────────────────────────────────────────────┤
  │ M4 (SearchAction)  │ src/app/page.tsx:69                             │
  └────────────────────┴─────────────────────────────────────────────────┘

  ---
  Next-step commands

  - /seo google — pull real CrUX + GSC data (needs credentials).
  - /seo cluster cheap iptv uk — build a SERP-clustered content map to inform   H3.
  - /seo image-gen blog-hero <topic> — generate the four missing hero images.  - /seo drift baseline https://cheap-iptv.tv/ — snapshot state so you can
  detect regressions after C1/H2 ship.

  Say the word if you want me to write out FULL-AUDIT-REPORT.md +
  ACTION-PLAN.md files to the repo (I held off to avoid unrequested docs), or   start implementing C1/H1/H2 now.