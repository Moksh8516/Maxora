// app/components/section/service/ExampleCard.tsx
import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import type { ServiceContent, ExampleLabel } from "@/content/services";

interface ExampleCardProps {
  service: ServiceContent;
}

function getBadgeStyle(label: ExampleLabel) {
  switch (label) {
    case "Live demo":
      return "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20";
    case "Case study":
      return "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20";
    case "Sample":
    default:
      return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-cyan-400 dark:border-cyan-500/20";
  }
}

export default function ExampleCard({ service }: ExampleCardProps) {
  return (
    <section
      aria-labelledby="examples-heading"
      className="py-16 lg:py-20 bg-gray-50/60 dark:bg-[#070D1B]/60 border-y border-gray-200/80 dark:border-white/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#056BFF] dark:text-[#00D5F2] mb-2 block font-mono">
              Working Systems
            </span>
            <h2
              id="examples-heading"
              className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 dark:text-white tracking-tight mb-4"
            >
              Real Implementations & Architectures
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-[#AFC5E1] max-w-2xl mx-auto">
              Explore sample architectures and live production systems built for similar workflows.
            </p>
          </div>

          {/* Examples Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.examples.map((example, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between p-7 rounded-3xl bg-white dark:bg-[#081226] border border-gray-200/80 dark:border-white/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/40 dark:hover:border-cyan-400/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold ${getBadgeStyle(
                        example.label
                      )}`}
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>{example.label}</span>
                    </span>

                    {example.url && (
                      <Link
                        href={example.url}
                        className="min-h-[44px] min-w-[44px] p-2 rounded-xl text-gray-400 hover:text-[#056BFF] dark:hover:text-[#00D5F2] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#056BFF]"
                        aria-label={`View ${example.title}`}
                      >
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    )}
                  </div>

                  <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-3">
                    {example.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-[#AFC5E1] leading-relaxed mb-6">
                    {example.description}
                  </p>
                </div>

                {example.url && (
                  <div>
                    <Link
                      href={example.url}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#056BFF] dark:text-[#00D5F2] hover:underline min-h-[44px] py-2"
                    >
                      <span>Explore Case Study & Portfolio</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
