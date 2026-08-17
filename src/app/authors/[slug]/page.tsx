import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  ShieldCheck,
  User,
} from "lucide-react";
import { AUTHOR, BLOG_POSTS, LOGO_URL, SITE_NAME, SITE_URL } from "@/lib/constants";

type PageParams = { slug: string };

export async function generateStaticParams() {
  return [{ slug: AUTHOR.slug }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== AUTHOR.slug) return {};

  return {
    title: `${AUTHOR.name} — ${AUTHOR.title}`,
    description: AUTHOR.bio,
    alternates: { canonical: `/authors/${AUTHOR.slug}` },
    openGraph: {
      title: `${AUTHOR.name} — ${AUTHOR.title}`,
      description: AUTHOR.bio,
      type: "profile",
      url: AUTHOR.url,
      images: [
        {
          url: `${SITE_URL}${AUTHOR.avatar}`,
          alt: AUTHOR.name,
        },
      ],
    },
  };
}

export default async function AuthorProfilePage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  if (slug !== AUTHOR.slug) {
    notFound();
  }

  const authorUrl = AUTHOR.url;

  const profileLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${authorUrl}/#profile`,
    url: authorUrl,
    name: `${AUTHOR.name} — Profile & Credentials`,
    mainEntity: {
      "@type": "Person",
      "@id": `${authorUrl}/#person`,
      name: AUTHOR.name,
      jobTitle: AUTHOR.title,
      description: AUTHOR.bio,
      image: `${SITE_URL}${AUTHOR.avatar}`,
      url: authorUrl,
      worksFor: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: LOGO_URL,
      },
      knowsAbout: [
        "IPTV Streaming Infrastructure",
        "IPTV Smarters Pro & TiviMate Setup",
        "UK Broadband & Network Optimization",
        "M3U & Xtream Codes Protocols",
        "Digital Broadcasting Standards",
      ],
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: AUTHOR.name, item: authorUrl },
    ],
  };

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Author Bio Header Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0d0722] via-[#160b36] to-[#0c1445] p-8 sm:p-10 shadow-2xl mb-12">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            {/* Avatar container */}
            <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 p-1 shadow-lg">
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-[#0d0722]">
                <User className="h-12 w-12 text-cyan-400" />
              </div>
            </div>

            {/* Author Details */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/20">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {AUTHOR.role}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300 border border-purple-500/20">
                  <Award className="h-3.5 w-3.5" />
                  E-E-A-T Verified
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-1">
                {AUTHOR.name}
              </h1>
              <p className="text-base text-cyan-300 font-medium mb-4">
                {AUTHOR.title}
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
                {AUTHOR.bio}
              </p>
            </div>
          </div>

          {/* Credentials Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-300">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>8+ Years UK IPTV Testing</span>
            </div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Network & Codec Specialist</span>
            </div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>100+ App Guides Published</span>
            </div>
          </div>
        </div>

        {/* Editorial Standards & Expertise */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 mb-12">
          <h2 className="text-xl font-bold text-foreground mb-4">
            Editorial Integrity & E-E-A-T Standards
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Every guide authored by James Bennett undergoes hands-on testing across physical streaming hardware (Amazon Fire TV Stick 4K, Android TV, Samsung Tizen, LG webOS) and UK fibre broadband networks. Articles are updated regularly to reflect changes in player app software builds, Xtream Codes API behavior, and British broadcasting setups.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            Have questions about IPTV player configurations or streaming troubleshooting? Reach out via our{" "}
            <Link href="/contact" className="text-primary hover:underline font-medium">
              support contact page
            </Link>.
          </p>
        </section>

        {/* Authored Posts */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              Articles Authored by {AUTHOR.name} ({BLOG_POSTS.length})
            </h2>
          </div>

          <div className="space-y-4">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group relative rounded-xl border border-border/80 bg-card p-5 sm:p-6 transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-sm text-muted line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="shrink-0 self-start sm:self-center">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Read Guide →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </div>
  );
}
