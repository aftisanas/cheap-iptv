import Link from "next/link";
import { ArrowRight } from "lucide-react";

const LINKS = [
  {
    href: "/cheapest-iptv",
    title: "Cheapest IPTV UK",
    description:
      "Every plan priced line by line, from £25.99 down to about £3.33 per month on the two-year term.",
  },
  {
    href: "/iptv-subscription",
    title: "IPTV Subscription Plans",
    description:
      "Quarterly, half-yearly, annual or two-year — pick the term that fits, with no contract and no stored card.",
  },
  {
    href: "/iptv-channels",
    title: "IPTV Channel List",
    description:
      "37,000+ channels across UK entertainment, sport, films, kids, news and 40+ languages — every category included.",
  },
  {
    href: "/iptv-service-provider",
    title: "IPTV Service Provider",
    description:
      "Who runs cheap-iptv.tv, how the streams are engineered, and the real UK support behind every plan.",
  },
];

export default function InternalLinksSection() {
  return (
    <section className="relative bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Explore Cheap IPTV
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted leading-relaxed">
            Everything you need to choose the right plan — pricing, subscription terms, how the
            service is run, and step-by-step guides.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
