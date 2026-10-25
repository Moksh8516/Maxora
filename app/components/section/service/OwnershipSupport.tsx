// app/components/section/service/OwnershipSupport.tsx
import React from "react";
import { ShieldCheck, KeyRound, Headphones, FileCode } from "lucide-react";
import type { ServiceContent } from "@/content/services";

interface OwnershipSupportProps {
  service: ServiceContent;
}

export default function OwnershipSupport({ service }: OwnershipSupportProps) {
  const guarantees = [
    {
      icon: KeyRound,
      title: "100% Code & IP Ownership",
      desc: "All source code, designs, and credentials belong entirely to your company upon final delivery.",
    },
    {
      icon: ShieldCheck,
      title: "Zero Vendor Lock-In",
      desc: "No proprietary closed frameworks or recurring per-seat software license fees.",
    },
    {
      icon: Headphones,
      title: "30-Day Launch Warranty",
      desc: "Comprehensive post-launch monitoring and immediate resolution of any unexpected bugs.",
    },
    {
      icon: FileCode,
      title: "Full Documentation & Training",
      desc: "Recorded walkthroughs and technical documentation so your internal team can operate smoothly.",
    },
  ];

  return (
    <section
      aria-labelledby="ownership-heading"
      className="py-16 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#056BFF] dark:text-[#00D5F2] mb-2 block font-mono">
              Client Protection
            </span>
            <h2
              id="ownership-heading"
              className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 dark:text-white tracking-tight mb-4"
            >
              Ownership & Ongoing Support
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-[#AFC5E1] max-w-2xl mx-auto leading-relaxed">
              {service.ownership}
            </p>
          </div>

          {/* Guarantee Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {guarantees.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white dark:bg-[#081226] border border-gray-200/80 dark:border-white/10 shadow-sm flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-white/5 text-[#056BFF] dark:text-[#00D5F2] shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-heading text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-[#AFC5E1] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
