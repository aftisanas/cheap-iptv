import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

/**
 * AI crawlers we explicitly allow. These were previously hand-edited onto the
 * deployed robots.txt only — keeping them here means a rebuild can't silently
 * drop them.
 */
const LLM_USER_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

const DISALLOWED_PATHS = ["/api/", "/_next/", "/admin/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOWED_PATHS,
      },
      {
        userAgent: ["Googlebot", "Bingbot"],
        allow: "/",
        disallow: DISALLOWED_PATHS,
      },
      ...LLM_USER_AGENTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: DISALLOWED_PATHS,
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
