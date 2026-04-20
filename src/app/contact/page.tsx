import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Premium IPTV UK — 24/7 IPTV Service Support",
  description:
    "Get in touch with Premium IPTV UK. 24/7 IPTV subscription support via WhatsApp, email, and live chat. The best IPTV providers offer real support — we're here to help with setup, troubleshooting, and all your IPTV needs.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
