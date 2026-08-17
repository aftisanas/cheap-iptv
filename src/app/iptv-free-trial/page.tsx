import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  ChevronDown,
  Clock,
  MessageCircle,
  Play,
  ShieldCheck,
  Timer,
  XCircle,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import TrustSection from "@/components/TrustSection";
import SectionLink from "@/components/SectionLink";
import {
  CONTACT_EMAIL,
  LOGO_URL,
  PRICING_PLANS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

const PAGE_PATH = "/iptv-free-trial";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const LAST_UPDATED_DISPLAY = "16 August 2026";
const LAST_UPDATED_ISO = "2026-08-16";

const META_TITLE =
  "IPTV Free Trial UK - Why A 30-Day Money-Back Guarantee Beats It";
const META_DESCRIPTION =
  "Straight answer on IPTV free trials in the UK — we don't offer one, and here's why the 30-day money-back guarantee is a stronger, safer way to test IPTV than a 24-hour trial.";

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
const diamond = PRICING_PLANS.find((p) => p.id === "diamond")!;

const COMPARISON_ROWS: ReadonlyArray<{
  criterion: string;
  trial: string;
  guarantee: string;
  winner: "trial" | "guarantee" | "draw";
}> = [
  {
    criterion: "Time to test the service",
    trial: "24 hours (sometimes 6 or 12)",
    guarantee: "30 full days",
    winner: "guarantee",
  },
  {
    criterion: "Cost to test",
    trial: "Free (but usually gated)",
    guarantee: `£${bronze.price.toFixed(2)} up front, fully refundable if claimed in the window`,
    winner: "trial",
  },
  {
    criterion: "Access to the full channel list",
    trial: "Usually a limited demo playlist",
    guarantee: "The full 37,000+ channel line-up from minute one",
    winner: "guarantee",
  },
  {
    criterion: "Access to on-demand films & series",
    trial: "Often disabled during trials",
    guarantee: "Full 198,000-title on-demand library",
    winner: "guarantee",
  },
  {
    criterion: "Streaming quality on offer",
    trial: "Often capped to SD or 720p",
    guarantee: "HD, Full HD and 4K UHD as the source allows",
    winner: "guarantee",
  },
  {
    criterion: "Number of devices you can test",
    trial: "One device, usually",
    guarantee: "All five simultaneous screens included",
    winner: "guarantee",
  },
  {
    criterion: "Peak-time load testing",
    trial: "Rarely long enough to cover a weekend",
    guarantee: "Covers four full weekends including peak sport windows",
    winner: "guarantee",
  },
  {
    criterion: "Card kept on file for auto-charge?",
    trial: "Often yes — this is where most people get caught",
    guarantee: "No — every plan is a single one-time payment",
    winner: "guarantee",
  },
  {
    criterion: "Risk if the service fails to deliver",
    trial: "You lose the time; auto-charge may still trigger",
    guarantee: "Full refund on request inside the 30 days",
    winner: "guarantee",
  },
];

const PAGE_FAQS: ReadonlyArray<{ question: string; answer: string }> = [
  {
    question: "Does Cheap IPTV UK offer a free trial?",
    answer:
      "No. Cheap IPTV does not run a free trial and does not intend to. Instead, every plan is protected by a 30-day money-back guarantee, which is a longer and safer way to test the service than a typical 24-hour IPTV trial. You pay for the shortest plan up front, use the service for up to thirty days across every device and every channel, and if it does not meet expectations you request a refund and receive it — no card retained, no rebill.",
  },
  {
    question: "Why is there no IPTV free trial?",
    answer:
      "Two honest reasons. First, free IPTV trials are the single most abused entry point in the market — the majority of stolen-card fraud attempts on IPTV providers come through 24-hour trials, which forces providers to either heavily restrict what a trial can access or push the fraud cost onto paying subscribers through higher prices. Second, a 24-hour trial cannot meaningfully test IPTV, because peak-time load only shows up on weekends and on evenings. A 30-day money-back guarantee gives you four full weekends, four full evenings of prime-time viewing, and the real peak-time stress test that a trial cannot.",
  },
  {
    question: "How is the 30-day money-back guarantee different from a trial?",
    answer:
      "The guarantee gives you the full paid service — the complete 37,000-channel line-up, the 198,000-title on-demand library, four-screen concurrent streaming, HD/Full HD/4K quality and the built-in VPN — with no feature gating. A typical free IPTV trial gives you a small demo playlist for a few hours. The guarantee also runs thirty times longer, which matters because IPTV reliability shows up over weeks, not hours. The one difference is that the guarantee is a paid-then-refunded model — you pay for the plan up front and reclaim the money if it falls short.",
  },
  {
    question: "How do I claim the refund inside the 30 days?",
    answer:
      "Email the UK support team or use live chat within thirty days of your original payment, quote your order reference, and briefly explain what did not work. The refund is processed the same day or the next working day and returns to the payment method you used. There is no ladder of questions, no retention offers, and no fine print about which reasons qualify. The full mechanics are on the refund policy page — the process is deliberately short.",
  },
  {
    question:
      "Which plan should I buy to use the guarantee as a trial?",
    answer: `The three-month Bronze plan at £${bronze.price.toFixed(
      2
    )} total is the lowest-cost entry point for treating the guarantee as a trial. If the service meets expectations you keep the remaining ~60 days of access; if it does not, you claim the refund inside the first thirty days and lose nothing beyond a temporary charge on the statement. The two-year Diamond plan at £${diamond.price.toFixed(
      2
    )} is a better long-term price, but the Bronze plan is the sensible choice when the priority is a low-risk first purchase.`,
  },
  {
    question: "What happens to my subscription if I claim the refund?",
    answer:
      "Access ends when the refund is processed. There is no penalty and no restriction on subscribing again in future. Because Cheap IPTV does not retain a card on file, there is nothing to unsubscribe from and nothing that will accidentally re-charge later — the refund closes the account cleanly.",
  },
  {
    question: "Are free IPTV trials from other providers safe to use?",
    answer:
      "Treat them with caution. Legitimate providers occasionally run short trials, but a large portion of \"IPTV free trial\" offers are set up specifically to harvest card details, use throw-away demo servers with a fraction of the real channel list, or auto-enrol you into a rolling subscription that is difficult to cancel. Before signing up to any IPTV trial, check the refund policy, check whether a card is kept on file, and check whether a real named UK support team is reachable. If any of those three are missing, the guarantee model is the safer route.",
  },
  {
    question: "Can I test the service on more than one device during the guarantee?",
    answer:
      "Yes. All five simultaneous screens are active from the moment your subscription starts, so during the 30 days you can install the app on a Fire Stick, a Smart TV, an Android phone, an iPad and a laptop and stress-test the service across every device your household actually uses. That is the whole point of the guarantee — you are testing the real, unrestricted service, not a trimmed-down trial version.",
  },
];

export default function IPTVFreeTrialPage() {
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
            30-Day Money-Back Guarantee · 2026
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            IPTV Free Trial UK —{" "}
            <span className="gradient-text-hero">
              Why A 30-Day Money-Back Guarantee Beats It
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300/90 mb-8 leading-relaxed">
            Straight answer: we do <strong>not</strong> offer a free IPTV trial.
            Instead every plan is protected by a 30-day money-back guarantee —
            longer, safer and a proper way to stress-test the service before you
            commit. Here is why that is the honest upgrade on a 24-hour trial.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <SectionLink
              href="/#pricing"
              className="group relative flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98] w-full sm:w-auto justify-center"
            >
              <Play className="h-5 w-5 fill-current" />
              See the guaranteed plans
            </SectionLink>
            <Link
              href="/refund"
              className="group flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all hover:border-purple-400/30 hover:bg-white/10 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="h-5 w-5 text-cyan-400" />
              Read the refund policy
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

      {/* Honesty banner */}
      <section className="bg-amber-50 border-y border-amber-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-4 flex items-start gap-3">
          <XCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-sm text-amber-900 leading-relaxed">
            <strong>To be clear:</strong> Cheap IPTV UK does not offer a free
            IPTV trial. Any page or listing suggesting otherwise is not from us.
            What we do offer, on every plan, is a <strong>30-day money-back guarantee</strong> —
            details below.
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-14 text-foreground">
          <p className="text-lg leading-relaxed text-gray-700">
            &ldquo;IPTV free trial&rdquo; is one of the most searched IPTV terms
            in the UK, and it is worth being honest about it up front. Cheap
            IPTV does not run a free trial and does not intend to — because a
            24-hour IPTV trial cannot meaningfully test the service, and because
            free-trial funnels are the single most abused entry point in the UK
            IPTV market. What we offer instead is a <strong>30-day money-back
            guarantee</strong> across every plan on the{" "}
            <Link
              href="/"
              className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
            >
              cheap IPTV UK homepage
            </Link>
            . It is longer, gives you the full unrestricted service, and — when
            the service does not meet expectations — refunds cleanly with no
            card retained on file. This page walks through exactly why the
            guarantee is the stronger option, how it compares to a trial line by
            line, and how to use it as one.
          </p>

          {/* Section 1: Why no free trial */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Why Cheap IPTV does not offer a free trial
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              The market average for an IPTV free trial is somewhere between six
              and twenty-four hours, on a demo playlist that only carries a
              fraction of the real channel list. That format has three
              structural problems, and every honest provider eventually runs
              into all of them.
            </p>
            <ul className="space-y-3 text-base text-gray-700">
              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-violet-500" />
                <span>
                  <strong className="text-foreground">
                    A day is not long enough to test IPTV.
                  </strong>{" "}
                  Real reliability issues show up during peak-time load — a
                  Saturday afternoon of live sport, a weekday evening prime-time
                  window, an on-demand film played from cold cache. A 24-hour
                  trial almost never covers a weekend, so it cannot show you the
                  moment that matters most.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-violet-500" />
                <span>
                  <strong className="text-foreground">
                    Free-trial funnels are magnets for card fraud.
                  </strong>{" "}
                  Providers who ask for a card up front lose material amounts of
                  money to trials that are set up to test stolen cards, and end
                  up passing that cost onto genuine subscribers through higher
                  prices. Providers who do not ask for a card end up serving
                  bots that hammer the servers for demo credentials.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-violet-500" />
                <span>
                  <strong className="text-foreground">
                    Trial infrastructure is not the real service.
                  </strong>{" "}
                  Most providers gate a trial to a small demo playlist on a
                  separate server so the real production servers are not
                  overloaded by testers. That means the trial you are evaluating
                  is not actually the product you would receive after paying —
                  which defeats the point of testing it.
                </span>
              </li>
            </ul>
            <p className="text-base leading-relaxed text-gray-700">
              The 30-day money-back guarantee solves all three: it runs long
              enough to cover four full weekends, it does not hand out free
              access to the servers, and it puts you on the real production
              service from minute one. If the service does not perform, the
              money comes back.
            </p>
          </section>

          {/* Section 2: What the guarantee covers */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              The 30-day money-back guarantee — what it actually covers
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              The guarantee is exactly what the name says: pay for any plan,
              use the service for up to thirty days, and if it does not meet
              expectations request a full refund. There is no ladder of
              qualifying reasons, no restocking fee, and no partial-refund
              small print. Every plan on{" "}
              <Link
                href="/"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                cheap-iptv.tv
              </Link>{" "}
              is protected identically — from the three-month Bronze plan
              through to the two-year Diamond plan.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-violet-100/70 bg-gradient-to-br from-white to-violet-50/40 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                    <Timer className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    30 full days, not 24 hours
                  </h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Thirty times longer than a typical IPTV free trial. Enough to
                  cover four full weekends and every prime-time evening in a
                  month.
                </p>
              </div>
              <div className="rounded-2xl border border-violet-100/70 bg-gradient-to-br from-white to-violet-50/40 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                    <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    Full, unrestricted service
                  </h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  37,000+ live channels, 198,000+ on-demand titles, all five
                  screens, HD/Full HD/4K and the built-in VPN — the real
                  product, not a trial demo playlist.
                </p>
              </div>
              <div className="rounded-2xl border border-violet-100/70 bg-gradient-to-br from-white to-violet-50/40 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                    <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    No card kept on file
                  </h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Every plan is a one-time payment. Nothing rebills, nothing
                  auto-renews — the refund closes the account cleanly without
                  anything scheduled behind it.
                </p>
              </div>
              <div className="rounded-2xl border border-violet-100/70 bg-gradient-to-br from-white to-violet-50/40 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    Same-day refund processing
                  </h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Refunds are processed on the day of the request or the next
                  working day, straight back to the original payment method.
                  Full detail on the{" "}
                  <Link
                    href="/refund"
                    className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
                  >
                    refund policy page
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: side-by-side comparison */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              IPTV free trial vs 30-day money-back guarantee — side by side
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              The comparison is not close on the criteria that actually decide
              whether IPTV is the right choice for a household. Here is the
              honest table.
            </p>
            <div className="rounded-2xl border border-violet-100/60 bg-white shadow-sm overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-violet-50/60 text-foreground">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Criterion</th>
                    <th className="px-4 py-3 font-semibold">
                      Typical IPTV free trial
                    </th>
                    <th className="px-4 py-3 font-semibold">
                      30-day money-back guarantee
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {COMPARISON_ROWS.map((row) => (
                    <tr
                      key={row.criterion}
                      className="border-t border-violet-100/60 align-top"
                    >
                      <td className="px-4 py-3 font-medium text-foreground">
                        {row.criterion}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          row.winner === "trial"
                            ? "text-emerald-700 font-medium"
                            : ""
                        }`}
                      >
                        {row.trial}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          row.winner === "guarantee"
                            ? "text-emerald-700 font-medium"
                            : ""
                        }`}
                      >
                        {row.guarantee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base leading-relaxed text-gray-700">
              The guarantee loses on exactly one line — an up-front payment is
              required, whereas a trial does not need one. That single
              disadvantage is what the refund policy exists to neutralise: the
              payment is fully refundable inside the window, and no card is
              retained afterwards. If you would rather see the plan prices in
              full before committing, the four-plan grid sits on the{" "}
              <Link
                href="/"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                homepage
              </Link>{" "}
              and the per-month maths is broken down in the{" "}
              <Link
                href="/how-much-does-iptv-cost-uk"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                UK IPTV cost guide
              </Link>
              .
            </p>
          </section>

          {/* Section 4: what free trials usually hide */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              What an IPTV free trial usually hides
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              If you have signed up for an IPTV free trial elsewhere before, you
              probably ran into at least one of these. They are common enough
              across the market that they are worth naming.
            </p>
            <div className="space-y-3">
              <div className="rounded-xl border border-red-100 bg-red-50/50 p-4">
                <p className="text-sm font-semibold text-red-800 mb-1">
                  A demo playlist, not the real line-up
                </p>
                <p className="text-sm text-red-900/90 leading-relaxed">
                  The trial serves a handful of test channels on a separate
                  server. Whether the actual paid service works is impossible to
                  judge from that.
                </p>
              </div>
              <div className="rounded-xl border border-red-100 bg-red-50/50 p-4">
                <p className="text-sm font-semibold text-red-800 mb-1">
                  A card kept on file, then quiet auto-charge
                </p>
                <p className="text-sm text-red-900/90 leading-relaxed">
                  The trial ends silently and the first month is charged before
                  you notice. Cancelling requires chasing a support email that
                  rarely gets answered inside the refund window.
                </p>
              </div>
              <div className="rounded-xl border border-red-100 bg-red-50/50 p-4">
                <p className="text-sm font-semibold text-red-800 mb-1">
                  Six or twelve hours instead of a full day
                </p>
                <p className="text-sm text-red-900/90 leading-relaxed">
                  Trials advertised as &ldquo;24 hours&rdquo; that expire
                  overnight because the clock starts at sign-up. You blink and
                  it is gone.
                </p>
              </div>
              <div className="rounded-xl border border-red-100 bg-red-50/50 p-4">
                <p className="text-sm font-semibold text-red-800 mb-1">
                  A Telegram or WhatsApp-only contact route
                </p>
                <p className="text-sm text-red-900/90 leading-relaxed">
                  No named UK team, no legal or refund page, and no way to
                  escalate if the trial credentials never actually arrive. This
                  is the biggest red flag in the market.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: how to use guarantee as trial */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              How to use the guarantee as a proper trial
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Treat the 30 days as a structured stress test, not passive
              viewing. Four things to do inside the window turn it into the
              trial a 24-hour free trial cannot be.
            </p>
            <ol className="space-y-3 text-base text-gray-700 list-decimal list-outside pl-5">
              <li>
                <strong className="text-foreground">Week one — peak-time stress test.</strong>{" "}
                Stream your three most important channels at peak time (a
                Saturday afternoon top-tier football window is the hardest test
                there is). If the picture holds without buffering, the
                provider&apos;s peak-time capacity is real.
              </li>
              <li>
                <strong className="text-foreground">Week two — multi-device test.</strong>{" "}
                Install the player on every device the household actually uses
                — Fire Stick, Smart TV, phone, tablet, laptop — and stream
                across all of them simultaneously. All five screens should hold
                without one degrading the others.
              </li>
              <li>
                <strong className="text-foreground">Week three — EPG and catch-up test.</strong>{" "}
                Check that the electronic programme guide populates correctly,
                that seven-day catch-up plays without failing, and that
                favourites and profile settings persist across restarts.
              </li>
              <li>
                <strong className="text-foreground">Week four — support test.</strong>{" "}
                Contact the UK support team on the{" "}
                <Link
                  href="/contact"
                  className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
                >
                  contact page
                </Link>{" "}
                with a simple question and time the response. A provider that
                answers in minutes during a trial will answer in minutes when
                you have paid too.
              </li>
            </ol>
            <p className="text-base leading-relaxed text-gray-700">
              If any of the four fails, request the refund inside the 30 days.
              If all four pass, you already own the plan and there is nothing
              more to do — the service simply continues.
            </p>
          </section>

          {/* Section 6: what happens if you claim */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              What happens if you claim the refund
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Refunds inside the 30-day window are processed the same day or the
              next working day. The full amount returns to the payment method
              used at checkout — the same card, the same PayPal account or the
              same wallet — with no restocking fee and no partial hold. Access
              to the service ends when the refund is processed; there is nothing
              to unsubscribe from because no card is retained on file.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              The support team does not run a retention script and does not
              require a specific &ldquo;approved&rdquo; reason. The refund
              policy is deliberately short: inside 30 days, request it, get it.
              Full detail sits on the{" "}
              <Link
                href="/refund"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                refund policy page
              </Link>
              , and if you want to confirm anything before you buy the UK team
              can be reached at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          {/* Section 7: getting started */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Getting started — with a 30-day safety net
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              The cheapest way to put the guarantee to work is the three-month
              Bronze plan at £{bronze.price.toFixed(2)} total. It is a low
              enough number that the refund window covers most of the actual
              commitment, and it activates in about sixty seconds — credentials
              arrive by email, you enter them into your preferred IPTV player,
              and the full channel list loads. For the longer-term plans and
              the full pricing grid, see the{" "}
              <Link
                href="/"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                cheap IPTV UK homepage
              </Link>{" "}
              or the{" "}
              <Link
                href="/iptv-subscription"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                IPTV subscription plans page
              </Link>
              . And if you are still weighing IPTV against traditional pay-TV,
              the full cost comparison sits in the{" "}
              <Link
                href="/how-much-does-iptv-cost-uk"
                className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
              >
                UK IPTV cost guide
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
                  href="/refund"
                  className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
                >
                  30-day money-back guarantee — full refund policy
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/iptv-smarters-pro-uk-setup-guide"
                  className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline"
                >
                  IPTV Smarters Pro UK setup guide
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
              IPTV free trial —{" "}
              <span className="gradient-text">what people actually ask</span>
            </h2>
            <p className="text-base text-muted leading-relaxed">
              Straight, honest answers to the questions we get most often about
              IPTV trials and the 30-day money-back guarantee.
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
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: SITE_URL,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "IPTV Free Trial",
                    item: PAGE_URL,
                  },
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
