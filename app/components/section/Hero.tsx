// components/sections/Hero.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Globe, Code, Sparkles, MapPin } from "lucide-react";

interface Feature {
  icon: React.ElementType;
  label: string;
}

interface Stat {
  value: string;
  label: string;
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features: Feature[] = [
    { icon: Zap, label: "Fast Page Speeds" },
    { icon: Shield, label: "Search Ready (SEO)" },
    { icon: Globe, label: "Direct Developer Contact" },
    { icon: Code, label: "Weekly Working Demos" },
  ];

  const stats: Stat[] = [
    { value: "Fast", label: "Turnaround" },
    { value: "Direct", label: "Communication" },
    { value: "Custom", label: "Built For Your Needs" },
    { value: "Modern", label: "Reliable Stack" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden">
      {/* Mouse gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 80%)`,
        }}
      />

      {/* Floating blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="text-center pt-2 lg:text-left">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8">
              <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Punjab, India • Serving Clients Worldwide
              </span>
            </div>

            {/* Static, crawlable H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight mb-6 text-gray-900 dark:text-gray-100 leading-tight">
              Custom Websites, Mobile Apps &{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                AI Automation
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-muted mb-10 max-w-2xl leading-relaxed">
              We design and build fast websites, mobile apps, and automated systems tailored to your business workflow. Speak directly with senior developers, test working demos every week, and launch with 100% code ownership.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover-lift shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                Let&apos;s connect
                <ArrowRight
                  className="ml-3 group-hover:translate-x-2 transition-transform"
                  size={20}
                />
              </Link>

              <Link
                href="/Services"
                className="group inline-flex items-center justify-center glass-effect px-8 py-4 rounded-xl font-semibold text-lg hover-lift text-gray-900 dark:text-gray-100"
              >
                <Sparkles
                  className="mr-3 text-blue-600 dark:text-blue-400"
                  size={20}
                />
                Explore Services
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                    <feature.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="relative mx-auto lg:mx-0 max-w-lg">
              <div className="glass-effect rounded-3xl p-8 shadow-2xl hover-lift">
                <div className="grid grid-cols-2 gap-6">
                  {/* Code Card — marked with aria-hidden="true" */}
                  <div
                    aria-hidden="true"
                    className="col-span-2 bg-slate-900 rounded-xl p-4 select-none"
                  >
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>

                    <div className="space-y-2 text-sm font-mono">
                      <div className="flex gap-3">
                        <span className="text-blue-400">const</span>
                        <span className="text-green-400">maxoraTech</span>
                        <span className="text-white">=</span>
                        <span className="text-yellow-400">{"{"}</span>
                      </div>
                      <div className="ml-6 text-cyan-300">
                        focus: <span className="text-green-400">&quot;quality&quot;</span>,
                      </div>
                      <div className="ml-6 text-cyan-300">
                        approach: <span className="text-green-400">&quot;practical&quot;</span>,
                      </div>
                      <div className="ml-6 text-cyan-300">
                        delivery: <span className="text-green-400">&quot;transparent&quot;</span>
                      </div>
                      <div className="text-yellow-400">{"}"}</div>
                    </div>
                  </div>

                  {/* Stats / Positioning */}
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-4 rounded-xl glass-effect"
                    >
                      <div className="text-xl font-bold gradient-text">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl rotate-12 animate-float" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl -rotate-12 animate-float-delayed" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-theme rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
