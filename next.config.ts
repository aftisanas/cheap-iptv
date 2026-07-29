import type { NextConfig } from "next";

// Content-Security-Policy tuned for a prerendered Next.js site:
// - 'unsafe-inline' on script-src is required because statically exported pages
//   cannot use per-request nonces (Next's bootstrap + our inline JSON-LD).
// - next/font self-hosts fonts and next/image serves from the same origin,
//   so font-src/img-src 'self' is sufficient (data:/blob: kept for safety).
const ContentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https:",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Content-Security-Policy", value: ContentSecurityPolicy },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/blog/iptv-vs-sky-comparison',
        destination: '/blog/iptv-vs-traditional-tv',
        permanent: true,
      },
      // Retired sports/broadcaster-themed posts (DMCA hygiene) — send any
      // residual link equity to the safe general buyer's guide.
      {
        source: '/blog/premier-league-streaming-guide',
        destination: '/blog/best-iptv-uk-guide-2026',
        permanent: true,
      },
      {
        source: '/blog/live-uk-sports-streaming-guide',
        destination: '/blog/best-iptv-uk-guide-2026',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
