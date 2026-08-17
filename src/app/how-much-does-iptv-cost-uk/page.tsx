import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, MessageCircle, Play, PoundSterling } from "lucide-react";
import CTASection from "@/components/CTASection";
import TrustSection from "@/components/TrustSection";
import SectionLink from "@/components/SectionLink";
import { CONTACT_EMAIL, LOGO_URL, PRICING_PLANS, SITE_NAME, SITE_URL, WHATSAPP_URL } from "@/lib/constants";

const PAGE_PATH = "/how-much-does-iptv-cost-uk";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const LAST_UPDATED_DISPLAY = "16 August 2026";
const LAST_UPDATED_ISO = "2026-08-16";

const META_TITLE = "How Much Does IPTV Cost In The UK? 2026 Price Guide";
const META_DESCRIPTION =
  "Real UK IPTV cost breakdown: per-month price across every plan, IPTV vs cable maths, current IPTV deals and what actually drives the price. From £3.33/mo.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "article",
    locale: "en_GB",
    siteName: SITE_NAME,
    url: PAGE_URL,
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const bronze = PRICING_PLANS.find((p) => p.id === "bronze")!;
const silver = PRICING_PLANS.find((p) => p.id === "silver")!;
const gold = PRICING_PLANS.find((p) => p.id === "gold")!;
const diamond = PRICING_PLANS.find((p) => p.id === "diamond")!;

const PAGE_FAQS: ReadonlyArray<{ question: string; answer: string }> = [
  {
    question: "How much does IPTV cost in the UK?",
    answer: `A legitimate UK IPTV subscription costs between about £${diamond.perMonth.toFixed(
      2
    )} and £${bronze.perMonth.toFixed(
      2
    )} per month, depending on the term length. On cheap-iptv.tv the four published plans price out at £${bronze.price.toFixed(
      2
    )} for three months (£${bronze.perMonth.toFixed(
      2
    )}/mo), £${silver.price.toFixed(2)} for six months (£${silver.perMonth.toFixed(
      2
    )}/mo), £${gold.price.toFixed(2)} for twelve months (£${gold.perMonth.toFixed(
      2
    )}/mo) and £${diamond.price.toFixed(
      2
    )} for twenty-four months (£${diamond.perMonth.toFixed(
      2
    )}/mo). Every price is a single one-time payment — nothing rebills.`,
  },
  {
    question: "Why is IPTV cheaper than cable?",
    answer:
      "Three structural reasons. First, there is no satellite dish or engineer install to subsidise — the service runs over broadband a household already pays for. Second, there is no set-top-box rental, no retail shopfront and no per-region infrastructure to fund. Third, every plan is a one-time payment, so there is no recurring billing overhead per subscriber. Cable pricing has to carry all of those costs; IPTV pricing does not, which is why the same channel coverage can land at a fraction of the price.",
  },
  {
    question: "What is the cheapest IPTV plan available?",
    answer: `The cheapest published per-month rate is £${diamond.perMonth.toFixed(
      2
    )} on the two-year Diamond plan (£${diamond.price.toFixed(
      2
    )} total). For a shorter commitment, the three-month Bronze plan is £${bronze.price.toFixed(
      2
    )} total — the lowest total-cost entry point at roughly £${bronze.perMonth.toFixed(
      2
    )} per month.`,
  },
  {
    question: "Is the IPTV price locked for the full term?",
    answer:
      "Yes. The amount paid at sign-up covers the entire plan length. Whatever happens to list pricing during your active term, the rate you locked in is the rate that applies. There is also no automatic renewal at the end of the term, so no unexpected charge appears on the statement.",
  },
  {
    question: "Are there any hidden IPTV costs?",
    answer:
      "None. The headline price is the total charged. VAT is included, not added at checkout. There is no setup fee, no activation fee, no per-device surcharge, no separate sport or cinema add-on and no VPN sold on the side — the VPN travels with every plan at no extra cost.",
  },
  {
    question: "How much does IPTV cost per year in the UK?",
    answer: `The annual Gold plan is £${gold.price.toFixed(
      2
    )} for a full year of access — roughly £${gold.perMonth.toFixed(
      2
    )} per month. For comparison, a comparable premium UK pay-TV bundle with sport and cinema typically costs £70–£90 per month, which is £840–£1,080 per year. The annual IPTV price is therefore around 5–6% of a traditional pay-TV bill for a broader channel list.`,
  },
];

const COST_ROWS = [
  {
    plan: bronze,
    term: "3 months (quarterly)",
    useCase: "Testing the service; short-term rentals",
  },
  {
    plan: silver,
    term: "6 months (half-year)",
    useCase: "Seasonal viewing; single sport season",
  },
  {
    plan: gold,
    term: "12 months (annual)",
    useCase: "Typical residential household · most popular",
  },
  {
    plan: diamond,
    term: "24 months (two-year)",
    useCase: "Committed households · cheapest per-month rate",
  },
];

export default function IPTVCostUKPage() {
  const webpageId = `${PAGE_URL}#webpage`;
  const organizationId = `${SITE_URL}/#organization`;
  const logoUrl = LOGO_URL;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0524] via-[#1a0a3e] to-[#0c1445]" />
        <div
          className="aurora-blob w-[500px] h-[500px] bg-purple-600/20 -top-20 -left-20"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="aurora-blob w-[400px] h-[400px] bg-cyan-500/15 bottom-[-10%] right-[-5%]"
          style={{ animationDelay: "5s" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.12),transparent_60%)]" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-white/[0.07] backdrop-blur-md px-5 py-2 text-sm text-purple-300 mb-6">
            <PoundSterling className="h-4 w-4 text-cyan-400" />
            UK IPTV Cost & Pricing Guide · 2026
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            How Much Does IPTV Cost In The UK?{" "}
            <span className="gradient-text-hero">£{diamond.perMonth.toFixed(2)}–£{bronze.perMonth.toFixed(2)}/mo</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300/90 mb-8 leading-relaxed">
            A real IPTV price breakdown for UK households. Every plan, every per-month cost, the
            maths against traditional pay-TV, and the IPTV deals worth taking seriously — with
            nothing hidden behind an asterisk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <SectionLink
              href="/#pricing"
              className="group relative flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98] w-full sm:w-auto justify-center"
            >
              <Play className="h-5 w-5 fill-current" />
              See current IPTV deals
            </SectionLink>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all hover:border-purple-400/30 hover:bg-white/10 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="h-5 w-5 text-cyan-400" />
              Ask the UK team about pricing
            </a>
          </div>
        </div>
      </section>

      {/* Byline */}
      <section className="border-b border-violet-100/50 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-sm text-muted">
            By the cheap-iptv.tv editorial team ·{" "}
            <time dateTime={LAST_UPDATED_ISO}>Last updated: {LAST_UPDATED_DISPLAY}</time>
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-12 text-foreground">
          <p className="text-lg leading-relaxed text-gray-700">
            &ldquo;How much is IPTV?&rdquo; is the question the support team fields most often
            before a purchase, and the honest answer is a range — from about £{diamond.perMonth.toFixed(
              2
            )} per month on a two-year plan up to £{bronze.perMonth.toFixed(
              2
            )} per month on a quarterly plan. Every price is a single up-front payment; nothing
            rebills. This page walks through the IPTV cost line by line across the four plans,
            sets it against what a traditional UK pay-TV bill actually looks like, and explains the
            structural reasons IPTV pricing lands so much lower than cable. If you would rather
            skip to the checkout, the four plans are laid out on the{" "}
            <Link
              href="/"
              className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
            >
              cheap IPTV UK homepage
            </Link>
            .
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              UK IPTV cost by plan — the full price breakdown
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Four plans, four term lengths, one identical feature set. The per-month cost drops as
              the commitment lengthens because the acquisition and support overhead per subscriber
              is amortised across more months — the price falls, the service does not.
            </p>
            <div className="rounded-2xl border border-violet-100/60 bg-white shadow-sm overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-violet-50/60 text-foreground">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Plan</th>
                    <th className="px-4 py-3 font-semibold">Term</th>
                    <th className="px-4 py-3 font-semibold">Total price</th>
                    <th className="px-4 py-3 font-semibold">Per month</th>
                    <th className="px-4 py-3 font-semibold">Best for</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {COST_ROWS.map(({ plan, term, useCase }) => (
                    <tr key={plan.id} className="border-t border-violet-100/60 align-top">
                      <td className="px-4 py-3 font-medium text-foreground">{plan.tier}</td>
                      <td className="px-4 py-3">{term}</td>
                      <td className="px-4 py-3 whitespace-nowrap">£{plan.price.toFixed(2)}</td>
                      <td className="px-4 py-3 whitespace-nowrap">£{plan.perMonth.toFixed(2)}</td>
                      <td className="px-4 py-3">{useCase}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base leading-relaxed text-gray-700">
              The cheapest published IPTV price in the UK sits at £{diamond.perMonth.toFixed(2)} per
              month on the Diamond plan. The most flexible entry point is the Bronze plan at £
              {bronze.price.toFixed(2)} up front — a three-month IPTV subscription that functions as
              a paid trial without recurring billing behind it. The full pricing grid, including
              features and the 30-day money-back guarantee, lives on the{" "}
              <SectionLink
                href="/#pricing"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                homepage pricing section
              </SectionLink>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              IPTV cost vs traditional UK pay-TV — the maths
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              A premium UK pay-TV bundle with sport and cinema typically runs £70–£90 per month on
              an 18- or 24-month contract, before add-ons, before broadband line rental and before
              any extra streaming service bolted on. Annualised, that is roughly £840–£1,080 per
              year for a fixed contract that a household cannot easily leave.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              The annual Gold plan on cheap-iptv.tv is £{gold.price.toFixed(2)} for the same twelve
              months of viewing — a price gap of roughly £790–£1,030 across a single year, in
              favour of IPTV. The two-year Diamond plan stretches the gap further by dropping the
              per-month rate to £{diamond.perMonth.toFixed(2)} while removing the multi-year lock-in
              cable requires.
            </p>
            <div className="rounded-2xl border border-violet-100/60 bg-white shadow-sm overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-violet-50/60 text-foreground">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Option</th>
                    <th className="px-4 py-3 font-semibold">Per month</th>
                    <th className="px-4 py-3 font-semibold">Per year</th>
                    <th className="px-4 py-3 font-semibold">Contract</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-t border-violet-100/60">
                    <td className="px-4 py-3 font-medium text-foreground">Premium UK pay-TV (sport + cinema bundle)</td>
                    <td className="px-4 py-3 whitespace-nowrap">£70–£90</td>
                    <td className="px-4 py-3 whitespace-nowrap">£840–£1,080</td>
                    <td className="px-4 py-3">18–24 months, early-exit fees</td>
                  </tr>
                  <tr className="border-t border-violet-100/60 bg-violet-50/30">
                    <td className="px-4 py-3 font-medium text-foreground">Cheap IPTV UK — Gold annual plan</td>
                    <td className="px-4 py-3 whitespace-nowrap">£{gold.perMonth.toFixed(2)}</td>
                    <td className="px-4 py-3 whitespace-nowrap">£{gold.price.toFixed(2)}</td>
                    <td className="px-4 py-3">One-time payment, no auto-renewal</td>
                  </tr>
                  <tr className="border-t border-violet-100/60">
                    <td className="px-4 py-3 font-medium text-foreground">Cheap IPTV UK — Diamond two-year plan</td>
                    <td className="px-4 py-3 whitespace-nowrap">£{diamond.perMonth.toFixed(2)}</td>
                    <td className="px-4 py-3 whitespace-nowrap">£{(diamond.price / 2).toFixed(2)} (avg)</td>
                    <td className="px-4 py-3">One-time payment, no auto-renewal</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-base leading-relaxed text-gray-700">
              The comparison is not perfectly like-for-like — cable typically bundles hardware and
              an engineer visit that IPTV does not, and IPTV bundles a VPN and a far broader channel
              list that most cable packages do not. The point is structural: the same 37,000-channel
              catalogue that costs £{gold.price.toFixed(2)} on IPTV for a year would cost ten times
              that on a comparable cable bundle, without the flexibility to walk away after 30 days.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              What drives IPTV pricing — why the price can land this low
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              IPTV pricing is lower than cable because the underlying cost structure is genuinely
              lower, not because corners have been cut on the streaming side. Three drivers do most
              of the work.
            </p>
            <ul className="space-y-3 rounded-2xl border border-violet-100/60 bg-violet-50/30 p-6">
              <li className="text-base leading-relaxed text-gray-700">
                <strong className="text-foreground">No physical infrastructure per subscriber.</strong> A
                cable operator pays for the dish, the set-top box, the engineer visit and the
                depreciation on all three. An IPTV service delivers over broadband a household
                already pays for, so none of that capex enters the per-subscriber price.
              </li>
              <li className="text-base leading-relaxed text-gray-700">
                <strong className="text-foreground">No recurring billing overhead.</strong> Every plan is
                a one-time payment. There is no card-on-file to authorise monthly, no failed-payment
                dunning cycle to fund and no retention team to staff around cancellations. The
                billing cost per subscriber collapses.
              </li>
              <li className="text-base leading-relaxed text-gray-700">
                <strong className="text-foreground">Longer terms amortise fixed costs.</strong> The cost
                of acquiring and onboarding a subscriber is a one-off. Spread it over three months
                and the per-month price is £{bronze.perMonth.toFixed(2)}; spread it over twenty-four
                and the same fixed cost lands at £{diamond.perMonth.toFixed(2)} per month. That is
                the entire mechanism behind the discount ladder — nothing is being taken away.
              </li>
            </ul>
            <p className="text-base leading-relaxed text-gray-700">
              The engineering that sits underneath the price is the same regardless of plan: UK edge
              caches, adaptive bitrate ladders that go up to 4K UHD, Anti-Freeze fail-over, five
              simultaneous screens on one login and a built-in VPN. That is a deliberate design
              choice — plan length controls discount depth, not feature access.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Current IPTV deals worth taking seriously
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              The four published prices are the deals — there is no separate promotional tier that
              disappears after a month and reverts to a higher rate. The two IPTV deals that
              consistently deliver the most value for a typical UK household are Gold and Diamond.
              Gold, at £{gold.price.toFixed(2)} for twelve months, is the balanced pick: long enough
              to justify the discount, short enough that most households can commit comfortably.
              Diamond, at £{diamond.price.toFixed(2)} for twenty-four months, is the deepest
              published IPTV price in Britain and suits households already confident they want the
              service for the long term.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              For households unsure which term to commit to first, the three-month Bronze plan at £
              {bronze.price.toFixed(2)} is the low-exposure entry point — the total spend is lower
              than a single month of cable, and the thirty-day money-back window covers the first
              month regardless. To compare the four subscription terms side by side with the same
              feature parity across all of them, see the{" "}
              <Link
                href="/iptv-subscription"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                IPTV subscription plans page
              </Link>
              .
            </p>
          </section>
        </div>
      </article>

      {/* Related reading */}
      <section className="bg-white pb-12 lg:pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-violet-100/60 bg-violet-50/30 p-6">
            <h2 className="text-lg font-bold text-foreground mb-3">Related reading</h2>
            <ul className="space-y-2 text-base text-gray-700">
              <li>
                <Link href="/" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
                  Cheap IPTV UK — full pricing and features
                </Link>
              </li>
              <li>
                <Link href="/iptv-subscription" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
                  IPTV subscription plans — 3, 6, 12 and 24-month terms
                </Link>
              </li>
              <li>
                <Link href="/iptv-channels" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
                  What's included: the full IPTV channel list
                </Link>
              </li>
              <li>
                <Link href="/blog/iptv-vs-traditional-tv" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
                  Cheap IPTV vs traditional UK TV packages
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trust pillars */}
      <TrustSection />

      {/* FAQ */}
      <section className="relative py-12 lg:py-16">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-sm font-medium text-violet-700 mb-4">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              IPTV cost in the UK —{" "}
              <span className="gradient-text">what people ask before buying</span>
            </h2>
            <p className="text-base text-muted leading-relaxed">
              The pricing questions the support team fields most often. If your question is not
              covered below, the UK team can be reached on the{" "}
              <Link
                href="/contact"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                contact page
              </Link>
              .
            </p>
          </div>

          <div className="space-y-3">
            {PAGE_FAQS.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-violet-100/50 bg-white open:border-violet-200 open:shadow-sm transition-all"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 list-none [&::-webkit-details-marker]:hidden">
                  <span className="text-sm sm:text-base font-medium text-foreground pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-muted transition-transform duration-300 group-open:rotate-180 group-open:text-violet-600"
                  />
                </summary>
                <div className="px-5 pb-5 text-sm text-muted leading-relaxed">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />

      {/* JSON-LD: WebPage + Organization graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": organizationId,
                name: SITE_NAME,
                url: SITE_URL,
                logo: { "@type": "ImageObject", url: logoUrl },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  availableLanguage: "English",
                  areaServed: "GB",
                  email: CONTACT_EMAIL,
                },
              },
              {
                "@type": "WebPage",
                "@id": webpageId,
                url: PAGE_URL,
                name: META_TITLE,
                description: META_DESCRIPTION,
                inLanguage: "en-GB",
                about: { "@id": organizationId },
                dateModified: LAST_UPDATED_ISO,
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                  { "@type": "ListItem", position: 2, name: "How Much Does IPTV Cost In The UK?", item: PAGE_URL },
                ],
              },
            ],
          }),
        }}
      />

      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: PAGE_FAQS.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
    </>
  );
}
