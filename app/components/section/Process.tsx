// components/sections/Process.tsx
"use client";

import {
  Search,
  PenTool,
  Code,
  Rocket,
  MessageSquare,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Listen & Understand",
      description:
        "We learn how your business operates, what challenges you are facing, and what success looks like for you.",
      icon: <Search className="w-6 h-6 text-white" />,
      color: "from-blue-500 to-cyan-400",
    },
    {
      number: "02",
      title: "Plan & Scope",
      description:
        "We outline the deliverables, milestones, and realistic timelines so everyone agrees on the plan before starting.",
      icon: <PenTool className="w-6 h-6 text-white" />,
      color: "from-purple-500 to-pink-400",
    },
    {
      number: "03",
      title: "Design & Prototype",
      description:
        "We craft clean, intuitive screens that look great on phones and computers, making it easy for your customers to navigate.",
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      color: "from-green-500 to-emerald-400",
    },
    {
      number: "04",
      title: "Build in Milestones",
      description:
        "We develop your project in structured weekly stages, sharing working demos so you can test features early.",
      icon: <Code className="w-6 h-6 text-white" />,
      color: "from-orange-500 to-red-400",
    },
    {
      number: "05",
      title: "Test Across Devices",
      description:
        "We test thoroughly on phones, tablets, and desktop browsers for fast speed, smooth navigation, and rock-solid reliability.",
      icon: <Settings className="w-6 h-6 text-white" />,
      color: "from-indigo-500 to-blue-400",
    },
    {
      number: "06",
      title: "Launch & Support",
      description:
        "We handle domain and server setup to launch smoothly, and stay available to support your team as your business scales.",
      icon: <Rocket className="w-6 h-6 text-white" />,
      color: "from-teal-500 to-cyan-400",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50/50 to-transparent dark:from-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A clear, transparent process from your first idea to launch day
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${step.color} bg-opacity-10 mb-6`}
                  >
                    <div
                      className={`bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
