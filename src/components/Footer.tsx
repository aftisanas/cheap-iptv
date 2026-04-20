"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { NAV_LINKS, LEGAL_LINKS, SITE_NAME, CONTACT_EMAIL, WHATSAPP_NUMBER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-violet-100/50 bg-gradient-to-b from-[#fafbff] to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src="/buy-iptv-uk.webp"
                  alt="Buy IPTV UK logo"
                  fill
                  sizes="48px"
                  loading="lazy"
                  className="object-contain drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                />
              </div>
              <span className="text-lg font-bold text-foreground">
                Buy<span className="gradient-text"> IPTV </span>UK
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Premium IPTV subscription built specifically for viewers in the
              United Kingdom. 37,000+ live channels, 198,000+ VOD titles.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted">
                <Mail className="h-4 w-4 text-violet-500/60" />
                <span>{CONTACT_EMAIL}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <Phone className="h-4 w-4 text-violet-500/60" />
                <span>{WHATSAPP_NUMBER}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <MapPin className="h-4 w-4 text-violet-500/60" />
                <span>London, United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-violet-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-violet-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Setup Guides", href: "/blog" },
                { label: "Help Centre", href: "/contact" },
                { label: "Device Compatibility", href: "/#features" },
                { label: "Channel List", href: "/#channels" },
                { label: "FAQ", href: "/#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-violet-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-violet-100/50 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted text-center sm:text-left">
              © {new Date().getFullYear()} buy-iptv-uk.com — Buy IPTV UK | Best IPTV UK 4K Packages | Trusted UK IPTV Provider
            </p>
            <p className="text-xs text-gray-500 text-center sm:text-right max-w-md">
              {SITE_NAME} is not affiliated with any television networks or content providers.
              All trademarks are property of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
