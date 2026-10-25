// app/components/section/service/AudienceList.tsx
import React from "react";
import { Building2 } from "lucide-react";
import type { ServiceContent } from "@/content/services";

interface AudienceListProps {
  service: ServiceContent;
}

export default function AudienceList({ service }: AudienceListProps) {
  return (
    <section
      aria-labelledby="audiences-heading"
      className="py-16 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#056BFF] dark:text-[#00D5F2] mb-2 block font-mono">
              Best Fit
            </span>
            <h2
              id="audiences-heading"
              className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 dark:text-white tracking-tight mb-4"
            >
              Who Benefits Most
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-[#AFC5E1] max-w-2xl mx-auto">
              Our engineering model delivers the strongest return for these types of organizations.
            </p>
          </div>

          {/* Audience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.audiences.map((audience, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-[#081226] border border-gray-200/80 dark:border-white/10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-white/5 text-[#056BFF] dark:text-[#00D5F2] flex items-center justify-center mb-4">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-gray-900 dark:text-white mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-[#AFC5E1] leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
