// app/components/section/about/WhyWeFocus.tsx
import React from "react";
import { Target, CheckCircle2 } from "lucide-react";
import { whyWeFocusContent } from "@/app/lib/agency-about-data";

export default function WhyWeFocus() {
  const { tag, heading, description, points } = whyWeFocusContent;

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-4">
              <Target className="w-3.5 h-3.5" />
              {tag}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              {heading}
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {points.map((pt) => (
              <div
                key={pt.title}
                className="p-6 rounded-2xl border border-border/70 bg-card/70 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1.5">
                      {pt.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pt.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
