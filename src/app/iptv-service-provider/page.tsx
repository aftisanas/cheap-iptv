import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, MessageCircle, Play, ShieldCheck } from "lucide-react";
import CTASection from "@/components/CTASection";
import TrustSection from "@/components/TrustSection";
import SectionLink from "@/components/SectionLink";
import { CONTACT_EMAIL, LOGO_URL, PRICING_PLANS, SITE_NAME, SITE_URL, WHATSAPP_URL } from "@/lib/constants";

const PAGE_PATH = "/iptv-service-provider";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const LAST_UPDATED_DISPLAY = "29 June 2026";
const LAST_UPDATED_ISO = "2026-06-29";

const META_TITLE =
  "IPTV Service Provider UK | Reliable Streams, Real Support";
const META_DESCRIPTION =
  "A UK IPTV service provider with real human support, stable streaming and transparent pricing. See how we operate and what we promise.";

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
const gold = PRICING_PLANS.find((p) => p.id === "gold")!;
const diamond = PRICING_PLANS.find((p) => p.id === "diamond")!;

const PAGE_FAQS: ReadonlyArray<{ question: string; answer: string }> = [
  {
    question: "Are you a UK-based IPTV service provider?",
    answer:
      "Yes. The company is operated from London with a British support rota covering twenty-four hours a day. The streaming infrastructure uses UK edge caches, the support team is in-country, and the refund mechanism honours UK consumer-protection norms — same-day return on a credit-card payment, no questions asked inside the thirty-day window.",
  },
  {
    question: "What is the cheapest plan you offer?",
    answer: `The entry plan is Bronze at £${bronze.price.toFixed(
      2
    )} for three months of access — roughly £${bronze.perMonth.toFixed(
      2
    )} per month. The most popular plan is Gold at £${gold.price.toFixed(
      2
    )} for a full year, which works out to £${gold.perMonth.toFixed(
      2
    )} per month and remains the deepest practical discount for typical households. A full side-by-side comparison sits on the cheapest IPTV page.`,
  },
  {
    question: "How quickly does support actually reply?",
    answer:
      "Median first-response time is under four minutes during UK daytime hours on live chat and WhatsApp, and under fifteen minutes overnight. Email tends to be slower simply because email queues are checked in batches, so for time-sensitive issues the chat or WhatsApp channels resolve fastest.",
  },
  {
    question: "What happens if the service goes down during a big match?",
    answer:
      "Anti-Freeze logic switches the player to a sibling source within a couple of seconds when a stall is detected, so most short interruptions are invisible to the viewer. For wider incidents that affect a region or a partner feed, a public status note is posted and affected accounts receive a service credit automatically against the next renewal — no claim form to fill in.",
  },
  {
    question: "Can I really get a refund inside thirty days with no questions?",
    answer:
      "Yes. The refund policy is unconditional inside the thirty-day window. Contact support, request the refund, and the original payment method is credited on the same working day. No reason is required, no retention call follows and no part of the term has to be served before requesting it.",
  },
  {
    question:
      "How is cheap-iptv.tv different from a traditional UK pay-TV provider?",
    answer:
      "Traditional pay-TV runs on a long monthly contract with an engineer install and a tiered upgrade path for sport and cinema. cheap-iptv.tv runs on a one-time payment for a fixed term with everything included — live UK sports, films, kids, news and on-demand — and no equipment to install beyond an app on a device you already own.",
  },
];

export default function IPTVServiceProviderPage() {
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
            <ShieldCheck className="h-4 w-4 text-cyan-400" />
            UK IPTV Service Provider
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            A UK-Focused IPTV Service Provider{" "}
            <span className="gradient-text-hero">You Can Actually Reach</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300/90 mb-8 leading-relaxed">
            cheap-iptv.tv is run by a small British team that picks up the phone, refunds without arguments and publishes everything — the channels, the pricing, the support hours and the refund window.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <SectionLink
              href="/#pricing"
              className="group relative flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98] w-full sm:w-auto justify-center"
            >
              <Play className="h-5 w-5 fill-current" />
              See plans from £{bronze.price.toFixed(2)}
            </SectionLink>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all hover:border-purple-400/30 hover:bg-white/10 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="h-5 w-5 text-cyan-400" />
              Talk to the UK team
            </a>
          </div>
        </div>
      </section>

      {/* Byline */}
      <section className="border-b border-violet-100/50 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-sm text-muted">
            By the cheap-iptv.tv editorial team ·{" "}
            <time dateTime={LAST_UPDATED_ISO}>
              Last updated: {LAST_UPDATED_DISPLAY}
            </time>
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-12 text-foreground">
          <p className="text-lg leading-relaxed text-gray-700">
            cheap-iptv.tv is a UK IPTV service provider built around a simple
            promise: stable streams, honest pricing and a real person on the
            other end of every message. There are no offshore call centres, no
            scripted refusals when the refund window is still open, and no
            upsells layered on top of the headline price you see on the{" "}
            <Link
              href="/"
              className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
            >
              cheap IPTV UK homepage
            </Link>
            . This page explains who runs the service, how the streaming side
            is engineered, what happens when something goes wrong, and how
            billing actually works — so you can decide whether to subscribe
            with your eyes open.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Who runs cheap-iptv.tv
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              cheap-iptv.tv is a small British IPTV service provider serving
              roughly fifty thousand UK households. The team is deliberately
              compact — engineers who maintain the streaming stack, support
              agents who handle live chat and email, and a content desk that
              updates the on-demand library and EPG. Everyone reports into a
              single director, which means problems escalate fast and
              decisions land within a single working day.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              The service launched as a response to two recurring complaints
              about premium UK pay-TV: the monthly bill is high, and the
              contract is rigid. Subscribers wanted top-tier UK football,
              free-to-air UK channels, popular box sets and on-demand films on
              the same login, without paying separately for sport, cinema and
              broadband bundles they did not need. The cheap-iptv.tv catalogue
              is built to meet that exact brief — 37,000 live channels and
              roughly 198,000 on-demand titles, all reachable from one app and
              one bill.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              The company is operated from London with a UK-based support rota
              covering twenty-four hours a day, seven days a week. If you would
              rather see the full pricing breakdown before reading on, the{" "}
              <Link
                href="/cheapest-iptv"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                cheapest IPTV comparison
              </Link>{" "}
              walks through the lowest-cost plan options side by side.
              Otherwise, keep reading for the operational detail — how the
              streaming side is engineered, how billing works, and what the
              refund window actually covers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              How the service is operated day to day
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              An IPTV service provider lives or dies on three boring
              operational habits: published prices, predictable billing and
              clear cancellation terms. cheap-iptv.tv runs all three on the
              front foot.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              Every price visible on the site is the price charged at
              checkout. There is no introductory rate that resets at month
              four, no auto-enrolled add-on and no separate VPN subscription
              pushed on top of the headline plan. The four published plans
              cover three, six, twelve and twenty-four months of access. Each
              is paid once at sign-up, and the credentials arrive by email
              inside sixty seconds — not the next working day.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              Cancellation is equally direct. Because each plan is a one-time
              payment for a fixed term, there is no recurring card charge to
              dispute, no contract to escape and no early-termination fee.
              When the term ends, the subscription simply expires unless
              renewed manually. That structure removes the silent-renewal
              complaints that plague many traditional pay-TV services.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              For a flexibility-first option — paying by quarter rather than
              committing to a full year — the dedicated{" "}
              <Link
                href="/iptv-subscription"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                IPTV subscription page
              </Link>{" "}
              lays out the monthly, quarterly and annual choices in one
              place. The remainder of this page focuses on the operational
              guarantees that sit underneath every plan: the streaming
              engineering, the support model and the refund mechanism.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              How streaming stability is engineered
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              The streaming backbone runs on UK data centres rather than a
              single overseas origin. The architecture uses regional edge
              caches inside Britain so the path between the broadcast feed and
              your living room stays inside the country wherever possible —
              fewer transit hops, lower latency and a smaller surface area for
              packet loss during peak Saturday evenings.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              Each feed is transcoded to multiple adaptive-bitrate ladders.
              The player negotiates the highest rung your broadband can
              sustain in real time, then steps down gracefully rather than
              freezing the frame when bandwidth dips. The result is a 4K UHD
              feed when conditions allow and a smooth Full HD fallback when
              they do not. There is no manual quality toggle to fiddle with
              mid-match.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              Anti-Freeze logic sits on the streaming server, identifies a
              stalled segment within a couple of seconds and switches the
              client to a sibling source automatically. Most viewers never
              notice the swap. When wider outages do occur — the kind that
              affect a whole region or a single broadcast partner — they are
              posted on the public status feed and credited automatically
              against the next renewal.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              The same engineering applies regardless of plan. Whether a
              household pays £{bronze.price.toFixed(2)} for the three-month
              Bronze plan or £{diamond.price.toFixed(2)} for the two-year
              Diamond plan, the streaming quality, the catch-up window and
              the simultaneous-screen count are identical. Plan length
              controls discount depth, not feature access — a deliberate
              choice, not an accidental one.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Support that answers — and what &ldquo;answers&rdquo; actually means
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Most IPTV service providers list 24/7 support and quietly mean
              an automated ticketing system. cheap-iptv.tv runs a live human
              rota on three channels: web live chat, WhatsApp and email.
              Average first-response time across the rolling thirty-day
              window stays under four minutes during UK daytime hours and
              under fifteen minutes overnight.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              Every agent is a named member of the British support team — no
              outsourcing to a third-party operations centre — and each agent
              has full access to subscription, billing and refund tooling on
              the same screen. That matters because most support tickets
              resolve faster when the agent can see your account in real
              time and act on it without escalation. Resetting a password,
              switching an active session to a new device, refunding within
              the guarantee window or rerouting a stream to a different
              source all happen inside the same chat thread.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              Common setup help — Amazon Fire Stick onboarding, Smart TV app
              installation, tvOS Devices configuration — is documented step
              by step in the{" "}
              <Link
                href="/blog"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                setup guides on the blog
              </Link>
              , and the support team will walk you through it on chat if you
              would rather not read a tutorial. For account-level questions
              (&ldquo;which plan suits two flats sharing one login?&rdquo;,
              &ldquo;can I move the subscription to a holiday let?&rdquo;),
              the{" "}
              <Link
                href="/contact"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                contact page
              </Link>{" "}
              routes the message into the same support queue with no menu
              to navigate.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Refunds and billing, in plain English
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Every plan on cheap-iptv.tv ships with a thirty-day money-back
              guarantee. The mechanism is written down in the{" "}
              <Link
                href="/refund"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                refund policy
              </Link>{" "}
              and run exactly as written: contact support inside the first
              thirty days, state that you want a refund, and the original
              card or PayPal account is credited on the same working day.
              There are no retention scripts, no &ldquo;are you sure?&rdquo;
              loops and no requirement to provide a reason. The promise is
              unconditional within the window.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              Billing itself is a one-time transaction. There is no stored
              recurring authorisation, which means there is nothing to
              forget to cancel — a structural difference compared with
              traditional pay-TV subscriptions that rebill silently each
              month. When a plan reaches its term, access simply stops
              unless you actively renew. The renewal is initiated by you,
              not by an automated charge.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              VAT is built into the prices shown on the site. A receipt
              arrives by email immediately after payment and is downloadable
              from the same email link for HMRC or expense purposes. For
              households that pay through PayPal, the merchant descriptor on
              the statement reads as the trading name displayed at checkout,
              so the line item is easy to recognise on the bank or card
              statement.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              For full pricing detail across all four plans — Bronze, Silver,
              Gold and Diamond — the{" "}
              <SectionLink
                href="/#pricing"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                homepage pricing section
              </SectionLink>{" "}
              compares features and term length side by side. Questions on
              billing edge-cases (gift purchases, multi-household logins,
              VAT-receipt formats) are best handled by support directly.
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
                  Compare the cheapest IPTV plans side by side
                </Link>
              </li>
              <li>
                <Link href="/iptv-channels" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
                  See the full IPTV channel list and categories
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
              Questions about cheap-iptv.tv as an{" "}
              <span className="gradient-text">IPTV service provider</span>
            </h2>
            <p className="text-base text-muted leading-relaxed">
              The questions the support team is asked most often by
              prospective subscribers — pulled from the live chat queue and
              grouped here so you can read the answers before signing up. If
              anything below does not cover what you need, the support team
              can be reached on the{" "}
              <Link
                href="/contact"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                contact page
              </Link>{" "}
              and replies within a few minutes during UK hours.
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
                <div className="px-5 pb-5 text-sm text-muted leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — reused from existing CTASection */}
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
                  { "@type": "ListItem", position: 2, name: "IPTV Service Provider", item: PAGE_URL },
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
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
