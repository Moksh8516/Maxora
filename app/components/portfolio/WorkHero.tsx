// app/components/portfolio/WorkHero.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import WorkWheel from "./WorkWheel";
import HeroParticleCanvas from "./HeroParticleCanvas";

export type Project = {
  id: string;
  name: string;
  industry: string;
  icon?: React.ComponentType<{ className?: string }>;
  image?: string;
  href?: string;
};

const MARQUEE_KEYWORDS = [
  "Web Applications",
  "Mobile Apps",
  "SaaS Platforms",
  "UI/UX Engineering",
  "CRM & ERP",
  "eCommerce",
  "Cloud Systems",
  "Digital Experiences",
];

export default function WorkHero({
  projects = [],
}: {
  projects: Project[];
}) {
  const shouldReduceMotion = useReducedMotion();

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      aria-label="Maxora Technology Selected Work Hero"
      className="relative min-h-[84vh] flex flex-col justify-center overflow-hidden bg-background text-foreground pt-24 pb-16 sm:py-24 lg:py-28 transition-colors duration-300"
    >
      {/* ── 1. Interactive Aether Flow Particle Connection Canvas ── */}
      <HeroParticleCanvas />

      {/* ── 2. Ambient Gradient Blobs & Subtle Grid ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft Ambient Blurred Glow Blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-500/15 dark:bg-blue-600/12 blur-[120px]" />
        <div className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-cyan-400/15 dark:bg-cyan-500/10 blur-[130px]" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-blue-600/10 dark:bg-cyan-400/5 blur-[120px]" />

        {/* Delicate Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(100,116,139,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(100,116,139,0.18) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 80%)",
          }}
        />

        {/* Edge Gradient Fades */}
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ── Left Column: Editorial Copy, Actions, Avatars, Marquee ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6 max-w-2xl"
          >
            {/* A. Small Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-muted/80 border border-border text-foreground text-xs font-bold uppercase tracking-wider shadow-xs backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                <span>Our Work</span>
              </div>
            </motion.div>

            {/* B. Main Heading (single H1 for the page) */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-[1.14] text-foreground"
            >
              Products we&apos;ve{" "}
              <span className="font-serif italic font-normal bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                engineered
              </span>{" "}
              to perform.
            </motion.h1>

            {/* C. Supporting Description (2 lines max) */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              We design and engineer digital experiences, web applications, and scalable software that help businesses move forward.
            </motion.p>

            {/* D. Primary and Secondary Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-1 w-full sm:w-auto"
            >
              <Button
                asChild
                variant="gradient"
                size="lg"
                className="gap-2 shadow-lg shadow-blue-500/25 cursor-pointer"
              >
                <a href="#case-studies">
                  <span>View Case Studies</span>
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 cursor-pointer border-border hover:border-blue-500/40"
              >
                <Link href="/contact">
                  <span>Let&apos;s connect</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            {/* E. Honest Delivery Commitments */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-2"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-cyan-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-foreground">
                  Direct Developer Collaboration
                </span>
                <span className="text-[11px] text-muted-foreground">
                  Working demos every sprint • Clear written quotes • Dedicated support
                </span>
              </div>
            </motion.div>

            {/* F. Existing Marquee */}
            <motion.div
              variants={itemVariants}
              className="w-full pt-4 max-w-xl"
            >
              <Marquee
                duration={50}
                pauseOnHover={true}
                className="py-1 -mx-2"
              >
                {MARQUEE_KEYWORDS.map((keyword) => (
                  <div
                    key={keyword}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-muted/70 border border-border text-xs font-medium text-foreground whitespace-nowrap shadow-xs hover:border-blue-500/40 hover:bg-muted transition-colors cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 shrink-0" />
                    <span>{keyword}</span>
                  </div>
                ))}
              </Marquee>
            </motion.div>
          </motion.div>

          {/* ── Right Column: Interactive Work Wheel ── */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1] as const,
              delay: 0.15,
            }}
            className="lg:col-span-5 flex justify-center items-center relative py-6"
          >
            <WorkWheel projects={projects} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
