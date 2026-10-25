// app/components/section/WhyMaxora.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  MessagesSquare,
  Milestone,
  Cpu,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { whyMaxoraContent } from "../../lib/home-data";

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Tailored to Your Workflow",
    description:
      "Every application is built to fit the way your company actually works, rather than forcing your team into rigid pre-made templates.",
  },
  {
    icon: MessagesSquare,
    title: "Direct Developer Communication",
    description:
      "You speak directly with the engineers building your product. Questions get answered quickly, and decisions happen without account manager delays.",
  },
  {
    icon: Milestone,
    title: "Working Demos Every Week",
    description:
      "We share clickable, working prototypes throughout development so you can test features and provide feedback well before launch.",
  },
  {
    icon: Cpu,
    title: "Fast Performance on Every Screen",
    description:
      "Engineered with modern frameworks like Next.js, React, and Flutter so your pages and apps load in under 2 seconds on mobile and desktop.",
  },
  {
    icon: CheckCircle,
    title: "Dedicated Ongoing Support",
    description:
      "We help you keep your software updated, monitor server uptime, and add new features as your business scales.",
  },
];

export default function WhyMaxora() {
  return (
    <section className="relative bg-[#FFFFFF] dark:bg-[#070D1B] text-[#050A15] dark:text-[#F4F7FC] py-24 lg:py-32 transition-colors duration-300 overflow-hidden">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 tech-grid-pattern-light opacity-50 dark:opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column: Editorial Narrative & Differentiators */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#056BFF]/10 text-[#056BFF] dark:text-[#00D5F2] text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Why Work With Maxora</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-heading tracking-tight leading-tight text-gray-900 dark:text-white mb-6">
              Software built around your business,{" "}
              <span className="text-[#056BFF] dark:text-[#00D5F2]">not rigid templates.</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-[#AFC5E1] leading-relaxed mb-10">
              We collaborate directly with founders and business owners to build high-performance software. Every project is designed around your specific workflow, with clean code, predictable milestones, and reliable post-launch support.
            </p>

            <div className="space-y-6">
              {differentiators.map((diff, idx) => {
                const Icon = diff.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 text-[#056BFF] dark:text-[#00D5F2] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                        {diff.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-[#AFC5E1] leading-relaxed">
                        {diff.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Collaboration Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-gray-200/80 dark:border-white/10 bg-white dark:bg-[#081226] shadow-2xl p-3 sm:p-4">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                <Image
                  src="/images/home/why-team.webp"
                  alt="Maxora Technology Direct Engineering Collaboration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#056BFF] dark:text-[#00D5F2] mb-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>Direct Collaboration</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Transparent progress and weekly demos
                </h4>
                <p className="text-xs text-gray-600 dark:text-[#AFC5E1] leading-relaxed mb-4">
                  Stay in the loop with live milestone walkthroughs, direct WhatsApp updates, and clear timelines from day one.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#056BFF] dark:text-[#00D5F2] hover:underline"
                >
                  <span>Let&apos;s connect</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
