// app/components/section/FAQ.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight, MessageCircle } from "lucide-react";
import { homepageFaqs } from "../../lib/faq-data";

export { homepageFaqs };

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#F4F7FC] dark:bg-[#070D1B] text-[#050A15] dark:text-[#F4F7FC] py-24 lg:py-32 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#056BFF]/10 text-[#056BFF] dark:text-[#00D5F2] text-xs font-bold uppercase tracking-wider mb-4">
              <HelpCircle className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-heading tracking-tight mb-4 text-gray-900 dark:text-white">
              Questions & Answers
            </h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-[#AFC5E1] leading-relaxed">
              Straightforward answers about our process, pricing, and how we work with you.
            </p>
          </div>

          {/* Accessible FAQ Accordion */}
          <div className="space-y-4 mb-14">
            {homepageFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white dark:bg-[#081226] border-[#056BFF]/40 dark:border-[#00D5F2]/40 shadow-lg"
                      : "bg-white/80 dark:bg-[#081226]/60 border-gray-200/80 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#056BFF]"
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
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-96 opacity-100 px-6 pb-6" : "max-h-0 opacity-0 px-6 pb-0"
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

          {/* Additional Help & Direct WhatsApp */}
          <div className="rounded-2xl bg-white dark:bg-[#081226] border border-gray-200/80 dark:border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#056BFF]/10 text-[#056BFF] dark:text-[#00D5F2] flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">
                  Have a question about your project?
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-[#AFC5E1]">
                  Speak directly with our team to discuss your ideas and get straightforward advice.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-xs uppercase tracking-wider hover:bg-[#056BFF] dark:hover:bg-[#00D5F2] dark:hover:text-[#050A15] transition-colors shrink-0"
            >
              <span>Let&apos;s connect</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
