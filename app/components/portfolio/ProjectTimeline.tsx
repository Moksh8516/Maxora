// app/components/portfolio/ProjectTimeline.tsx
"use client";

import React from "react";
import { Search, Layout, Code2, Rocket } from "lucide-react";

interface TimelineStep {
  step: string;
  name: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
}

const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: "01",
    name: "Discover",
    subtitle: "Understanding Your Goals",
    description:
      "We learn about your business, map out the customer journey, and define the exact features you need before starting.",
    icon: Search,
  },
  {
    step: "02",
    name: "Design",
    subtitle: "Wireframes & Visual Flow",
    description:
      "We design clean, intuitive screens and interactive mockups so you can review and test the flow before we write code.",
    icon: Layout,
  },
  {
    step: "03",
    name: "Build",
    subtitle: "Development & Testing",
    description:
      "We develop your project in clear milestones, connecting your tools and sharing working demos for your feedback.",
    icon: Code2,
  },
  {
    step: "04",
    name: "Launch",
    subtitle: "Release & Support",
    description:
      "We test thoroughly on all devices, deploy securely to cloud hosting, and support your team as your product grows.",
    icon: Rocket,
  },
];

export default function ProjectTimeline() {
  return (
    <section
      aria-label="Software Engineering Engagement Process"
      className="relative my-20 sm:my-28"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-200/80 dark:border-white/10 text-blue-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground tracking-tight">
            How we take your project from{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              idea to launch.
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            A clear, transparent delivery process focused on speed, quality, and direct communication.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {TIMELINE_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="group relative rounded-2xl border border-gray-200/80 dark:border-white/10 bg-card p-6 shadow-xs hover:shadow-lg hover:border-blue-500/40 dark:hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Connecting subtle line on desktop */}
                {idx < TIMELINE_STEPS.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px border-t border-dashed border-gray-300 dark:border-white/20 z-10 pointer-events-none"
                  />
                )}

                <div>
                  {/* Step Number + Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black font-mono text-gray-300 dark:text-gray-700 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {step.step}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                    {step.name}
                  </h3>
                  <div className="text-xs font-semibold text-blue-600 dark:text-cyan-400 uppercase tracking-wider mb-3">
                    {step.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
