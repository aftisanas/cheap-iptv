import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, ListChecks, Play, MessageCircle } from "lucide-react";
import CTASection from "@/components/CTASection";
import TrustSection from "@/components/TrustSection";
import SectionLink from "@/components/SectionLink";
import {
  CHANNEL_CATEGORIES,
  CONTACT_EMAIL,
  LOGO_URL,
  PRICING_PLANS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

const PAGE_PATH = "/iptv-channels";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const LAST_UPDATED_DISPLAY = "29 June 2026";
const LAST_UPDATED_ISO = "2026-06-29";

const META_TITLE = "IPTV Channel List UK 2026 | 37,000+ Channels & Categories";
const META_DESCRIPTION =
  "The full IPTV channel list: 37,000+ live channels across UK entertainment, sport, films, kids, news and 40+ international languages — every category included in one cheap IPTV subscription.";

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

const diamond = PRICING_PLANS.find((p) => p.id === "diamond")!;

const PAGE_FAQS: ReadonlyArray<{ question: string; answer: string }> = [
  {
    question: "How many channels are on the IPTV channel list?",
    answer:
      "The channel list includes more than 37,000 live channels plus a 198,000-title on-demand library of films and series. Coverage spans UK entertainment, sport, films, kids, news and rolling current affairs, alongside 40+ international language packs. Every category is included on every plan — nothing is locked behind a higher tier.",
  },
  {
    question: "Is every channel included on the cheapest plan?",
    answer:
      "Yes. The full channel list is identical on all four plans. The Bronze three-month plan sees exactly the same 37,000-channel line-up as the Diamond two-year plan. Price differences come from commitment length alone, never from feature or channel gating.",
  },
  {
    question: "Are UK sport, films and kids channels included?",
    answer:
      "Yes. The line-up covers UK sport (5,500+ channels), a full British entertainment selection, an on-demand cinema library of 198,000+ films and series, a dedicated kids and family category with parental controls, and rolling UK and international news. Whatever you watch, the category is already covered.",
  },
  {
    question: "Are international and foreign-language channels included?",
    answer:
      "Yes. More than 17,000 international channels across 40+ language packs are included — Arabic, Urdu, Hindi, Polish, Portuguese, Turkish, French, African feeds and more — all bundled free with every plan and switchable from the player's country filter.",
  },
  {
    question: "Can I see the full channel list before I subscribe?",
    answer:
      "The complete, up-to-date channel list is provided inside the app the moment your subscription activates, and the support team can confirm coverage for any specific category before you buy. Because the line-up updates continuously, the in-app guide is always the most accurate reference. Contact support if you want a particular category confirmed first.",
  },
  {
    question: "How do I watch the channels once I've subscribed?",
    answer:
      "Credentials arrive by email within about sixty seconds of payment. Enter them into your preferred player on a Fire Stick, Smart TV, phone, tablet, computer or set-top box, and the full channel list and EPG load automatically. Five screens can stream different channels at the same time on one login.",
  },
];

export default function IPTVChannelsPage() {
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
            <ListChecks className="h-4 w-4 text-cyan-400" />
            IPTV Channel List · 2026
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            The Full IPTV Channel List —{" "}
            <span className="gradient-text-hero">37,000+ Channels in Every Category</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300/90 mb-8 leading-relaxed">
            UK entertainment, sport, films, kids, news and 40+ international language packs —
            every category is included on every plan. You never have to chase a single channel,
            because the whole line-up comes as standard with{" "}
            <Link href="/" className="text-cyan-300 hover:text-cyan-200 underline-offset-2 hover:underline">
              cheap IPTV UK
            </Link>
            .
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <SectionLink
              href="/#pricing"
              className="group relative flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98] w-full sm:w-auto justify-center"
            >
              <Play className="h-5 w-5 fill-current" />
              See plans from £{diamond.perMonth.toFixed(2)}/mo
            </SectionLink>
            <Link
              href="/cheapest-iptv"
              className="group flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all hover:border-purple-400/30 hover:bg-white/10 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="h-5 w-5 text-cyan-400" />
              Compare the cheapest plans
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
            This is the full IPTV channel list for cheap-iptv.tv, organised by category rather
            than by individual channel — because the whole point is that you do not have to hunt
            for a specific channel. With 37,000+ live channels and a 198,000-title on-demand
            library, every major category a UK household watches is already covered: sport,
            entertainment, cinema, kids, news and international. Every category below is included
            on all four plans, from the three-month Bronze plan to the two-year Diamond plan at £
            {diamond.perMonth.toFixed(2)} per month. For the price breakdown, see the{" "}
            <Link
              href="/cheapest-iptv"
              className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
            >
              cheapest IPTV page
            </Link>
            .
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              IPTV channel list by category
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Here is how the 37,000+ channels break down across the categories most UK viewers
              care about. The counts are approximate and update continuously as the line-up grows.
            </p>
            <div className="rounded-2xl border border-violet-100/60 bg-white shadow-sm overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-violet-50/60 text-foreground">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Category</th>
                    <th className="px-4 py-3 font-semibold">Channels</th>
                    <th className="px-4 py-3 font-semibold">What&apos;s covered</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {CHANNEL_CATEGORIES.map((cat) => (
                    <tr key={cat.name} className="border-t border-violet-100/60 align-top">
                      <td className="px-4 py-3 font-medium text-foreground">{cat.name}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{cat.count}</td>
                      <td className="px-4 py-3">{cat.channels}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base leading-relaxed text-gray-700">
              Because every category is bundled together, there is no separate sport add-on, no
              cinema upgrade and no international surcharge. The whole list travels with the base
              plan — which is what makes it the{" "}
              <Link
                href="/iptv-subscription"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                best-value IPTV subscription
              </Link>{" "}
              for a household that watches across several genres.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Every channel you want — included as standard
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Rather than publishing thousands of individual channel names that change week to
              week, cheap-iptv.tv guarantees the categories: if it is broadcast in the UK and
              watched by UK households, it is in the line-up. Sport fans get comprehensive live
              coverage across 5,500+ sports channels. Film and box-set viewers get a 198,000-title
              on-demand cinema library. Families get a dedicated kids category with PIN-protected
              parental controls. News viewers get rolling UK and international current affairs. And
              the 17,000+ international channels cover 40+ languages for multicultural households.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              The complete, always-current channel list is delivered inside the player the moment
              your subscription activates, with a full electronic programme guide and seven-day
              catch-up. If you want a specific category confirmed before you buy, the UK support
              team on the{" "}
              <Link
                href="/contact"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                contact page
              </Link>{" "}
              will check it for you.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              4K quality across the whole channel list
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Channel quantity means little without quality. Every channel that the source
              broadcasts in high definition streams in HD, Full HD or 4K UHD, with adaptive
              bitrate that steps the picture down gracefully rather than freezing when broadband
              dips. Five screens can watch five different channels from the list at the same time
              on one login. To start watching, pick a plan on the{" "}
              <SectionLink
                href="/#pricing"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                homepage pricing section
              </SectionLink>{" "}
              — the full channel list unlocks within sixty seconds of payment.
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
                <Link href="/cheapest-iptv" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
                  Compare the cheapest IPTV plans, priced line by line
                </Link>
              </li>
              <li>
                <Link href="/blog/best-iptv-uk-guide-2026" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
                  Best IPTV UK 2026 — how to choose a provider
                </Link>
              </li>
              <li>
                <Link href="/blog/how-to-setup-iptv-firestick" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
                  How to set up IPTV on a Fire Stick
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
              IPTV channel list —{" "}
              <span className="gradient-text">what subscribers ask</span>
            </h2>
            <p className="text-base text-muted leading-relaxed">
              The most common questions about what is on the channel list and how to watch it.
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

      {/* JSON-LD: WebPage + Organization + Breadcrumb */}
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
                  { "@type": "ListItem", position: 2, name: "IPTV Channel List", item: PAGE_URL },
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
