// app/Services/web-development/WebDevelopmentClient.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Zap,
  Shield,
  Layers,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Database,
  Code2,
  Cpu,
  Monitor,
  Smartphone,
  Tablet,
  CheckCircle2,
  Clock,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  Server,
} from "lucide-react";
import ServiceFAQ from "@/app/components/section/service/ServiceFAQ";
import { getServiceBySlug } from "@/content/services";

const service = getServiceBySlug("web-development")!;

export default function WebDevelopmentClient() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"capabilities" | "comparison" | "process" | "deliverables">("capabilities");
  const [activeDevice, setActiveDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const stats = [
    { value: "99+", label: "Google PageSpeed Score", desc: "Optimized for sub-second Core Web Vitals" },
    { value: "<1.0s", label: "Largest Contentful Paint", desc: "Instant visual loading on mobile 4G" },
    { value: "100%", label: "Type-Safe TypeScript", desc: "Zero runtime crashes and reliable refactoring" },
    { value: "0", label: "Page Builder Bloat", desc: "Clean semantic code with zero third-party junk" },
  ];

  const clientProblems = [
    {
      title: "Slow Pages Drive 53% of Mobile Buyers Away",
      desc: "Every additional second of load time cuts conversion rates by 20%. Bloated templates and unoptimized plugins create frustrating lag that pushes buyers to competitors.",
      icon: <Clock className="w-5 h-5 text-red-500" />,
    },
    {
      title: "Fragile Plugins & Constant Update Breakages",
      desc: "Patching together dozen of WordPress plugins or no-code builder hacks leaves websites vulnerable to malware, white-screen crashes, and sudden API incompatibilities.",
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
    },
    {
      title: "Poor Google Search & Core Web Vitals Rankings",
      desc: "Google heavily penalizes sites failing Cumulative Layout Shift (CLS) or Interaction to Next Paint (INP). Without modern server-rendering, organic search visibility remains low.",
      icon: <Globe className="w-5 h-5 text-blue-500" />,
    },
  ];

  const caseStudies = [
    {
      title: "Commercial Credit & Lending SaaS Portal",
      image: "/portfolio/commercial-credit-saas.jpg",
      category: "Fintech Web Application",
      description: "Underwriting application and borrower verification dashboard handling complex multi-tiered loan calculations with real-time financial document ingestion.",
      metric: "Sub-800ms calculation response & SOC2 compliant data flow",
      tech: "Next.js, TypeScript, PostgreSQL, Prisma, Tailwind CSS",
    },
    {
      title: "Enterprise Analytics & Operations Dashboard",
      image: "/portfolio/saas-dashboard.jpg",
      category: "B2B SaaS Platform",
      description: "Interactive real-time monitoring platform displaying multi-tenant business KPIs, automated alert rules, and granular team permission matrices.",
      metric: "Handles 100k+ daily events with 60 FPS charts",
      tech: "React, Next.js App Router, Tailwind CSS, Redis, Chart.js",
    },
    {
      title: "Luxury Real Estate & Villa Booking Platform",
      image: "/portfolio/luxury-villa-portal.jpg",
      category: "High-End Booking Web App",
      description: "High-converting destination showcase featuring instant date availability search, high-resolution media galleries, and direct multi-currency checkout.",
      metric: "98/100 Mobile PageSpeed score & 4.2x inquiry rate",
      tech: "Next.js 15, Server Components, Stripe, Vercel Edge",
    },
    {
      title: "Multi-Location Property Marketplace Portal",
      image: "/portfolio/realestate-portal.png",
      category: "Directory & Marketplace",
      description: "Fast-loading property search portal with dynamic geospatial map filtering, agent lead routing, and automated inquiry CRM synchronization.",
      metric: "Indexed 15,000+ programmatic search landing pages",
      tech: "Next.js, Algolia Search, PostgreSQL, Mapbox",
    },
  ];

  const capabilities = [
    {
      icon: <Code2 className="w-6 h-6 text-white" />,
      tag: "Next.js 15 & React",
      title: "Modern Full-Stack Web Applications",
      description:
        "Engineered with Next.js 15, React Server Components (RSC), and TypeScript. We eliminate unnecessary client-side JavaScript, rendering HTML directly on the edge for instantaneous page loads and unmatched SEO indexability.",
      problemSolved: "Replaces heavy monolithic architectures with blazing fast server-rendered components.",
      clientBenefit: "Lightning-fast first load, flawless search engine crawling, and scalable modular code.",
      tech: "Next.js 15, React 19, TypeScript, Tailwind CSS",
    },
    {
      icon: <Database className="w-6 h-6 text-white" />,
      tag: "Scalable Data Layer",
      title: "High-Performance APIs & Relational Databases",
      description:
        "Custom REST and GraphQL backend architectures engineered with Node.js, PostgreSQL, and Prisma ORM. Designed with row-level security, connection pooling, and Redis caching for resilient performance under traffic spikes.",
      problemSolved: "Eliminates database bottlenecks and slow query timeouts during peak customer traffic.",
      clientBenefit: "Sub-50ms database queries and complete data ownership on private cloud infrastructure.",
      tech: "PostgreSQL, Prisma, Redis, Node.js, GraphQL",
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      tag: "Security & Auth",
      title: "Enterprise Authentication & Access Control",
      description:
        "Secure user authentication supporting OAuth (Google, Microsoft, GitHub), magic links, multi-factor authentication (MFA), and role-based access control (RBAC) to ensure sensitive business records remain protected.",
      problemSolved: "Stops unauthorized data access and prevents password breach vulnerabilities.",
      clientBenefit: "Enterprise-grade user session security without expensive third-party per-user fees.",
      tech: "NextAuth.js, JWT, bcrypt, Supabase Auth, WebCrypto",
    },
    {
      icon: <Server className="w-6 h-6 text-white" />,
      tag: "DevOps & Cloud",
      title: "Zero-Downtime CI/CD Cloud Deployments",
      description:
        "Automated deployment pipelines configured on Vercel, AWS, or Docker containers. Every code push runs automated TypeScript checks, linting, and unit tests before rolling out seamlessly without interrupting active users.",
      problemSolved: "Prevents botched manual deployments and website downtime during updates.",
      clientBenefit: "Instant rollbacks, automated preview environments for staging, and 99.99% uptime.",
      tech: "Vercel, AWS ECS, Docker, GitHub Actions, Cloudflare",
    },
  ];

  const comparison = [
    {
      feature: "First Contentful Paint (FCP)",
      maxora: "Sub-0.8s via React Server Components & Edge CDN",
      legacy: "2.5s - 4.5s waiting for bloated JS bundles",
    },
    {
      feature: "Search Engine Optimization (SEO)",
      maxora: "100% server-rendered semantic HTML + JSON-LD Schema",
      legacy: "Empty client-side shell requiring heavy Googlebot rendering",
    },
    {
      feature: "Code Maintainability",
      maxora: "Type-safe TypeScript codebase with reusable UI components",
      legacy: "Spaghetti code, conflicting WordPress plugins, or rigid builders",
    },
    {
      feature: "Codebase Ownership",
      maxora: "You own 100% of the Git repository with zero license fees",
      legacy: "Tied to proprietary website builders (Wix/Squarespace/Webflow)",
    },
    {
      feature: "Scalability Under Load",
      maxora: "Serverless edge scaling handling 50k+ concurrent visitors",
      legacy: "Server crashes or expensive dedicated hosting tiers required",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Discovery & Architecture Blueprint",
      description:
        "We analyze your business objectives, target audience personas, feature requirements, and technical integrations to create a comprehensive specification document.",
      clientProvides: "Business requirements, brand assets, and reference websites.",
    },
    {
      number: "02",
      title: "High-Fidelity Wireframes & UX/UI",
      description:
        "We craft pixel-perfect Figma designs for mobile, tablet, and desktop viewports, focusing on conversion psychology, typography hierarchy, and effortless navigation.",
      clientProvides: "Feedback and design milestone sign-off in Figma.",
    },
    {
      number: "03",
      title: "Next.js & TypeScript Engineering",
      description:
        "We build the frontend and backend using modern React Server Components, clean API endpoints, and accessible Tailwind CSS design tokens with weekly working staging demos.",
      clientProvides: "Content copy, imagery, and third-party API credentials.",
    },
    {
      number: "04",
      title: "Core Web Vitals & Security Hardening",
      description:
        "We execute rigorous cross-browser testing, mobile responsive audits, Google Lighthouse optimization, and OWASP security checks to guarantee 99+ PageSpeed scores.",
      clientProvides: "User acceptance testing on the live staging link.",
    },
    {
      number: "05",
      title: "DNS Cutover, Deployment & Handover",
      description:
        "We coordinate smooth zero-downtime DNS propagation, configure SSL certificates, set up Google Search Console, and transfer 100% repository ownership to your team.",
      clientProvides: "Domain DNS registrar access for domain pointing.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-violet-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 dark:bg-violet-900/30 border border-violet-200 dark:border-violet-800/50 mb-6">
              <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              <span className="text-xs md:text-sm font-semibold text-violet-700 dark:text-violet-300">
                Next.js 15 & React Full-Stack Engineering
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
              Bespoke Web Applications Engineered for{" "}
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Speed, Scale & Search
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              We design and engineer bespoke web platforms that load in under 1 second, rank on Google, and convert visitors into qualified buyers. Zero template bloat, zero vendor lock-in—just clean, high-performance TypeScript and React.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact?service=Web+Development"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white rounded-xl font-bold text-base hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Discuss Your Web Project Scope
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto px-8 py-4 border border-gray-300 dark:border-gray-700 hover:border-violet-500 text-gray-700 dark:text-gray-200 rounded-xl font-semibold text-base hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all flex items-center justify-center gap-2"
              >
                View Live Production Work
              </Link>
            </div>

            {/* Trust statement */}
            <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              100% Codebase Ownership • Clean Type-Safe Code • Direct Senior Developer Contact
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 md:p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800/80 backdrop-blur-md shadow-sm text-center"
              >
                <div className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-1">
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

      {/* Responsive Viewport Showcase with Real Asset */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50 border-t border-b border-gray-100 dark:border-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-violet-600 dark:text-violet-400 tracking-wider uppercase mb-2 block">
              Multi-Device Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
              Fluid Responsive Layouts Engineered for Every Screen
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              From wide 4K desktop workstations to compact mobile smartphones, our web applications adapt seamlessly with zero broken layouts or awkward text wrapping.
            </p>
          </div>

          {/* Device Showcase Frame */}
          <div className="rounded-3xl border border-gray-200/80 dark:border-gray-800/80 bg-white/90 dark:bg-gray-900/90 p-4 md:p-8 shadow-xl relative overflow-hidden">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-950 border border-gray-200/50 dark:border-gray-800/50">
              <Image
                src="/images/home/hero-devices-desktop.webp"
                alt="Multi-Device Web Application Engineering Showcase by Maxora Technology"
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>

            {/* Performance Metric Callouts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 text-xs text-center">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 block text-base mb-0.5">0.000 CLS</span>
                <span className="text-gray-500 dark:text-gray-400">Zero cumulative layout shifts during page loading</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 text-xs text-center">
                <span className="font-bold text-violet-600 dark:text-violet-400 block text-base mb-0.5">&lt; 40ms INP</span>
                <span className="text-gray-500 dark:text-gray-400">Instant interaction to next paint responsiveness</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 text-xs text-center">
                <span className="font-bold text-blue-600 dark:text-blue-400 block text-base mb-0.5">100% Accessible</span>
                <span className="text-gray-500 dark:text-gray-400">Strict WCAG AA accessibility compliance</span>
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
              Website Bottlenecks
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
              Why Generic Website Builders & Bloated Templates Fail
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              When business websites are built on generic page builders or multi-purpose themes, you trade initial convenience for ongoing performance penalties and security headaches.
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
                  Direct cause of high bounce rates and lost sales
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Live Project Showcase */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50 border-t border-b border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-violet-600 dark:text-violet-400 tracking-wider uppercase mb-2 block">
              Proven Production Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
              Real Web Platforms Engineered by Maxora
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Explore bespoke web applications we have delivered—custom-coded for verified client outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white dark:bg-gray-900/70 border border-gray-200/80 dark:border-gray-800/80 overflow-hidden shadow-sm hover:border-violet-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full bg-gray-100 dark:bg-gray-950 overflow-hidden">
                    <Image
                      src={cs.image}
                      alt={`${cs.title} - Maxora Technology Case Study`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-gray-900/90 text-violet-700 dark:text-violet-300 backdrop-blur-md shadow-sm border border-gray-200/50 dark:border-gray-700/50">
                        {cs.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-3">
                      {cs.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                      {cs.description}
                    </p>

                    <div className="p-4 rounded-xl bg-violet-50 dark:bg-violet-950/30 border border-violet-100 dark:border-violet-900/40 text-xs text-violet-900 dark:text-violet-300 font-medium mb-4 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0" />
                      <span><strong>Key Metric:</strong> {cs.metric}</span>
                    </div>
                  </div>
                </div>

                <div className="px-6 md:px-8 pb-6 pt-2 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span className="font-mono text-violet-600 dark:text-violet-400">Stack: {cs.tech}</span>
                  <Link
                    href="/contact?service=Web+Development"
                    className="text-violet-600 dark:text-violet-400 font-semibold hover:underline flex items-center gap-1"
                  >
                    Discuss Similar <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs: Capabilities, Architecture Comparison, Process & Deliverables */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Tabs Navigation */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 gap-1">
              <button
                onClick={() => setActiveTab("capabilities")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "capabilities"
                    ? "bg-white dark:bg-gray-800 text-violet-600 dark:text-violet-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Core Capabilities
              </button>
              <button
                onClick={() => setActiveTab("comparison")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "comparison"
                    ? "bg-white dark:bg-gray-800 text-violet-600 dark:text-violet-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Modern vs Legacy
              </button>
              <button
                onClick={() => setActiveTab("process")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "process"
                    ? "bg-white dark:bg-gray-800 text-violet-600 dark:text-violet-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                5-Stage Process
              </button>
              <button
                onClick={() => setActiveTab("deliverables")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "deliverables"
                    ? "bg-white dark:bg-gray-800 text-violet-600 dark:text-violet-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Scope & Deliverables
              </button>
            </div>
          </div>

          {/* TAB 1: CAPABILITIES */}
          {activeTab === "capabilities" && (
            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 hover:border-violet-500/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
                        {cap.icon}
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300">
                        {cap.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-3">
                      {cap.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                      {cap.description}
                    </p>

                    <div className="p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 mb-6 text-xs space-y-2">
                      <div className="text-red-700 dark:text-red-300">
                        <strong className="text-red-600 dark:text-red-400">Problem Solved:</strong> {cap.problemSolved}
                      </div>
                      <div className="text-emerald-700 dark:text-emerald-300">
                        <strong className="text-emerald-600 dark:text-emerald-400">Business Benefit:</strong> {cap.clientBenefit}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200/60 dark:border-gray-800/60 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-mono text-violet-600 dark:text-violet-400">Stack: {cap.tech}</span>
                    <Link
                      href="/contact?service=Web+Development"
                      className="text-violet-600 dark:text-violet-400 font-semibold hover:underline flex items-center gap-1"
                    >
                      Scope This <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: MODERN VS LEGACY ARCHITECTURE COMPARISON */}
          {activeTab === "comparison" && (
            <div className="rounded-3xl border border-gray-200/80 dark:border-gray-800/80 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white uppercase font-bold text-xs border-b border-gray-200 dark:border-gray-800">
                    <tr>
                      <th className="py-4 px-6">Architectural Pillar</th>
                      <th className="py-4 px-6 text-violet-600 dark:text-violet-400">Maxora Custom Next.js 15</th>
                      <th className="py-4 px-6 text-gray-500 dark:text-gray-400">Legacy Template / Builder</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    {comparison.map((row, idx) => (
                      <tr key={idx} className="bg-white dark:bg-gray-950/60 hover:bg-gray-50/50 dark:hover:bg-gray-900/50">
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                          {row.feature}
                        </td>
                        <td className="py-4 px-6 text-violet-700 dark:text-violet-300 font-medium">
                          ✓ {row.maxora}
                        </td>
                        <td className="py-4 px-6 text-gray-500 dark:text-gray-400">
                          ✗ {row.legacy}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: 5-STAGE PROCESS */}
          {activeTab === "process" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {steps.map((st, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-extrabold text-violet-600/30 dark:text-violet-400/30 font-mono mb-3 block">
                      {st.number}
                    </span>
                    <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                      {st.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {st.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-200/60 dark:border-gray-800/60 text-[11px] text-violet-600 dark:text-violet-400">
                    <strong>Client Provides:</strong> {st.clientProvides}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: DELIVERABLES */}
          {activeTab === "deliverables" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80">
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  Standard Deliverables
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400 mt-2 shrink-0" />
                    <span>Complete Figma design source file with design system components</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400 mt-2 shrink-0" />
                    <span>Production Next.js 15 & TypeScript Git repository (100% IP ownership)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400 mt-2 shrink-0" />
                    <span>Responsive mobile, tablet, and desktop layouts with Core Web Vitals audit</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400 mt-2 shrink-0" />
                    <span>Technical SEO setup: Meta tags, dynamic sitemap, and JSON-LD schema</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400 mt-2 shrink-0" />
                    <span>Zero-downtime deployment on Vercel or AWS with SSL certificate</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400 mt-2 shrink-0" />
                    <span>30-day post-launch warranty with bug resolution and monitoring</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80">
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  Custom & Enterprise Add-Ons
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 shrink-0" />
                    <span>Headless CMS integration (Sanity, Contentful, Strapi) for visual editing</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 shrink-0" />
                    <span>Multi-tenant database architectures and custom billing subscriptions (Stripe)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 shrink-0" />
                    <span>Custom algorithmic search engines (Algolia, Meilisearch, Elasticsearch)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 shrink-0" />
                    <span>Dedicated SLA maintenance and 24/7 uptime monitoring support</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Pricing & Project Scoping Section */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <span className="text-xs font-bold text-violet-600 dark:text-violet-400 tracking-wider uppercase mb-2 block">
            Transparent Scoping
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
            How Custom Web Projects Are Estimated
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            We don&apos;t charge rigid monthly fees or hidden markups. Every project has a clear milestone-based scope determined by pages, backend complexity, and integrations.
          </p>

          <div className="p-8 rounded-3xl bg-white dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800/80 text-left grid md:grid-cols-3 gap-6 shadow-sm">
            <div>
              <span className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase block mb-1">Corporate & Brand Web</span>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">High-Speed Marketing Site</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Conversion-focused marketing platform with CMS integration, SEO optimization, and sub-second load times.</p>
            </div>
            <div>
              <span className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase block mb-1">Interactive Portal</span>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Client Portal / Marketplace</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">User accounts, search filters, database-backed listings, dynamic forms, and payment gateway processing.</p>
            </div>
            <div>
              <span className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase block mb-1">Full SaaS Platform</span>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Custom Cloud Application</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Multi-tenant backend, complex business logic, analytics dashboards, and external API integrations.</p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/contact?service=Web+Development"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-bold hover:shadow-xl hover:shadow-violet-500/25 transition-all"
            >
              Request Custom Project Scope
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <ServiceFAQ service={service} />

      {/* Related Services */}
      <section className="py-16 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white text-center mb-8">
            Complementary Engineering Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/Services/ecommerce"
              className="p-6 rounded-2xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 hover:border-violet-500/50 transition-colors group flex items-center justify-between"
            >
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  eCommerce Development
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  High-converting online storefronts with headless Shopify and custom WooCommerce.
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-violet-600 dark:text-violet-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/Services/ai-automation"
              className="p-6 rounded-2xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 hover:border-violet-500/50 transition-colors group flex items-center justify-between"
            >
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  AI Agents & Workflow Automation
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Integrate voice AI callers and intelligent WhatsApp bots directly into your web funnel.
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-violet-600 dark:text-violet-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 border-t border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex p-4 rounded-3xl bg-violet-50 dark:bg-violet-900/30 border border-violet-200 dark:border-violet-800/50 mb-8">
            <Globe className="w-8 h-8 text-violet-600 dark:text-violet-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-gray-900 dark:text-white mb-6">
            Ready to Build a Fast, Scalable{" "}
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Web Application
            </span>
            ?
          </h2>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop losing visitors to slow loading speeds and outdated architectures. Share your project requirements with our engineering team for a detailed architectural roadmap and timeline.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push("/contact?service=Web+Development")}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white rounded-xl font-bold text-base hover:shadow-xl hover:shadow-violet-500/25 transition-all flex items-center justify-center gap-2 group"
            >
              Schedule Free Scope Consultation
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
            Guaranteed 24hr response • Direct engineer scoping • Zero vendor lock-in
          </p>
        </div>
      </section>
    </>
  );
}
