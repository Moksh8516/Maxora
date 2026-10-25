// app/components/section/about/WhyChooseUs.tsx
import React from "react";
import { CheckCircle2, Award } from "lucide-react";
import { whyChooseUsPoints } from "@/app/lib/agency-about-data";

export default function WhyChooseUs() {
  const { tag, heading, subheading, points } = whyChooseUsPoints;

  return (
    <section className="py-20 lg:py-28 bg-muted/20 border-t border-border/50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-4">
            <Award className="w-4 h-4" />
            {tag}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((pt) => (
            <div
              key={pt.title}
              className="p-7 rounded-2xl border border-border/70 bg-card/80 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {pt.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pt.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
