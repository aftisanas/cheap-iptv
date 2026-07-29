# ACTION-PLAN — cheap-iptv.tv

Sequenced by priority (Critical → High → Medium → Low). Each item lists:
- **Where** — file + line
- **Fix** — the change
- **Why (first principle)** — the observation it rests on
- **Depends on / unblocks** — sequencing
- **Falsifiability** — how you'd know the fix failed
- **Leading indicator** — signal to watch without re-running the audit

---

## CRITICAL — fix this week

### C1. Fix the broken JSON-LD `logo` URL on every page
- **Where:** `src/app/page.tsx:24`, `src/app/cheapest-iptv/page.tsx:92`, `src/app/iptv-service-provider/page.tsx:97`, `src/app/iptv-subscription/page.tsx:95`, `src/app/blog/[slug]/page.tsx:97`
- **Fix:** Replace `/buy-iptv-uk.webp` with `/cheap-iptv.webp` in all five files. Even better, add `LOGO_URL` to `src/lib/constants.ts` and import it (single source of truth).
- **Why:** `/public/cheap-iptv.webp` exists; `/buy-iptv-uk.webp` does not. Every `Organization.logo` in JSON-LD currently 404s.
- **Depends on:** nothing. Unblocks: valid Organization rich-results, valid Article publisher logo.
- **Falsifiability:** Google Rich Results Test on `/` should stop reporting "logo could not be fetched". Direct-fetch `curl -I https://cheap-iptv.tv/cheap-iptv.webp` returns 200.
- **Leading indicator:** GSC → Enhancements → Merchant listings / Products warnings drop within 14 days.

### C2. Remove or defend the fabricated `AggregateRating`
- **Where:** `src/app/page.tsx:113-119` (Product schema `aggregateRating`)
- **Fix (recommended):** Delete the `aggregateRating` block until real reviews are collected. Alternative: reduce `reviewCount` to the number of testimonials actually rendered on the page (6) and add per-testimonial `Review` schema tied to the same Product `@id`.
- **Why:** Google's Product structured-data policy requires that aggregate ratings be supported by reviews visible on the page. 50,000 reviews with no visible reviews is manual-action bait.
- **Depends on:** nothing. Unblocks: sustainable Product rich results.
- **Falsifiability:** GSC → Products report no longer shows "aggregateRating" warnings; no manual-action email lands.
- **Leading indicator:** Google Merchant listings impressions stabilise instead of dropping.

### C3. Reconcile live deployment with source (or lock the deploy branch)
- **Where:** Git branch state — live shows "£3.33" hero, current source branch shows "£4.99". Live sitemap has `/iptv-channels` and `/blog/cheap-iptv-subscription-uk-guide` that don't exist in source.
- **Fix:** Identify which branch produced the current live deploy; either merge those hidden edits back into `master` (and then rebuild) or roll live back to what source describes. Decide who owns the source of truth.
- **Why:** Silent drift means every future SEO change is applied on top of an unknown baseline. Cannot audit or A/B what you can't see.
- **Depends on:** nothing. Unblocks: everything else in this plan.
- **Falsifiability:** `git checkout master && npm run build && diff live` shows only intended differences.
- **Leading indicator:** No new "phantom" URLs appear in GSC Coverage.

### C4. De-duplicate the live sitemap
- **Where:** live `/sitemap.xml` — `/blog/iptv-vs-traditional-tv` at positions 3 and 15.
- **Fix:** After C3, the source `src/app/sitemap.ts` will regenerate cleanly. If the live sitemap is a static file rather than the Next.js route, delete it and let the Next.js `sitemap.ts` serve.
- **Why:** Duplicate sitemap entries are a low-effort signal. Cheap fix.
- **Depends on:** C3.
- **Falsifiability:** `curl https://cheap-iptv.tv/sitemap.xml | grep -c iptv-vs-traditional-tv` returns 1.
- **Leading indicator:** GSC Sitemap report shows 0 warnings.

### C5. Purge "Premium IPTV" brand references from blog corpus
- **Where:** `src/app/blog/[slug]/page.tsx:6-48` (blogContent object)
- **Fix:** Search/replace "Premium IPTV" → "cheap-iptv.tv" or contextual rewrite. Also review for stray "Premium IPTV UK was built..." kind of phrasing.
- **Why:** Blog articles referencing a competing/different brand name pollute topical authority signals and confuse AI citation.
- **Depends on:** nothing.
- **Falsifiability:** `grep -ri "Premium IPTV" src/` returns 0 hits (excluding legitimate uses of the words "premium" separately).
- **Leading indicator:** Perplexity/ChatGPT citations for "best cheap IPTV UK" reference "cheap-iptv.tv" rather than a generic "Premium IPTV".

---

## HIGH — fix within one week

### H1. Add OpenGraph and Twitter image
- **Where:** `src/app/layout.tsx:68-82` (root metadata `openGraph` and `twitter`)
- **Fix:** Add `openGraph.images: [{ url: "/og/home.png", width: 1200, height: 630 }]` and `twitter.images: ["/og/home.png"]`. Ship a 1200×630 branded card in `/public/og/`.
- **Why:** `summary_large_image` twitter card without an image renders blank on X, LinkedIn, iMessage. Social CTR ~2× with a proper card.
- **Depends on:** nothing.
- **Falsifiability:** Twitter Card Validator + LinkedIn Post Inspector render the image.
- **Leading indicator:** GA4 referral traffic from `t.co`, `l.facebook.com` etc. increases.

### H2. Add sub-pages to primary navigation
- **Where:** `src/lib/constants.ts:5-11` (`NAV_LINKS`)
- **Fix:** Add entries for `/cheapest-iptv`, `/iptv-service-provider`, `/iptv-subscription` in the header nav (or as a "Guides" dropdown). Also put them in the footer.
- **Why:** These three pages exist but are only reachable from each other and the blog. No PageRank flows to them from the homepage. Header-nav placement typically 5–10× link value versus in-body links.
- **Depends on:** decide on nav copy first (avoid clutter).
- **Falsifiability:** Screaming Frog / any crawler shows increased "Inlinks" count on the three pages.
- **Leading indicator:** GSC → Performance → filter by URL for the three pages: impressions climb after Google recrawls (usually 2–4 weeks).

### H3. Sync source `robots.ts` with the deployed LLM allowlist
- **Where:** `src/app/robots.ts`
- **Fix:** Extend the source to emit the same LLM-bot allow rules the live file has. Keep the `Sitemap:` and `Host:` directives.
- **Why:** The live file has been hand-edited; a rebuild from source will overwrite it and silently kill AI-citation growth.
- **Depends on:** C3.
- **Falsifiability:** After next build, `/robots.txt` still contains the GPTBot/ClaudeBot/etc. rules.
- **Leading indicator:** Server logs show continued crawls from LLM user-agents.

### H4. Fix contact email domain mismatch
- **Where:** `src/lib/constants.ts:3` (`CONTACT_EMAIL = "contact@buy-iptv-uk.com"`)
- **Fix:** Set up `contact@cheap-iptv.tv` (or `support@`, `hello@`) and update the constant. Also update the JSON-LD `contactPoint.email` on every page (imported already, so single change).
- **Why:** Same-domain email is baseline E-E-A-T. A different-domain email on a paid-subscription site trips scam-detection heuristics and Trustpilot verification.
- **Depends on:** DNS/mail setup.
- **Falsifiability:** MX records for cheap-iptv.tv resolve; a test email round-trips.
- **Leading indicator:** Support-ticket volume moves off the buy-iptv-uk.com mailbox.

### H5. Add `BreadcrumbList` schema to sub-pages and blog posts
- **Where:** every sub-page under `src/app/*/page.tsx` and `src/app/blog/[slug]/page.tsx`
- **Fix:** Emit a `BreadcrumbList` JSON-LD block with two items (Home → PageName) on cluster pages and three items (Home → Blog → PostTitle) on blog posts.
- **Why:** Breadcrumbs render in Google SERPs and improve visual real estate. Cheap win.
- **Depends on:** nothing.
- **Falsifiability:** Rich Results Test shows "Breadcrumbs" detected on each page.
- **Leading indicator:** SERP snippets start showing "cheap-iptv.tv › cheapest-iptv" instead of the raw URL.

### H6. Substantiate or soften unverified quantitative claims
- **Where:** `src/lib/constants.ts` (`STATS`, testimonials since dates, "4.9/5", "50,000+"), and hero copy across components
- **Fix:** Either
  - (a) publish a Trustpilot / independent third-party badge that verifies the review count, and link it in the footer, OR
  - (b) soften language: "trusted by tens of thousands of UK households" instead of "50,000+".
- **Why:** UK ASA CAP 3.7 requires substantiation of factual claims. On top of ad-compliance risk, unverifiable numbers hurt E-E-A-T scoring.
- **Depends on:** business decision on which claims to keep.
- **Falsifiability:** No ASA complaints; no reviewer/journalist can point to the exact number and call it fabricated.
- **Leading indicator:** Trustpilot verified-review count grows against a real baseline.

---

## MEDIUM — fix within one month

### M1. Author-level E-E-A-T upgrade
- **Where:** `src/app/blog/[slug]/page.tsx:91` (Article.author) and byline blocks on sub-pages
- **Fix:** Introduce a `Person`-type author with a bio page (`/about/editorial-team`) and swap `Article.author` from `Organization` to `Person`.
- **Why:** Sept 2025 QRG update explicitly weights named-author signals for YMYL-adjacent commerce.
- **Depends on:** willingness to name a real person (or persona) as editorial lead.
- **Falsifiability:** Rich Results Test → Article → shows `author.name` as Person, `author.url` resolves.
- **Leading indicator:** GSC → Performance filter by "site:cheap-iptv.tv author" shows any impressions.

### M2. Expand blog posts to 2,000+ words with concrete UK detail
- **Where:** `src/app/blog/[slug]/page.tsx:6-48`
- **Fix:** Each blog post currently ~500–800 words. Rewrite to 2,000+ words with concrete UK-specific detail (BBC iPlayer, ITVX, All 4, Sky, TNT Sports, Virgin, Now TV comparisons — factual, without infringing rights).
- **Why:** SERP for "best IPTV UK 2026" is dominated by 3–5k-word listicles. Under-length content cannot rank at position 1–3.
- **Depends on:** editorial capacity; legal review of broadcaster references (per the recent scrub commit).
- **Falsifiability:** Each post's word count > 2,000; readability score ~grade 8; internal H2s ≥ 5.
- **Leading indicator:** Blog URLs move above position 20 in GSC for target queries.

### M3. Add `Service` schema alongside `Product`
- **Where:** `src/app/page.tsx` (existing Product schema block)
- **Fix:** Add a `Service` schema block with `provider` linked by `@id` to the Organization, `serviceType: "IPTV subscription"`, `areaServed: "GB"`, `offers` matching the Product.
- **Why:** `Product` is technically incorrect for a subscription service. `Service` is the semantic match. Ships in parallel.
- **Depends on:** nothing.
- **Falsifiability:** Rich Results Test shows both types detected without warnings.
- **Leading indicator:** GSC "Services" appears in the Enhancements sidebar.

### M4. Run PageSpeed Insights + fix top CWV blocker
- **Where:** `src/components/HeroSection.tsx` (particle bg + 5 aurora blobs + 4 orbs)
- **Fix:** Measure first. If LCP element is the hero heading and it's arriving late because of framer-motion opacity animation, remove the initial `opacity: 0` from the H1 motion.h1 (`src/components/HeroSection.tsx:67-77`) so LCP renders immediately. Keep the animation on the subtitle and CTA only.
- **Why:** framer-motion opacity animation on the LCP element is a well-known LCP tax on Next.js SSR pages.
- **Depends on:** actual PSI numbers.
- **Falsifiability:** PSI mobile LCP drops below 2.5 s.
- **Leading indicator:** CrUX field data for the origin shifts into the green LCP bucket over 28-day rolling window.

### M5. Add `/llms.txt`
- **Where:** create `/public/llms.txt`
- **Fix:** Ship a short llms.txt with brand summary, four plan prices, key features, and links to the three cluster pages + blog.
- **Why:** Emerging convention adopted by Perplexity, ChatGPT Search. Cheap; low downside.
- **Depends on:** nothing.
- **Falsifiability:** `curl https://cheap-iptv.tv/llms.txt` returns 200 with the intended content.
- **Leading indicator:** brand mentions in Perplexity answers to "cheap IPTV UK".

### M6. Add `priceValidUntil` to Product offers
- **Where:** `src/app/page.tsx:105-113` (Product offers map)
- **Fix:** Add `priceValidUntil: "2026-12-31"` (or rolling 1-year-forward) to each offer.
- **Why:** Silences GSC warning; some SERP price snippets require it.
- **Depends on:** nothing.
- **Falsifiability:** Rich Results Test emits no `priceValidUntil` warning.
- **Leading indicator:** GSC Products warnings count drops.

---

## LOW — backlog

### L1. Consider a real product screenshot for `Product.image`
Current `Product.image` is the logo. A real screenshot of the EPG/player UI is more useful for image-search and rich results.

### L2. Consider security headers
Add `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin` via `next.config.ts` headers. Not a ranking factor but a hygiene signal.

### L3. Verify all `<Image alt="">` are set
Grep for `<Image` and check every use ships a descriptive `alt` (Navbar and Footer excerpts read didn't show alts — verify).

### L4. Investigate the ghost live pages after C3
`/iptv-channels` and `/blog/cheap-iptv-subscription-uk-guide` exist on live and are indexable but have no source. Decide: promote to source or 410-remove.

### L5. Consider consolidating or expanding the FAQ schema strategy
`FAQPage` no longer produces Google rich results for commercial sites (Aug 2023). Keep for LLM citation signal, but do not add more.

### L6. WhatsApp checkout link tracking
`buildWhatsAppCheckoutUrl` doesn't append UTM parameters. Adding `utm_source=site&utm_medium=whatsapp&utm_campaign=checkout` would let GA4 attribute conversions.

---

## Sequencing summary

```
Week 1 (Critical): C1, C2, C3 → C4 (depends on C3), C5
Week 2 (High):     H1, H2, H3 (depends on C3), H4, H5, H6
Weeks 3-4 (Med):   M1, M2 (biggest scope), M3, M4 (needs PSI), M5, M6
Backlog (Low):     L1-L6
```

## Metrics to monitor (leading indicators, no re-audit needed)

- **GSC → Enhancements → Products / Merchant listings** — warnings should trend down after C1, C2, M6.
- **GSC → Sitemaps** — 0 warnings after C4.
- **GSC → Coverage** — no new "Discovered - currently not indexed" URLs after C3.
- **CrUX 28-day rolling INP/LCP/CLS** — moves toward green after M4.
- **Perplexity / ChatGPT citation frequency for "cheap IPTV UK 2026"** — increases after C5 + M5.
- **Trustpilot verified-review count** — real baseline against which H6 numbers become defensible.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
