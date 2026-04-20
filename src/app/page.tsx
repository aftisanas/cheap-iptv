import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import DevicesSection from "@/components/DevicesSection";
import ChannelsSection from "@/components/ChannelsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <PricingSection />
      <DevicesSection />
      <ChannelsSection />
      <TestimonialsSection />
      <FAQSection />
      <TrustSection />
      <CTASection />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://buy-iptv-uk.com/#organization",
                name: "Buy IPTV UK | IPTV Subscription With 37,000 Channels in 4K From £4.99",
                url: "https://buy-iptv-uk.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://buy-iptv-uk.com/buy-iptv-uk.webp",
                  width: 512,
                  height: 512,
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  availableLanguage: "English",
                  areaServed: "GB",
                },
              },
              {
                "@type": "WebSite",
                "@id": "https://buy-iptv-uk.com/#website",
                name: "Buy IPTV UK | IPTV Subscription With 37,000 Channels in 4K From £4.99",
                url: "https://buy-iptv-uk.com",
                inLanguage: "en-GB",
                publisher: {
                  "@id": "https://buy-iptv-uk.com/#organization",
                },
                potentialAction: {
                  "@type": "SearchAction",
                  target:
                    "https://buy-iptv-uk.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@type": "WebPage",
                "@id": "https://buy-iptv-uk.com/#webpage",
                url: "https://buy-iptv-uk.com",
                name: "Buy IPTV UK | IPTV Subscription With 37,000 Channels in 4K From £4.99",
                inLanguage: "en-GB",
                isPartOf: {
                  "@id": "https://buy-iptv-uk.com/#website",
                },
                about: {
                  "@id": "https://buy-iptv-uk.com/#organization",
                },
                description:
                  "Buy IPTV in the UK and get 37,000 channels, 4K UHD, built-in VPN and instant setup. From £4.99 with a 30-day money-back guarantee.",
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
            name: "Buy IPTV UK Subscription",
            description:
              "Buy IPTV UK subscription with 37,000+ live channels and 198,000+ VOD titles in HD & 4K quality.",
            brand: { "@type": "Brand", name: "Buy IPTV UK" },
            image: "https://buy-iptv-uk.com/buy-iptv-uk.webp",
            url: "https://buy-iptv-uk.com/#pricing",
            offers: [
              {
                "@type": "Offer",
                name: "Bronze — 3 Months",
                sku: "bronze-3m",
                url: "https://buy-iptv-uk.com/#pricing",
                price: "29.99",
                priceCurrency: "GBP",
                availability: "https://schema.org/InStock",
                priceValidUntil: "2026-12-31",
              },
              {
                "@type": "Offer",
                name: "Silver — 6 Months",
                sku: "silver-6m",
                url: "https://buy-iptv-uk.com/#pricing",
                price: "39.99",
                priceCurrency: "GBP",
                availability: "https://schema.org/InStock",
                priceValidUntil: "2026-12-31",
              },
              {
                "@type": "Offer",
                name: "Gold — 12 Months",
                sku: "gold-12m",
                url: "https://buy-iptv-uk.com/#pricing",
                price: "59.99",
                priceCurrency: "GBP",
                availability: "https://schema.org/InStock",
                priceValidUntil: "2026-12-31",
              },
              {
                "@type": "Offer",
                name: "Diamond — 24 Months",
                sku: "diamond-24m",
                url: "https://buy-iptv-uk.com/#pricing",
                price: "89.99",
                priceCurrency: "GBP",
                availability: "https://schema.org/InStock",
                priceValidUntil: "2026-12-31",
              },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "2847",
              bestRating: "5",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I buy IPTV in the UK?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Choose a plan on this page, pay by card or PayPal and check your email. Your login and setup guide land in under 60 seconds. You do not need any technical knowledge to get started.",
                },
              },
              {
                "@type": "Question",
                name: "Is it safe to buy IPTV online?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, when you buy from a provider with a secure checkout and a money-back guarantee. We use Stripe and PayPal for all payments, and no card data touches our servers.",
                },
              },
              {
                "@type": "Question",
                name: "What is the best IPTV UK package to buy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The 12-month plan is our best-seller because it cuts the monthly rate by 40 percent while covering every channel, screen and VOD title. The 24-month plan saves 55 percent for viewers who are committed.",
                },
              },
              {
                "@type": "Question",
                name: "Can I buy IPTV for a Firestick?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Install IPTV Smarters Pro from the Amazon store, open the app, and enter the M3U credentials from your welcome email. The full 37,000-channel guide loads in under two minutes.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
