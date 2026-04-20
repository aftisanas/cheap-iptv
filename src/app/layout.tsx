import type { Metadata, Viewport } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/constants";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Buy IPTV UK | IPTV Subscription With 37,000 Channels in 4K From £4.99",
    template: "%s | Buy IPTV UK",
  },
  description:
    "Buy IPTV in the UK and get 37,000 channels, 4K UHD, built-in VPN and instant setup. From £4.99 with a 30-day money-back guarantee. Activate in 60 seconds.",
  keywords: [
    "buy IPTV UK",
    "buy IPTV",
    "IPTV UK",
    "IPTV subscription",
    "best IPTV UK",
    "cheap IPTV UK",
    "IPTV providers",
    "UK IPTV providers",
    "IPTV 4K UK",
    "IPTV Firestick UK",
  ],
  authors: [{ name: "Buy IPTV UK" }],
  creator: "Buy IPTV UK",
  applicationName: "Buy IPTV UK",
  alternates: {
    canonical: "/",
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
    siteName: "Buy IPTV UK",
    url: SITE_URL,
    title: "Buy IPTV UK — 37,000 Channels, 4K UHD, From £4.99",
    description:
      "Ready to buy IPTV in the UK? Get 37,000 live channels, 198,000 on-demand titles, five screens and 24/7 UK support. Activate the moment you pay.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy IPTV UK — 37,000 Channels, 4K UHD, From £4.99",
    description:
      "Buy IPTV in the UK and get 37,000 channels, 4K UHD, built-in VPN and instant setup. From £4.99 with a 30-day money-back guarantee.",
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
    <html
      lang="en-GB"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased`}
    >
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
