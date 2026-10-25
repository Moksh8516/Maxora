// components/ui/marquee.tsx
"use client";

import * as React from "react";

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  duration?: number;
  pauseOnHover?: boolean;
  reverse?: boolean;
  fadeEdges?: boolean;
  className?: string;
}

export function Marquee({
  children,
  duration = 45,
  pauseOnHover = true,
  reverse = false,
  fadeEdges = true,
  className = "",
  style,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={`relative w-full overflow-hidden select-none ${
        fadeEdges ? "marquee-mask" : ""
      } ${className}`}
      style={style}
      {...props}
    >
      <div
        className="flex w-max shrink-0 items-center gap-4 py-1"
        style={{
          animationName: "marquee-scroll",
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDirection: reverse ? "reverse" : "normal",
          animationPlayState: "running",
          willChange: "transform",
        }}
        onMouseEnter={(e) => {
          if (pauseOnHover) {
            e.currentTarget.style.animationPlayState = "paused";
          }
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) {
            e.currentTarget.style.animationPlayState = "running";
          }
        }}
      >
        <div className="flex shrink-0 items-center gap-4">{children}</div>
        <div className="flex shrink-0 items-center gap-4" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Marquee;
