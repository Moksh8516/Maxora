// app/components/section/service/PricingNote.tsx
import React from "react";
import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";
import type { ServiceContent } from "@/content/services";

interface PricingNoteProps {
  service: ServiceContent;
}

export default function PricingNote({ service }: PricingNoteProps) {
  return (
    <section
      aria-labelledby="pricing-heading"
      className="py-16 lg:py-20 bg-gray-50/60 dark:bg-[#070D1B]/60 border-y border-gray-200/80 dark:border-white/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-white dark:bg-[#081226] border border-gray-200/90 dark:border-white/10 p-8 sm:p-10 shadow-lg">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-200/80 dark:border-white/10 text-xs font-semibold text-[#056BFF] dark:text-[#00D5F2] mb-4">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Transparent Milestone Pricing</span>
                </div>

                <h2
                  id="pricing-heading"
                  className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 dark:text-white mb-3"
                >
                  Estimated Investment and Timeline
                </h2>

                <p className="text-sm sm:text-base text-gray-600 dark:text-[#AFC5E1] leading-relaxed mb-6">
                  Every project receives a fixed-scope milestone proposal with clearly defined deliverables before work begins. No hidden hourly billing or surprise overages.
                </p>

                {/* Displaying startsFrom & duration with [CONFIRM] visible */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-white/5">
                    <span className="text-xs uppercase font-mono text-gray-500 dark:text-[#AFC5E1] block mb-1">
                      Starts From
                    </span>
                    <span className="text-lg sm:text-xl font-bold font-heading text-gray-900 dark:text-white">
                      {service.pricing.startsFrom}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-white/5">
                    <span className="text-xs uppercase font-mono text-gray-500 dark:text-[#AFC5E1] block mb-1">
                      Typical Duration
                    </span>
                    <span className="text-lg sm:text-xl font-bold font-heading text-gray-900 dark:text-white">
                      {service.pricing.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="w-full lg:w-auto shrink-0 flex flex-col items-center gap-3">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto min-h-[44px] px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#056BFF] via-blue-600 to-[#00D5F2] text-white font-semibold flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg hover:brightness-105 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#056BFF]"
                >
                  <span>Request a Custom Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs text-gray-500 dark:text-[#AFC5E1]">
                  Detailed proposal within 24 hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
