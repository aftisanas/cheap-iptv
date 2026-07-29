import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "IPTV UK Blog — Cheap IPTV Guides, Tips & Streaming News",
  description:
    "Expert guides on IPTV UK setup, streaming tips, device compatibility, and the latest in British IPTV. Learn how to choose the best IPTV providers and get the best cheap IPTV subscription experience.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogContent />;
}
