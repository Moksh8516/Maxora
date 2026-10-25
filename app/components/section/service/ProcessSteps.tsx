// app/components/section/service/ProcessSteps.tsx
import React from "react";
import type { ServiceContent } from "@/content/services";

interface ProcessStepsProps {
  service: ServiceContent;
}

export default function ProcessSteps({ service }: ProcessStepsProps) {
  return (
    <section
      aria-labelledby="process-heading"
      className="py-16 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#056BFF] dark:text-[#00D5F2] mb-2 block font-mono">
              Predictable Delivery
            </span>
            <h2
              id="process-heading"
              className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 dark:text-white tracking-tight mb-4"
            >
              How We Build and Launch
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-[#AFC5E1] max-w-2xl mx-auto">
              A structured four-stage engineering process with weekly demos so you stay in full control.
            </p>
          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.process.map((item, index) => (
              <div
                key={item.step}
                className="relative p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#081226] border border-gray-200/80 dark:border-white/10 shadow-sm transition-all duration-200 hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-[#056BFF]/10 text-[#056BFF] dark:bg-[#00D5F2]/10 dark:text-[#00D5F2]">
                    Step {item.step}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-white/30 font-mono">
                    Phase 0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-heading text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 dark:text-[#AFC5E1] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
