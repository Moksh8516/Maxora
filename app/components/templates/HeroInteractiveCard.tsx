"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Clock,
  ArrowRight,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Award,
  CheckCircle2,
  XCircle,
  Smartphone,
  Search,
} from "lucide-react";
import { siteConfig } from "@/app/lib/site-config";

interface HeroInteractiveCardProps {
  pageTitle?: string;
  badge?: string;
  trustPromises?: string[];
  startingPrice?: string;
  deliveryTime?: string;
  onGetQuoteClick?: () => void;
  whatsappPrefilledText?: string;
}

export default function HeroInteractiveCard({
  pageTitle = "Custom Business Solution",
  trustPromises = [],
  startingPrice,
  deliveryTime = "7–14 Days",
  onGetQuoteClick,
  whatsappPrefilledText = "Hi Maxora team, I would like to get a quote for my project.",
}: HeroInteractiveCardProps) {
  const [activeTab, setActiveTab] = useState<"deliverables" | "comparison" | "timeline">(
    "deliverables"
  );
  const [comparisonMode, setComparisonMode] = useState<"maxora" | "others">("maxora");

  const whatsappNumber = siteConfig.contact.whatsappNumber || "917719545464";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappPrefilledText
  )}`;

  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Outer Glow Halo - Wine Purple & Obsidian */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-800/50 via-fuchsia-700/40 to-purple-950/60 blur-2xl opacity-80 pointer-events-none -z-10" />

      {/* Main Glassmorphic Card - Black Gray & Wine Purple Border */}
      <div className="relative rounded-2xl bg-[#0c0a13]/95 backdrop-blur-2xl border border-purple-500/25 p-5 sm:p-6 shadow-2xl text-white overflow-hidden">
        
        {/* Top Telemetry Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-fuchsia-500" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-gray-200">
              Live Engineering Hub
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-purple-950/70 border border-purple-500/30 text-purple-200">
              Direct Makers
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
            <Award className="w-3.5 h-3.5" />
            <span>99/100 Core Web Vitals</span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center p-1 rounded-xl bg-black/40 border border-white/10 mb-5">
          <button
            type="button"
            onClick={() => setActiveTab("deliverables")}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "deliverables"
                ? "bg-gradient-to-r from-[#7E22CE] via-[#9333EA] to-[#C026D3] text-white shadow-md shadow-purple-900/40"
                : "text-gray-400 hover:text-purple-200"
            }`}
          >
            ⚡ Deliverables
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("comparison")}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "comparison"
                ? "bg-gradient-to-r from-[#7E22CE] via-[#9333EA] to-[#C026D3] text-white shadow-md shadow-purple-900/40"
                : "text-gray-400 hover:text-purple-200"
            }`}
          >
            ⚖️ Maxora vs Others
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("timeline")}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "timeline"
                ? "bg-gradient-to-r from-[#7E22CE] via-[#9333EA] to-[#C026D3] text-white shadow-md shadow-purple-900/40"
                : "text-gray-400 hover:text-purple-200"
            }`}
          >
            ⏱️ 7-Day Sprint
          </button>
        </div>

        {/* Tab Content Panels */}
        <div className="min-h-[220px]">
          <AnimatePresence mode="wait">
            {activeTab === "deliverables" && (
              <motion.div
                key="deliverables"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-[#161124]/60 border border-purple-500/20 hover:border-purple-400/40 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="w-4 h-4 text-fuchsia-400 shrink-0" />
                      <span className="text-xs font-bold text-white">1.2s Fast Load</span>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-snug">
                      Loads instantly on 4G phones across Punjab & India.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#161124]/60 border border-purple-500/20 hover:border-purple-400/40 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-xs font-bold text-white">WhatsApp Pipeline</span>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-snug">
                      1-tap direct chat links that turn visitors into inquiries.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#161124]/60 border border-purple-500/20 hover:border-purple-400/40 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <Search className="w-4 h-4 text-purple-400 shrink-0" />
                      <span className="text-xs font-bold text-white">Google & AI Ready</span>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-snug">
                      Structured schema so Google and ChatGPT quote your business.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#161124]/60 border border-purple-500/20 hover:border-purple-400/40 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <ShieldCheck className="w-4 h-4 text-pink-400 shrink-0" />
                      <span className="text-xs font-bold text-white">100% Ownership</span>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-snug">
                      You own domain, source code, and data forever. No lock-in.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-950/50 via-fuchsia-950/40 to-transparent border border-purple-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-purple-200 block">
                      Direct Developer Access
                    </span>
                    <span className="text-[11px] text-gray-300">
                      Work directly with makers — no commission sales reps.
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-purple-900/60 text-purple-200 border border-purple-500/30">
                    SLA 24H
                  </span>
                </div>
              </motion.div>
            )}

            {activeTab === "comparison" && (
              <motion.div
                key="comparison"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                {/* Switcher */}
                <div className="flex justify-center gap-2 mb-2">
                  <button
                    type="button"
                    onClick={() => setComparisonMode("maxora")}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      comparisonMode === "maxora"
                        ? "bg-purple-900/40 text-purple-200 border border-purple-500/40 shadow-sm"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    ✓ Maxora Technology
                  </button>
                  <button
                    type="button"
                    onClick={() => setComparisonMode("others")}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      comparisonMode === "others"
                        ? "bg-rose-950/40 text-rose-300 border border-rose-500/40"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    ✕ Traditional Agencies
                  </button>
                </div>

                {comparisonMode === "maxora" ? (
                  <div className="space-y-2 p-3 rounded-xl bg-purple-950/40 border border-purple-500/30">
                    <div className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-gray-200">
                        <strong className="text-purple-200">1.2s Fast Performance:</strong> Built with clean code that ranks higher on Google.
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-gray-200">
                        <strong className="text-purple-200">Direct Maker Contact:</strong> Private WhatsApp group with the lead engineers.
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-gray-200">
                        <strong className="text-purple-200">Fixed Milestone Price:</strong> Zero surprise bills; pay only when milestones pass.
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 p-3 rounded-xl bg-rose-950/30 border border-rose-500/30">
                    <div className="flex items-start gap-2 text-xs">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300">
                        <strong className="text-rose-300">Slow 5–8s Bloat:</strong> Clunky page builders with dozens of unused plugins.
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-xs">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300">
                        <strong className="text-rose-300">Sales Middlemen:</strong> 3-day delays waiting for account manager replies.
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-xs">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300">
                        <strong className="text-rose-300">Vague Hourly Retainers:</strong> Unexpected extra charges for minor tweaks.
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === "timeline" && (
              <motion.div
                key="timeline"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-2.5"
              >
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-[#161124]/60 border border-purple-500/15">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-[10px] font-bold text-white shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <span className="text-xs font-bold text-white block">Day 1–2: Strategy & Scope Lock</span>
                    <p className="text-[11px] text-gray-300">Fixed quote agreed, keywords picked, and page blueprint confirmed.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-[#161124]/60 border border-purple-500/15">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-600 to-purple-600 text-[10px] font-bold text-white shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <span className="text-xs font-bold text-white block">Day 3–5: Live Prototype Link</span>
                    <p className="text-[11px] text-gray-300">You test a working mobile demo on your phone before final sign-off.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-[#161124]/60 border border-purple-500/15">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 text-[10px] font-bold text-white shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <span className="text-xs font-bold text-white block">Day 6–7: Launch & Google Verification</span>
                    <p className="text-[11px] text-gray-300">Domain connects, speed tests pass, Google sitemaps submitted.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Safety Strip */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>30-Day Free Post-Launch Support</span>
          </div>
          <span className="text-[11px] text-purple-300 font-mono">0% Hidden Fees</span>
        </div>

        {/* Card CTA Actions */}
        <div className="mt-4 pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={onGetQuoteClick}
            className="w-full min-h-[40px] px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#7E22CE] via-[#9333EA] to-[#C026D3] hover:brightness-110 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-purple-900/40 active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Get Exact Timeline & Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[40px] px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-purple-500/30 text-white font-semibold text-xs flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp Founder</span>
          </a>
        </div>

      </div>
    </div>
  );
}
