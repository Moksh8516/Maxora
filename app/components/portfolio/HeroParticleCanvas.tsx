// app/components/portfolio/HeroParticleCanvas.tsx
"use client";

import React, { useRef, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

interface HeroParticleCanvasProps {
  className?: string;
}

export default function HeroParticleCanvas({
  className = "",
}: HeroParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse: { x: number | null; y: number | null; radius: number } = {
      x: null,
      y: null,
      radius: 180,
    };

    // Helper to check if dark mode is active
    const isDark = () =>
      document.documentElement.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(
        x: number,
        y: number,
        directionX: number,
        directionY: number,
        size: number,
        color: string
      ) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (!canvas) return;
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Mouse collision & repulsion
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius + this.size) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= forceDirectionX * force * 3.5;
            this.y -= forceDirectionY * force * 3.5;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const init = () => {
      if (!canvas) return;
      particles = [];
      const dark = isDark();

      // Density tuned for high performance & clean aesthetic
      const area = canvas.width * canvas.height;
      const numberOfParticles = Math.min(
        Math.floor(area / 12000),
        75
      );

      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (canvas.width - size * 4) + size * 2;
        const y = Math.random() * (canvas.height - size * 4) + size * 2;
        const directionX = Math.random() * 0.4 - 0.2;
        const directionY = Math.random() * 0.4 - 0.2;

        // Elegant palette: Cyan & Blue in dark; Royal Blue & Slate in light
        const color = dark
          ? i % 2 === 0
            ? "rgba(0, 213, 242, 0.75)"
            : "rgba(59, 130, 246, 0.65)"
          : i % 2 === 0
          ? "rgba(37, 99, 235, 0.45)"
          : "rgba(6, 182, 212, 0.4)";

        particles.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const resizeCanvas = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      init();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const connect = () => {
      if (!ctx || !canvas) return;
      const dark = isDark();
      const maxDistance = Math.min((canvas.width / 8) * (canvas.height / 8), 16000);

      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = dx * dx + dy * dy;

          if (distance < maxDistance) {
            const opacityValue = Math.max(0, 1 - distance / maxDistance);

            let isNearMouse = false;
            if (mouse.x !== null && mouse.y !== null) {
              const dx_m = particles[a].x - mouse.x;
              const dy_m = particles[a].y - mouse.y;
              if (Math.sqrt(dx_m * dx_m + dy_m * dy_m) < mouse.radius) {
                isNearMouse = true;
              }
            }

            if (isNearMouse) {
              ctx.strokeStyle = dark
                ? `rgba(255, 255, 255, ${opacityValue * 0.4})`
                : `rgba(37, 99, 235, ${opacityValue * 0.35})`;
            } else {
              ctx.strokeStyle = dark
                ? `rgba(0, 213, 242, ${opacityValue * 0.18})`
                : `rgba(59, 130, 246, ${opacityValue * 0.14})`;
            }

            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      animationFrameId = requestAnimationFrame(animate);

      // Clear transparently so background gradient/grid shines through
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connect();
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    // Attach mouse listeners to the parent section for seamless coverage
    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}
    />
  );
}
