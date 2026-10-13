// app/Services/ai-automation/AiAutomationClient.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Mic,
  MessageSquareCode,
  Workflow,
  Bot,
  Zap,
  PhoneCall,
  Clock,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Database,
  Calendar,
  FileText,
  Building2,
  ShoppingBag,
  Stethoscope,
  Users,
} from "lucide-react";
import AiTechCarousel from "../../components/ui/AiTechCarousel";

export default function AiAutomationClient() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"features" | "useCases" | "process">("features");

  const stats = [
    { value: "<60s", label: "Lead Response Time", desc: "Respond while buyer intent is peak" },
    { value: "24/7/365", label: "Inbound Coverage", desc: "Never lose after-hours inquiries" },
    { value: "80%", label: "Routine Queries Solved", desc: "Deflect repetitive questions automatically" },
    { value: "0", label: "Headcount Scaling Stress", desc: "Handle 10x spikes without extra hiring" },
  ];

  const features = [
    {
      icon: <PhoneCall className="w-6 h-6 text-white" />,
      tag: "Voice AI",
      title: "AI Voice Assistants & Inbound Call Agents",
      description:
        "Human-grade conversational voice agents that answer customer phone calls, qualify buyer intent, answer complex questions, book calendar appointments, and route urgent calls to your live team.",
      capabilities: [
        "Natural conversational flow with sub-500ms voice response latency",
        "Direct Google Calendar & Calendly appointment scheduling",
        "Call transcript & audio recording logged into CRM instantly",
        "Seamless live human call forwarding when requested",
      ],
      tech: "Twilio, Vapi, Retell AI, ElevenLabs",
    },
    {
      icon: <MessageSquareCode className="w-6 h-6 text-white" />,
      tag: "WhatsApp AI",
      title: "Intelligent WhatsApp Bots & Support Agents",
      description:
        "Official Meta WhatsApp Business Cloud API bots powered by custom AI knowledge retrieval (RAG). Converses in natural language, shares product catalogs, calculates pricing estimates, and collects verified lead information.",
      capabilities: [
        "Official WhatsApp Business Cloud API with green-tick support",
        "Knowledge retrieval from your company docs, catalogs, and PDFs",
        "Automated multi-language responses (English, Hindi, and more)",
        "Smart escalation to human WhatsApp chat on demand",
      ],
      tech: "Meta Cloud API, OpenAI GPT-4o, pgvector, Node.js",
    },
    {
      icon: <Workflow className="w-6 h-6 text-white" />,
      tag: "Pipeline Speed",
      title: "Autonomous Lead Automation & CRM Pipelines",
      description:
        "Instant ingestion from Meta Ads, Google Ads, website forms, and landing pages. Enriches caller data, calculates lead score, triggers immediate WhatsApp/SMS/Email notifications, and updates your pipeline within seconds.",
      capabilities: [
        "Zero-delay lead notification to sales reps on WhatsApp & Slack",
        "Multi-step automated follow-up cadences that pause on reply",
        "Two-way synchronization with HubSpot, Salesforce, or custom CRMs",
        "Dynamic lead qualification and conditional routing rules",
      ],
      tech: "n8n, Make, Custom Webhooks, PostgreSQL",
    },
    {
      icon: <Bot className="w-6 h-6 text-white" />,
      tag: "Document AI",
      title: "Autonomous AI Agents & Document Extraction",
      description:
        "Specialized autonomous AI workers that extract structured data from messy PDFs, vendor invoices, purchase orders, customer emails, and contracts—pushing verified records straight into your database without manual typing.",
      capabilities: [
        "Automated invoice & receipt parsing into accounting software",
        "Contract clause summarization and compliance risk alerts",
        "Email inbox triage and automated draft replies",
        "Multi-agent reasoning with structured JSON outputs",
      ],
      tech: "LangChain, Claude 3.5 Sonnet, Python, OCR",
    },
  ];

  const useCases = [
    {
      icon: <Stethoscope className="w-6 h-6 text-blue-500" />,
      title: "Healthcare Clinics & Diagnostics",
      description: "Answer patient phone calls 24/7, book appointments into doctor schedules, send WhatsApp appointment reminders, and answer test preparation FAQs.",
      impact: "Zero missed appointments & 70% reduction in front-desk call load",
    },
    {
      icon: <Building2 className="w-6 h-6 text-indigo-500" />,
      title: "Real Estate & High-Ticket B2B",
      description: "Qualify inbound ad leads within 30 seconds via WhatsApp, verify budget and timeline, and auto-book site visits or discovery calls directly on sales reps' calendars.",
      impact: "3x higher lead-to-meeting booking rate",
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-cyan-500" />,
      title: "eCommerce & D2C Brands",
      description: "Automate order tracking lookups, return requests, and product recommendation queries on WhatsApp. Send abandoned cart recovery messages that convert.",
      impact: "40% faster resolution time & recovered cart revenue",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "Professional Services & Agencies",
      description: "Automate client onboarding intake, document collection, invoice reminders, and weekly progress email updates with zero manual staff effort.",
      impact: "Saves 15+ hours of manual administrative work each week",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Workflow Audit & Architecture Design",
      description:
        "We audit your current communication channels, lead funnels, and repetitive manual tasks to pinpoint high-ROI automation opportunities.",
    },
    {
      number: "02",
      title: "Knowledge Base & Agent Prompt Hardening",
      description:
        "We ingest your company documentation, product catalogs, FAQs, and brand voice into secure vector databases with strict anti-hallucination guardrails.",
    },
    {
      number: "03",
      title: "Telephony, WhatsApp & CRM Integration",
      description:
        "We configure telephony trunks (Twilio/Vapi), Meta Cloud API, CRM webhooks, and calendar scheduling with end-to-end reliability and failovers.",
    },
    {
      number: "04",
      title: "Edge-Case Testing & Production Launch",
      description:
        "We rigorously test edge-case conversations, train your team on monitoring dashboards, and fine-tune prompts based on real buyer interactions.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/10 via-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50 mb-6">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-xs md:text-sm font-semibold text-blue-700 dark:text-blue-300">
                Modern AI & Automation Engineering
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
              AI Voice Agents, WhatsApp Bots &{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                Lead Automation
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Eliminate missed calls, respond to leads in seconds, and automate repetitive customer interactions. We engineer custom AI agents that operate 24/7 with human-grade conversational intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact?service=AI+%26+Automation"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white rounded-xl font-bold text-base hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Discuss Your AI Automation Scope
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/ai-visibility-check"
                className="w-full sm:w-auto px-8 py-4 border border-gray-300 dark:border-gray-700 hover:border-blue-500 text-gray-700 dark:text-gray-200 rounded-xl font-semibold text-base hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all flex items-center justify-center gap-2"
              >
                Free AI Visibility Check
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 md:p-6 rounded-2xl bg-white/70 dark:bg-gray-900/70 border border-gray-200/80 dark:border-gray-800/80 backdrop-blur-md shadow-sm text-center"
              >
                <div className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Sections with Navigation Tabs */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <button
                onClick={() => setActiveTab("features")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "features"
                    ? "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Core AI Capabilities
              </button>
              <button
                onClick={() => setActiveTab("useCases")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "useCases"
                    ? "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Real-World Use Cases
              </button>
              <button
                onClick={() => setActiveTab("process")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "process"
                    ? "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Deployment Process
              </button>
            </div>
          </div>

          {/* TAB 1: FEATURES */}
          {activeTab === "features" && (
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 hover:border-blue-500/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                        {feat.icon}
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                        {feat.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-3">
                      {feat.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                      {feat.description}
                    </p>

                    <div className="space-y-2.5 mb-6">
                      {feat.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200/60 dark:border-gray-800/60 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-mono">Stack: {feat.tech}</span>
                    <Link
                      href="/contact?service=AI+%26+Automation"
                      className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-1"
                    >
                      Scope This <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: USE CASES */}
          {activeTab === "useCases" && (
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((uc, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center mb-6 shadow-sm">
                    {uc.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2">
                    {uc.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {uc.description}
                  </p>
                  <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-xs text-blue-900 dark:text-blue-300 font-medium">
                    ⚡ <strong>Proven Impact:</strong> {uc.impact}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: PROCESS */}
          {activeTab === "process" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((st, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 relative"
                >
                  <span className="text-4xl font-extrabold text-blue-600/20 dark:text-blue-400/20 font-mono mb-4 block">
                    {st.number}
                  </span>
                  <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                    {st.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Infinite Tech Companies Logo Carousel */}
      <AiTechCarousel
        title="Enterprise AI & Automation Infrastructure"
        subtitle="We build production-grade workflows integrating world-class speech, LLM, telephony, and automation platforms"
        className="bg-gray-50/80 dark:bg-gray-900/50 border-t border-b border-gray-200/80 dark:border-gray-800/80"
      />

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex p-4 rounded-3xl bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50 mb-8">
            <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-gray-900 dark:text-white mb-6">
            Ready to Put Your Operations on{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              Autonomous Autopilot
            </span>
            ?
          </h2>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every business has repetitive communication and data friction. Share your manual bottlenecks with our engineering team for a clear architectural scope and milestone estimate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push("/contact?service=AI+%26+Automation")}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold text-base hover:shadow-xl hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 group"
            >
              Request Custom Automation Scope
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => router.push("/Services")}
              className="w-full sm:w-auto px-8 py-4 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-base hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Browse All Services
            </button>
          </div>

          <p className="mt-8 text-xs text-gray-500 dark:text-gray-400">
            Guaranteed 24hr response • Requirement-based scoping • Zero hidden platform lock-in
          </p>
        </div>
      </section>
    </>
  );
}
