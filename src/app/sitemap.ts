import type { MetadataRoute } from "next";
import { BLOG_POSTS, SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // All primary content was reviewed/updated on this date — surfacing a fresh
  // lastmod nudges Google to re-crawl the pages currently stuck in
  // "Detected — currently not indexed".
  const lastReviewed = new Date("2026-06-29");

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: lastReviewed, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/iptv-service-provider`, lastModified: lastReviewed, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/cheapest-iptv`, lastModified: lastReviewed, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/iptv-subscription`, lastModified: lastReviewed, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/iptv-channels`, lastModified: lastReviewed, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: lastReviewed, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: lastReviewed, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/dmca`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/refund`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];

  // Blog posts were rewritten/expanded on the review date, so report that as
  // their lastmod rather than the original publish date.
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.filter((post) =>
    Boolean(post.slug)
  ).map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: lastReviewed,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
