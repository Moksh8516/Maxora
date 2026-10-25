// app/components/section/about/AboutCta.tsx
import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { aboutFinalCta } from "@/app/lib/agency-about-data";

export default function AboutCta() {
  const { tag, heading, description, buttonText, buttonHref } = aboutFinalCta;

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-cyan-500/5 to-transparent pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <div className="relative rounded-3xl border border-blue-500/30 bg-gradient-to-br from-card via-card/90 to-blue-500/5 p-8 sm:p-14 backdrop-blur-xl shadow-2xl shadow-blue-500/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            {tag}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-2xl mx-auto">
            {heading}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href={buttonHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-base shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all duration-200"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
