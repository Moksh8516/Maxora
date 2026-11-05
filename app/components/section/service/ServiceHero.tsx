// app/components/section/service/ServiceHero.tsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { siteConfig } from "@/app/lib/site-config";
import { ServiceIcon } from "./ServiceIcons";
import type { ServiceContent } from "@/content/services";
import HeroParticleCanvas from "@/app/components/portfolio/HeroParticleCanvas";

interface ServiceHeroProps {
  service: ServiceContent;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <header className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#0a0712] text-white border-b border-purple-900/30">
      {/* Interactive Particle Canvas */}
      <HeroParticleCanvas theme="wine-purple" mode="dark" />

      {/* Background Wine Purple & Black Gray Halos */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-gradient-to-r from-purple-900/35 via-fuchsia-900/25 to-pink-900/15 rounded-full blur-[140px]" />
        <div className="absolute -bottom-10 right-1/4 w-[400px] h-[300px] bg-gradient-to-tl from-[#3B0764]/30 via-transparent to-transparent blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tag & Number Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-200 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm shadow-purple-950/50">
            <ServiceIcon name={service.iconName} className="w-4 h-4 text-fuchsia-400" />
            <span>Service {service.number} • {service.tag}</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight mb-6 leading-[1.15]">
            {service.title}
          </h1>

          {/* Subtitle / Core Benefit */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            {service.subtitle}
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto min-h-[44px] px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#7E22CE] via-[#9333EA] to-[#C026D3] hover:from-[#6B21A8] hover:to-[#A21CAF] text-white font-semibold flex items-center justify-center gap-2.5 shadow-lg shadow-purple-900/40 hover:shadow-purple-900/60 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
            >
              <span>Let&apos;s connect</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${siteConfig.contact.phoneTel}`}
              className="w-full sm:w-auto min-h-[44px] px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-purple-500/30 text-white font-semibold flex items-center justify-center gap-2.5 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
            >
              <Phone className="w-4 h-4 text-fuchsia-400" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
