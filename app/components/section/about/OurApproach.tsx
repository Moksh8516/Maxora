// app/components/section/about/OurApproach.tsx
import React from "react";
import { GitCommit } from "lucide-react";
import { ourApproachSteps } from "@/app/lib/agency-about-data";

export default function OurApproach() {
  const { tag, heading, subheading, steps } = ourApproachSteps;

  return (
    <section id="our-approach" className="py-20 lg:py-28 bg-muted/20 border-t border-border/50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-4">
            <GitCommit className="w-4 h-4" />
            {tag}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {subheading}
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-border/70 bg-card/80 p-6 sm:p-8 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-0.5 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start sm:items-center gap-5">
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 shrink-0">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 md:text-right">
                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground border border-border/60">
                    {step.timeframe}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
