// components/sections/CTA.tsx
"use client";

import { motion } from "framer-motion";
import { Calendar, MessageSquare, Phone, Zap } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "../../lib/site-config";

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 dark:from-blue-500/5 dark:via-transparent dark:to-cyan-500/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 rounded-3xl overflow-hidden shadow-xl dark:shadow-2xl"
          >
            <div className="p-8 md:p-12 lg:p-16">
              <div className="text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium mb-8">
                  <Zap className="w-4 h-4" />
                  Start a Conversation
                </div>

                {/* Title */}
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Have a project you want to{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    bring to life?
                  </span>
                </h2>

                {/* Description */}
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                  Tell us about your business goals and what you want to build. We will discuss your ideas and help you plan the best way forward.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1"
                  >
                    <span>Let&apos;s connect</span>
                    <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </Link>
                  <a
                    href={`tel:${siteConfig.contact.phoneTel}`}
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gray-100 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white font-semibold hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300 border border-gray-300 dark:border-white/20"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <MessageSquare className="w-5 h-5" />,
                      label: "Email Us",
                      value: siteConfig.contact.email,
                      href: `mailto:${siteConfig.contact.email}`,
                    },
                    {
                      icon: <Phone className="w-5 h-5" />,
                      label: "Call Us",
                      value: siteConfig.contact.phoneDisplay,
                      href: `tel:${siteConfig.contact.phoneTel}`,
                    },
                    {
                      icon: <Calendar className="w-5 h-5" />,
                      label: "Response Time",
                      value: "Within 24 hours",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 text-center"
                    >
                      <div className="inline-flex p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-600 dark:text-blue-400 mb-3">
                        {item.icon}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-gray-900 dark:text-white font-medium">
                          {item.value}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
