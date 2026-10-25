// app/portfolio/PortfolioClient.tsx
"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Globe,
  LayoutDashboard,
  ShoppingCart,
  Database,
  Smartphone,
  Cpu,
  Layers,
  Radio,
  Code2,
} from "lucide-react";
import { portfolioContent } from "../lib/portfolio-data";
import WorkHero, { Project as WorkHeroProject } from "@/app/components/portfolio/WorkHero";
import ProjectCard from "@/app/components/portfolio/ProjectCard";
import ProjectTimeline from "@/app/components/portfolio/ProjectTimeline";

const ALL_CATEGORY = "All";

// Map real portfolio case studies to the WorkHero Project format
const HERO_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "real-estate-crm": Database,
  "lending-saas": LayoutDashboard,
  "travel-portal": Globe,
  "smokehouse-bbq": ShoppingCart,
  "enterprise-erp": Cpu,
  "mobile-wallet": Smartphone,
  "himalayan-expeditions": Globe,
  "botanical-skincare": ShoppingCart,
  "saas-dashboard": LayoutDashboard,
  "luxury-villa-portal": Globe,
  "food-delivery-app": Smartphone,
  "coffee-store": ShoppingCart,
  "realestate-portal": Database,
};

export default function PortfolioClient() {
  const { caseStudies } = portfolioContent;
  const [activeCategory, setActiveCategory] = useState<string>(ALL_CATEGORY);

  // Map case studies into hero wheel projects with real assets
  const heroProjects: WorkHeroProject[] = useMemo(() => {
    return caseStudies.map((cs) => ({
      id: cs.id,
      name: cs.projectName,
      industry: cs.industry,
      image: cs.screenshotUrl,
      icon: HERO_ICONS[cs.id] || Layers,
      href: cs.demoUrl,
    }));
  }, [caseStudies]);

  // Meaningful categories extracted directly from the actual case studies
  const categories = useMemo(() => {
    const set = new Set<string>();
    caseStudies.forEach((cs) => {
      if (cs.category) set.add(cs.category);
    });
    return [ALL_CATEGORY, ...Array.from(set)];
  }, [caseStudies]);

  // Filtered case studies
  const filteredProjects = useMemo(() => {
    if (activeCategory === ALL_CATEGORY) return caseStudies;
    return caseStudies.filter((cs) => cs.category === activeCategory);
  }, [activeCategory, caseStudies]);

  // Split out the featured project if available
  const [featured, ...restProjects] = filteredProjects;

  // Real stats computed strictly from available project data
  const stats = useMemo(() => {
    const techSet = new Set<string>();
    caseStudies.forEach((p) => p.techUsed.forEach((t) => techSet.add(t)));
    return [
      { label: "Projects Featured", value: caseStudies.length, icon: Layers },
      {
        label: "Live Interactive Demos",
        value: caseStudies.filter((p) => p.isLiveDemo).length,
        icon: Radio,
      },
      { label: "Core Technologies", value: techSet.size, icon: Code2 },
    ];
  }, [caseStudies]);

  return (
    <main className="relative overflow-hidden bg-background text-foreground transition-colors duration-300">
      {/* ── 1. Reusable Hero Section with Interactive Work Wheel ── */}
      <WorkHero projects={heroProjects} />

      {/* ── 2. Case Studies Section ── */}
      <section
        id="case-studies"
        aria-label="Selected Engineering Work and Case Studies"
        className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-10 sm:pt-14 lg:pb-28"
      >
        {/* Scope Telemetry Stats Banner */}
        <div className="mx-auto mb-14 max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-gray-200/90 dark:border-white/10 bg-gray-200/90 dark:bg-white/10 shadow-xs">
            {stats.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-card/95 px-6 py-5 backdrop-blur-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-heading text-2xl font-bold leading-none text-foreground">
                    {value}
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Heading & Category Filter Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-200/80 dark:border-white/10 text-blue-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Projects</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-foreground tracking-tight leading-tight">
            Selected work,{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              built to perform.
            </span>
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore custom websites, mobile applications, and business tools engineered for growing companies.
          </p>

          {/* Category Filter Pills */}
          {categories.length > 2 && (
            <div
              role="tablist"
              aria-label="Filter projects by technical category"
              className="mt-8 flex flex-wrap items-center justify-center gap-2"
            >
              {categories.map((category) => {
                const isActive = category === activeCategory;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/25"
                        : "border border-gray-200 dark:border-white/10 bg-card text-muted-foreground hover:border-blue-500/50 hover:text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Featured Project Card (Full width on desktop) */}
        {featured && (
          <div className="mx-auto mb-8 max-w-6xl">
            <ProjectCard project={featured} featured={true} priority={true} />
          </div>
        )}

        {/* Project Grid (2-3 columns) */}
        {restProjects.length > 0 && (
          <div className="mx-auto mb-16 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {restProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* ── 3. Engineering Timeline Section ── */}
        <ProjectTimeline />

        {/* ── 4. Final Conversion Section (Redesigned with refined balanced colors) ── */}
        <div className="mx-auto max-w-5xl mt-16 sm:mt-24">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-gray-200/90 dark:border-white/10 bg-gradient-to-b from-slate-50 via-white to-slate-100/60 dark:from-[#081226] dark:via-[#050A15] dark:to-[#070e1f] p-8 sm:p-14 text-center shadow-xl shadow-slate-900/5 dark:shadow-2xl dark:shadow-black/60 transition-colors duration-300">
            {/* Ambient Subtle Radial Glows */}
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-500/10 dark:bg-blue-600/15 blur-3xl pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-cyan-400/10 dark:bg-cyan-500/15 blur-3xl pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30 dark:opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(100,116,139,0.3) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative z-10 max-w-2xl mx-auto">
              {/* Context Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-200/80 dark:border-white/10 text-blue-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-5">
                <span>Let&apos;s Connect</span>
              </div>

              <h2 className="font-heading mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Have a project{" "}
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  in mind?
                </span>
              </h2>
              <p className="mb-8 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                Tell us about your business goals and what you want to build. We will discuss your ideas and help you plan the best way forward.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/35 hover:brightness-105 active:scale-[0.98]"
              >
                <span>Let&apos;s connect</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}