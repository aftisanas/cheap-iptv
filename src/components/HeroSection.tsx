"use client";

import { motion } from "framer-motion";
import { Play, MessageCircle, ChevronRight } from "lucide-react";
import { WHATSAPP_BASE_URL } from "@/lib/constants";
import ParticleBackground from "./ParticleBackground";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[640px] flex flex-col overflow-hidden"
    >
      {/* ── Deep premium gradient background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0118] via-[#1a0a3e] to-[#0c1445]" />

      {/* ── Vivid aurora blobs ── */}
      <div
        className="aurora-blob w-[700px] h-[700px] bg-purple-600/25 -top-32 -left-32"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="aurora-blob w-[500px] h-[500px] bg-blue-500/20 top-1/4 right-[-8%]"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="aurora-blob w-[600px] h-[600px] bg-violet-500/15 bottom-[-15%] left-1/3"
        style={{ animationDelay: "8s" }}
      />
      <div
        className="aurora-blob w-[400px] h-[400px] bg-cyan-500/20 top-[60%] left-[-5%]"
        style={{ animationDelay: "12s" }}
      />
      <div
        className="aurora-blob w-[350px] h-[350px] bg-fuchsia-500/15 top-[10%] left-[55%]"
        style={{ animationDelay: "6s" }}
      />

      {/* ── Layered radial overlays for depth ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.1),transparent_40%)]" />

      {/* ── Subtle mesh grid ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Decorative floating orbs ── */}
      <div className="absolute top-[15%] left-[10%] w-2 h-2 rounded-full bg-purple-400/60 animate-float" />
      <div className="absolute top-[35%] right-[15%] w-1.5 h-1.5 rounded-full bg-cyan-400/50 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-[25%] left-[20%] w-1 h-1 rounded-full bg-blue-400/60 animate-float" style={{ animationDelay: "4s" }} />
      <div className="absolute top-[50%] right-[8%] w-2.5 h-2.5 rounded-full bg-violet-400/40 animate-float" style={{ animationDelay: "1s" }} />

      {/* ── Particles ── */}
      <ParticleBackground />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-2 flex flex-col items-center text-center">
        {/* Headline — 2 lines, matches reference sizing */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.1] mb-2"
        >
          <span className="text-white">Buy IPTV UK — IPTV Subscription</span>
          <br />
          <span className="text-white">To </span>
          <span className="gradient-text-hero">37,000 Channels In 4K</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="text-base sm:text-lg text-gray-300/90 max-w-3xl mb-3 whitespace-nowrap"
        >
           IPTV Subscription and Login in 60 Seconds — No waiting. No contracts. No dish.
        </motion.p>

        {/* Hero device image — natural size, CTAs flow right under it */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative leading-none -mt-20 -mb-24"
        >
          {/* Wide halo glow radiating from behind the TV */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] w-[110%] h-[95%] blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(168,85,247,0.75) 0%, rgba(124,58,237,0.45) 25%, rgba(59,130,246,0.25) 45%, rgba(6,182,212,0.1) 65%, transparent 80%)",
            }}
          />
          {/* Inner hot-core glow right behind the screen */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[55%] h-[45%] blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(192,132,252,0.7) 0%, rgba(139,92,246,0.35) 45%, transparent 75%)",
            }}
          />
          {/* Bright floor reflection under the devices */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 bottom-[14%] -translate-x-1/2 w-[75%] h-[18%] blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(168,85,247,0.75) 0%, rgba(124,58,237,0.4) 40%, rgba(59,130,246,0.2) 65%, transparent 85%)",
            }}
          />
          {/* Tight floor line right under the devices */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 bottom-[19%] -translate-x-1/2 w-[45%] h-[4%] blur-xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(216,180,254,0.85) 0%, rgba(139,92,246,0.3) 60%, transparent 90%)",
            }}
          />
          <Image
            src="/buy iptv.webp"
            alt="IPTV streaming on TV, tablet, phone and laptop"
            width={1264}
            height={842}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 85vw, 1100px"
            className="relative block mx-auto w-auto max-w-full h-auto max-h-[75vh] object-contain select-none pointer-events-none drop-shadow-[0_30px_60px_rgba(88,28,135,0.55)]"
          />
        </motion.div>

        {/* CTA Buttons — directly under image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href="/pricing"
            className="group relative flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/40 transition-all hover:shadow-2xl hover:shadow-purple-500/40 active:scale-[0.98] w-full sm:w-auto justify-center"
          >
            <Play className="h-5 w-5 fill-current" />
            <span>Buy IPTV Now — From £12.99</span>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
          <a
            href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("Hello Premium IPTV, I'd like to subscribe!")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition-all hover:border-purple-400/30 hover:bg-white/10 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="h-5 w-5 text-cyan-400" />
            <span>See All Plans</span>
          </a>
        </motion.div>
      </div>


      {/* Bottom gradient fade to site background */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#fafbff] to-transparent pointer-events-none" />
    </section>
  );
}

