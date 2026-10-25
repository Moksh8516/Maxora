// app/Services/ecommerce/EcommerceClient.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingCart,
  Zap,
  Shield,
  CreditCard,
  Truck,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ShoppingBag,
  Store,
  Boxes,
  Percent,
  RefreshCw,
  Clock,
  Layers,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import ServiceFAQ from "@/app/components/section/service/ServiceFAQ";
import { getServiceBySlug } from "@/content/services";

const service = getServiceBySlug("ecommerce")!;

export default function EcommerceClient() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"features" | "comparison" | "process" | "deliverables">("features");

  const stats = [
    { value: "3.2x", label: "Average Conversion Rate Boost", desc: "Frictionless checkout and instant page speed" },
    { value: "<1.2s", label: "Product Page Load Speed", desc: "Keep shoppers engaged without bounce lag" },
    { value: "99.99%", label: "Checkout Reliability", desc: "Never lose a sale during flash promos and Black Friday" },
    { value: "100%", label: "PCI-DSS Compliant", desc: "Bank-grade encrypted tokenization for all payments" },
  ];

  const clientProblems = [
    {
      title: "70% Cart Abandonment from Clunky Checkout",
      desc: "Forced account creation, slow page reloads, and clunky multi-step checkout forms frustrate mobile shoppers, causing over two-thirds to abandon their carts without purchasing.",
      icon: <Clock className="w-5 h-5 text-red-500" />,
    },
    {
      title: "Slow Product Pages Kill Paid Ad ROAS",
      desc: "When shoppers click Meta or Google shopping ads and wait 4+ seconds for high-res images to load, they bounce immediately, burning your marketing budget with zero revenue.",
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
    },
    {
      title: "Inventory Desynchronization & Stockouts",
      desc: "Selling across online stores, physical retail, and social channels without unified real-time inventory causes overselling, backorders, and costly customer support refunds.",
      icon: <Boxes className="w-5 h-5 text-blue-500" />,
    },
  ];

  const caseStudies = [
    {
      title: "Botanical Skincare & D2C Wellness",
      image: "/portfolio/botanical-skincare.jpg",
      category: "D2C Luxury Lifestyle Store",
      description: "Custom headless storefront featuring recurring subscription box builder, shade/formula skin quiz, and localized multi-currency checkout.",
      metric: "42% increase in mobile checkout conversions & 1.8s LCP",
      tech: "Next.js 15, Shopify Storefront API, Tailwind CSS, Klaviyo",
    },
    {
      title: "Artisan Specialty Coffee & Subscription Roastery",
      image: "/portfolio/coffee-store.jpg",
      category: "Specialty Commerce & Subscriptions",
      description: "Fast-loading specialty coffee shop with automated grind/frequency subscription selection, wholesale customer portal, and integrated local courier dispatch.",
      metric: "65% of monthly revenue driven by auto-renewing subscriptions",
      tech: "WooCommerce, Custom Gutenberg Blocks, Stripe Billing, Shiprocket",
    },
  ];

  const features = [
    {
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      tag: "Conversion UX",
      title: "Custom Storefront Design & Frictionless UX",
      description:
        "Mobile-first, conversion-optimized storefronts engineered specifically for your brand identity. We craft one-page checkouts, sticky add-to-cart buttons, and instant live product search filtering.",
      problemSolved: "Eliminates clunky multi-step checkouts and confusing mobile navigation.",
      clientBenefit: "Turns more ad clicks into completed transactions with 3.2x higher conversion.",
      tech: "Next.js, Tailwind CSS, Framer Motion, Algolia Search",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-white" />,
      tag: "Global Payments",
      title: "Secure Multi-Gateway & Localized Payments",
      description:
        "Integration of Stripe, Apple Pay, Google Pay, PayPal, Razorpay, Cashfree, and Klarna Pay-in-4. Multi-currency auto-detection with real-time exchange rates and fraud protection.",
      problemSolved: "Stops cart abandonment caused by missing preferred customer payment methods.",
      clientBenefit: "Accepts payments worldwide with bank-grade 3D-Secure authentication.",
      tech: "Stripe Elements, Razorpay, Apple Pay, Webhooks",
    },
    {
      icon: <Boxes className="w-6 h-6 text-white" />,
      tag: "Inventory & Logistics",
      title: "Automated Shipping & Multi-Warehouse Inventory",
      description:
        "Real-time bidirectional synchronization with warehouse management software, Shiprocket, Delhivery, DHL, and local courier APIs. Automated shipping label generation and live tracking updates.",
      problemSolved: "Eliminates manual shipping label printing and accidental overselling.",
      clientBenefit: "Automated fulfillment workflows that scale from 10 to 10,000 orders per day.",
      tech: "Shiprocket API, Webhooks, Inventory Sync, PostgreSQL",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-white" />,
      tag: "Revenue Expansion",
      title: "Abandoned Cart Recovery & Dynamic Upsells",
      description:
        "Automated WhatsApp Business and email recovery workflows that re-engage shoppers within 15 minutes of abandonment. In-cart and post-purchase one-click upsells that lift Average Order Value.",
      problemSolved: "Recovers lost revenue from shoppers who left without completing checkout.",
      clientBenefit: "Recovers 15% to 25% of abandoned carts automatically without extra ad spend.",
      tech: "Meta WhatsApp Cloud API, Klaviyo, Redis, Node.js",
    },
  ];

  const comparison = [
    {
      aspect: "Page Load Speed",
      headless: "Sub-1.0s instant page loads via Next.js Edge rendering",
      traditional: "3.5s - 6.0s bogged down by 20+ conflicting app scripts",
    },
    {
      aspect: "Checkout Customization",
      headless: "Completely bespoke single-page checkout flow with custom fields",
      traditional: "Locked into rigid standard theme templates with limited tweaks",
    },
    {
      aspect: "Monthly App Subscription Fees",
      headless: "Built-in custom logic with zero monthly third-party app bloat",
      traditional: "$300 - $1,500/month recurring fees for search, upsell, and filter apps",
    },
    {
      aspect: "International Multi-Currency",
      headless: "Native localized currency, language, and regional catalog support",
      traditional: "Requires expensive enterprise add-ons or clunky widget overlays",
    },
    {
      aspect: "Conversion Rate Benchmark",
      headless: "Average 3.5% - 5.2% e-commerce conversion rate",
      traditional: "Average 1.2% - 2.0% industry standard template conversion",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Catalog Architecture & SKU Strategy",
      description:
        "We organize your product taxonomy, category trees, variant attributes (size, color, weight), and ERP/shipping integration requirements.",
      clientProvides: "Product catalog spreadsheets, pricing, and high-res imagery.",
    },
    {
      number: "02",
      title: "High-Converting UI/UX Storefront Design",
      description:
        "We design mobile-first shopping journeys in Figma, optimizing the homepage merchandising, collection filtering, product pages, and checkout flows.",
      clientProvides: "Brand guidelines and design milestone approval.",
    },
    {
      number: "03",
      title: "Storefront Engineering & Platform Setup",
      description:
        "We build the custom storefront on Shopify or WooCommerce, configuring headless APIs, payment gateways, tax calculation rules, and shipping rate matrices.",
      clientProvides: "Payment gateway and merchant account credentials.",
    },
    {
      number: "04",
      title: "End-to-End Stress & Checkout Testing",
      description:
        "We perform test transactions across credit cards, wallets, and cash-on-delivery, testing cart discounts, coupon codes, and inventory deductions under simulated load.",
      clientProvides: "User acceptance review and sample live order validation.",
    },
    {
      number: "05",
      title: "Domain Launch & Analytics Tracking",
      description:
        "We launch the live store, configure Google Enhanced eCommerce Analytics, Meta Pixel CAPI, automated abandoned cart flows, and handover full administrative control.",
      clientProvides: "DNS domain pointed to production servers.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/10 via-teal-500/10 to-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50 mb-6">
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs md:text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                High-Converting eCommerce Architecture
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
              High-Converting Online Stores Engineered for{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500 bg-clip-text text-transparent">
                Revenue &amp; Scale
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Scale your digital commerce with sub-second page loads, frictionless one-page checkout, and custom headless architectures. We build bespoke Shopify Plus, WooCommerce, and custom Next.js commerce platforms that turn visitors into loyal buyers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact?service=eCommerce"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 text-white rounded-xl font-bold text-base hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Discuss Your eCommerce Scope
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto px-8 py-4 border border-gray-300 dark:border-gray-700 hover:border-emerald-500 text-gray-700 dark:text-gray-200 rounded-xl font-semibold text-base hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all flex items-center justify-center gap-2"
              >
                View Live Stores
              </Link>
            </div>

            {/* Trust statement */}
            <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Zero App Bloat • Instant One-Page Checkout • 100% Store &amp; Customer Data Ownership
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 md:p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800/80 backdrop-blur-md shadow-sm text-center"
              >
                <div className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mb-1">
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

      {/* Animated Storefront In Action Showcase (Featuring Real Project GIF) */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50 border-t border-b border-gray-100 dark:border-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase mb-2 block">
              Shopping Experience In Motion
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
              Fluid, Interactive Commerce That Converts
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Experience the speed and polish of our e-commerce storefronts: instant search, zero-lag product variant switching, and one-tap checkout.
            </p>
          </div>

          {/* Animated GIF Container */}
          <div className="rounded-3xl border border-gray-200/80 dark:border-gray-800/80 bg-white/90 dark:bg-gray-900/90 p-4 md:p-8 shadow-xl relative overflow-hidden">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-950 border border-gray-200/50 dark:border-gray-800/50">
              <Image
                src="/images/ecommerce/ecommerce_hero_desktop_16x9.gif"
                alt="High-Converting eCommerce Storefront Checkout Flow Animated Showcase by Maxora Technology"
                fill
                className="object-cover"
                unoptimized
                priority
              />
            </div>

            {/* Performance Callout Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 text-xs text-center">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 block text-base mb-0.5">1-Second Search</span>
                <span className="text-gray-500 dark:text-gray-400">Instant SKU &amp; product filtering without page reloads</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 text-xs text-center">
                <span className="font-bold text-teal-600 dark:text-teal-400 block text-base mb-0.5">One-Page Checkout</span>
                <span className="text-gray-500 dark:text-gray-400">Streamlined checkout fields cutting drop-off by 35%</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 text-xs text-center">
                <span className="font-bold text-amber-600 dark:text-amber-400 block text-base mb-0.5">Automated Recovery</span>
                <span className="text-gray-500 dark:text-gray-400">WhatsApp &amp; email abandoned cart sequences</span>
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
              eCommerce Friction
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
              Where Online Stores Bleed Revenue Every Day
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              When an online store is bogged down by slow servers, rigid templates, and friction-filled forms, advertising spend is squandered.
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
                  Leading barrier to positive advertising ROAS
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Live Storefront Case Studies */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50 border-t border-b border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase mb-2 block">
              Proven Store Deployments
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
              Real Stores Built for Real Customer Growth
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Explore bespoke e-commerce platforms engineered by Maxora Technology with verified conversion results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white dark:bg-gray-900/70 border border-gray-200/80 dark:border-gray-800/80 overflow-hidden shadow-sm hover:border-emerald-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full bg-gray-100 dark:bg-gray-950 overflow-hidden">
                    <Image
                      src={cs.image}
                      alt={`${cs.title} - Maxora Technology eCommerce Store`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-gray-900/90 text-emerald-700 dark:text-emerald-300 backdrop-blur-md shadow-sm border border-gray-200/50 dark:border-gray-700/50">
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

                    <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 text-xs text-emerald-900 dark:text-emerald-300 font-medium mb-4 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span><strong>Key Metric:</strong> {cs.metric}</span>
                    </div>
                  </div>
                </div>

                <div className="px-6 md:px-8 pb-6 pt-2 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span className="font-mono text-emerald-600 dark:text-emerald-400">Stack: {cs.tech}</span>
                  <Link
                    href="/contact?service=eCommerce"
                    className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline flex items-center gap-1"
                  >
                    Build Similar <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs: Capabilities, Headless vs Monolithic, Process & Deliverables */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Tabs Navigation */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 gap-1">
              <button
                onClick={() => setActiveTab("features")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "features"
                    ? "bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Core Capabilities
              </button>
              <button
                onClick={() => setActiveTab("comparison")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "comparison"
                    ? "bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Headless vs Template
              </button>
              <button
                onClick={() => setActiveTab("process")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "process"
                    ? "bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                5-Stage Process
              </button>
              <button
                onClick={() => setActiveTab("deliverables")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "deliverables"
                    ? "bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 shadow-sm"
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
                  className="p-8 rounded-3xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 hover:border-emerald-500/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                        {feat.icon}
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">
                        {feat.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-3">
                      {feat.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                      {feat.description}
                    </p>

                    <div className="p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 mb-6 text-xs space-y-2">
                      <div className="text-red-700 dark:text-red-300">
                        <strong className="text-red-600 dark:text-red-400">Problem Solved:</strong> {feat.problemSolved}
                      </div>
                      <div className="text-emerald-700 dark:text-emerald-300">
                        <strong className="text-emerald-600 dark:text-emerald-400">Business Benefit:</strong> {feat.clientBenefit}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200/60 dark:border-gray-800/60 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-mono text-emerald-600 dark:text-emerald-400">Stack: {feat.tech}</span>
                    <Link
                      href="/contact?service=eCommerce"
                      className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline flex items-center gap-1"
                    >
                      Scope This <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: HEADLESS VS TEMPLATE COMPARISON */}
          {activeTab === "comparison" && (
            <div className="rounded-3xl border border-gray-200/80 dark:border-gray-800/80 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white uppercase font-bold text-xs border-b border-gray-200 dark:border-gray-800">
                    <tr>
                      <th className="py-4 px-6">Commercial Metric</th>
                      <th className="py-4 px-6 text-emerald-600 dark:text-emerald-400">Maxora Headless Next.js Storefront</th>
                      <th className="py-4 px-6 text-gray-500 dark:text-gray-400">Generic Template / Builder App Mess</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    {comparison.map((row, idx) => (
                      <tr key={idx} className="bg-white dark:bg-gray-950/60 hover:bg-gray-50/50 dark:hover:bg-gray-900/50">
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                          {row.aspect}
                        </td>
                        <td className="py-4 px-6 text-emerald-700 dark:text-emerald-300 font-medium">
                          ✓ {row.headless}
                        </td>
                        <td className="py-4 px-6 text-gray-500 dark:text-gray-400">
                          ✗ {row.traditional}
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
                    <span className="text-3xl font-extrabold text-emerald-600/30 dark:text-emerald-400/30 font-mono mb-3 block">
                      {st.number}
                    </span>
                    <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                      {st.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {st.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-200/60 dark:border-gray-800/60 text-[11px] text-emerald-600 dark:text-emerald-400">
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
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  Standard Deliverables
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 mt-2 shrink-0" />
                    <span>Complete custom responsive storefront on Shopify Plus or WooCommerce</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 mt-2 shrink-0" />
                    <span>Frictionless one-page checkout with Apple Pay, Google Pay, and Stripe</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 mt-2 shrink-0" />
                    <span>Courier shipping rate calculator and automated label generation (Shiprocket/DHL)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 mt-2 shrink-0" />
                    <span>Automated abandoned cart recovery workflows on WhatsApp &amp; Email</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 mt-2 shrink-0" />
                    <span>Google Analytics 4 eCommerce Tracking and Meta CAPI conversion tags</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 mt-2 shrink-0" />
                    <span>Staff training runbook for product uploads, discounts, and order processing</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80">
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Boxes className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  Custom &amp; Marketplace Add-Ons
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-2 shrink-0" />
                    <span>Headless Next.js commerce architecture with sub-second page transitions</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-2 shrink-0" />
                    <span>Multi-vendor marketplace portal with vendor commission split payouts</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-2 shrink-0" />
                    <span>ERP bidirectional inventory syncing (SAP, NetSuite, Zoho Inventory)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-2 shrink-0" />
                    <span>B2B wholesale customer portal with custom volume tiered pricing tiers</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Pricing & Scoping Section */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase mb-2 block">
            Transparent Scoping
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
            How eCommerce Store Projects Are Scoped
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            We scope projects by catalog SKU count, payment/shipping integrations, and whether you require custom headless frontend architecture or a tailored Shopify theme.
          </p>

          <div className="p-8 rounded-3xl bg-white dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800/80 text-left grid md:grid-cols-3 gap-6 shadow-sm">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase block mb-1">D2C Brand Store</span>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Shopify / Woo Launch</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">High-converting bespoke storefront with payment gateway setup, courier tracking, and mobile optimization.</p>
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase block mb-1">Scale Brand Store</span>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">High-Volume D2C</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Custom subscriptions, dynamic upsells, multi-currency localization, and WhatsApp abandoned cart recovery.</p>
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase block mb-1">Headless Commerce</span>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Next.js Edge Storefront</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Sub-second page speeds, custom checkout flows, ERP inventory sync, and zero monthly app bloat fees.</p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/contact?service=eCommerce"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 text-white rounded-xl font-bold hover:shadow-xl hover:shadow-emerald-500/25 transition-all"
            >
              Request Custom Store Scoping Call
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
              href="/Services/web-development"
              className="p-6 rounded-2xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 hover:border-emerald-500/50 transition-colors group flex items-center justify-between"
            >
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Custom Web Development
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Custom headless frontends and customer portal web applications.
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/Services/ai-automation"
              className="p-6 rounded-2xl bg-gray-50/80 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 hover:border-emerald-500/50 transition-colors group flex items-center justify-between"
            >
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  AI Agents &amp; Workflow Automation
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Automate WhatsApp order lookups and customer return requests with AI agents.
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 border-t border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex p-4 rounded-3xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50 mb-8">
            <ShoppingCart className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-gray-900 dark:text-white mb-6">
            Ready to Build a High-Converting{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500 bg-clip-text text-transparent">
              Online Store
            </span>
            ?
          </h2>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop losing 70% of potential buyers at checkout. Partner with Maxora to launch a fast, reliable e-commerce storefront engineered for profitable customer acquisition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push("/contact?service=eCommerce")}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 text-white rounded-xl font-bold text-base hover:shadow-xl hover:shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 group"
            >
              Request eCommerce Scoping Call
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
            Guaranteed 24hr response • Requirement-based milestone scoping • Zero vendor lock-in
          </p>
        </div>
      </section>
    </>
  );
}
