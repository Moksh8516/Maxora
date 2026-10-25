// app/components/portfolio/ProjectCard.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import type { PortfolioCaseStudy } from "@/app/lib/portfolio-data";

interface ProjectCardProps {
  project: PortfolioCaseStudy;
  featured?: boolean;
  priority?: boolean;
}

export default function ProjectCard({
  project,
  featured = false,
  priority = false,
}: ProjectCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      id={`project-${project.id}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-200/90 dark:border-white/10 bg-card backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/40 dark:hover:border-cyan-400/40 ${
        featured ? "lg:grid lg:grid-cols-12 lg:gap-8" : ""
      }`}
    >
      {/* Subtle cursor spotlight effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(5,107,255,0.08), transparent 60%)`
            : "none",
        }}
      />

      {/* ── Screenshot / Visual Media ── */}
      <div
        className={`relative overflow-hidden bg-slate-950 border-b border-gray-200/80 dark:border-white/10 ${
          featured
            ? "aspect-[16/10] lg:aspect-auto lg:h-full lg:col-span-7 lg:border-b-0 lg:border-r"
            : "aspect-[16/10] w-full"
        }`}
      >
        <Image
          src={project.screenshotUrl}
          alt={project.screenshotAlt || project.projectName}
          fill
          priority={priority}
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 60vw"
              : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          className="object-cover object-top opacity-95 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
        />

        {/* Edge gradient overlay for image depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Live Demo Status Pill */}
        {project.isLiveDemo && (
          <span className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/95 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-emerald-500/30 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Live Demo
          </span>
        )}

        {/* Featured Badge */}
        {featured && (
          <span className="absolute bottom-4 left-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 px-3 py-1 text-xs font-bold text-blue-700 dark:text-cyan-300 shadow backdrop-blur-md border border-gray-200/50 dark:border-white/10">
            <Sparkles className="h-3.5 w-3.5" />
            Featured Project
          </span>
        )}
      </div>

      {/* ── Content & Details ── */}
      <div
        className={`flex flex-col justify-between p-6 sm:p-7 relative z-20 ${
          featured ? "lg:col-span-5 lg:p-8 sm:p-10" : "flex-1"
        }`}
      >
        <div>
          {/* Industry / Category tag */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
              {project.category || project.industry}
            </span>
          </div>

          {/* Project Title */}
          {featured ? (
            <h3 className="font-heading mb-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
              {project.projectName}
            </h3>
          ) : (
            <h3 className="font-heading mb-2.5 text-xl font-bold text-foreground leading-snug group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
              {project.projectName}
            </h3>
          )}

          {/* What We Built Description */}
          <p className="mb-5 text-sm text-muted-foreground leading-relaxed">
            {project.whatWeBuilt}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techUsed.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-gray-200/80 bg-gray-50/80 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── Action CTA ── */}
        <div className="pt-2">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/35 hover:brightness-105 active:scale-[0.99] transition-all"
            >
              <span>Launch live demo</span>
              <ExternalLink className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : (
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-between gap-3 rounded-xl border border-gray-200/80 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-4 py-3 text-sm font-semibold text-foreground hover:bg-gray-100 dark:hover:bg-white/10 hover:border-blue-500/40 transition-all"
            >
              <span>Discuss a similar project</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-blue-600 dark:text-cyan-400 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
