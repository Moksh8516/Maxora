import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Zap, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import HeroParticleCanvas from "@/app/components/portfolio/HeroParticleCanvas";

export default function ServicesHero() {
  const [serviceToggle, setServiceToggle] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#0a0712] text-white border-b border-purple-900/30">
      {/* Interactive Particle Canvas */}
      <HeroParticleCanvas theme="wine-purple" mode="dark" />

      {/* Background Effects - Wine Purple & Black Gray Halos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-900/35 via-fuchsia-900/20 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-gradient-to-bl from-[#4a0e4e]/30 via-purple-950/25 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-200 text-sm font-semibold mb-8 shadow-sm shadow-purple-950/50"
          >
            <Sparkles className="w-4 h-4 text-fuchsia-400" />
            Our Digital Services
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-white mb-6 font-heading tracking-tight"
          >
            Websites, Mobile Apps &{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
                Custom Software
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-purple-500/30 to-fuchsia-500/30 blur-lg" />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We design and build fast websites, mobile apps, and custom business tools designed around how your team and customers work. Explore our core services below to see how we help your company grow.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#7E22CE] via-[#9333EA] to-[#C026D3] hover:from-[#6B21A8] hover:to-[#A21CAF] text-white font-semibold shadow-lg shadow-purple-900/40 hover:shadow-purple-900/60 transition-all duration-300 hover:-translate-y-1"
            >
              <Zap className="w-5 h-5 text-fuchsia-300" />
              <span>Let&apos;s connect</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#services"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-purple-500/30 text-white font-medium transition-all duration-300"
            >
              Explore Services
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform text-purple-300" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            {[
              { value: "Fast", label: "Turnaround" },
              { value: "Direct", label: "Developer Contact" },
              { value: "Weekly", label: "Working Demos" },
              { value: "Fixed", label: "Milestone Pricing" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-purple-200/80 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
