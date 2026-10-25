// app/components/section/about/AboutHero.tsx
import React from "react";
import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";
import { aboutHeroContent } from "@/app/lib/agency-about-data";

export default function AboutHero() {
  const {
    badge,
    heading,
    headingAccent,
    subheading,
    primaryCtaText,
    primaryCtaHref,
    secondaryCtaText,
    secondaryCtaHref,
  } = aboutHeroContent;

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none -z-10">
        <div className="absolute top-10 left-1/3 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/3 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-8 shadow-sm">
          <Code2 className="w-4 h-4 text-cyan-500" />
          <span>{badge}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
          {heading}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500">
            {headingAccent}
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
          {subheading}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCtaHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-base shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all duration-200"
          >
            {primaryCtaText}
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href={secondaryCtaHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-border/80 bg-card/60 backdrop-blur-md text-foreground font-semibold text-base hover:bg-muted transition-all duration-200"
          >
            {secondaryCtaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
