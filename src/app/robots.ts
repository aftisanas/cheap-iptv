import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  // Explicitly welcome the major AI answer-engine crawlers so the brand is
  // eligible to be cited in ChatGPT, Claude, Perplexity, Google AI Overviews
  // and Bing/Copilot. They can also read /llms.txt.
  const aiCrawlers = [
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
    "Bingbot",
    "CCBot",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Only block server/admin routes. /_next/ is intentionally NOT blocked:
        // Googlebot must fetch the JS/CSS there to render and evaluate pages.
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: aiCrawlers,
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
