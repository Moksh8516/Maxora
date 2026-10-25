// app/Services/seo-aeo/SeoAeoClient.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Sparkles,
  TrendingUp,
  BarChart,
  Bot,
  Zap,
  Globe,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  AlertTriangle,
  FileCode,
  Layers,
  LineChart,
  Cpu,
} from "lucide-react";
import ServiceFAQ from "@/app/components/section/service/ServiceFAQ";
import { getServiceBySlug } from "@/content/services";

const service = getServiceBySlug("seo-aeo")!;

export default function SeoAeoClient() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"pillars" | "comparison" | "process" | "deliverables">("pillars");
  const [activeVisual, setActiveVisual] = useState<"chart" | "animation">("animation");

  const stats = [
    { value: "#1 Rankings", label: "High-Intent Keyword Wins", desc: "Target buyers searching with commercial purchase intent" },
    { value: "LLM Citations", label: "ChatGPT & Perplexity Visibility", desc: "Surfaced directly in AI-generated answer summaries" },
    { value: "<1.0s", label: "Core Web Vitals Metric", desc: "Passing Google's strict real-user speed benchmarks" },
    { value: "Rich Snippets", label: "Structured JSON-LD Schema", desc: "Star ratings, FAQ accordions & Knowledge Panels" },
  ];

  const clientProblems = [
    {
      title: "AI Overviews & Zero-Click Search Stealing Traffic",
      desc: "Google AI Overviews, Perplexity, and ChatGPT answer buyer questions directly. Websites lacking structured semantic entities get completely bypassed in AI answers.",
      icon: <Bot className="w-5 h-5 text-red-500" />,
    },
    {
      title: "Failing Core Web Vitals Penalizes Organic Rankings",
      desc: "Websites with slow Largest Contentful Paint (LCP) and sluggish Interaction to Next Paint (INP) are demoted by Google algorithms in favor of fast, responsive competitors.",
      icon: <Clock className="w-5 h-5 text-amber-500" />,
    },
    {
      title: "Keyword Stuffing No Longer Works in 2026",
      desc: "Old-school SEO agencies selling generic 500-word blog posts fail because modern search engines rank topical depth, verified authorship (E-E-A-T), and technical architecture.",
      icon: <AlertTriangle className="w-5 h-5 text-blue-500" />,
    },
  ];

  const pillars = [
    {
      icon: <Bot className="w-6 h-6 text-white" />,
      tag: "Answer Engine Optimization",
      title: "AI Answer Engine Optimization (AEO) & llms.txt",
      description:
        "We structure your website data specifically for AI crawlers like ChatGPT Search, Perplexity AI, Claude, and Gemini. By deploying machine-readable /llms.txt and /llms-full.txt files in Open Knowledge Format (OKF), your brand becomes the authoritative cited source.",
      problemSolved: "Stops your brand from being omitted in conversational AI queries and agent searches.",
      clientBenefit: "Wins citations, recommendation endorsements, and high-converting referral traffic from AI engines.",
      tech: "llms.txt, Open Knowledge Format (OKF), Semantic Entities, Vector Embeddings",
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      tag: "Speed Engineering",
      title: "Technical Core Web Vitals & Server Optimization",
      description:
        "Sub-1.0s Largest Contentful Paint (LCP), zero Cumulative Layout Shift (CLS), and sub-50ms Interaction to Next Paint (INP). We eliminate render-blocking CSS, optimize image payloads, and configure Edge CDN caching.",
      problemSolved: "Eliminates Google search ranking penalties caused by sluggish page rendering.",
      clientBenefit: "Greens every Google Lighthouse metric to maximize organic ranking potential.",
      tech: "Next.js App Router, Edge Caching, WebP/AVIF, Critical CSS",
    },
    {
      icon: <FileCode className="w-6 h-6 text-white" />,
      tag: "Rich Snippets",
      title: "Advanced JSON-LD Structured Data & Entity Schemas",
      description:
        "Handcrafted JSON-LD schema markup for FAQPage, Service, Organization, SoftwareApplication, and Breadcrumbs. Validated against Google Rich Results standards to capture expanded real estate on search engine result pages.",
      problemSolved: "Overcomes plain search listings that blend into the crowd with low click-through rates.",
      clientBenefit: "Captures 35%+ higher CTR with FAQ accordions, author trust badges, and rich snippets.",
      tech: "Schema.org, JSON-LD, Google Search Console, Rich Results Test",
    },
    {
      icon: <Layers className="w-6 h-6 text-white" />,
      tag: "Programmatic Scale",
      title: "Programmatic SEO & High-Intent Landing Pages",
      description:
        "Engineering data-driven page templates that target thousands of long-tail high-intent search queries. Perfect for SaaS comparison pages, location-specific services, and marketplace directories without duplicating thin content.",
      problemSolved: "Replaces manual page creation with scalable, data-backed landing page generation.",
      clientBenefit: "Captures hundreds of striking-distance commercial search queries automatically.",
      tech: "Next.js Static Generation, Dynamic Route Segments, PostgreSQL",
    },
  ];

  const searchComparison = [
    {
      dimension: "Primary Objective",
      aeo: "Direct factual citation in AI synthesized answers (ChatGPT/Perplexity)",
      seo: "Top 3 blue link rankings on traditional Google & Bing search result pages",
    },
    {
      dimension: "Data Consumption Format",
      aeo: "Semantic entities, machine-readable /llms.txt & concise Q&A schema",
      seo: "Comprehensive HTML headings (H1/H2), metadata tags, and backlinks",
    },
    {
      dimension: "Click-Through Behavior",
      aeo: "Zero-click direct resolution + deep research citation source click",
      seo: "Direct organic click to landing page from organic search snippet",
    },
    {
      dimension: "Indexing Speed",
      aeo: "Real-time Perplexity web retrieval and monthly LLM vector retraining",
      seo: "Googlebot periodic crawling, sitemap pinging, and indexing pipeline",
    },
    {
      dimension: "Future-Proof Longevity",
      aeo: "Essential as AI search share grows by 40%+ year-over-year",
      seo: "Fundamental bedrock for high-intent immediate commercial searches",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Comprehensive Technical & AI Visibility Audit",
      description:
        "We crawl every page of your website to uncover indexing blockers, Core Web Vitals bottlenecks, duplicate canonical URLs, and test whether ChatGPT and Perplexity can accurately summarize your offerings.",
      clientProvides: "Google Search Console and Google Analytics access.",
    },
    {
      number: "02",
      title: "Structured Data & llms.txt Deployment",
      description:
        "We architect schema markup (FAQPage, Service, Organization) and publish machine-readable /llms.txt files that define your core capabilities, pricing models, and key brand differentiators.",
      clientProvides: "Verified business facts, credentials, and service details.",
    },
    {
      number: "03",
      title: "Core Web Vitals & Code Optimization",
      description:
        "Our engineers optimize server response times (TTFB), extract critical CSS, eliminate render-blocking scripts, and compress media to achieve sub-second load times.",
      clientProvides: "Code repository access or server hosting credentials.",
    },
    {
      number: "04",
      title: "Programmatic Landing Page Architecture",
      description:
        "We build high-intent template architectures that generate unique, indexable pages for location keywords, service comparisons, or industry-specific landing pages.",
      clientProvides: "Approval of target keyword clusters and landing page templates.",
    },
    {
      number: "05",
      title: "Citation Monitoring, Indexing & Reporting",
      description:
        "We submit updated sitemaps to Google Search Console, track organic keyword position improvements, and test AI answer queries to monitor citations across ChatGPT and Perplexity.",
      clientProvides: "Ongoing monthly review of organic pipeline attribution.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/10 via-orange-500/10 to-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800/50 mb-6">
              <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="text-xs md:text-sm font-semibold text-amber-700 dark:text-amber-300">
                Google Search &amp; AI Answer Engine Optimization (AEO)
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
              Rank on Google &amp; Get Cited by{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 bg-clip-text text-transparent">
                ChatGPT &amp; Perplexity
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Dominate organic search results and ensure your brand is cited in AI-generated answers. We engineer technical Core Web Vitals, implement structured JSON-LD schemas, and build machine-readable llms.txt knowledge architectures that convert high-intent searchers into qualified clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact?service=SEO+%26+AEO"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white rounded-xl font-bold text-base hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Discuss Your SEO &amp; AEO Scope
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/ai-visibility-check"
                className="w-full sm:w-auto px-8 py-4 border border-gray-300 dark:border-gray-700 hover:border-amber-500 text-gray-700 dark:text-gray-200 rounded-xl font-semibold text-base hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all flex items-center justify-center gap-2"
              >
                Free AI Visibility Check
              </Link>
            </div>

            {/* Trust statement */}
            <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              100% White-Hat Technical Engineering • Passing Core Web Vitals • Validated Schema Markup
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 md:p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800/80 backdrop-blur-md shadow-sm text-center"
              >
                <div className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-1">
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

      {/* Visual Search & AI Growth Showcase (Featuring Real Project Asset) */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50 border-t border-b border-gray-100 dark:border-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 tracking-wider uppercase mb-2 block">
              Search &amp; AI Visibility Velocity
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
              Real 2X Organic Growth &amp; AI Citation Acceleration
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Explore how combining technical SEO speed tuning with AI Answer Engine Optimization doubles search impression velocity and captures high-intent buyers.
            </p>

            {/* Showcase Toggle Buttons */}
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => setActiveVisual("animation")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeVisual === "animation"
                    ? "bg-amber-600 text-white shadow-md shadow-amber-500/25"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-amber-600"
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                Live Growth Velocity Animation
              </button>
              <button
                onClick={() => setActiveVisual("chart")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeVisual === "chart"
                    ? "bg-amber-600 text-white shadow-md shadow-amber-500/25"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-amber-600"
                }`}
              >
                <BarChart className="w-4 h-4" />
                Neon Growth Benchmark
              </button>
            </div>
          </div>

          {/* Interactive Image Frame */}
          <div className="rounded-3xl border border-gray-200/80 dark:border-gray-800/80 bg-white/90 dark:bg-gray-900/90 p-4 md:p-8 shadow-xl relative overflow-hidden">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-950 border border-gray-200/50 dark:border-gray-800/50">
              {activeVisual === "animation" ? (
                <Image
                  src="/images/home/maxora_growth_2x.gif"
                  alt="Maxora 2X Growth & Search Velocity Animation"
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              ) : (
                <Image
                  src="/images/home/Neon Growth Chart_ 2X Faster.png"
                  alt="Neon Growth Chart 2X Faster Search Performance by Maxora Technology"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              )}
            </div>

            {/* Performance Callout Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 text-xs text-center">
                <span className="font-bold text-amber-600 dark:text-amber-400 block text-base mb-0.5">2X Faster Indexing</span>
                <span className="text-gray-500 dark:text-gray-400">XML sitemaps and API indexing ensure immediate Googlebot discovery</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 text-xs text-center">
                <span className="font-bold text-orange-600 dark:text-orange-400 block text-base mb-0.5">LLM Entity Anchors</span>
                <span className="text-gray-500 dark:text-gray-400">Optimized for ChatGPT Search, Claude, and Perplexity summaries</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 text-xs text-center">
                <span className="font-bold text-rose-600 dark:text-rose-400 block text-base mb-0.5">Google AI Overviews</span>
                <span className="text-gray-500 dark:text-gray-400">Structured question-and-answer pairs cited at the top of Google</span>
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
              Search Visibility Traps
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
              Why Traditional SEO Tactics Are Losing Traffic
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Search has fundamentally changed. When potential buyers query AI engines or read Google AI summaries, websites relying on outdated keyword stuffing remain invisible.
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
                  Leading cause of zero-click traffic decay
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs: Pillars, SEO vs AEO Matrix, Process & Deliverables */}
      <section className="py-20 md:py-28 bg-gray-50/50 dark:bg-gray-900/50 border-t border-b border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Tabs Navigation */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 gap-1">
              <button
                onClick={() => setActiveTab("pillars")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "pillars"
                    ? "bg-white dark:bg-gray-800 text-amber-600 dark:text-amber-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Core Pillars
              </button>
              <button
                onClick={() => setActiveTab("comparison")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "comparison"
                    ? "bg-white dark:bg-gray-800 text-amber-600 dark:text-amber-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Google SEO vs AEO
              </button>
              <button
                onClick={() => setActiveTab("process")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "process"
                    ? "bg-white dark:bg-gray-800 text-amber-600 dark:text-amber-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                5-Stage Process
              </button>
              <button
                onClick={() => setActiveTab("deliverables")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "deliverables"
                    ? "bg-white dark:bg-gray-800 text-amber-600 dark:text-amber-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Scope &amp; Deliverables
              </button>
            </div>
          </div>

          {/* TAB 1: CORE PILLARS */}
          {activeTab === "pillars" && (
            <div className="grid md:grid-cols-2 gap-8">
              {pillars.map((pil, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 hover:border-amber-500/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                        {pil.icon}
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300">
                        {pil.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-3">
                      {pil.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                      {pil.description}
                    </p>

                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200/60 dark:border-gray-700/60 mb-6 text-xs space-y-2">
                      <div className="text-red-700 dark:text-red-300">
                        <strong className="text-red-600 dark:text-red-400">Problem Solved:</strong> {pil.problemSolved}
                      </div>
                      <div className="text-emerald-700 dark:text-emerald-300">
                        <strong className="text-emerald-600 dark:text-emerald-400">Business Benefit:</strong> {pil.clientBenefit}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200/60 dark:border-gray-800/60 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-mono text-amber-600 dark:text-amber-400">Tech: {pil.tech}</span>
                    <Link
                      href="/contact?service=SEO+%26+AEO"
                      className="text-amber-600 dark:text-amber-400 font-semibold hover:underline flex items-center gap-1"
                    >
                      Audit This <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: SEO VS AEO COMPARISON */}
          {activeTab === "comparison" && (
            <div className="rounded-3xl border border-gray-200/80 dark:border-gray-800/80 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white uppercase font-bold text-xs border-b border-gray-200 dark:border-gray-800">
                    <tr>
                      <th className="py-4 px-6">Optimization Dimension</th>
                      <th className="py-4 px-6 text-amber-600 dark:text-amber-400">AI Answer Engine Optimization (AEO)</th>
                      <th className="py-4 px-6 text-gray-700 dark:text-gray-300">Traditional Search Engine Optimization (SEO)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    {searchComparison.map((row, idx) => (
                      <tr key={idx} className="bg-white dark:bg-gray-950/60 hover:bg-gray-50/50 dark:hover:bg-gray-900/50">
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                          {row.dimension}
                        </td>
                        <td className="py-4 px-6 text-amber-700 dark:text-amber-300 font-medium">
                          ✓ {row.aeo}
                        </td>
                        <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                          {row.seo}
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
                  className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-extrabold text-amber-600/30 dark:text-amber-400/30 font-mono mb-3 block">
                      {st.number}
                    </span>
                    <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                      {st.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {st.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-200/60 dark:border-gray-800/60 text-[11px] text-amber-600 dark:text-amber-400">
                    <strong>Client Provides:</strong> {st.clientProvides}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: DELIVERABLES */}
          {activeTab === "deliverables" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80">
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  Standard Deliverables
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400 mt-2 shrink-0" />
                    <span>Technical crawl audit diagnosing broken links, 404s, redirect chains, and indexing bugs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400 mt-2 shrink-0" />
                    <span>Core Web Vitals code tuning to pass Google LCP, INP, and CLS benchmarks</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400 mt-2 shrink-0" />
                    <span>Deployment of /llms.txt and /llms-full.txt machine-readable documentation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400 mt-2 shrink-0" />
                    <span>Structured JSON-LD schema markup (FAQPage, Service, Organization, Breadcrumbs)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400 mt-2 shrink-0" />
                    <span>Dynamic XML sitemaps and Google Search Console property verification</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400 mt-2 shrink-0" />
                    <span>Monthly ranking trajectory report with organic search impressions and click data</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80">
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  Growth &amp; Scale Add-Ons
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-600 dark:bg-orange-400 mt-2 shrink-0" />
                    <span>Programmatic SEO generation of 100+ high-intent location or comparison landing pages</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-600 dark:bg-orange-400 mt-2 shrink-0" />
                    <span>AI Answer Engine monitoring tracking brand citation share on Perplexity and ChatGPT</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-600 dark:bg-orange-400 mt-2 shrink-0" />
                    <span>High-authority editorial backlink acquisition from relevant industry publications</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-600 dark:bg-orange-400 mt-2 shrink-0" />
                    <span>Competitor entity gap analysis to win featured snippet positions</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Pricing & Scoping Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 tracking-wider uppercase mb-2 block">
            Transparent Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
            How SEO &amp; AEO Projects Are Scoped
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            We scope projects based on technical audit remediation depth, Core Web Vitals codebase tuning, and the scale of programmatic pages needed.
          </p>

          <div className="p-8 rounded-3xl bg-gray-50/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800/80 text-left grid md:grid-cols-3 gap-6 shadow-sm">
            <div>
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase block mb-1">Technical Audit &amp; Fix</span>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Core Web Vitals Sprint</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">One-time engineering sprint resolving crawl errors, speed penalties, and schema markup injection.</p>
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase block mb-1">AEO &amp; AI Search Suite</span>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">AI Answer Readiness</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Full /llms.txt deployment, FAQ entity graph modeling, and citation monitoring on Perplexity &amp; ChatGPT.</p>
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase block mb-1">Growth Programmatic</span>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">High-Intent Scale Pages</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Data-driven programmatic generation of 100+ landing pages targeting high-intent commercial buyers.</p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/contact?service=SEO+%26+AEO"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white rounded-xl font-bold hover:shadow-xl hover:shadow-orange-500/25 transition-all"
            >
              Request Technical SEO/AEO Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <ServiceFAQ service={service} />

      {/* Related Services */}
      <section className="py-16 bg-gray-50/50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white text-center mb-8">
            Complementary Engineering Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/Services/web-development"
              className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 hover:border-amber-500/50 transition-colors group flex items-center justify-between"
            >
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  Custom Web Development
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Re-platform to Next.js 15 for instant server-rendered HTML and sub-second Core Web Vitals.
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-amber-600 dark:text-amber-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/Services/ai-automation"
              className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 hover:border-amber-500/50 transition-colors group flex items-center justify-between"
            >
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  AI Agents &amp; Workflow Automation
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Automate inbound lead follow-ups and inquiries arriving from organic search traffic.
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-amber-600 dark:text-amber-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 border-t border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex p-4 rounded-3xl bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800/50 mb-8">
            <Search className="w-8 h-8 text-amber-600 dark:text-amber-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-gray-900 dark:text-white mb-6">
            Ready to Dominate Google Search &amp;{" "}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 bg-clip-text text-transparent">
              AI Answer Engines
            </span>
            ?
          </h2>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Don&apos;t let AI Overviews and zero-click search cut your inbound pipeline. Partner with Maxora to turn your technical search architecture into an organic revenue engine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push("/contact?service=SEO+%26+AEO")}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white rounded-xl font-bold text-base hover:shadow-xl hover:shadow-orange-500/25 transition-all flex items-center justify-center gap-2 group"
            >
              Request Technical SEO Audit
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
            Guaranteed 24hr response • Requirement-based milestone scoping • Zero black-hat tactics
          </p>
        </div>
      </section>
    </>
  );
}
