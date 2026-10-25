// app/components/section/service/ServiceHero.tsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { siteConfig } from "@/app/lib/site-config";
import { ServiceIcon } from "./ServiceIcons";
import type { ServiceContent } from "@/content/services";

interface ServiceHeroProps {
  service: ServiceContent;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <header className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-indigo-500/10 rounded-full blur-[120px] dark:from-[#056BFF]/15 dark:to-[#00D5F2]/10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tag & Number Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-200/80 dark:border-white/10 text-[#056BFF] dark:text-[#00D5F2] text-xs font-bold uppercase tracking-wider mb-6">
            <ServiceIcon name={service.iconName} className="w-4 h-4" />
            <span>Service {service.number} • {service.tag}</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-gray-900 dark:text-white tracking-tight mb-6 leading-[1.15]">
            {service.title}
          </h1>

          {/* Subtitle / Core Benefit */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-[#AFC5E1] max-w-2xl mx-auto mb-10 leading-relaxed">
            {service.subtitle}
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto min-h-[44px] px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#056BFF] via-blue-600 to-[#00D5F2] text-white font-semibold flex items-center justify-center gap-2.5 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:brightness-105 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#056BFF] focus-visible:ring-offset-2"
            >
              <span>Let&apos;s connect</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${siteConfig.contact.phoneTel}`}
              className="w-full sm:w-auto min-h-[44px] px-7 py-3.5 rounded-xl bg-white dark:bg-white/5 border border-gray-200/90 dark:border-white/10 text-gray-800 dark:text-white font-semibold flex items-center justify-center gap-2.5 hover:bg-gray-50 dark:hover:bg-white/10 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#056BFF] focus-visible:ring-offset-2"
            >
              <Phone className="w-4 h-4 text-[#056BFF] dark:text-[#00D5F2]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
