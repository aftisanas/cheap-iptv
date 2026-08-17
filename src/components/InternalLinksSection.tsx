import Link from "next/link";
import { ArrowRight } from "lucide-react";

const LINKS = [
  {
    href: "/iptv-subscription",
    title: "IPTV Subscription Plans",
    description:
      "Compare 3, 6, 12 and 24-month terms side by side — no contract, no stored card, no auto-renewal.",
  },
  {
    href: "/iptv-channels",
    title: "IPTV Channel List",
    description:
      "37,000+ channels across UK entertainment, sport, films, kids, news and 40+ languages — every category included.",
  },
  {
    href: "/how-much-does-iptv-cost-uk",
    title: "How Much Does IPTV Cost In The UK?",
    description:
      "Full UK IPTV cost breakdown — per-month maths across every plan, cost vs pay-TV, and what actually drives the price.",
  },
];

export default function InternalLinksSection() {
  return (
    <section className="relative bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            The Cheapest IPTV UK Cluster — Everything In One Place
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted leading-relaxed">
            Everything you need to choose the right cheap IPTV plan — subscription terms, the full
            channel list, and how the service is run behind the scenes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-2xl border border-violet-100/70 bg-violet-50/30 p-6 transition-all hover:border-violet-300 hover:bg-violet-50 hover:shadow-sm"
            >
              <h3 className="flex items-center gap-1.5 text-lg font-semibold text-foreground mb-2">
                {link.title}
                <ArrowRight className="h-4 w-4 text-violet-500 transition-transform group-hover:translate-x-1" />
              </h3>
              <p className="text-sm text-muted leading-relaxed">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
