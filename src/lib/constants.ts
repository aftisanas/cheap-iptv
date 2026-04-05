export const WHATSAPP_NUMBER = "";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const SITE_NAME = "Premium IPTV";
export const SITE_URL = "https://iptv-premium-uk.tv";
export const CONTACT_EMAIL = "support@premium-iptv.uk";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const LEGAL_LINKS = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "DMCA Policy", href: "/dmca" },
  { label: "Refund Policy", href: "/refund" },
] as const;

export const STATS = [
  { value: "28,000+", label: "Live Channels" },
  { value: "99,000+", label: "Films & Series On Demand" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "UK Support" },
] as const;

export const FEATURES = [
  {
    title: "28,000+ Live TV Channels",
    description:
      "Full access to UK entertainment, sports, news, documentaries, children's programming, and international channels. Every major British network included.",
    icon: "Tv" as const,
  },
  {
    title: "Full HD & 4K Quality",
    description:
      "Every channel that broadcasts in HD is delivered in the highest quality available. Adaptive streaming adjusts to your connection to prevent buffering.",
    icon: "Monitor" as const,
  },
  {
    title: "7-Day Catch-Up TV",
    description:
      "Missed last night's match or forgot to watch a programme? Go back up to 7 days and watch content you missed, so you never fall behind.",
    icon: "Clock" as const,
  },
  {
    title: "99,000+ Films & Series",
    description:
      "Our VOD library is updated daily with the latest cinema releases, box sets, and classic films. Search by genre, year, or title — no additional fees.",
    icon: "Film" as const,
  },
  {
    title: "Multi-Device Access",
    description:
      "Watch on Firestick, Android, iPhone, iPad, Smart TV, Windows, Mac, or MAG box. Your subscription works across multiple devices simultaneously.",
    icon: "Smartphone" as const,
  },
  {
    title: "Electronic Programme Guide",
    description:
      "A full, up-to-date EPG is included. Browse what's on now, check tonight's schedule, or plan your viewing for the week — exactly like a traditional set-top box.",
    icon: "LayoutGrid" as const,
  },
  {
    title: "Buffer-Free Streaming",
    description:
      "Enjoy uninterrupted viewing powered by UK-optimised servers and advanced anti-freeze technology. Stable, reliable streaming every time.",
    icon: "Zap" as const,
  },
  {
    title: "VPN Friendly & Secure",
    description:
      "Our service works perfectly with or without a VPN. Encrypted connections protect your viewing privacy at all times.",
    icon: "Shield" as const,
  },
] as const;

export const PRICING_PLANS = [
  {
    id: "bronze",
    tier: "Bronze",
    name: "1 Month",
    subtitle: "Perfect for trying out our service",
    price: 9.99,
    originalPrice: 14.99,
    perMonth: 9.99,
    period: "month",
    devices: 1,
    badge: null,
    discount: "-33%",
    accentColor: "amber",
    features: [
      "28,000+ Live TV Channels",
      "Full HD & 4K Quality",
      "7-Day Catch-Up TV",
      "Full VOD Library",
      "EPG Included",
      "IPTV Smarters Compatible",
      "Free Updates",
      "AntiFreeze 10.0",
      "TV Replay",
      "24/7 Support",
    ],
    popular: false,
    savings: null,
  },
  {
    id: "silver",
    tier: "Silver",
    name: "3 Months",
    subtitle: "Great value for regular viewers",
    price: 22.99,
    originalPrice: 44.97,
    perMonth: 7.66,
    period: "3 months",
    devices: 1,
    badge: null,
    discount: "-49%",
    accentColor: "slate",
    features: [
      "28,000+ Live TV Channels",
      "Full HD & 4K Quality",
      "7-Day Catch-Up TV",
      "Full VOD Library",
      "EPG Included",
      "Full Compatibility",
      "Free Updates",
      "Netflix, Disney, Apple & More",
      "AntiFreeze 10.0",
      "TV Replay",
      "24/7 Support",
    ],
    popular: false,
    savings: "Save 49%",
  },
  {
    id: "gold",
    tier: "Gold",
    name: "12 Months",
    subtitle: "Our most popular plan",
    price: 44.99,
    originalPrice: 179.88,
    perMonth: 3.75,
    period: "year",
    devices: 2,
    badge: "MOST POPULAR",
    discount: "-75%",
    accentColor: "blue",
    features: [
      "28,000+ Live TV Channels",
      "Full HD & 4K / 8K Quality",
      "7-Day Catch-Up & Recording",
      "160,000+ Films & Series",
      "Full Compatibility",
      "Free Updates",
      "Netflix, Disney, Apple & More",
      "AntiFreeze 10.0",
      "TV Replay",
      "24/7 Support",
    ],
    popular: true,
    savings: "Save 75%",
  },
  {
    id: "diamond",
    tier: "Diamond",
    name: "24 Months",
    subtitle: "Maximum savings — best long-term value",
    price: 74.99,
    originalPrice: 359.76,
    perMonth: 3.12,
    period: "2 years",
    devices: 3,
    badge: "BEST VALUE",
    discount: "-79%",
    accentColor: "violet",
    features: [
      "28,000+ Live TV Channels",
      "Full HD & 4K / 8K Quality",
      "7-Day Catch-Up & Recording",
      "160,000+ Films & Series",
      "Full Compatibility",
      "Free Updates",
      "Netflix, Disney, Apple & More",
      "AntiFreeze 10.0",
      "TV Replay",
      "VIP 24/7 Support",
    ],
    popular: false,
    savings: "Save 79%",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "James W.",
    location: "London",
    text: "Switched from a traditional Sky package and the savings are incredible. The channel selection is comprehensive — every Premier League match, full Sky Sports coverage, all the BBC and ITV channels. Picture quality is genuinely comparable to satellite.",
    rating: 5,
    avatar: "JW",
    since: "January 2026",
  },
  {
    name: "Sarah T.",
    location: "Manchester",
    text: "The customer support is what sets Premium IPTV apart. When I had trouble setting up on my Fire Stick, they walked me through the entire process in minutes via WhatsApp. Now the whole family enjoys it — kids' channels, sport, dramas, the lot.",
    rating: 5,
    avatar: "ST",
    since: "March 2025",
  },
  {
    name: "David C.",
    location: "Birmingham",
    text: "Brilliant value for money. I was sceptical at first, but the 30-day guarantee made it risk-free. The HD quality is impressive, the EPG works perfectly, and the catch-up feature means I never miss a programme. Highly recommend.",
    rating: 5,
    avatar: "DC",
    since: "November 2025",
  },
  {
    name: "Emma R.",
    location: "Glasgow",
    text: "I've been a subscriber for over a year now and the service has only got better. More channels, more VOD content, and zero buffering issues. The annual plan is unbeatable value. Best entertainment decision our household has made.",
    rating: 5,
    avatar: "ER",
    since: "February 2025",
  },
  {
    name: "Michael C.",
    location: "Leeds",
    text: "Setup took about 5 minutes and I was watching within the hour. The channel lineup covers everything — Sky Sports, TNT Sports, BBC, ITV, international content. Saving over £80 a month compared to what I was paying before.",
    rating: 5,
    avatar: "MC",
    since: "December 2025",
  },
  {
    name: "Laura M.",
    location: "Bristol",
    text: "As a family, we love having kids' channels alongside our own programmes. The VOD library is massive — we've always got something to watch. Three simultaneous streams on the annual plan means no more arguments over the remote!",
    rating: 4,
    avatar: "LM",
    since: "April 2025",
  },
] as const;

export const DEVICES = [
  { name: "Amazon Fire Stick", icon: "Flame" as const },
  { name: "Smart TV", icon: "Tv" as const },
  { name: "Android / iOS", icon: "Smartphone" as const },
  { name: "Windows / Mac", icon: "Monitor" as const },
  { name: "IPTV Box / MAG", icon: "Box" as const },
  { name: "Apple TV", icon: "Airplay" as const },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What is IPTV and how does it differ from traditional TV?",
    answer:
      "IPTV (Internet Protocol Television) delivers television content over your internet connection rather than through a traditional aerial, satellite dish, or cable. You can watch live TV, on-demand films, and catch-up content on any internet-connected device — from Smart TVs and streaming sticks to phones and laptops. The experience is very similar to services like Sky Go or BBC iPlayer, but with a much wider channel selection at a lower price.",
  },
  {
    question: "Which devices can I use?",
    answer:
      "Our service works on Amazon Firestick, Android TV boxes, Android phones and tablets, iPhones and iPads, Samsung/LG/Sony Smart TVs, Windows and Mac computers, MAG devices, and Enigma2 receivers. You can use any IPTV-compatible app including IPTV Smarters Pro, TiviMate, or Smart IPTV.",
  },
  {
    question: "How quickly will I receive access after payment?",
    answer:
      "Access is activated within minutes. You will receive your login credentials by email and WhatsApp immediately after your payment is confirmed. Our team is available 24/7 to ensure fast activation.",
  },
  {
    question: "What happens if I am not satisfied?",
    answer:
      "You are covered by our 30-day money-back guarantee. If the service does not meet your expectations for any reason, contact our support team and we will process a full refund — no questions asked.",
  },
  {
    question: "Can I watch on more than one device at the same time?",
    answer:
      "Yes. The number of simultaneous connections depends on your plan: Monthly supports 1 device, 3-Month supports 2 devices, and the Annual plan supports up to 3 devices simultaneously.",
  },
  {
    question: "Is the connection stable? Will I experience buffering?",
    answer:
      "Our service boasts 99.9% uptime with anti-freeze technology. We use premium, UK-optimised servers to ensure smooth, buffer-free streaming. A stable broadband connection of at least 10 Mbps is recommended for the best HD/4K experience.",
  },
  {
    question: "What channels are included?",
    answer:
      "We carry every major British broadcaster — BBC, ITV, Channel 4, Channel 5, Sky, TNT Sports, and more — plus comprehensive sports coverage (Sky Sports, Premier League, Champions League, F1, cricket), cinema channels (Sky Cinema), kids' channels (CBeebies, CBBC, Cartoon Network), and thousands of international channels.",
  },
  {
    question: "Do I need a VPN to use Premium IPTV?",
    answer:
      "No, a VPN is not required. However, Premium IPTV is fully VPN-friendly. If you choose to use one for added privacy, it will work seamlessly with our service.",
  },
] as const;

export const CHANNEL_CATEGORIES = [
  { name: "British Entertainment", count: "500+", icon: "Tv" as const, channels: "BBC One, BBC Two, ITV, Channel 4, Channel 5, Sky Atlantic, Dave, UKTV Gold" },
  { name: "UK Sports", count: "5,500+", icon: "Trophy" as const, channels: "Sky Sports, TNT Sports, BT Sport, Premier League, Champions League, F1" },
  { name: "Movies & Cinema", count: "3,000+", icon: "Film" as const, channels: "Sky Cinema Premiere, Sky Cinema Action, Film4, full on-demand library" },
  { name: "Kids & Family", count: "800+", icon: "Baby" as const, channels: "CBeebies, CBBC, Cartoon Network, Nickelodeon, Disney Channel, Baby TV" },
  { name: "News & Documentary", count: "1,200+", icon: "Newspaper" as const, channels: "BBC News, Sky News, CNN, National Geographic, Discovery, History" },
  { name: "International", count: "17,000+", icon: "Globe" as const, channels: "Channels from 100+ countries in multiple languages" },
] as const;

export const BLOG_POSTS = [
  {
    slug: "best-iptv-uk-guide-2026",
    title: "Best IPTV UK 2026 — How to Choose the Right Provider",
    excerpt:
      "Finding the best IPTV service in the UK means looking beyond flashy promises. We break down the 7 criteria that matter most for British viewers — from channel quality and reliability to support and genuine value.",
    date: "2026-04-01",
    readTime: "12 min read",
    category: "Guide",
  },
  {
    slug: "how-to-setup-iptv-firestick",
    title: "How to Set Up IPTV on Amazon Fire Stick — Step by Step",
    excerpt:
      "A complete, beginner-friendly guide to installing and configuring IPTV on your Amazon Fire Stick. Get streaming in under 10 minutes with our easy instructions.",
    date: "2026-03-20",
    readTime: "6 min read",
    category: "Tutorial",
  },
  {
    slug: "iptv-vs-sky-comparison",
    title: "IPTV vs Sky — Which Is Better for UK Viewers in 2026?",
    excerpt:
      "An honest comparison of IPTV and Sky TV for UK households. We break down costs, channel availability, picture quality, flexibility, and value to help you make the switch.",
    date: "2026-03-15",
    readTime: "8 min read",
    category: "Comparison",
  },
  {
    slug: "premier-league-streaming-guide",
    title: "Watch Every Premier League Match Live — IPTV Streaming Guide",
    excerpt:
      "Never miss a Premier League match again. Learn how IPTV gives you access to every live game — plus Championship, La Liga, Serie A and more — all in stunning HD and 4K quality.",
    date: "2026-03-10",
    readTime: "5 min read",
    category: "Sports",
  },
] as const;
