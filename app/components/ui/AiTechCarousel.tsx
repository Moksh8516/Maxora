// app/components/ui/AiTechCarousel.tsx
"use client";

import React from "react";
import {
  SiOpenai,
  SiAnthropic,
  SiTwilio,
  SiWhatsapp,
  SiN8N,
  SiZapier,
  SiLangchain,
  SiPostgresql,
  SiPython,
  SiGooglegemini,
  SiPerplexity,
} from "react-icons/si";

interface TechCompany {
  name: string;
  category: string;
  icon: React.ReactNode;
  brandColor?: string;
}

export const aiTechCompanies: TechCompany[] = [
  {
    name: "OpenAI",
    category: "GPT-4o & Reasoning",
    icon: <SiOpenai className="w-6 h-6 text-[#10a37f]" />,
    brandColor: "#10a37f",
  },
  {
    name: "Claude (Anthropic)",
    category: "LLM Intelligence & Vision",
    icon: <SiAnthropic className="w-6 h-6 text-[#d97706]" />,
    brandColor: "#d97706",
  },
  {
    name: "Google Gemini",
    category: "Multimodal AI & Grounding",
    icon: <SiGooglegemini className="w-6 h-6 text-[#4285f4]" />,
    brandColor: "#4285f4",
  },
  {
    name: "Perplexity AI",
    category: "Real-Time Search & Research",
    icon: <SiPerplexity className="w-6 h-6 text-[#20b2aa]" />,
    brandColor: "#20b2aa",
  },
  {
    name: "Sarvam AI",
    category: "Indic Voice & Vernacular AI",
    icon: (
      <svg
        className="w-6 h-6 text-[#f97316]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
        <circle cx="12" cy="12" r="3.5" fill="currentColor" />
      </svg>
    ),
    brandColor: "#f97316",
  },
  {
    name: "Vapi AI",
    category: "Voice Agent Engine",
    icon: (
      <svg
        className="w-6 h-6 text-[#3b82f6]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 7l8 12 8-12" />
        <path d="M12 3v8" />
        <circle cx="12" cy="11" r="1.5" fill="currentColor" />
      </svg>
    ),
    brandColor: "#3b82f6",
  },
  {
    name: "Retell AI",
    category: "Conversational Telephony",
    icon: (
      <svg
        className="w-6 h-6 text-[#6366f1]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        <path d="M15 4a5 5 0 0 1 5 5" />
        <path d="M18 1a8 8 0 0 1 6 6" />
      </svg>
    ),
    brandColor: "#6366f1",
  },
  {
    name: "ElevenLabs",
    category: "Speech & Audio Synthesis",
    icon: (
      <svg
        className="w-6 h-6 text-gray-900 dark:text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M7 4h3.2v16H7V4zm6.8 0H17v16h-3.2V4z" />
      </svg>
    ),
    brandColor: "#ffffff",
  },
  {
    name: "Twilio Voice",
    category: "SIP Trunking & Telephony",
    icon: <SiTwilio className="w-6 h-6 text-[#f22f46]" />,
    brandColor: "#f22f46",
  },
  {
    name: "WhatsApp Cloud",
    category: "Meta Business Messaging",
    icon: <SiWhatsapp className="w-6 h-6 text-[#25d366]" />,
    brandColor: "#25d366",
  },
  {
    name: "n8n",
    category: "Autonomous Pipeline Engine",
    icon: <SiN8N className="w-6 h-6 text-[#ff6d5a]" />,
    brandColor: "#ff6d5a",
  },
  {
    name: "Pabbly Connect",
    category: "Multi-App Workflow Flows",
    icon: (
      <svg
        className="w-6 h-6 text-[#00b4d8]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" rx="2" fill="currentColor" fillOpacity="0.25" />
        <rect x="14" y="3" width="7" height="7" rx="2" fill="currentColor" fillOpacity="0.25" />
        <rect x="14" y="14" width="7" height="7" rx="2" fill="currentColor" fillOpacity="0.25" />
        <path d="M6.5 10v7a2 2 0 0 0 2 2h5.5" />
        <path d="M10 6.5h4" />
        <circle cx="14" cy="17.5" r="1.5" fill="currentColor" />
      </svg>
    ),
    brandColor: "#00b4d8",
  },
  {
    name: "Make",
    category: "Integration Orchestration",
    icon: (
      <svg
        className="w-6 h-6 text-[#a855f7]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M13.6 2.4a3.6 3.6 0 0 0-3.2 0L3.1 6.2A3.6 3.6 0 0 0 1 9.4v5.2a3.6 3.6 0 0 0 2.1 3.2l7.3 3.8a3.6 3.6 0 0 0 3.2 0l7.3-3.8a3.6 3.6 0 0 0 2.1-3.2V9.4a3.6 3.6 0 0 0-2.1-3.2l-7.3-3.8zM12 6.5l5.5 2.9L12 12.3 6.5 9.4 12 6.5zm-6.2 5.2l4.7 2.5v5.8L5.8 17.5V11.7zm12.4 0v5.8l-4.7 2.5V14.2l4.7-2.5z" />
      </svg>
    ),
    brandColor: "#a855f7",
  },
  {
    name: "Zapier",
    category: "Multi-Platform Webhooks",
    icon: <SiZapier className="w-6 h-6 text-[#ff4a00]" />,
    brandColor: "#ff4a00",
  },
  {
    name: "LangChain",
    category: "Multi-Agent Framework",
    icon: <SiLangchain className="w-6 h-6 text-[#14b8a6]" />,
    brandColor: "#14b8a6",
  },
  {
    name: "PostgreSQL",
    category: "pgvector RAG Embeddings",
    icon: <SiPostgresql className="w-6 h-6 text-[#336791]" />,
    brandColor: "#336791",
  },
  {
    name: "Python & FastAPI",
    category: "Microservice AI Backends",
    icon: <SiPython className="w-6 h-6 text-[#3776ab]" />,
    brandColor: "#3776ab",
  },
];

interface AiTechCarouselProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function AiTechCarousel({
  title = "Powering Enterprise AI Voice, WhatsApp & Automation Systems",
  subtitle = "Built on industry-leading speech synthesis, telephony, LLMs, and workflow engines",
  className = "",
}: AiTechCarouselProps) {
  // Duplicate array 3 times for a continuous, uninterrupted infinite carousel
  const carouselItems = [
    ...aiTechCompanies,
    ...aiTechCompanies,
    ...aiTechCompanies,
  ];

  return (
    <section className={`py-12 md:py-16 overflow-hidden relative ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        {title && (
          <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            {title}
          </p>
        )}
        {subtitle && (
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      {/* Marquee Container with edge fading masks */}
      <div className="relative w-full overflow-hidden marquee-mask">
        <div className="animate-marquee-infinite flex gap-4 md:gap-6 py-2">
          {carouselItems.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/90 dark:border-gray-800/90 backdrop-blur-md shadow-xs hover:shadow-md hover:border-blue-500/50 hover:bg-white dark:hover:bg-gray-900 transition-all duration-200 shrink-0 select-none group cursor-pointer"
            >
              <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800/80 group-hover:scale-110 transition-transform flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-gray-900 dark:text-white leading-tight flex items-center gap-1.5">
                  {item.name}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
