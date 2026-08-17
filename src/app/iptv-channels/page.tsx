import type { Metadata } from "next";
import Link from "next/link";
import {
  Baby,
  ChevronDown,
  Film,
  Globe,
  ListChecks,
  MessageCircle,
  Newspaper,
  Play,
  Trophy,
  Tv,
  type LucideIcon,
} from "lucide-react";
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
const LAST_UPDATED_DISPLAY = "16 August 2026";
const LAST_UPDATED_ISO = "2026-08-16";

const META_TITLE =
  "IPTV Channel List UK 2026 - Full Channel Guide, 37,000+ Channels";
const META_DESCRIPTION =
  "Full IPTV channel list UK — 37,000+ live channels across English entertainment, sport, films, kids, news and 40+ international languages. Every channel in HD, Full HD or 4K, all included on every plan.";

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

const CATEGORY_ICON_MAP: Record<string, LucideIcon> = {
  Trophy,
  Tv,
  Film,
  Baby,
  Newspaper,
  Globe,
};

// Extra browsing metadata layered on top of CHANNEL_CATEGORIES. Kept generic
// (no broadcaster or league names) — matches the legal posture of the constant.
const CATEGORY_EXTRAS: Record<
  string,
  { short: string; anchor: string; highlights: string[] }
> = {
  "UK Sport — Every Fixture, One Cheap Price": {
    short: "UK Sport",
    anchor: "sport",
    highlights: [
      "Top-tier domestic football fixtures live in HD or 4K",
      "European midweek football coverage",
      "Rugby union & rugby league weekend line-up",
      "Horse racing, motorsport, boxing, MMA & darts feeds",
      "Multi-view sport windows on up to five screens at once",
    ],
  },
  "British IPTV Entertainment — Premium & Complete Line-Up": {
    short: "UK Entertainment",
    anchor: "entertainment",
    highlights: [
      "Full mainstream UK entertainment line-up in high quality",
      "Drama, reality, comedy, daytime and lifestyle channels",
      "Regional channel variants for viewers across the UK",
      "Time-shift & catch-up on seven days of programming",
    ],
  },
  "On-Demand Cinema — 198,000 Films And Series": {
    short: "Films & Series",
    anchor: "cinema",
    highlights: [
      "198,000+ on-demand films and complete box sets",
      "New cinema releases added continuously",
      "Popular series and originals from major streaming catalogues",
      "Full search, filters and continue-watching per profile",
    ],
  },
  "Kids & Family — Complete Parental Coverage": {
    short: "Kids & Family",
    anchor: "kids",
    highlights: [
      "Family-friendly channels for toddlers up to teens",
      "PIN-locked parental controls per profile",
      "Educational and edutainment channels alongside cartoons",
      "Kids on-demand library with age-appropriate filtering",
    ],
  },
  "Rolling News From Trusted IPTV Providers UK": {
    short: "News",
    anchor: "news",
    highlights: [
      "Major UK rolling-news channels live 24/7",
      "International news networks in English",
      "Business, finance and markets feeds",
      "Regional news for breaking local stories",
    ],
  },
  "International — 40+ Language Packs Included": {
    short: "International",
    anchor: "international",
    highlights: [
      "40+ language packs — Arabic, Urdu, Hindi, Polish, Portuguese, Turkish, French and more",
      "17,000+ international channels bundled at no extra cost",
      "One-tap country filter inside the player sidebar",
      "African, Middle Eastern, South Asian and European feeds",
    ],
  },
};

const PAGE_FAQS: ReadonlyArray<{ question: string; answer: string }> = [
  {
    question: "What channels are on IPTV?",
    answer:
      "An IPTV subscription streams the same categories of channels a UK household would recognise from traditional pay-TV — live sport, mainstream entertainment, films and series, kids and family, rolling news and international channels — plus a large on-demand library. On cheap-iptv.tv the line-up spans 37,000+ live channels and 198,000+ on-demand films and series, covering UK sport (5,500+ channels), UK entertainment, an on-demand cinema library, kids and family with parental controls, UK and international news, and 17,000+ international channels across 40+ languages. Every category is included on every plan.",
  },
  {
    question: "How many channels are on the IPTV channel list?",
    answer:
      "The channel list includes more than 37,000 live IPTV channels plus a 198,000-title on-demand library of films and series. That covers UK entertainment, sport, films, kids, news and rolling current affairs, alongside 40+ international language packs. Every category is included on every plan — nothing is locked behind a higher tier.",
  },
  {
    question: "What English IPTV channels are included?",
    answer:
      "The English-language portion of the IPTV line-up covers the full UK entertainment category, mainstream drama, reality and daytime channels, the rolling UK and international news category, English-language sport feeds across 5,500+ sports channels, the full kids and family category, and English-language international news networks. All of these stream in HD, Full HD or 4K UHD depending on the source feed, and all are included on every plan.",
  },
  {
    question: "Are UK IPTV channels included in the channel list?",
    answer:
      "Yes. The UK IPTV channel list covers major UK entertainment, UK sport (5,500+ sports channels), the UK rolling-news category, regional UK channel variants, and the full kids and family category — 500+ UK entertainment channels alone, plus everything above. The line-up is built for a UK household, so if it is broadcast in the UK and watched by UK viewers, the category is already in the list.",
  },
  {
    question: "Are HD IPTV channels available on every plan?",
    answer:
      "Yes. Every channel that its source broadcasts in high definition streams in HD, Full HD or 4K UHD, with adaptive bitrate that steps quality down gracefully instead of freezing when broadband dips. HD IPTV channels are not a paid upgrade — they are the default for every channel on every plan, from the three-month Bronze plan to the two-year Diamond plan.",
  },
  {
    question: "Is there an IPTV channel guide (EPG)?",
    answer:
      "Yes. The full IPTV channel guide (electronic programme guide) loads automatically inside the player the moment your subscription activates and covers seven days of listings with catch-up. Channels are grouped by category — sport, entertainment, films, kids, news and international — so you browse the guide by genre rather than scrolling a flat list of 37,000 channel numbers.",
  },
  {
    question: "Is every channel included on the cheapest plan?",
    answer:
      "Yes. The full IPTV channel list is identical on all four plans. The Bronze three-month plan sees exactly the same 37,000-channel line-up as the Diamond two-year plan. Price differences come from commitment length alone — never from feature, category or channel gating.",
  },
  {
    question: "Are international and foreign-language IPTV channels included?",
    answer:
      "Yes. More than 17,000 international IPTV channels across 40+ language packs are included — Arabic, Urdu, Hindi, Polish, Portuguese, Turkish, French, African feeds and more — all bundled free with every plan and switchable from the player's country filter.",
  },
  {
    question: "Can I see the full IPTV channel list before I subscribe?",
    answer:
      "The complete, always-current channel list is delivered inside the app the moment your subscription activates, and the UK support team can confirm coverage for any specific category before you buy. Because the line-up updates continuously, the in-app guide is always the most accurate reference. Contact support if you want a particular category confirmed first — the 30-day money-back guarantee means you can also verify coverage risk-free after activation.",
  },
  {
    question: "How do I watch the IPTV channels once I've subscribed?",
    answer:
      "Credentials arrive by email within about sixty seconds of payment. Enter them into your preferred player on a Fire Stick, Smart TV, phone, tablet, computer or set-top box, and the full IPTV channel list and EPG load automatically. Five screens can stream different channels at the same time on one login.",
  },
];

export default function IPTVChannelsPage() {
  const webpageId = `${PAGE_URL}#webpage`;
  const organizationId = `${SITE_URL}/#organization`;
  const itemListId = `${PAGE_URL}#category-list`;
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
            IPTV Channel List UK · 2026
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            IPTV Channel List UK 2026 —{" "}
            <span className="gradient-text-hero">
              Full Channel Guide, 37,000+ Channels
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300/90 mb-8 leading-relaxed">
            The full UK IPTV channel list — English entertainment, sport, films,
            kids, news and 40+ international language packs. Every channel is in
            HD, Full HD or 4K UHD, and every category is included on every plan
            with{" "}
            <Link
              href="/"
              className="text-cyan-300 hover:text-cyan-200 underline-offset-2 hover:underline"
            >
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
              href="/how-much-does-iptv-cost-uk"
              className="group flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all hover:border-purple-400/30 hover:bg-white/10 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="h-5 w-5 text-cyan-400" />
              See the full IPTV cost breakdown
            </Link>
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

      {/* Category jump bar */}
      <section className="bg-white border-b border-violet-100/50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs uppercase tracking-wider text-muted font-semibold mb-2">
            Jump to category
          </p>
          <div className="flex flex-wrap gap-2">
            {CHANNEL_CATEGORIES.map((cat) => {
              const extra = CATEGORY_EXTRAS[cat.name];
              if (!extra) return null;
              const Icon = CATEGORY_ICON_MAP[cat.icon];
              return (
                <a
                  key={cat.name}
                  href={`#${extra.anchor}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-violet-200/70 bg-violet-50/50 px-3 py-1.5 text-xs sm:text-sm font-medium text-violet-700 hover:bg-violet-100 hover:border-violet-300 transition-colors"
                >
                  {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
                  {extra.short}
                  <span className="text-violet-500/80">({cat.count})</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-14 text-foreground">
          <p className="text-lg leading-relaxed text-gray-700">
            This is the full UK IPTV channel list for cheap-iptv.tv, organised
            by category rather than by individual channel — because the whole
            point is that you do not have to hunt for a specific channel. With
            37,000+ live IPTV channels and a 198,000-title on-demand library,
            every major category a UK household watches is already covered:
            sport, entertainment, cinema, kids, news and international. Every
            category below is included on all four plans, from the three-month
            Bronze plan to the two-year Diamond plan at £
            {diamond.perMonth.toFixed(2)} per month. For the full price
            breakdown, see the{" "}
            <Link
              href="/how-much-does-iptv-cost-uk"
              className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
            >
              UK IPTV cost guide
            </Link>
            .
          </p>

          {/* Section: what channels are on IPTV */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              What channels are on IPTV?
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              An IPTV subscription streams the same categories of channels a UK
              household would recognise from traditional pay-TV — live sport,
              mainstream entertainment, films and series, kids and family,
              rolling news and international language packs — but delivered over
              your broadband connection rather than a satellite dish or aerial.
              The line-up on cheap-iptv.tv sits at{" "}
              <strong>37,000+ live IPTV channels</strong> plus a{" "}
              <strong>198,000-title on-demand library</strong>, grouped into six
              headline categories that are all included on every plan.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              You do not choose a genre bundle and pay extra for another. Sport,
              cinema, kids, news, international and entertainment all travel
              together as one line-up, so a household that watches across
              several genres is not paying three separate subscriptions to cover
              them.
            </p>
          </section>

          {/* Section: UK IPTV channel list summary table */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              UK IPTV channel list — the full category breakdown
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Here is how the 37,000+ IPTV channels break down across the
              categories most UK viewers care about. Counts are approximate and
              update continuously as the line-up grows.
            </p>
            <div className="rounded-2xl border border-violet-100/60 bg-white shadow-sm overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-violet-50/60 text-foreground">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Category</th>
                    <th className="px-4 py-3 font-semibold">Channels</th>
                    <th className="px-4 py-3 font-semibold">
                      What&apos;s covered
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {CHANNEL_CATEGORIES.map((cat) => (
                    <tr
                      key={cat.name}
                      className="border-t border-violet-100/60 align-top"
                    >
                      <td className="px-4 py-3 font-medium text-foreground">
                        {CATEGORY_EXTRAS[cat.name]?.short ?? cat.name}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {cat.count}
                      </td>
                      <td className="px-4 py-3">{cat.channels}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base leading-relaxed text-gray-700">
              Because every category is bundled together, there is no separate
              sport add-on, no cinema upgrade and no international surcharge.
              The whole IPTV channel list travels with the base plan — which is
              what makes it the{" "}
              <Link
                href="/iptv-subscription"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                best-value IPTV subscription
              </Link>{" "}
              for a household that watches across several genres.
            </p>
          </section>

          {/* Section: browsable category cards */}
          <section className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Browse IPTV channels by category
              </h2>
              <p className="text-base leading-relaxed text-gray-700">
                Below is a browsable IPTV channel guide by category. Each block
                gives the channel count, what the category actually covers, and
                the kind of programming inside it — described generically
                because the individual channel names update week to week inside
                the player.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {CHANNEL_CATEGORIES.map((cat) => {
                const extra = CATEGORY_EXTRAS[cat.name];
                const Icon = CATEGORY_ICON_MAP[cat.icon];
                return (
                  <div
                    key={cat.name}
                    id={extra?.anchor}
                    className="scroll-mt-24 rounded-2xl border border-violet-100/70 bg-gradient-to-br from-white to-violet-50/30 p-5 shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                        {Icon && (
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        )}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-foreground leading-tight">
                          {extra?.short ?? cat.name}
                        </h3>
                        <p className="text-xs text-violet-600 font-medium">
                          {cat.count} channels
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      {cat.channels}
                    </p>
                    {extra?.highlights && (
                      <ul className="space-y-1.5 text-sm text-gray-700">
                        {extra.highlights.map((h) => (
                          <li key={h} className="flex gap-2">
                            <span
                              aria-hidden="true"
                              className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500"
                            />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section: English IPTV channels */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              English IPTV channels — what&apos;s inside the English line-up
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              The English-language portion of the IPTV channel list is the
              largest single block for a UK viewer. It combines the full UK
              entertainment category (500+ channels), the sport category (5,500+
              channels, with English-language commentary on top-tier fixtures),
              the UK and international rolling news category (1,200+ channels)
              and the English-language on-demand cinema library.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              For most UK households this is what actually gets watched day to
              day, and it is why the IPTV channel list is built with the English
              category surfaced first inside the player. If your household also
              watches international content, the 40+ language packs sit
              alongside — one tap on the country filter switches the guide.
            </p>
            <div className="rounded-xl border border-violet-100/60 bg-violet-50/30 p-4 text-sm text-gray-700">
              <p className="font-medium text-foreground mb-1">
                English IPTV channels at a glance
              </p>
              <ul className="space-y-1">
                <li>· UK entertainment — 500+ channels</li>
                <li>· UK & English-language sport — 5,500+ channels</li>
                <li>· UK & English-language rolling news — 1,200+ channels</li>
                <li>· Kids & family (English) — 800+ channels</li>
                <li>· On-demand English films & series — 198,000+ titles</li>
              </ul>
            </div>
          </section>

          {/* Section: HD IPTV channels */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              HD IPTV channels — quality across the whole channel list
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Channel quantity means little without quality. Every IPTV channel
              in the line-up streams at the highest resolution its source
              broadcasts — HD, Full HD or 4K UHD — with adaptive bitrate that
              steps the picture down gracefully rather than freezing when
              broadband dips. HD IPTV channels are the default across the whole
              list, not a paid upgrade or a separate tier.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-violet-100/60 bg-white p-4">
                <p className="text-xs uppercase tracking-wider text-violet-600 font-semibold mb-1">
                  4K UHD
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Top-tier sport, premium cinema and select entertainment
                  channels stream in full 4K UHD where the source supports it.
                </p>
              </div>
              <div className="rounded-xl border border-violet-100/60 bg-white p-4">
                <p className="text-xs uppercase tracking-wider text-violet-600 font-semibold mb-1">
                  Full HD (1080p)
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  The default for the bulk of UK entertainment, films, news and
                  kids channels. Sharp picture, low bandwidth requirement.
                </p>
              </div>
              <div className="rounded-xl border border-violet-100/60 bg-white p-4">
                <p className="text-xs uppercase tracking-wider text-violet-600 font-semibold mb-1">
                  HD (720p)
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  International feeds and long-tail channels where the source
                  broadcasts at 720p. Still stream-quality on any modern TV.
                </p>
              </div>
            </div>
            <p className="text-base leading-relaxed text-gray-700">
              Five screens can watch five different channels from the list at
              the same time on one login — useful when the household is
              genuinely watching different things across the sitting room, the
              kitchen and the kids&apos; bedrooms.
            </p>
          </section>

          {/* Section: IPTV channel guide (EPG) */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              IPTV channel guide (EPG) — how the line-up is organised
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              The complete, always-current IPTV channel guide loads inside the
              player the moment your subscription activates. It is a full
              electronic programme guide (EPG) covering seven days of listings
              with catch-up, grouped by category — sport, entertainment, films,
              kids, news and international — so you browse the guide by genre
              rather than scrolling a flat list of 37,000 channel numbers.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              Favourites, per-profile watch history and a country filter for the
              international packs are all built in. If you want a specific
              category confirmed before you buy, the UK support team on the{" "}
              <Link
                href="/contact"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                contact page
              </Link>{" "}
              will check it for you — and the 30-day money-back guarantee means
              you can also verify coverage risk-free after activation.
            </p>
          </section>

          {/* Section: how to watch */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              How to watch the IPTV channels
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Once you subscribe, credentials arrive by email within about sixty
              seconds. Enter them into your preferred player on a Fire Stick,
              Smart TV, phone, tablet, computer or set-top box, and the full
              IPTV channel list and EPG load automatically. To start, pick a
              plan on the{" "}
              <SectionLink
                href="/#pricing"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                homepage pricing section
              </SectionLink>
              , or read the step-by-step{" "}
              <Link
                href="/blog/how-to-setup-iptv-firestick"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                Fire Stick setup guide
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
            <h2 className="text-lg font-bold text-foreground mb-3">
              Related reading
            </h2>
            <ul className="space-y-2 text-base text-gray-700">
              <li>
                <Link
                  href="/"
                  className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
                >
                  Cheap IPTV UK — full pricing and features
                </Link>
              </li>
              <li>
                <Link
                  href="/how-much-does-iptv-cost-uk"
                  className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
                >
                  How much does IPTV cost in the UK?
                </Link>
              </li>
              <li>
                <Link
                  href="/iptv-subscription"
                  className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
                >
                  IPTV subscription plans — 3, 6, 12 & 24 month terms
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/best-iptv-uk-guide-2026"
                  className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
                >
                  Best IPTV UK 2026 — how to choose a provider
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-to-setup-iptv-firestick"
                  className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
                >
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
              The most common questions about what channels are on IPTV, the UK
              channel list and how to watch it.
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

      {/* Final CTA */}
      <CTASection />

      {/* JSON-LD: WebPage + Organization + Breadcrumb + ItemList */}
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
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: SITE_URL,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "IPTV Channel List",
                    item: PAGE_URL,
                  },
                ],
              },
              {
                "@type": "ItemList",
                "@id": itemListId,
                name: "IPTV channel categories",
                description:
                  "Category breakdown of the IPTV channel list on cheap-iptv.tv — 37,000+ live channels grouped by genre.",
                numberOfItems: CHANNEL_CATEGORIES.length,
                itemListOrder: "https://schema.org/ItemListOrderAscending",
                itemListElement: CHANNEL_CATEGORIES.map((cat, i) => {
                  const extra = CATEGORY_EXTRAS[cat.name];
                  const url = extra?.anchor
                    ? `${PAGE_URL}#${extra.anchor}`
                    : PAGE_URL;
                  return {
                    "@type": "ListItem",
                    position: i + 1,
                    name: extra?.short ?? cat.name,
                    url,
                    description: cat.channels,
                  };
                }),
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
