import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import DevicesSection from "@/components/DevicesSection";
import ChannelsSection from "@/components/ChannelsSection";
// import TestimonialsSection from "@/components/TestimonialsSection"; // Superseded by TrustPanels — see src/lib/trust-panels.ts
import TrustPanels from "@/components/TrustPanels";
import FAQSection from "@/components/FAQSection";
import TrustSection from "@/components/TrustSection";
import InternalLinksSection from "@/components/InternalLinksSection";
import CTASection from "@/components/CTASection";
import StickyBuyBar from "@/components/StickyBuyBar";
import {
  CONTACT_EMAIL,
  FAQ_ITEMS,
  LOGO_URL,
  PRICING_PLANS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

export default function HomePage() {
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const webpageId = `${SITE_URL}/#webpage`;
  const productId = `${SITE_URL}/#product`;
  const serviceId = `${SITE_URL}/#service`;
  const logoUrl = LOGO_URL;
  // Pinned business offer validity date
  const priceValidUntil = "2026-12-31";

  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <PricingSection />
      <DevicesSection />
      <ChannelsSection />
      <TrustPanels />
      <FAQSection />
      <TrustSection />
      <InternalLinksSection />
      <CTASection />
      <StickyBuyBar />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": organizationId,
                name: SITE_NAME,
                url: SITE_URL,
                logo: {
                  "@type": "ImageObject",
                  url: logoUrl,
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  availableLanguage: "English",
                  areaServed: "GB",
                  email: CONTACT_EMAIL,
                },
              },
              {
                "@type": "WebSite",
                "@id": websiteId,
                name: SITE_NAME,
                url: SITE_URL,
                inLanguage: "en-GB",
                publisher: {
                  "@id": organizationId,
                },
              },
              {
                "@type": "WebPage",
                "@id": webpageId,
                url: SITE_URL,
                name: "Cheap IPTV UK 2026 - Cheapest IPTV Subscription From £3.33/mo",
                inLanguage: "en-GB",
                isPartOf: {
                  "@id": websiteId,
                },
                about: {
                  "@id": organizationId,
                },
                description:
                  "Cheap IPTV UK done right — the cheapest IPTV subscription in Britain from £3.33/mo. 37,000 channels, 4K UHD, built-in VPN, five screens and a 30-day money-back guarantee.",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "@id": productId,
            name: `${SITE_NAME} Subscription`,
            url: SITE_URL,
            image: [logoUrl],
            description:
              "Cheap IPTV subscription with 37,000+ live channels, 198,000+ on-demand titles, 4K UHD, five screens and built-in VPN — from £3.33.",
            brand: { "@type": "Brand", name: SITE_NAME },
            offers: PRICING_PLANS.map((plan) => ({
              "@type": "Offer",
              name: `${plan.name} Plan`,
              price: plan.price.toFixed(2),
              priceCurrency: "GBP",
              priceValidUntil,
              availability: "https://schema.org/InStock",
              itemCondition: "https://schema.org/NewCondition",
              url: `${SITE_URL}/#pricing`,
              hasMerchantReturnPolicy: {
                "@type": "MerchantReturnPolicy",
                applicableCountry: "GB",
                returnPolicyCategory:
                  "https://schema.org/MerchantReturnFiniteReturnWindow",
                merchantReturnDays: 30,
                returnMethod: "https://schema.org/ReturnByMail",
                returnFees: "https://schema.org/FreeReturn",
              },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": serviceId,
            name: `${SITE_NAME} Subscription Service`,
            serviceType: "IPTV subscription",
            areaServed: "GB",
            provider: {
              "@id": organizationId,
            },
            description:
              "Cheap IPTV UK subscription service offering 37,000+ live channels, 198,000+ films and series on demand, 4K UHD streaming, 5 screens, and built-in VPN protection.",
            url: SITE_URL,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
