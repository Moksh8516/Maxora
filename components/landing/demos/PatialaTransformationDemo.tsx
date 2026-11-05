// components/landing/demos/PatialaTransformationDemo.tsx
"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Clock,
  Zap,
  AlertTriangle,
  CheckCircle2,
  Phone,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function PatialaTransformationDemo() {
  const [viewState, setViewState] = useState<"after" | "before">("after");
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full max-w-4xl mx-auto my-12 p-4 sm:p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-white">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Example for Patiala Businesses</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
            See What Happens When a Customer Opens Your Website on Mobile
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Tap the buttons below to compare an old, slow website with a fast, modern Maxora website.
          </p>
        </div>

        {/* Mode Toggle Buttons */}
        <div className="flex items-center bg-slate-950 p-1.5 rounded-2xl border border-slate-800 shrink-0">
          <button
            type="button"
            onClick={() => setViewState("before")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              viewState === "before"
                ? "bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Slow Old Website
          </button>
          <button
            type="button"
            onClick={() => setViewState("after")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              viewState === "after"
                ? "bg-[#056BFF] text-white shadow-lg shadow-[#056BFF]/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Fast Maxora Website ✨
          </button>
        </div>
      </div>

      {/* Screen Container */}
      <div
        ref={containerRef}
        className="relative mt-6 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 min-h-[360px]"
      >
        <AnimatePresence mode="wait">
          {viewState === "before" ? (
            /* SLOW OLD WEBSITE SIMULATION */
            <motion.div
              key="before"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
              className="p-6 sm:p-8 space-y-6"
            >
              {/* Alert Bar */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-300 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span><strong>Takes 6 seconds to open</strong> — Most customers get impatient and leave.</span>
                </div>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-rose-900/60 text-rose-200">
                  Customer Frustrated
                </span>
              </div>

              {/* Cluttered Old Layout Mock */}
              <div className="rounded-xl border border-dashed border-rose-900/40 p-5 bg-rose-950/10 space-y-4">
                <div className="flex items-center justify-between border-b border-rose-900/30 pb-3">
                  <span className="text-xs font-medium text-slate-300">Sample Store in Patiala (Old Website)</span>
                  <span className="text-[11px] text-rose-400 font-semibold">❌ No WhatsApp button</span>
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Heavy pictures take forever to load on mobile data. Text is so small that visitors have to pinch and zoom with two fingers. Contact form has 8 required boxes, so nobody fills it.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded bg-slate-900/80 border border-rose-900/30 text-center">
                    <span className="text-xs text-rose-400 block font-bold">Hard to Read on Phones</span>
                    <span className="text-[11px] text-slate-400">Layout breaks on smaller screens</span>
                  </div>
                  <div className="p-3 rounded bg-slate-900/80 border border-rose-900/30 text-center">
                    <span className="text-xs text-rose-400 block font-bold">Hard to Find on Google</span>
                    <span className="text-[11px] text-slate-400">Business hours and address missing</span>
                  </div>
                  <div className="p-3 rounded bg-slate-900/80 border border-rose-900/30 text-center">
                    <span className="text-xs text-rose-400 block font-bold">Lost Customer Enquiries</span>
                    <span className="text-[11px] text-slate-400">No easy way to message the owner</span>
                  </div>
                </div>
              </div>

              <div className="text-center text-xs text-rose-300 font-medium">
                The result: Visitors close the site and call your competitor down the road instead.
              </div>
            </motion.div>
          ) : (
            /* FAST MAXORA WEBSITE SIMULATION */
            <motion.div
              key="after"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
              className="p-6 sm:p-8 space-y-6"
            >
              {/* Success Metric Bar */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Opens in 1 second</strong> — Pictures and prices show up instantly on 4G and 5G.</span>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-900/70 text-emerald-200">
                  Ready to Buy
                </span>
              </div>

              {/* Modern Fast Layout Mock */}
              <div className="rounded-xl border border-slate-800 p-5 bg-slate-900/70 shadow-lg space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-white font-heading">
                      Sample Store in Patiala (Maxora Website)
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-cyan-400">✓ Looks Great on Every Phone</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                      One-Tap WhatsApp Button
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      A customer taps one green button and WhatsApp opens on their phone with a ready message asking about your product or service.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      Clear Address & Opening Hours
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Google and AI tools like ChatGPT know your exact Patiala location, phone number, and timings so local buyers find you easily.
                    </p>
                  </div>
                </div>

                {/* Live Action Bar inside demo */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-3 text-xs text-slate-200">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      You own your website 100%
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Change prices yourself anytime
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 text-xs font-bold">
                    <span>Turns Visitors into Inquiries</span>
                  </div>
                </div>
              </div>

              <div className="text-center text-xs text-emerald-300 font-medium">
                The result: More phone calls, more WhatsApp enquiries, and peace of mind.
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Visual Caption */}
      <p className="text-center text-[11px] text-slate-400 mt-4">
        Example of how clean design and fast mobile loading help Patiala businesses win real customers.
      </p>
    </div>
  );
}
