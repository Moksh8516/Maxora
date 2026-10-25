// app/components/portfolio/WorkWheel.tsx
"use client";

import React, { useState } from "react";
import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { Project } from "./WorkHero";
import WorkWheelTile from "./WorkWheelTile";

interface WorkWheelProps {
  projects: Project[];
  onSelectProject?: (project: Project) => void;
}

export default function WorkWheel({ projects, onSelectProject }: WorkWheelProps) {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  // Take up to 8 projects for clean geometric circular distribution
  const wheelProjects = projects.slice(0, 8);
  const total = wheelProjects.length || 1;

  const isPaused = Boolean(hoveredProject);

  return (
    <div
      role="region"
      aria-label="Interactive Work Wheel displaying featured engineering projects"
      className="relative w-[280px] h-[280px] min-[380px]:w-[320px] min-[380px]:h-[320px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] [--wheel-radius:105px] min-[380px]:[--wheel-radius:118px] sm:[--wheel-radius:154px] md:[--wheel-radius:176px] flex items-center justify-center select-none"
    >
      {/* ── Background Orbit Rings & Ambient Glow ── */}
      {/* Outer Orbit Line */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full border border-dashed border-blue-500/20 dark:border-cyan-400/20 pointer-events-none"
      />
      {/* Middle Orbit Line */}
      <div
        aria-hidden="true"
        className="absolute inset-10 sm:inset-14 md:inset-16 rounded-full border border-dashed border-blue-500/15 dark:border-cyan-400/15 pointer-events-none"
      />
      {/* Inner Orbit Line */}
      <div
        aria-hidden="true"
        className="absolute inset-20 sm:inset-26 md:inset-30 rounded-full border border-blue-500/10 dark:border-cyan-400/10 pointer-events-none"
      />

      {/* Decorative Cardinal Orbit Dots */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500/40 pointer-events-none"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400/40 pointer-events-none"
      />
      <span
        aria-hidden="true"
        className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500/30 pointer-events-none"
      />
      <span
        aria-hidden="true"
        className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400/30 pointer-events-none"
      />

      {/* Soft Ambient Radial Glow Behind Center */}
      <div
        aria-hidden="true"
        className="absolute w-44 h-44 sm:w-60 sm:h-60 rounded-full bg-gradient-to-br from-blue-600/15 via-cyan-400/10 to-transparent blur-3xl pointer-events-none"
      />

      {/* ── Center Hub (Static Maxora Technology Branding) ── */}
      <div
        className="relative z-20 flex flex-col items-center justify-center w-26 h-26 min-[380px]:w-28 min-[380px]:h-28 sm:w-36 sm:h-36 rounded-full bg-white/95 dark:bg-[#070e1f]/95 border border-gray-200/90 dark:border-white/10 shadow-xl shadow-slate-900/5 dark:shadow-2xl dark:shadow-black/70 backdrop-blur-2xl p-2.5 sm:p-3 text-center transition-all duration-300"
      >
        {/* Subtle multi-layer glowing rim */}
        <div
          aria-hidden="true"
          className="absolute inset-[-3px] rounded-full bg-gradient-to-r from-blue-600/25 via-cyan-400/25 to-blue-500/25 blur-xs -z-10"
        />
        <div
          aria-hidden="true"
          className="absolute inset-[-1px] rounded-full bg-gradient-to-r from-blue-600/40 via-cyan-400/30 to-blue-500/40 opacity-70 -z-10"
        />

        {/* Inner subtle depth highlight */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none"
        />

        {/* Maxora Favicon Logo */}
        <div className="relative flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-white dark:bg-white/5 border border-gray-200/80 dark:border-white/10 p-1.5 shadow-xs mb-1 sm:mb-1.5">
          <Image
            src="/favicon.ico"
            alt="Maxora Technology Logo"
            width={32}
            height={32}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Static Title: MAXORA TECHNOLOGY */}
        <span className="font-heading text-xs sm:text-sm font-extrabold tracking-wider text-gray-900 dark:text-white leading-none">
          MAXORA
        </span>
        <span className="mt-0.5 text-[8px] sm:text-[9px] font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest leading-none">
          TECHNOLOGY
        </span>
      </div>

      {/* ── Continuous Rotating Wheel Container (60s) ── */}
      <div
        className={`absolute inset-0 flex items-center justify-center ${shouldReduceMotion ? "" : "animate-wheel-spin"
          }`}
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {wheelProjects.map((project, idx) => (
          <WorkWheelTile
            key={project.id || idx}
            project={project}
            index={idx}
            total={total}
            isActive={hoveredProject?.id === project.id}
            onHover={setHoveredProject}
            onClick={onSelectProject}
            shouldReduceMotion={shouldReduceMotion ?? false}
          />
        ))}
      </div>
    </div>
  );
}
