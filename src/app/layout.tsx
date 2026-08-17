import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cheap IPTV UK 2026 - Cheapest IPTV Subscription From £3.33/mo",
    template: "%s | Cheap IPTV",
  },
  description:
    "Cheap IPTV UK done right — the cheapest IPTV subscription in Britain from £3.33/mo. 37,000 channels, 4K UHD, built-in VPN, five screens and a 30-day money-back guarantee. Instant activation.",
  keywords: [
    "cheap iptv",
    "cheap iptv subscription",
    "cheap iptv uk",
    "cheapest iptv",
    "iptv subscription",
    "iptv uk",
    "best iptv uk",
    "iptv providers",
    "iptv service",
    "buy iptv",
    "british iptv",
    "premium iptv",
  ],
  authors: [{ name: "Cheap IPTV" }],
  creator: "Cheap IPTV",
  applicationName: "Cheap IPTV",
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/",
    },
  },
  manifest: "/favicon_io/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico", sizes: "any" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon_io/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Cheap IPTV",
    url: SITE_URL,
    title: "Cheap IPTV UK 2026 — Cheapest IPTV Subscription From £3.33/mo",
    description:
      "The cheap IPTV subscription thousands of UK homes trust — and the cheapest published rate in Britain, from £3.33/mo. 37,000 channels, 4K UHD, instant activation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheap IPTV UK 2026 — Cheapest IPTV Subscription From £3.33/mo",
    description:
      "Cheap IPTV that never feels cheap. Cheapest IPTV subscription in the UK from £3.33/mo — 37,000 channels, 4K UHD, built-in VPN, 30-day guarantee.",
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

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="antialiased">
      <body className="min-h-screen bg-background text-foreground font-(--font-sans)">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-foreground focus:shadow-lg focus:outline-2 focus:outline-violet-600"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
