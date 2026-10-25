// app/Services/ai-automation/AiAutomationClient.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  PhoneCall,
  MessageSquareCode,
  Workflow,
  Bot,
  Zap,
  Clock,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Database,
  Building2,
  ShoppingBag,
  Stethoscope,
  Users,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
  Lock,
  Headphones,
} from "lucide-react";
import AiTechCarousel from "../../components/ui/AiTechCarousel";
import ServiceFAQ from "@/app/components/section/service/ServiceFAQ";
import { getServiceBySlug } from "@/content/services";

const service = getServiceBySlug("ai-automation")!;

export default function AiAutomationClient() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"features" | "useCases" | "process" | "deliverables">("features");
  const [activeArchView, setActiveArchView] = useState<"ecosystem" | "orchestrator">("ecosystem");

  const stats = [
    { value: "<60s", label: "Lead Response Time", desc: "Engage prospects at peak buying intent" },
    { value: "24/7/365", label: "Inbound Coverage", desc: "Never miss after-hours calls or inquiries" },
    { value: "80%", label: "Routine Queries Solved", desc: "Deflect tier-1 repetitive questions automatically" },
    { value: "0", label: "Headcount Scaling Stress", desc: "Handle 10x spikes without extra staffing overhead" },
  ];

  const clientProblems = [
    {
      title: "Delayed Lead Response Kills Ad ROI",
      desc: "Inbound leads grow cold within 5 minutes. When sales reps take hours to call back, over 70% of high-intent buyers have already contacted a competitor.",
      icon: <Clock className="w-5 h-5 text-red-500" />,
    },
    {
      title: "Staff Drowning in Repetitive Questions",
      desc: "Support and front-desk teams spend 60% of their day answering the same FAQs—pricing, scheduling, order lookups—burning payroll on low-leverage tasks.",
      icon: <AlertCircle className="w-5 h-5 text-amber-500" />,
    },
    {
      title: "Fragmented Data & Manual CRM Typing",
      desc: "Leads arriving from Meta Ads, Google Ads, website forms, and WhatsApp sit in silos until someone manually copies contact records into spreadsheets or CRMs.",
      icon: <Database className="w-5 h-5 text-blue-500" />,
    },
  ];

  const features = [
    {
      icon: <PhoneCall className="w-6 h-6 text-white" />,
      tag: "Voice AI Telephony",
      title: "AI Voice Assistants & Inbound Call Agents",
      description:
        "Human-grade conversational voice agents that answer customer phone calls, qualify buyer intent, answer complex domain questions, book calendar appointments, and route urgent callers to live team members.",
      problemSolved: "Eliminates missed calls, long hold times, and after-hours voicemail black holes.",
      clientBenefit: "Captures 100% of inbound phone opportunities with sub-500ms voice response latency.",
      capabilities: [
        "Natural conversational flow with sub-500ms conversational voice latency",
        "Direct Google Calendar & Calendly appointment booking",
        "Instant call transcription and CRM audio logging",
        "Seamless live human call forwarding on request",
      ],
      tech: "Twilio, Vapi, Retell AI, ElevenLabs",
    },
    {
      icon: <MessageSquareCode className="w-6 h-6 text-white" />,
      tag: "Official Meta API",
      title: "Intelligent WhatsApp Bots & Support Agents",
      description:
        "Official Meta WhatsApp Business Cloud API bots powered by custom AI knowledge retrieval (RAG). Converses in natural language, shares product catalogs, calculates pricing estimates, and collects verified lead information.",
      problemSolved: "Replaces clunky static button trees with human-grade natural language conversations.",
      clientBenefit: "Engages prospects in their favorite messaging app with instant, accurate answers.",
      capabilities: [
        "Official WhatsApp Business Cloud API with green-tick compatibility",
        "Knowledge retrieval from company documentation, catalogs, and PDFs",
        "Automated multi-language responses (English, Spanish, Hindi, etc.)",
        "Smart escalation to live human WhatsApp chat on demand",
      ],
      tech: "Meta Cloud API, OpenAI GPT-4o, pgvector, Node.js",
    },
    {
      icon: <Workflow className="w-6 h-6 text-white" />,
      tag: "Pipeline Speed",
      title: "Autonomous Lead Automation & CRM Pipelines",
      description:
        "Instant ingestion from Meta Ads, Google Ads, website forms, and landing pages. Enriches caller data, calculates lead score, triggers immediate WhatsApp/SMS/Email notifications, and updates your pipeline within seconds.",
      problemSolved: "Stops manual data entry and closes the gap between ad click and first touch.",
      clientBenefit: "Converts 2x to 3x more paid ad clicks by responding while prospect interest is hot.",
      capabilities: [
        "Zero-delay lead notifications to sales reps on WhatsApp & Slack",
        "Multi-step automated follow-up cadences that pause when prospect replies",
        "Two-way synchronization with HubSpot, Salesforce, or custom CRMs",
        "Dynamic lead qualification and conditional routing rules",
      ],
      tech: "n8n, Make, Custom Webhooks, PostgreSQL",
    },
    {
      icon: <Bot className="w-6 h-6 text-white" />,
      tag: "Document Intelligence",
      title: "Autonomous AI Agents & Document Extraction",
      description:
        "Specialized autonomous AI workers that extract structured data from messy PDFs, vendor invoices, purchase orders, customer emails, and contracts—pushing verified records straight into your database without manual typing.",
      problemSolved: "Eliminates tedious manual copy-pasting from scanned documents and invoices.",
      clientBenefit: "Reduces processing time from hours to seconds with 99%+ field extraction accuracy.",
      capabilities: [
        "Automated invoice & receipt parsing into accounting software",
        "Contract clause summarization and compliance risk alerts",
        "Email inbox triage and automated draft replies",
        "Multi-agent reasoning with structured JSON outputs",
      ],
      tech: "LangChain, Claude 3.5 Sonnet, Python, OCR",
    },
  ];

  const deliverables = [
    {
      category: "Standard Deliverables",
      items: [
        "Custom workflow blueprint & communication flowcharts",
        "Vector database setup with curated company documentation",
        "Prompt hardening with strict anti-hallucination guardrails",
        "Telephony trunk configuration (Twilio/Vapi/Retell)",
        "Meta WhatsApp Business Cloud API verification & setup",
        "CRM webhook integration and field mapping",
        "Comprehensive user training session & staff runbook",
        "30-day post-launch optimization & conversation tuning",
      ],
    },
    {
      category: "Custom & Enterprise Scope",
      items: [
        "Multi-agent reasoning pipelines with LangChain/LangGraph",
        "Private on-premise LLM deployment (Ollama / vLLM / AWS Bedrock)",
        "Custom enterprise ERP bidirectional synchronization",
        "HIPAA/SOC2 compliant data masking and audit logging",
        "Custom voice cloning and brand tone engineering",
      ],
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
      title: "Bottleneck Audit & Architecture Design",
      description:
        "We audit your customer communication touchpoints, inbound lead flow, and repetitive staff workflows to identify high-impact automation targets.",
      clientProvides: "Current workflow overview, FAQ documents, and CRM access.",
    },
    {
      number: "02",
      title: "Knowledge Ingestion & Guardrail Hardening",
      description:
        "We index your business knowledge, service catalogs, and objection scripts into vector databases with strict anti-hallucination boundaries.",
      clientProvides: "Approved answers to standard questions and edge-case policies.",
    },
    {
      number: "03",
      title: "Telephony, WhatsApp & CRM Integration",
      description:
        "We configure phone trunks (Twilio/Vapi), Meta Cloud API webhooks, calendar scheduling endpoints, and CRM pipelines with end-to-end failovers.",
      clientProvides: "API keys or administrative invitations for connected tools.",
    },
    {
      number: "04",
      title: "Simulation, Team Training & Live Rollout",
      description:
        "We run hundreds of synthetic edge-case conversations, train your team on monitoring dashboards, and switch traffic over with live human escalation active.",
      clientProvides: "Final team sign-off and live test call validation.",
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
                Autonomous Lead Pipelines
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Eliminate missed calls, respond to inbound leads in under 60 seconds, and automate repetitive customer operations. We engineer custom AI agents that operate 24/7 with human-grade conversational intelligence and zero hallucinations.
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

            {/* Trust statement */}
            <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Strict data privacy • Private vector knowledge bases • Zero third-party model training on your data
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 md:p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800/80 backdrop-blur-md shadow-sm text-center"
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

      {/* Visual AI Architecture & Orchestration Showcase */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50 border-t border-b border-gray-100 dark:border-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2 block">
              System Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
              Multi-Agent Orchestration & Communication Flow
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Explore how Maxora connects your telephony, messaging channels, AI reasoning engines, and internal CRM tools into an autonomous, closed-loop operating system.
            </p>

            {/* Architecture Toggle Buttons */}
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => setActiveArchView("ecosystem")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeArchView === "ecosystem"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600"
                }`}
              >
                <Layers className="w-4 h-4" />
                AI Ecosystem Architecture
              </button>
              <button
                onClick={() => setActiveArchView("orchestrator")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeArchView === "orchestrator"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600"
                }`}
              >
                <Cpu className="w-4 h-4" />
                Live Orchestrator Workflow
              </button>
            </div>
          </div>

          {/* Interactive Image Frame */}
          <div className="rounded-3xl border border-gray-200/80 dark:border-gray-800/80 bg-white/90 dark:bg-gray-900/90 p-4 md:p-6 shadow-xl relative overflow-hidden">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-950">
              {activeArchView === "ecosystem" ? (
                <Image
                  src="/images/AI Automation Ecosystem Hub.png"
                  alt="AI Automation Ecosystem Hub Architecture Diagram by Maxora Technology"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
              ) : (
                <Image
                  src="/images/AI Automation Orchestrator Workflow.png"
                  alt="AI Automation Orchestrator Workflow Pipeline Diagram by Maxora Technology"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              )}
            </div>

            {/* Architecture Explanation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 text-xs">
                <span className="font-bold text-blue-600 dark:text-blue-400 block mb-1">1. Omni-Channel Ingestion</span>
                <p className="text-gray-600 dark:text-gray-300">Inbound phone calls (Twilio/Vapi), WhatsApp messages, Meta Ads webhooks, and contact forms ingested with sub-second response.</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 text-xs">
                <span className="font-bold text-blue-600 dark:text-blue-400 block mb-1">2. RAG & Guardrailed Reasoning</span>
                <p className="text-gray-600 dark:text-gray-300">Vector embeddings search your company docs to formulate grounded answers with zero hallucinations and strict privacy constraints.</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 text-xs">
                <span className="font-bold text-blue-600 dark:text-blue-400 block mb-1">3. Automated Execution & Escalation</span>
                <p className="text-gray-600 dark:text-gray-300">Autonomous calendar booking, CRM record creation, Slack alerts, and warm transfers to human staff when caller requests live assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Client's Real Problems Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-red-600 dark:text-red-400 tracking-wider uppercase mb-2 block">
              Operational Friction
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
              The Real Cost of Slow Response & Disconnected Workflows
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              When communication channels rely entirely on manual human effort, high-value opportunities slip through the cracks every single day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clientProblems.map((prob, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-gray-50/80 dark:bg-gray-900/60 border border-red-200 dark:border-red-900/30 hover:border-red-400 dark:hover:border-red-800 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 flex items-center justify-center mb-6">
                    {prob.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-3">
                    {prob.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {prob.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/60 dark:border-gray-800/60 text-xs text-red-600 dark:text-red-400 font-medium">
                  Direct revenue leak in manual operations
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs: Capabilities, Use Cases, Process & Deliverables */}
      <section className="py-20 md:py-28 bg-gray-50/50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Tabs Navigation */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 gap-1">
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
                Industry Use Cases
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
              <button
                onClick={() => setActiveTab("deliverables")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "deliverables"
                    ? "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Scope & Deliverables
              </button>
            </div>
          </div>

          {/* TAB 1: CORE AI CAPABILITIES */}
          {activeTab === "features" && (
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 hover:border-blue-500/50 transition-all flex flex-col justify-between"
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

                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200/60 dark:border-gray-700/60 mb-6 text-xs space-y-2">
                      <div className="text-red-700 dark:text-red-300">
                        <strong className="text-red-600 dark:text-red-400">Problem Solved:</strong> {feat.problemSolved}
                      </div>
                      <div className="text-emerald-700 dark:text-emerald-300">
                        <strong className="text-emerald-600 dark:text-emerald-400">Business Benefit:</strong> {feat.clientBenefit}
                      </div>
                    </div>

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
                    <span className="font-mono text-blue-600 dark:text-blue-400">Stack: {feat.tech}</span>
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

          {/* TAB 2: INDUSTRY USE CASES */}
          {activeTab === "useCases" && (
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((uc, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center mb-6 shadow-sm">
                    {uc.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2">
                    {uc.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {uc.description}
                  </p>
                  <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-xs text-blue-900 dark:text-blue-300 font-medium flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span><strong>Measured Result:</strong> {uc.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: STEP-BY-STEP PROCESS */}
          {activeTab === "process" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((st, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-4xl font-extrabold text-blue-600/30 dark:text-blue-400/30 font-mono mb-4 block">
                      {st.number}
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      {st.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {st.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-200/60 dark:border-gray-800/60 text-[11px] text-blue-600 dark:text-blue-400">
                    <strong>Client Provides:</strong> {st.clientProvides}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: DELIVERABLES & SCOPE */}
          {activeTab === "deliverables" && (
            <div className="grid md:grid-cols-2 gap-8">
              {deliverables.map((del, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80"
                >
                  <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    {del.category}
                  </h3>
                  <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
                    {del.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
        className="bg-white dark:bg-gray-950 border-t border-b border-gray-200/80 dark:border-gray-800/80"
      />

      {/* Why Choose Maxora Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2 block">
              The Maxora Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
              Why High-Growth Companies Trust Maxora for AI
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              We do not build toy demo bots. We engineer mission-critical automation systems with real error handling, human fallback, and total data privacy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80">
              <Lock className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-6" />
              <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-3">100% Data Confidentiality</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Your company manuals, customer communications, and CRM data are stored in private databases and never utilized to train third-party public models.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80">
              <Headphones className="w-10 h-10 text-cyan-600 dark:text-cyan-400 mb-6" />
              <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-3">Seamless Human Warm Transfer</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Whenever a caller expresses complex needs or asks to speak with a human, the agent transfers the active phone call or WhatsApp thread instantly with context.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80">
              <Cpu className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-6" />
              <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-3">No Vendor Lock-In</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                You retain complete ownership of all prompt templates, automation workflows, telephony numbers, and API credentials. No recurring platform lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Engagement Model Section */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2 block">
            Transparent Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
            How AI Automation Projects Are Scoped
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Pricing depends on the number of communication channels (Voice, WhatsApp, Web), telephony minutes required, and custom CRM integration depth.
          </p>

          <div className="p-8 rounded-3xl bg-white dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800/80 text-left grid md:grid-cols-3 gap-6 shadow-sm">
            <div>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase block mb-1">Single Channel Agent</span>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">WhatsApp / Voice Starter</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Single channel AI agent with RAG knowledge base and automated calendar scheduling.</p>
            </div>
            <div>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase block mb-1">Omni-Channel Suite</span>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Voice + WhatsApp + CRM</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Inbound phone agent plus WhatsApp bot and bidirectional two-way CRM lead syncing.</p>
            </div>
            <div>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase block mb-1">Enterprise Custom</span>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Multi-Agent Workflow</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Document parsing, autonomous invoice processing, and custom on-premise LLM hosting.</p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/contact?service=AI+%26+Automation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold hover:shadow-xl hover:shadow-blue-500/25 transition-all"
            >
              Request Custom Project Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <ServiceFAQ service={service} />

      {/* Related Services Links */}
      <section className="py-16 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white text-center mb-8">
            Complementary Engineering Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/Services/crm-erp"
              className="p-6 rounded-2xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 hover:border-blue-500/50 transition-colors group flex items-center justify-between"
            >
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Custom CRM & ERP Systems
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Connect your AI agents to custom business dashboards with zero per-seat fees.
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/Services/web-development"
              className="p-6 rounded-2xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 hover:border-blue-500/50 transition-colors group flex items-center justify-between"
            >
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Custom Web Development
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  High-speed Next.js web applications with seamless AI agent web widgets.
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 border-t border-gray-100 dark:border-gray-900">
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
            Every business has manual communication friction. Share your repetitive bottlenecks with our engineering team for a clear architectural scope and milestone estimate.
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
