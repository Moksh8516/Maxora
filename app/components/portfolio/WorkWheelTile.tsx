// app/components/portfolio/WorkWheelTile.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Layers } from "lucide-react";
import type { Project } from "./WorkHero";

interface WorkWheelTileProps {
  project: Project;
  index: number;
  total: number;
  isActive: boolean;
  onHover: (project: Project | null) => void;
  onClick?: (project: Project) => void;
  shouldReduceMotion?: boolean;
}

export default function WorkWheelTile({
  project,
  index,
  total,
  isActive,
  onHover,
  onClick,
  shouldReduceMotion = false,
}: WorkWheelTileProps) {
  const angle = (index / total) * 360;

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(project);
    } else {
      // Smooth scroll to the corresponding project card
      const targetEl = document.getElementById(`project-${project.id}`) || document.getElementById("case-studies");
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const IconComponent = project.icon;

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        transform: `rotate(${angle}deg) translateY(calc(-1 * var(--wheel-radius, 176px))) rotate(-${angle}deg)`,
      }}
    >
      {/* Counter-rotation container keeps tile content upright as wheel spins */}
      <div
        className={shouldReduceMotion ? "" : "animate-wheel-counter"}
        style={{
          animationPlayState: isActive ? "paused" : "inherit",
        }}
      >
        <div
          className="relative group focus-within:z-40"
          onMouseEnter={() => onHover(project)}
          onMouseLeave={() => onHover(null)}
          onFocus={() => onHover(project)}
          onBlur={() => onHover(null)}
        >
          <button
            type="button"
            onClick={handleClick}
            aria-label={`View ${project.name} (${project.industry})`}
            className={`relative flex items-center justify-center w-12 h-12 min-[380px]:w-14 min-[380px]:h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-xl min-[380px]:rounded-2xl bg-card border shadow-lg backdrop-blur-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer ${
              isActive
                ? "scale-115 border-blue-500 dark:border-cyan-400 ring-2 ring-blue-500/40 shadow-blue-500/25 shadow-xl -translate-y-1 z-30"
                : "border-border hover:border-blue-500/50 hover:scale-105 hover:shadow-md"
            }`}
          >
            {/* Visual: Image thumbnail or Icon */}
            {project.image ? (
              <div className="relative w-full h-full rounded-2xl overflow-hidden p-1">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="72px"
                  className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl" />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center p-2 text-blue-600 dark:text-cyan-400">
                {IconComponent ? (
                  <IconComponent className="w-6 h-6" />
                ) : (
                  <Layers className="w-6 h-6" />
                )}
              </div>
            )}

            {/* Small glowing category accent dot */}
            <span
              className={`absolute -top-1 -right-1 w-3 h-3 rounded-full transition-transform duration-300 ring-2 ring-background ${
                isActive
                  ? "bg-cyan-400 scale-125 shadow-sm shadow-cyan-400"
                  : "bg-blue-600"
              }`}
            />
          </button>

          {/* Compact Tooltip on Hover/Focus */}
          {isActive && (
            <div
              role="tooltip"
              className="absolute left-1/2 -bottom-14 -translate-x-1/2 z-50 w-44 sm:w-52 p-2.5 rounded-xl bg-card/95 border border-border shadow-2xl backdrop-blur-xl text-center pointer-events-none animate-in fade-in zoom-in-95 duration-150"
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 truncate">
                {project.industry}
              </p>
              <p className="text-xs font-semibold text-foreground truncate mt-0.5 leading-snug">
                {project.name}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
