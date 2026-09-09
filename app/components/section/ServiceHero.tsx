// components/sections/ServicesHero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Zap, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ServicesHero() {
  const [serviceToggle, setServiceToggle] = useState(false);

  return (
    <section className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-gray-900/50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Comprehensive Digital Solutions
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Transform Your Business With{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Our Expertise
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-lg" />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            We deliver cutting-edge digital solutions that drive growth, enhance
            efficiency, and create lasting value for your business.
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
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1"
            >
              <Zap className="w-5 h-5" />
              <span>Start Your Project</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={serviceToggle ? "#services" : ""}
              onClick={() => setServiceToggle(!serviceToggle)}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/80 dark:bg-gray-800/80 border border-gray-300/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 font-medium hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
            >
              Explore Services
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
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
              { value: "01", label: "Focused Digital Agency" },
              { value: "Clear", label: "Communication" },
              { value: "Built", label: "Around Your Goals" },
              { value: "Growing", label: "With Every Project" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
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
