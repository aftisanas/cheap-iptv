import type { MetadataRoute } from "next";
import { statSync } from "node:fs";
import { join } from "node:path";
import { AUTHOR, BLOG_POSTS, SITE_URL } from "@/lib/constants";

// Real per-route lastmod, sourced from filesystem mtime of each route file.
// This replaces the previous hard-coded uniform date so Google sees genuine
// freshness signals per URL instead of one bulk stamp across the whole site.
const APP_DIR = join(process.cwd(), "src", "app");

function fileMTime(relative: string): Date {
  try {
    return statSync(join(APP_DIR, relative)).mtime;
  } catch {
    return new Date();
  }
}

const HOMEPAGE_MTIME = fileMTime("page.tsx");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: HOMEPAGE_MTIME, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/how-much-does-iptv-cost-uk`, lastModified: fileMTime("how-much-does-iptv-cost-uk/page.tsx"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/iptv-free-trial`, lastModified: fileMTime("iptv-free-trial/page.tsx"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/iptv-subscription`, lastModified: fileMTime("iptv-subscription/page.tsx"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/iptv-channels`, lastModified: fileMTime("iptv-channels/page.tsx"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: fileMTime("blog/page.tsx"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/authors/${AUTHOR.slug}`, lastModified: fileMTime("authors/[slug]/page.tsx"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: fileMTime("contact/page.tsx"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/terms`, lastModified: fileMTime("terms/page.tsx"), changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/privacy`, lastModified: fileMTime("privacy/page.tsx"), changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/dmca`, lastModified: fileMTime("dmca/page.tsx"), changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/refund`, lastModified: fileMTime("refund/page.tsx"), changeFrequency: "yearly", priority: 0.4 },
  ];

  // Blog posts share a single [slug]/page.tsx file. Use that file's mtime as
  // the lastmod for every post — it changes whenever any post content is
  // edited, which is the closest signal available without a per-post store.
  const blogFileMTime = fileMTime("blog/[slug]/page.tsx");
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.filter((post) =>
    Boolean(post.slug)
  ).map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: blogFileMTime,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
