// app/components/ui/AiTechCarousel.tsx
"use client";

import React from "react";
import {
  SiAnthropic,
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
    icon: (
      <svg className="w-6 h-6 text-[#10a37f]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.599 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4042-.6669zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.6602zm-12.641-4.13a4.4755 4.4755 0 0 1 2.8764 1.0408l-.1419.0805-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369l-2.02-1.1686a.071.071 0 0 1-.038-.052V9.8971a4.504 4.504 0 0 1 4.4945-4.4944zm1.5142 9.079l2.7583-1.5946 2.7582 1.5946v3.1892l-2.7582 1.5946-2.7583-1.5946z"/>
      </svg>
    ),
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
    icon: (
      <svg className="w-6 h-6 text-[#f22f46]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.8a7.2 7.2 0 1 1 0 14.4 7.2 7.2 0 0 1 0-14.4zm0 2.4a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm-1.8 2.4a1.8 1.8 0 1 0 3.6 0 1.8 1.8 0 0 0-3.6 0z" />
      </svg>
    ),
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
