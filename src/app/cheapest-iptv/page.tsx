import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, MessageCircle, Play, Tags } from "lucide-react";
import CTASection from "@/components/CTASection";
import TrustSection from "@/components/TrustSection";
import SectionLink from "@/components/SectionLink";
import { CONTACT_EMAIL, LOGO_URL, PRICING_PLANS, SITE_NAME, SITE_URL } from "@/lib/constants";

const PAGE_PATH = "/cheapest-iptv";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const LAST_UPDATED_DISPLAY = "29 June 2026";
const LAST_UPDATED_ISO = "2026-06-29";

const META_TITLE = "Cheapest IPTV UK 2026 | Monthly & Annual Plans From £3.33/mo";
const META_DESCRIPTION =
  "Looking for the cheapest IPTV in the UK? Compare our monthly, quarterly and annual plans — same channels, same quality, lowest published price. Cancel anytime.";

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
    question: "How can the cheapest plan be priced this low?",
    answer: `Three factors. First, there is no satellite hardware or engineer visit to subsidise — the service runs entirely over broadband. Second, every plan is a one-time payment, so there is no recurring billing overhead per subscriber. Third, longer commitments unlock deeper discounts; the Diamond plan at £${diamond.price.toFixed(
      2
    )} for two years works out to £${diamond.perMonth.toFixed(
      2
    )} per month because the cost of acquiring that subscriber is amortised across twenty-four months instead of three.`,
  },
  {
    question: "Is the cheapest plan also the best plan for me?",
    answer:
      "Not always. The lowest per-month price comes from the longest commitment, which suits households that already know they want the service for two years. For someone who has never tried IPTV before, the three-month Bronze plan is the rational starting point — the per-month rate is higher, but the total spend exposed is lower, and the thirty-day refund window covers the first month regardless.",
  },
  {
    question: "Does the cheapest plan miss out on any channels or features?",
    answer:
      "No. Every plan ships with the identical 37,000-channel line-up, 198,000 on-demand titles, 4K UHD quality, full EPG, seven-day catch-up and five simultaneous screens. The built-in VPN is also included on every plan. Price differences come from term length alone, not from feature gating.",
  },
  {
    question: "Are there hidden fees I should know about?",
    answer:
      "None. The price shown at checkout is the total charged to your card or PayPal — VAT included. There is no setup fee, no activation fee, no per-device surcharge and no separate sport or cinema add-on. There is also no automatic renewal at the end of the term, so no surprise charge to forget about.",
  },
  {
    question: "Is the price locked for the full term?",
    answer:
      "Yes. The price paid at sign-up covers the entire plan length — three, six, twelve or twenty-four months. Whatever happens to list pricing during your active term, the rate you locked in is the rate that applies. If you renew later, you renew at whatever the published price is at that moment.",
  },
  {
    question: "How does the refund actually work if I want to claim it?",
    answer:
      "Open live chat or send a WhatsApp message inside the first thirty days, state that you want a refund, and the original payment method is credited the same working day. No form to fill in, no proof required, no retention call. The thirty-day window applies equally whether you bought the Bronze plan or the Diamond plan.",
  },
];

export default function CheapestIPTVPage() {
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
            <Tags className="h-4 w-4 text-cyan-400" />
            Cheapest IPTV in the UK · 2026
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            The Cheapest IPTV Subscription in the UK —{" "}
            <span className="gradient-text-hero">Honest Pricing, No Hidden Fees</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300/90 mb-8 leading-relaxed">
            Four plans, every price published, the lowest at £{diamond.perMonth.toFixed(2)} per
            month on a two-year term. Same channels, same picture quality, same support — only the
            commitment length changes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <SectionLink
              href="/#pricing"
              className="group relative flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98] w-full sm:w-auto justify-center"
            >
              <Play className="h-5 w-5 fill-current" />
              Compare All Four Plans
            </SectionLink>
            <Link
              href="/iptv-service-provider"
              className="group flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all hover:border-purple-400/30 hover:bg-white/10 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="h-5 w-5 text-cyan-400" />
              See How We Operate
            </Link>
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
            &ldquo;Cheapest IPTV&rdquo; is a phrase that has been worn out by every operator in the
            market, so it is worth defining what cheap actually means here. cheap-iptv.tv
            publishes four fixed-term plans — the lowest works out to £{diamond.perMonth.toFixed(2)}{" "}
            per month, the highest sits at £{bronze.perMonth.toFixed(2)} per month. There are no
            discounted-then-rebilled tiers, no separate sport bundles and no VPN sold on the side.
            This page walks through the four plans line by line, explains exactly what stays
            included at the low price and sets out the refund window that makes trying the service
            risk-free. For the full feature set and to buy, head to the{" "}
            <Link
              href="/"
              className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
            >
              cheap IPTV UK homepage
            </Link>
            ; if you want the operational backdrop — who runs the service and how it is
            engineered — that lives on the{" "}
            <Link
              href="/iptv-service-provider"
              className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
            >
              IPTV service provider page
            </Link>
            .
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              The four plans, priced line by line
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Each plan is a single up-front payment for a fixed term of access. Nothing rebills,
              so the price you see is the price you spend before the subscription ends.
            </p>
            <ul className="space-y-3 rounded-2xl border border-violet-100/60 bg-violet-50/30 p-6">
              <li className="text-base leading-relaxed text-gray-700">
                <strong className="text-foreground">{bronze.tier} · {bronze.name}</strong> — £
                {bronze.price.toFixed(2)} total, which works out to £
                {bronze.perMonth.toFixed(2)} per month. The shortest commitment; a sensible
                starting point if you have never tried IPTV before.
              </li>
              <li className="text-base leading-relaxed text-gray-700">
                <strong className="text-foreground">{silver.tier} · {silver.name}</strong> — £
                {silver.price.toFixed(2)} total, around £{silver.perMonth.toFixed(2)} per month.
                Useful for seasonal viewing patterns — a half-year window that covers a full sport
                season without committing for the second half.
              </li>
              <li className="text-base leading-relaxed text-gray-700">
                <strong className="text-foreground">{gold.tier} · {gold.name}</strong> — £
                {gold.price.toFixed(2)} total, which lands at £{gold.perMonth.toFixed(2)} per
                month. The most-chosen plan in the line-up because it balances commitment length
                against per-month savings cleanly.
              </li>
              <li className="text-base leading-relaxed text-gray-700">
                <strong className="text-foreground">{diamond.tier} · {diamond.name}</strong> — £
                {diamond.price.toFixed(2)} total, equivalent to £{diamond.perMonth.toFixed(2)}{" "}
                per month. The cheapest published per-month rate available; suits households that
                already know IPTV works for them and want the deepest practical discount.
              </li>
            </ul>
            <p className="text-base leading-relaxed text-gray-700">
              The deeper discount on longer terms is not a marketing trick — it reflects the
              underlying cost of supporting a subscriber. A two-year customer amortises the
              acquisition and onboarding cost across twenty-four months instead of three, so the
              per-month price can come down without squeezing margin. The same logic underpins the
              flexible quarterly-to-annual structure laid out on the dedicated{" "}
              <Link
                href="/iptv-subscription"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                IPTV subscription page
              </Link>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              What the low price does — and does not — change
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              The clearest signal that a cheap IPTV plan is honestly priced is that it does not
              quietly strip features. On cheap-iptv.tv, every plan ships with the identical feature
              set. The Bronze subscriber gets the same 37,000-channel line-up as the Diamond
              subscriber. The 4K UHD streaming quality, the seven-day catch-up window, the five
              simultaneous-screen cap and the full electronic programme guide are present on all
              four plans without exception.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              The built-in VPN is also included at every price point. Many cheap IPTV providers
              upsell the VPN as a separate monthly add-on; here it travels with the base plan and
              adds no measurable latency to the stream. The thirty-day refund window applies to
              every plan length, and the instant-activation flow — credentials emailed inside
              sixty seconds — is the same whether the order is for three months or two years.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              What does change with the lower-priced plans is the contractual length. A cheaper
              per-month rate is bundled into a longer up-front payment. That is the only
              meaningful trade-off across the line-up. Households that prefer to commit for a
              shorter period accept a higher per-month rate; households happy to commit for two
              years collect a deeper discount. Either way, the experience inside the app is
              identical, and the engineering behind the player — covered on the{" "}
              <Link
                href="/iptv-service-provider"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                operational page
              </Link>{" "}
              — applies equally to all four tiers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              30-day money-back guarantee — the catch is that there is no catch
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              A cheap headline price is only meaningful if you can walk away from it. Every plan
              on cheap-iptv.tv carries a thirty-day money-back guarantee that is honoured exactly
              as published in the{" "}
              <Link
                href="/refund"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                refund policy
              </Link>
              . The trigger is simple: contact support inside thirty days of payment, say you want
              a refund, and the original card or PayPal account is credited on the same working
              day.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              The guarantee does not require a reason. It is not conditional on a minimum number
              of streaming hours. It does not invoke a tiered partial-refund schedule based on how
              many days you have used. Inside the window, the full amount comes back. Outside the
              window, the plan continues to its end date and then quietly expires unless you
              choose to renew. No subscription manager required, no automated charge to dispute.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              The reason the guarantee can be unconditional on the cheap plans is straightforward:
              the refund rate sits below industry norms because the service performs as
              advertised. If a household tries the cheapest plan and decides it is not the right
              fit, the support team would rather refund quickly than fight the customer — the
              alternative is a chargeback that costs more and damages the merchant account. The
              maths favours an open refund window.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Which of the cheap plans suits which household
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              The four plans map onto four common viewing patterns. The Bronze three-month plan
              suits trial-stage households: people who have switched away from premium UK pay-TV,
              want to confirm the cheap option works for them, and would rather expose £
              {bronze.price.toFixed(2)} than commit to a longer term. It is also the right pick
              for short-term tenants, students living in halls for a single term, and gift
              purchasers who want to fund a relative&apos;s subscription without forcing a
              two-year commitment on them.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              The Silver six-month plan suits seasonal viewers. A six-month window covers a full
              sport season, a winter of box-sets or a summer of cinema without overshooting into
              periods where the household is travelling or not watching much. It is also a useful
              middle option for households that want a longer trial than the Bronze plan offers
              without committing to a full year.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              The Gold annual plan is the most-chosen plan and suits typical UK households: a
              standard residential set-up that wants live UK sports, free-to-air UK channels,
              films and on-demand content year-round at a settled price. The Diamond two-year plan
              suits long-term residents and households that have already used the service for one
              term and want to lock in the deepest discount on renewal. For an alternative cut of
              the same options framed around contract flexibility rather than headline price, see
              the{" "}
              <Link
                href="/iptv-subscription"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                subscription options page
              </Link>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              How the headline price compares to traditional pay-TV
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              A premium UK pay-TV package — the kind with live sport, cinema and a multi-room
              upgrade — typically sits around seventy to eighty pounds per month on a fixed
              eighteen- or twenty-four-month contract. That is before broadband line rental, before
              the box-rental fee and before any separate streaming service bolted on the side.
              Annualised, the household commits roughly nine hundred to a thousand pounds for a
              year of viewing.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              The annual Gold plan on cheap-iptv.tv comes in at £{gold.price.toFixed(2)} for the
              same twelve months. The annual saving against a traditional bundle works out to
              roughly eight to nine hundred pounds. The Diamond two-year plan stretches the saving
              further by amortising the up-front payment across twenty-four months, at £
              {diamond.perMonth.toFixed(2)} per month.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              The comparison is not strictly like-for-like — premium pay-TV bundles include hardware
              and engineer install that cheap-iptv.tv does not, while cheap-iptv.tv includes a
              built-in VPN and a far larger channel count than most traditional packages publish.
              The point is structural: the cheapest published IPTV price in Britain replaces a
              premium pay-TV bundle for a fraction of the annual outlay, with no contract lock and
              a thirty-day refund window. Full pricing detail across the four tiers sits on the{" "}
              <SectionLink
                href="/#pricing"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                homepage pricing section
              </SectionLink>
              .
            </p>
          </section>
        </div>
      </article>

      {/* Related reading — internal links into the blog cluster */}
      <section className="bg-white pb-12 lg:pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-violet-100/60 bg-violet-50/30 p-6">
            <h2 className="text-lg font-bold text-foreground mb-3">Related reading</h2>
            <ul className="space-y-2 text-base text-gray-700">
              <li>
                <Link href="/blog/best-iptv-uk-guide-2026" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
                  Best IPTV UK 2026 — how to choose a cheap IPTV provider
                </Link>
              </li>
              <li>
                <Link href="/blog/iptv-vs-traditional-tv" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
                  Cheap IPTV vs traditional UK TV packages — which is better value?
                </Link>
              </li>
              <li>
                <Link href="/iptv-subscription" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
                  Compare flexible IPTV subscription terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trust pillars — reused from existing TrustSection */}
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
              Cheapest IPTV in the UK —{" "}
              <span className="gradient-text">what subscribers ask first</span>
            </h2>
            <p className="text-base text-muted leading-relaxed">
              The six questions the support team is asked most frequently by prospective
              subscribers checking the cheap plans. If anything below does not cover what you
              need, the UK support team can be reached on the{" "}
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

      {/* Final CTA — reused from existing CTASection */}
      <CTASection />

      {/* JSON-LD: WebPage + Organization */}
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
                  { "@type": "ListItem", position: 2, name: "Cheapest IPTV UK", item: PAGE_URL },
                ],
              },
            ],
          }),
        }}
      />

      {/* JSON-LD: FAQPage for the 6 visible Q&A pairs */}
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
