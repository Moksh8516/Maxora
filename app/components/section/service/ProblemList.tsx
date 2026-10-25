// app/components/section/service/ProblemList.tsx
import React from "react";
import { AlertCircle } from "lucide-react";
import type { ServiceContent } from "@/content/services";

interface ProblemListProps {
  service: ServiceContent;
}

export default function ProblemList({ service }: ProblemListProps) {
  return (
    <section
      aria-labelledby="problems-heading"
      className="py-16 lg:py-20 bg-gray-50/60 dark:bg-[#070D1B]/60 border-y border-gray-200/80 dark:border-white/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2 block font-mono">
              Common Bottlenecks
            </span>
            <h2
              id="problems-heading"
              className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 dark:text-white tracking-tight mb-4"
            >
              Challenges We Help You Solve
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-[#AFC5E1] max-w-2xl mx-auto">
              If your current systems show these symptoms, our engineering team can help clear the bottlenecks.
            </p>
          </div>

          {/* Problem Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {service.problems.map((problem, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-[#081226] border border-gray-200/80 dark:border-white/10 shadow-sm flex items-start gap-4 transition-all duration-200 hover:border-rose-300 dark:hover:border-rose-900/50"
              >
                <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
