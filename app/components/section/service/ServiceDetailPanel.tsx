// app/components/section/service/ServiceDetailPanel.tsx
import React from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { ServiceIcon } from "./ServiceIcons";
import type { ServiceContent } from "@/content/services";

interface ServiceDetailPanelProps {
  service: ServiceContent;
  variant?: "full" | "compact";
}

export default function ServiceDetailPanel({
  service,
  variant = "full",
}: ServiceDetailPanelProps) {
  return (
    <section
      aria-labelledby="service-overview-heading"
      className="py-12 lg:py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-white dark:bg-[#081226]/90 border border-gray-200/90 dark:border-white/10 p-8 sm:p-10 lg:p-12 shadow-xl shadow-blue-500/5 overflow-hidden">
            {/* Top Accent Gradient Bar */}
            <div
              className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.accent}`}
            />

            {/* Header: Icon & Tag */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div
                  className={`p-3.5 rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-md`}
                >
                  <ServiceIcon name={service.iconName} className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 dark:text-[#AFC5E1]">
                    Key Deliverables
                  </span>
                  <h2
                    id="service-overview-heading"
                    className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 dark:text-white"
                  >
                    What This Service Provides
                  </h2>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-200/80 dark:border-white/10 text-xs font-semibold text-[#056BFF] dark:text-[#00D5F2]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{service.tag}</span>
              </div>
            </div>

            {/* Benefit Box - Plain Language, No Technology Names */}
            <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/70 dark:bg-white/5 border border-blue-200/70 dark:border-white/10 mb-8">
              <p className="text-base sm:text-lg font-medium text-gray-900 dark:text-white leading-relaxed">
                {service.headlineBenefit}
              </p>
            </div>

            {/* Checklist - 4 plain language items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.checklist.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gray-50/70 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/5"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#056BFF] dark:text-[#00D5F2] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200 font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
