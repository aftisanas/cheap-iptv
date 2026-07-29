import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, MessageCircle, Play, CalendarClock } from "lucide-react";
import CTASection from "@/components/CTASection";
import TrustSection from "@/components/TrustSection";
import SectionLink from "@/components/SectionLink";
import { CONTACT_EMAIL, LOGO_URL, PRICING_PLANS, SITE_NAME, SITE_URL } from "@/lib/constants";

const PAGE_PATH = "/iptv-subscription";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const LAST_UPDATED_DISPLAY = "29 June 2026";
const LAST_UPDATED_ISO = "2026-06-29";

const META_TITLE = "IPTV Subscription UK | Flexible Monthly & Yearly Plans";
const META_DESCRIPTION =
  "Pick the IPTV subscription that suits you — pay quarterly with no contract, or save with an annual plan. UK live channels, films and on-demand library included.";

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
    question: "Is this IPTV subscription monthly or fixed-term?",
    answer: `Every subscription is a fixed-term plan paid once at sign-up. The shortest is the Bronze plan — three months of access for £${bronze.price.toFixed(
      2
    )} — which functions as a quarterly subscription. The Gold plan covers a full year for £${gold.price.toFixed(
      2
    )}. There is no rolling monthly billing because nothing is stored on file to charge a second time.`,
  },
  {
    question: "Can I cancel my IPTV subscription whenever I want?",
    answer:
      "There is no cancellation step. Because the plan does not auto-renew, doing nothing at the end of the term ends the subscription cleanly. If you want to stop earlier than that, the thirty-day money-back window covers a full refund of the unused portion — outside that window the plan simply runs to its end date and then expires.",
  },
  {
    question: "Which subscription length is most popular?",
    answer: `The Gold twelve-month plan is the most-chosen subscription length, at £${gold.price.toFixed(
      2
    )} for a year — roughly £${gold.perMonth.toFixed(
      2
    )} per month. It balances commitment length against per-month savings cleanly: long enough to justify the deeper discount on the per-month rate, short enough that most households can comfortably commit without overthinking the timeframe.`,
  },
  {
    question: "What happens at the end of my subscription term?",
    answer:
      "Access stops on the date printed in your confirmation email. There is no grace period and no overage charge. To continue, you initiate a renewal manually from the same checkout flow — the renewal is a brand-new purchase at whatever the published price is on the day, not an automatic charge to a card on file.",
  },
  {
    question: "Can I upgrade my subscription before it expires?",
    answer:
      "Yes. Contact the support team mid-term and they will calculate the value of the time you have not yet used and apply it against the longer plan. The mechanics work in both directions — moving from a Bronze trial to a Gold annual plan, or extending a Gold year into a Diamond two-year window without losing the value already paid.",
  },
  {
    question: "Do I need to register a payment card on file?",
    answer:
      "No. Payment is taken once at checkout via Stripe or PayPal, and no authorisation is stored against your card for future charges. The merchant has no mechanism to charge you a second time. That is the structural difference between a one-time IPTV subscription and a traditional pay-TV subscription that rebills silently each month.",
  },
];

export default function IPTVSubscriptionPage() {
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
            <CalendarClock className="h-4 w-4 text-cyan-400" />
            Flexible IPTV Subscription
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            IPTV Subscription Plans —{" "}
            <span className="gradient-text-hero">Monthly, Quarterly, Annual</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300/90 mb-8 leading-relaxed">
            Pick the term that suits your viewing habits. Three months to test the waters, twelve
            months for the best balance, or two years for the deepest discount. No contract, no
            stored card, no recurring charge.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <SectionLink
              href="/#pricing"
              className="group relative flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98] w-full sm:w-auto justify-center"
            >
              <Play className="h-5 w-5 fill-current" />
              Pick Your Subscription Length
            </SectionLink>
            <Link
              href="/cheapest-iptv"
              className="group flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all hover:border-purple-400/30 hover:bg-white/10 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="h-5 w-5 text-cyan-400" />
              See the Cheapest Rate
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
            An IPTV subscription should fit how you actually watch — not lock you into a multi-year
            contract for content you may not need next year. cheap-iptv.tv offers four subscription
            lengths, each paid once at sign-up: quarterly, half-yearly, annual and two-year. The
            longer the term, the lower the per-month rate, but every plan ships with an identical
            feature set. This page lays out the four options, explains how the one-time billing
            model works in practice and shows exactly how to stop the subscription when you want
            to — there is nothing to cancel because nothing rebills automatically. To see the full
            feature set and pricing, visit the{" "}
            <Link
              href="/"
              className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
            >
              cheap IPTV UK homepage
            </Link>
            ; or, if you would rather read the operational background first, the{" "}
            <Link
              href="/iptv-service-provider"
              className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
            >
              IPTV service provider page
            </Link>{" "}
            covers who runs the service.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              The four IPTV subscription options
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              The plan grid is intentionally simple: four lengths, four prices, identical feature
              parity across all of them. Pick the length that matches your committed viewing
              horizon — anything beyond that horizon is wasted money, and anything shorter forces
              an avoidable renewal step later.
            </p>
            <div className="rounded-2xl border border-violet-100/60 bg-white shadow-sm overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-violet-50/60 text-foreground">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Plan</th>
                    <th className="px-4 py-3 font-semibold">Term</th>
                    <th className="px-4 py-3 font-semibold">Total</th>
                    <th className="px-4 py-3 font-semibold">Per month</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-t border-violet-100/60">
                    <td className="px-4 py-3 font-medium text-foreground">{bronze.tier}</td>
                    <td className="px-4 py-3">{bronze.name} (quarterly)</td>
                    <td className="px-4 py-3">£{bronze.price.toFixed(2)}</td>
                    <td className="px-4 py-3">£{bronze.perMonth.toFixed(2)}</td>
                  </tr>
                  <tr className="border-t border-violet-100/60">
                    <td className="px-4 py-3 font-medium text-foreground">{silver.tier}</td>
                    <td className="px-4 py-3">{silver.name} (half-year)</td>
                    <td className="px-4 py-3">£{silver.price.toFixed(2)}</td>
                    <td className="px-4 py-3">£{silver.perMonth.toFixed(2)}</td>
                  </tr>
                  <tr className="border-t border-violet-100/60 bg-violet-50/30">
                    <td className="px-4 py-3 font-medium text-foreground">
                      {gold.tier} <span className="text-xs text-violet-700">· popular</span>
                    </td>
                    <td className="px-4 py-3">{gold.name} (annual)</td>
                    <td className="px-4 py-3">£{gold.price.toFixed(2)}</td>
                    <td className="px-4 py-3">£{gold.perMonth.toFixed(2)}</td>
                  </tr>
                  <tr className="border-t border-violet-100/60">
                    <td className="px-4 py-3 font-medium text-foreground">{diamond.tier}</td>
                    <td className="px-4 py-3">{diamond.name} (two-year)</td>
                    <td className="px-4 py-3">£{diamond.price.toFixed(2)}</td>
                    <td className="px-4 py-3">£{diamond.perMonth.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-base leading-relaxed text-gray-700">
              The quarterly Bronze subscription is functionally equivalent to paying for three
              months of access in a single transaction; the annual Gold subscription is a year
              paid up front. The two longer plans collect a deeper discount precisely because they
              spread the same up-front cost over more months. For the price-led version of the
              same comparison — focused on the lowest per-month rate rather than the most flexible
              term — see the dedicated{" "}
              <Link
                href="/cheapest-iptv"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                cheapest IPTV page
              </Link>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              How billing actually works
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Billing is a single transaction at checkout. Stripe and PayPal are the two supported
              processors, both with industry-standard PCI handling on the payment page. The card
              number is never seen by cheap-iptv.tv directly — it is tokenised by the payment
              processor, the one-time charge clears, and the token is discarded the moment the
              subscription is provisioned. There is no recurring authorisation stored for a future
              charge.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              That detail matters because it removes the most common complaint about ongoing
              subscriptions: forgetting to cancel before a renewal. There is nothing to forget.
              The card and PayPal account are forgotten by the merchant within minutes of the
              successful transaction. If you want to renew at the end of the term, you log in to
              the same checkout flow and authorise a fresh one-time payment manually.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              VAT is included in the headline price, not added at the end of checkout. The
              confirmation email serves as the VAT receipt and is downloadable for HMRC or
              expense purposes. Apple Pay, Google Pay and most major debit and credit cards route
              through the Stripe processor; PayPal balance and PayPal-linked cards route through
              the PayPal processor. Pick whichever channel suits your household — the subscription
              itself is identical regardless of payment method.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Cancellation: there is nothing to cancel
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              The biggest source of friction in traditional pay-TV subscriptions is cancellation.
              Long retention scripts, mandatory phone calls, win-back offers fired in real time
              while you wait on hold — all designed to delay the moment when the subscription
              actually stops billing. cheap-iptv.tv has none of that machinery because there is
              nothing to actually stop.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              Doing nothing at the end of your subscription term is the cancellation. The plan
              expires on its end date, the credentials stop working, and no further charge ever
              lands. There is no subscription manager dashboard to navigate, no &ldquo;are you
              sure?&rdquo; modal to click through, no email confirmation to wait for. The absence
              of recurring billing turns cancellation from a process into a non-event.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              For households that want to stop earlier than the natural end date, the thirty-day
              money-back window covers a full refund — see the{" "}
              <Link
                href="/refund"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                refund policy
              </Link>{" "}
              for the exact terms. After the thirty-day window has closed, the plan runs to its
              end date and then quietly expires. There is no halfway position because there is no
              recurring contract to halve.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Which subscription length suits which household
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              The right subscription length is the one that matches your committed viewing
              horizon. A short-stay holiday let or a six-month rental in a furnished flat is a
              clean fit for the quarterly Bronze plan — the term ends naturally when the tenancy
              does, and there is no leftover service running for months you will not be using.
              The same logic applies to students living away from a permanent address during term
              time only.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              The half-year Silver subscription works well for households with seasonal viewing
              habits. A six-month window can be timed to start at the beginning of a sporting
              season, run through the months of heaviest live broadcast, and end before the
              summer reruns kick in. Households unsure between quarterly and annual often land on
              Silver as a comfortable middle ground.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              The annual Gold subscription is the natural pick for a typical residential
              household — a permanent home address, a settled viewing routine, family members
              sharing the same five-screen cap. The two-year Diamond subscription is best
              reserved for households that have already used the service for at least one full
              term and are confident they want to lock in the lowest per-month rate available on
              the cheap-iptv.tv catalogue.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Switching, upgrading and sharing the subscription
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Mid-term plan changes are handled by the support team rather than through a
              self-service dashboard. The reason is straightforward: the support agent can
              calculate the unused value remaining on your current plan and apply it directly
              against the new plan in one step, which is faster and cleaner than asking a
              customer to navigate a portal. Upgrading from Bronze to Gold mid-term, for example,
              credits the unused months of the Bronze plan against the Gold purchase.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              Every subscription supports five simultaneous screens on a single login, which
              means a typical household does not need multiple subscriptions for different family
              members. Parents, children and housemates each stream different channels in
              parallel without interrupting one another. The fifth screen is included by default,
              not gated behind a premium tier — the same five-screen cap applies whether the plan
              is Bronze or Diamond. For households that want more than five screens, the support
              team on the{" "}
              <Link
                href="/contact"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                contact page
              </Link>{" "}
              can talk through second-subscription options.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              The credentials themselves are portable across devices. A login that was first
              activated on an Amazon Fire Stick can be moved to a Smart TV, a tablet or a tvOS
              Devices set-up in a few seconds — no transfer fee, no support ticket needed. The
              five-screen cap counts concurrent active streams rather than registered devices, so
              a household can install the player app on a dozen devices and only the five
              currently playing count against the limit. The practical upshot: the subscription
              follows the household, not a specific TV. Moving house, switching from a rented
              flat to a permanent home, or running the same login across a primary residence and
              a holiday let does not require any administrative overhead — the new device pulls
              the credentials and starts streaming immediately.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              Built-in parental controls travel with the subscription too. A PIN can be set
              against any age-rated category, locking it on devices used by children without
              affecting the adult logins on the same account. That means a single household
              subscription can serve children watching a kids&apos; channel in one room and adults
              watching a film in another, without any per-profile configuration overhead.
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
                <Link href="/cheapest-iptv" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
                  See the cheapest IPTV rate, priced line by line
                </Link>
              </li>
              <li>
                <Link href="/blog/best-iptv-uk-guide-2026" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
                  Best IPTV UK 2026 — how to choose a provider
                </Link>
              </li>
              <li>
                <Link href="/blog/how-to-setup-iptv-firestick" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
                  How to set up your IPTV subscription on a Fire Stick
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
              IPTV subscription —{" "}
              <span className="gradient-text">common questions before signing up</span>
            </h2>
            <p className="text-base text-muted leading-relaxed">
              The questions the support team is asked most often about subscription length,
              billing mechanics and cancellation. If anything below does not cover what you need,
              the team replies within minutes on the{" "}
              <Link
                href="/contact"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                contact page
              </Link>{" "}
              during UK hours.
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
                  { "@type": "ListItem", position: 2, name: "IPTV Subscription", item: PAGE_URL },
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
