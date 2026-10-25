// app/components/section/service/ClosingCTA.tsx
import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, MessageSquare, Calendar } from "lucide-react";
import { siteConfig } from "@/app/lib/site-config";
import type { ServiceContent } from "@/content/services";

interface ClosingCTAProps {
  service: ServiceContent;
}

export default function ClosingCTA({ service }: ClosingCTAProps) {
  return (
    <section
      aria-labelledby="closing-cta-heading"
      className="py-16 lg:py-24 relative overflow-hidden bg-gradient-to-b from-gray-50/50 to-transparent dark:from-transparent"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          {/* Card Container */}
          <div className="rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#081226] dark:to-[#050A15] border border-gray-200/90 dark:border-white/10 p-8 sm:p-12 lg:p-16 text-center shadow-xl shadow-blue-500/5">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#056BFF]/10 text-[#056BFF] dark:text-[#00D5F2] text-xs font-bold uppercase tracking-wider mb-6">
              <span>Ready to Get Started</span>
            </div>

            {/* Heading */}
            <h2
              id="closing-cta-heading"
              className="text-3xl sm:text-5xl font-bold font-heading text-gray-900 dark:text-white tracking-tight mb-6"
            >
              Have a project in mind for{" "}
              <span className="bg-gradient-to-r from-[#056BFF] via-blue-500 to-[#00D5F2] bg-clip-text text-transparent">
                {service.title}?
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-[#AFC5E1] max-w-2xl mx-auto mb-10 leading-relaxed">
              Tell us what you want to build and what challenges you are facing. We will review your requirements and provide clear recommendations.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/contact"
                className="w-full sm:w-auto min-h-[44px] px-8 py-4 rounded-xl bg-gradient-to-r from-[#056BFF] via-blue-600 to-[#00D5F2] text-white font-semibold flex items-center justify-center gap-2.5 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:brightness-105 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#056BFF]"
              >
                <span>Let&apos;s connect</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className="w-full sm:w-auto min-h-[44px] px-7 py-4 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white font-semibold flex items-center justify-center gap-2.5 hover:bg-gray-200 dark:hover:bg-white/15 border border-gray-300 dark:border-white/15 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#056BFF]"
              >
                <Phone className="w-5 h-5 text-[#056BFF] dark:text-[#00D5F2]" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Quick Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 pt-8 border-t border-gray-100 dark:border-white/5 text-xs sm:text-sm text-gray-600 dark:text-[#AFC5E1]">
              <div className="flex items-center justify-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#056BFF] dark:text-[#00D5F2]" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-[#056BFF] dark:text-[#00D5F2]" />
                <a href={`tel:${siteConfig.contact.phoneTel}`} className="hover:underline">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 text-[#056BFF] dark:text-[#00D5F2]" />
                <span>Response within 24 hours</span>
              </div>
            </div>

            {/* Built With Footer Line - Rule: Technology names shown only in a small footer line */}
            {service.builtWith && service.builtWith.length > 0 && (
              <div className="pt-6 border-t border-gray-100 dark:border-white/5 text-xs text-gray-500 dark:text-[#AFC5E1]/70">
                <span className="font-medium mr-2">Engineered with:</span>
                <span>{service.builtWith.join(" • ")}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
