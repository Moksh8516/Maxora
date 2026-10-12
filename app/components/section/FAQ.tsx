// components/sections/FAQ.tsx
"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Clock,
  DollarSign,
  Users,
  Shield,
  Zap,
} from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What's the typical timeline for a web development project?",
      answer:
        "Project timelines vary based on complexity. A simple website takes 4-6 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during our discovery phase.",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      question: "How much does custom software development cost?",
      answer:
        "Each project is scoped individually based on your technical requirements, deliverables, and timeline. We provide clear, milestone-driven estimates after an initial discovery consultation.",
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer:
        "Yes, we provide comprehensive maintenance plans including security updates, performance monitoring, technical support, and feature enhancements.",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in modern technologies including Next.js, React, Node.js, Python, React Native, AWS, and various databases. We choose the right stack based on your project requirements.",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      question: "How do you ensure project quality and success?",
      answer:
        "We follow agile methodologies, conduct regular testing, provide progress updates, and involve clients throughout the development process to ensure alignment with expectations.",
      icon: <HelpCircle className="w-5 h-5" />,
    },
    {
      question: "Can you work with our existing team?",
      answer:
        "Absolutely. We often collaborate with in-house teams, providing specialized expertise and integrating seamlessly with your existing workflow and processes.",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get answers to common questions about our services and process
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      {faq.icon}
                    </div>
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-200 ${
                    openIndex === index ? "pb-5" : "max-h-0"
                  }`}
                >
                  <div className="pl-12">
                    <p className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Help */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
              <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">
                Still have questions?{" "}
                <a
                  href="/contact"
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  Contact our team
                </a>{" "}
                for personalized assistance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
