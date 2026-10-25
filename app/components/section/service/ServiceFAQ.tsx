// app/components/section/service/ServiceFAQ.tsx
"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import type { ServiceContent, ServiceFAQItem } from "@/content/services";

interface ServiceFAQProps {
  service?: ServiceContent;
  faqs?: ServiceFAQItem[];
  title?: string;
}

export default function ServiceFAQ({ service, faqs, title }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeFaqs = faqs || service?.faqs || [];
  const displayTitle = title || service?.title || "This Service";

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!activeFaqs || activeFaqs.length === 0) return null;

  return (
    <section
      aria-labelledby="service-faq-heading"
      className="py-16 lg:py-24 bg-gray-50/60 dark:bg-[#070D1B]/60 border-t border-gray-200/80 dark:border-white/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#056BFF]/10 text-[#056BFF] dark:text-[#00D5F2] text-xs font-bold uppercase tracking-wider mb-4">
              <HelpCircle className="w-4 h-4" />
              <span>Questions & Answers</span>
            </div>

            <h2
              id="service-faq-heading"
              className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 dark:text-white tracking-tight mb-4"
            >
              Frequently Asked Questions
            </h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-[#AFC5E1] max-w-2xl mx-auto">
              Clear answers about deliverables, process, and technical requirements for {displayTitle}.
            </p>
          </div>

          {/* Accessible FAQ Accordion */}
          <div className="space-y-4">
            {activeFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white dark:bg-[#081226] border-[#056BFF]/40 dark:border-[#00D5F2]/40 shadow-md"
                      : "bg-white/80 dark:bg-[#081226]/60 border-gray-200/80 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`service-faq-answer-${index}`}
                    id={`service-faq-question-${index}`}
                    className="w-full min-h-[44px] px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#056BFF] focus-visible:ring-offset-2"
                  >
                    <span className="text-base sm:text-lg font-bold font-heading text-gray-900 dark:text-white">
                      {faq.question}
                    </span>
                    <div
                      className={`p-2 rounded-xl shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? "bg-[#056BFF] text-white rotate-180"
                          : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-[#AFC5E1]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <div
                    id={`service-faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`service-faq-question-${index}`}
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen
                        ? "max-h-96 opacity-100 px-6 pb-6"
                        : "max-h-0 opacity-0 px-6 pb-0"
                    }`}
                  >
                    <p className="text-sm sm:text-base text-gray-600 dark:text-[#AFC5E1] leading-relaxed pt-2 border-t border-gray-100 dark:border-white/5">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
