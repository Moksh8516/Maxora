// app/components/section/service/RelatedServices.tsx
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceIcon } from "./ServiceIcons";
import { getRelatedServices, type ServiceContent } from "@/content/services";

interface RelatedServicesProps {
  service: ServiceContent;
}

export default function RelatedServices({ service }: RelatedServicesProps) {
  const relatedList = getRelatedServices(service.slug);

  if (relatedList.length === 0) return null;

  return (
    <section
      aria-labelledby="related-services-heading"
      className="py-16 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#056BFF] dark:text-[#00D5F2] mb-2 block font-mono">
              Complementary Solutions
            </span>
            <h2
              id="related-services-heading"
              className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 dark:text-white tracking-tight mb-4"
            >
              Related Digital Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-[#AFC5E1] max-w-2xl mx-auto">
              Explore related services that pair naturally with {service.title} to accelerate your growth.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedList.map((rel) => (
              <Link
                key={rel.slug}
                href={`/Services/${rel.slug}`}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#081226] border border-gray-200/80 dark:border-white/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/40 dark:hover:border-cyan-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#056BFF]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-blue-50 dark:bg-white/5 text-[#056BFF] dark:text-[#00D5F2]">
                      <ServiceIcon name={rel.iconName} className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-400 dark:text-white/30">
                      {rel.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-gray-900 dark:text-white group-hover:text-[#056BFF] dark:group-hover:text-[#00D5F2] transition-colors mb-2">
                    {rel.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-[#AFC5E1] leading-relaxed mb-6">
                    {rel.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-[#056BFF] dark:text-[#00D5F2] pt-3 border-t border-gray-100 dark:border-white/5">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
