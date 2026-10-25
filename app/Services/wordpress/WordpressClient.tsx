// app/Services/wordpress/WordpressClient.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Layout,
  Code,
  Shield,
  Zap,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Search,
  ShoppingCart,
  Server,
  RefreshCw,
  Cpu,
  Layers,
  Lock,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ShieldCheck,
  FileCode2,
} from "lucide-react";
import ServiceFAQ from "@/app/components/section/service/ServiceFAQ";
import { getServiceBySlug } from "@/content/services";

const service = getServiceBySlug("wordpress")!;

export default function WordpressClient() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"features" | "comparison" | "process" | "deliverables">("features");
  const [activeSite, setActiveSite] = useState<"expeditions" | "travel">("expeditions");

  const stats = [
    { value: "95+", label: "Google PageSpeed Score", desc: "Fast Core Web Vitals on mobile and desktop" },
    { value: "<1.5s", label: "Average Page Load Time", desc: "Sub-second visual render via custom Gutenberg blocks" },
    { value: "0", label: "Bloated Page Builders", desc: "Zero Elementor or Divi spaghetti code overhead" },
    { value: "Enterprise", label: "Hardened Security", desc: "Protected against brute force, SQL injections & malware" },
  ];

  const clientProblems = [
    {
      title: "Heavy Page Builders (Elementor/Divi) Ruin Page Speed",
      desc: "Commercial page builders inject 15+ nested DIVs per element and load megabytes of unused JavaScript on every page, tanking your mobile PageSpeed score below 40.",
      icon: <Clock className="w-5 h-5 text-red-500" />,
    },
    {
      title: "30+ Fragile Plugins Breaking on Every Core Update",
      desc: "Stacking dozens of third-party plugins creates database bloat, plugin conflicts, and sudden white-screen crashes every time WordPress auto-updates.",
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
    },
    {
      title: "Frequent Malware Injections & Security Flaws",
      desc: "Over 90% of hacked WordPress websites originate from vulnerable nulled themes or neglected plugins with unpatched backdoor vulnerabilities.",
      icon: <Shield className="w-5 h-5 text-blue-500" />,
    },
  ];

  const caseStudies = [
    {
      title: "Himalayan Expeditions & Trekking Portal",
      image: "/portfolio/himalayan-expeditions.jpg",
      category: "Adventure Travel & Booking",
      description: "Custom Gutenberg block theme engineered for high-altitude trekking itineraries, interactive elevation profiles, dynamic departure calendar, and offline booking inquiry forms.",
      metric: "98/100 Mobile PageSpeed score & 2.8x higher inquiry submissions",
      tech: "Custom Gutenberg Blocks, ACF Pro, Redis Object Cache, PHP 8.3",
    },
    {
      title: "Global Travel & Destination Media Platform",
      image: "/portfolio/travel-maxora.png",
      category: "High-Traffic Content Publishing",
      description: "High-performance editorial publishing platform with dynamic destination taxonomy, instant client-side article search, programmatic SEO landing pages, and automated CDN caching.",
      metric: "Handled 250,000+ monthly pageviews with sub-1.2s server response",
      tech: "Headless WP REST API, Next.js Frontend, Cloudflare Enterprise",
    },
  ];

  const features = [
    {
      icon: <Layout className="w-6 h-6 text-white" />,
      tag: "Native Gutenberg",
      title: "Bespoke Gutenberg Block Theme Architecture",
      description:
        "Zero slow page builders. We build lightweight, modular Gutenberg block themes tailored to your exact brand design tokens. Your marketing team can visually assemble new landing pages in minutes without breaking brand consistency.",
      problemSolved: "Eliminates bloated page builder lock-in and protects site speed.",
      clientBenefit: "Intuitive visual editing for non-technical staff with 95+ PageSpeed scores.",
      tech: "React, Gutenberg Block API, ACF Pro, Tailwind CSS",
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      tag: "Custom Logic",
      title: "Custom Plugin & API Engineering",
      description:
        "Tailored WordPress plugins coded strictly according to WordPress VIP coding standards. Custom post types, complex query filtering, and secure bidirectional webhook integrations with HubSpot, Salesforce, and external payment processors.",
      problemSolved: "Replaces 10+ generic third-party plugins with clean, purpose-built PHP/REST code.",
      clientBenefit: "Lean database, zero plugin licensing fees, and guaranteed update compatibility.",
      tech: "PHP 8.3, WordPress REST API, Custom Post Types, Webhooks",
    },
    {
      icon: <Server className="w-6 h-6 text-white" />,
      tag: "Database Speed",
      title: "Redis Object Caching & Database Optimization",
      description:
        "High-performance server stack configuration featuring Redis in-memory object caching, OPcache byte-code compilation, MySQL query index tuning, and Edge Page Caching to deliver sub-100ms Time to First Byte (TTFB).",
      problemSolved: "Stops database query lag and slow admin dashboard loading times.",
      clientBenefit: "Instantaneous page loads even during viral social traffic surges.",
      tech: "Redis, Nginx, OPcache, MariaDB Indexing, Cloudflare",
    },
    {
      icon: <Lock className="w-6 h-6 text-white" />,
      tag: "Hardened Security",
      title: "Enterprise Security Hardening & Cloud Backups",
      description:
        "Comprehensive WordPress lockdown: Custom admin login URLs, XML-RPC disabled, strict Content Security Policies (CSP), file integrity monitoring, automated brute-force IP rate limiting, and encrypted daily off-site cloud backups.",
      problemSolved: "Shields your website against automated bot attacks, malware, and credential stuffing.",
      clientBenefit: "Zero downtime peace of mind and complete recovery snapshot in minutes.",
      tech: "WAF, Cloud Backups, Fail2ban, Strict File Permissions",
    },
  ];

  const comparison = [
    {
      metric: "DOM Node Count per Page",
      maxora: "400 - 700 clean semantic HTML5 nodes",
      builder: "2,500 - 5,000+ deeply nested wrapper DIVs",
    },
    {
      metric: "Total CSS & JS Payload",
      maxora: "Under 150 KB compressed modular CSS",
      builder: "2.5 MB - 5.0 MB unoptimized builder library files",
    },
    {
      metric: "Database Queries per Load",
      maxora: "15 - 25 optimized queries with Redis object caching",
      builder: "80 - 150+ unindexed queries slowing the server",
    },
    {
      metric: "Plugin Dependency Risk",
      maxora: "Zero reliance on third-party design add-on packs",
      builder: "Requires 10+ essential add-on packs that cause conflicts",
    },
    {
      metric: "Client Editing Experience",
      maxora: "Guarded Gutenberg blocks that prevent broken layouts",
      builder: "Confusing visual sliders where one click ruins mobile styling",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Content Modeling & Taxonomy Structure",
      description:
        "We map out custom post types, taxonomy categories, custom field structures, and user editorial permissions to ensure intuitive content organization.",
      clientProvides: "Existing content audit and site hierarchy preferences.",
    },
    {
      number: "02",
      title: "Bespoke UI/UX Block Design in Figma",
      description:
        "We design responsive page layouts and individual reusable Gutenberg block components (heroes, testimonials, feature grids, FAQ accordions).",
      clientProvides: "Brand guidelines and design review sign-off.",
    },
    {
      number: "03",
      title: "Theme Engineering & Block Development",
      description:
        "We write clean, semantic PHP and React code for custom Gutenberg blocks, configure ACF Pro fields, and integrate custom plugins without bloat.",
      clientProvides: "Content copy, imagery, and third-party API credentials.",
    },
    {
      number: "04",
      title: "Speed Tuning & Security Hardening",
      description:
        "We install Redis object cache, configure web application firewalls, obfuscate login endpoints, and run Google PageSpeed tests until scores hit 95+.",
      clientProvides: "Hosting server access or cloud infrastructure credentials.",
    },
    {
      number: "05",
      title: "Content Migration & 301 SEO Redirection",
      description:
        "We migrate all existing articles and media files, map 301 redirects for every old URL to preserve Google search rankings, and train your editorial team.",
      clientProvides: "Domain DNS access and final editorial sign-off.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-teal-500/10 via-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800/50 mb-6">
              <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span className="text-xs md:text-sm font-semibold text-teal-700 dark:text-teal-300">
                Custom Gutenberg Block Themes • Zero Builder Bloat
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
              High-Performance WordPress Development with{" "}
              <span className="bg-gradient-to-r from-teal-600 via-emerald-500 to-cyan-600 bg-clip-text text-transparent">
                Zero Page Builder Bloat
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Empower your marketing and editorial team with lightweight, custom Gutenberg block themes and secure WordPress architectures. We engineer bespoke WordPress sites that score 95+ on Google PageSpeed, remain impenetrable to malware, and eliminate slow page builders like Elementor and Divi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact?service=WordPress"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-600 text-white rounded-xl font-bold text-base hover:shadow-xl hover:shadow-teal-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Discuss Your WordPress Project Scope
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto px-8 py-4 border border-gray-300 dark:border-gray-700 hover:border-teal-500 text-gray-700 dark:text-gray-200 rounded-xl font-semibold text-base hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all flex items-center justify-center gap-2"
              >
                View Live Production Sites
              </Link>
            </div>

            {/* Trust statement */}
            <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              100% Theme Code Ownership • Zero Annual Builder Licenses • Guaranteed 301 SEO Migration Preservation
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 md:p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800/80 backdrop-blur-md shadow-sm text-center"
              >
                <div className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent mb-1">
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

      {/* Production WordPress Site Visual Showcase */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50 border-t border-b border-gray-100 dark:border-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase mb-2 block">
              Production WordPress Craftsmanship
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
              Real Bespoke WordPress Sites in the Wild
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Explore how our bespoke Gutenberg block architecture powers high-traffic destination portals and enterprise media hubs without lag.
            </p>

            {/* Showcase Toggle Buttons */}
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => setActiveSite("expeditions")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeSite === "expeditions"
                    ? "bg-teal-600 text-white shadow-md shadow-teal-500/25"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-teal-600"
                }`}
              >
                <Layout className="w-4 h-4" />
                Himalayan Expeditions Portal
              </button>
              <button
                onClick={() => setActiveSite("travel")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeSite === "travel"
                    ? "bg-teal-600 text-white shadow-md shadow-teal-500/25"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-teal-600"
                }`}
              >
                <Search className="w-4 h-4" />
                Global Travel Media Hub
              </button>
            </div>
          </div>

          {/* Interactive Image Frame */}
          <div className="rounded-3xl border border-gray-200/80 dark:border-gray-800/80 bg-white/90 dark:bg-gray-900/90 p-4 md:p-8 shadow-xl relative overflow-hidden">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-950 border border-gray-200/50 dark:border-gray-800/50">
              {activeSite === "expeditions" ? (
                <Image
                  src="/portfolio/himalayan-expeditions.jpg"
                  alt="Himalayan Expeditions WordPress Website Case Study by Maxora Technology"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
              ) : (
                <Image
                  src="/portfolio/travel-maxora.png"
                  alt="Global Travel Portal WordPress Website by Maxora Technology"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              )}
            </div>

            {/* Performance Callout Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 text-xs text-center">
                <span className="font-bold text-teal-600 dark:text-teal-400 block text-base mb-0.5">Gutenberg Native</span>
                <span className="text-gray-500 dark:text-gray-400">Custom block library allowing flexible layouts without page breakages</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 text-xs text-center">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 block text-base mb-0.5">&lt; 100ms TTFB</span>
                <span className="text-gray-500 dark:text-gray-400">Redis object cache delivers instant server response times</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 text-xs text-center">
                <span className="font-bold text-cyan-600 dark:text-cyan-400 block text-base mb-0.5">Zero Lock-In</span>
                <span className="text-gray-500 dark:text-gray-400">Standard WordPress core compatible with future updates forever</span>
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
              WordPress Headaches
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
              Why Most WordPress Websites Become Slow &amp; Fragile
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              When WordPress is built by dragging-and-dropping heavy visual builder templates, it quickly turns into an unmaintainable, insecure liability.
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
                  Leading reason WordPress gets an unfair bad reputation
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs: Capabilities, Gutenberg vs Builders, Process & Deliverables */}
      <section className="py-20 md:py-28 bg-gray-50/50 dark:bg-gray-900/50 border-t border-b border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Tabs Navigation */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 gap-1">
              <button
                onClick={() => setActiveTab("features")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "features"
                    ? "bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Core Capabilities
              </button>
              <button
                onClick={() => setActiveTab("comparison")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "comparison"
                    ? "bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Gutenberg vs Elementor
              </button>
              <button
                onClick={() => setActiveTab("process")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "process"
                    ? "bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Development Process
              </button>
              <button
                onClick={() => setActiveTab("deliverables")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "deliverables"
                    ? "bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Scope &amp; Deliverables
              </button>
            </div>
          </div>

          {/* TAB 1: CAPABILITIES */}
          {activeTab === "features" && (
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 hover:border-teal-500/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
                        {feat.icon}
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300">
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
                  </div>

                  <div className="pt-4 border-t border-gray-200/60 dark:border-gray-800/60 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-mono text-teal-600 dark:text-teal-400">Stack: {feat.tech}</span>
                    <Link
                      href="/contact?service=WordPress"
                      className="text-teal-600 dark:text-teal-400 font-semibold hover:underline flex items-center gap-1"
                    >
                      Scope This <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: GUTENBERG VS BUILDERS */}
          {activeTab === "comparison" && (
            <div className="rounded-3xl border border-gray-200/80 dark:border-gray-800/80 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white uppercase font-bold text-xs border-b border-gray-200 dark:border-gray-800">
                    <tr>
                      <th className="py-4 px-6">Performance &amp; Engineering Metric</th>
                      <th className="py-4 px-6 text-teal-600 dark:text-teal-400">Maxora Custom Gutenberg Theme</th>
                      <th className="py-4 px-6 text-gray-500 dark:text-gray-400">Elementor / Divi Bloated Builder</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    {comparison.map((row, idx) => (
                      <tr key={idx} className="bg-white dark:bg-gray-950/60 hover:bg-gray-50/50 dark:hover:bg-gray-900/50">
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                          {row.metric}
                        </td>
                        <td className="py-4 px-6 text-teal-700 dark:text-teal-300 font-medium">
                          ✓ {row.maxora}
                        </td>
                        <td className="py-4 px-6 text-gray-500 dark:text-gray-400">
                          ✗ {row.builder}
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
                    <span className="text-3xl font-extrabold text-teal-600/30 dark:text-teal-400/30 font-mono mb-3 block">
                      {st.number}
                    </span>
                    <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                      {st.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {st.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-200/60 dark:border-gray-800/60 text-[11px] text-teal-600 dark:text-teal-400">
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
                  <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  Standard Deliverables
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-2 shrink-0" />
                    <span>Custom lightweight WordPress block theme with zero visual builder dependencies</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-2 shrink-0" />
                    <span>Bespoke Gutenberg block components styled to your brand guide tokens</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-2 shrink-0" />
                    <span>Redis object caching &amp; database query optimization for 95+ PageSpeed scores</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-2 shrink-0" />
                    <span>Security hardening: Brute force shielding, custom login URL &amp; off-site daily backups</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-2 shrink-0" />
                    <span>Complete 301 URL redirect mapping from old site structure to preserve SEO</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-2 shrink-0" />
                    <span>30-minute staff training walkthrough video and 30-day post-launch warranty</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80">
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  Custom &amp; Headless Add-Ons
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 mt-2 shrink-0" />
                    <span>Headless WordPress architecture with Next.js App Router frontend</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 mt-2 shrink-0" />
                    <span>High-volume WooCommerce store configuration with customized checkout flows</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 mt-2 shrink-0" />
                    <span>Custom REST/GraphQL API endpoints for mobile app or CRM synchronization</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 mt-2 shrink-0" />
                    <span>Multilingual network configuration with WPML or Polylang</span>
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
          <span className="text-xs font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase mb-2 block">
            Transparent Scoping
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
            How WordPress Projects Are Scoped
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            We scope WordPress engagements based on custom post type count, page volume, design complexity, and third-party CRM/payment integrations.
          </p>

          <div className="p-8 rounded-3xl bg-gray-50/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800/80 text-left grid md:grid-cols-3 gap-6 shadow-sm">
            <div>
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase block mb-1">Brand &amp; Corporate</span>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Custom Block Theme</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Lightweight marketing website with custom Gutenberg blocks, SEO redirection, and 95+ PageSpeed score.</p>
            </div>
            <div>
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase block mb-1">Media &amp; Publishing</span>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">High-Traffic Editorial Hub</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Complex category taxonomy, dynamic article search, author attribution profiles, and Redis object cache tuning.</p>
            </div>
            <div>
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase block mb-1">Commerce / Headless</span>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">WooCommerce or Headless</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Custom payment gateways, catalog subscriptions, or decoupled Next.js frontend with WordPress backend.</p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/contact?service=WordPress"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-600 text-white rounded-xl font-bold hover:shadow-xl hover:shadow-teal-500/25 transition-all"
            >
              Request Custom WordPress Scope Call
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
              className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 hover:border-teal-500/50 transition-colors group flex items-center justify-between"
            >
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  Custom Web Development
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Decouple your WordPress backend with a high-performance Next.js React frontend.
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-teal-600 dark:text-teal-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/Services/ecommerce"
              className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 hover:border-teal-500/50 transition-colors group flex items-center justify-between"
            >
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  eCommerce Development
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  High-converting WooCommerce online store engineering and custom checkout flows.
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-teal-600 dark:text-teal-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 border-t border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex p-4 rounded-3xl bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800/50 mb-8">
            <Layout className="w-8 h-8 text-teal-600 dark:text-teal-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-gray-900 dark:text-white mb-6">
            Ready for a Blazing-Fast, Impenetrable{" "}
            <span className="bg-gradient-to-r from-teal-600 via-emerald-500 to-cyan-600 bg-clip-text text-transparent">
              WordPress Website
            </span>
            ?
          </h2>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Eliminate slow page builders, plugin bloat, and constant crashes. Experience the freedom of clean custom Gutenberg blocks that your marketing team will love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push("/contact?service=WordPress")}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-600 text-white rounded-xl font-bold text-base hover:shadow-xl hover:shadow-teal-500/25 transition-all flex items-center justify-center gap-2 group"
            >
              Request WordPress Scoping Call
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
            Guaranteed 24hr response • Requirement-based milestone scoping • Zero annual page builder fees
          </p>
        </div>
      </section>
    </>
  );
}
