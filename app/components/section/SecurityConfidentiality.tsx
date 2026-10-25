// app/components/section/SecurityConfidentiality.tsx
import React from "react";
import { ShieldCheck, Lock, Server, FileCheck } from "lucide-react";

export const securityConfidentialityData = {
  tag: "Security & Peace of Mind",
  heading: "Your data and systems are protected",
  intro:
    "We build with industry security standards in mind, protecting your business information, customer data, and everyday operations.",
  points: [
    {
      title: "Secure cloud hosting & backups",
      text: "Your applications are deployed on reliable, encrypted cloud infrastructure with regular backups and health monitoring.",
      icon: Server,
    },
    {
      title: "Controlled access & privacy",
      text: "Access to your staging environments and credentials is strictly limited to the developers actively building your project.",
      icon: Lock,
    },
    {
      title: "Clean, documented code",
      text: "Every application is built with standard conventions and clear documentation, so any engineer can understand and maintain it.",
      icon: FileCheck,
    },
  ],
};

export default function SecurityConfidentiality() {
  const { tag, heading, intro, points } = securityConfidentialityData;

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-muted/20 border-t border-border/50">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-4">
            <ShieldCheck className="w-4 h-4" />
            {tag}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="group relative rounded-2xl border border-border/60 bg-card/70 p-6 sm:p-8 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
