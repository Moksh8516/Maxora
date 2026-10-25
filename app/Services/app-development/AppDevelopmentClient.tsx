// app/Services/app-development/AppDevelopmentClient.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  TabletSmartphone,
  Zap,
  Shield,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Layers,
  Cpu,
  Wifi,
  Bell,
  CreditCard,
  Lock,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Apple,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { TiVendorAndroid } from "react-icons/ti";
import ServiceFAQ from "@/app/components/section/service/ServiceFAQ";
import { getServiceBySlug } from "@/content/services";

const service = getServiceBySlug("app-development")!;

export default function AppDevelopmentClient() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"features" | "matrix" | "process" | "deliverables">("features");
  const [activeAppMockup, setActiveAppMockup] = useState<"fintech" | "delivery">("fintech");

  const stats = [
    { value: "60 FPS", label: "Fluid Animation Speed", desc: "Native thread performance and zero UI stutter" },
    { value: "iOS & Android", label: "Dual-Platform Release", desc: "Unified Flutter & React Native codebases" },
    { value: "Offline-First", label: "Local Data Syncing", desc: "Full functionality without active internet" },
    { value: "100%", label: "App Store Acceptance", desc: "Zero rejection guarantee with strict guidelines" },
  ];

  const clientProblems = [
    {
      title: "Mobile Web Cannot Replace Native App Engagement",
      desc: "Mobile browsers lack native push notifications, biometrics, offline storage, and home-screen presence—costing businesses up to 3x higher churn compared to native apps.",
      icon: <Clock className="w-5 h-5 text-red-500" />,
    },
    {
      title: "Double the Budget Maintaining Two Codebases",
      desc: "Hiring separate Swift and Kotlin developers doubles engineering payroll, splits design cycles, and creates desynchronized feature releases between iOS and Android.",
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
    },
    {
      title: "App Store Rejections & Review Guideline Traps",
      desc: "Apple and Google reject over 30% of first-time submissions due to privacy policy oversights, broken in-app purchases, or improper background location permissions.",
      icon: <Shield className="w-5 h-5 text-blue-500" />,
    },
  ];

  const mobilePillars = [
    {
      icon: <Wifi className="w-6 h-6 text-white" />,
      tag: "Offline-First",
      title: "Offline-First Architecture & Cloud Sync",
      description:
        "Engineered with local SQLite or WatermelonDB caching. Users can create records, browse catalogs, and perform operations completely offline. Data automatically synchronizes with your cloud backend the moment connectivity returns.",
      problemSolved: "Prevents app crashes and lost user input when customers enter elevators or areas with poor cellular reception.",
      clientBenefit: "Uninterrupted user experience regardless of network strength.",
      tech: "SQLite, WatermelonDB, TanStack Query, WebSockets",
    },
    {
      icon: <Bell className="w-6 h-6 text-white" />,
      tag: "Direct Retention",
      title: "Targeted Push Notifications & Deeplinking",
      description:
        "Configured with Apple Push Notification service (APNs) and Firebase Cloud Messaging (FCM). Send personalized transaction alerts, order status updates, and behavioral re-engagement messages that route users directly to specific in-app screens.",
      problemSolved: "Stops customer drop-off after installation by re-engaging users at optimal moments.",
      clientBenefit: "Up to 4x higher daily retention and instant transactional messaging.",
      tech: "FCM, APNs, OneSignal, Universal Links, App Links",
    },
    {
      icon: <Lock className="w-6 h-6 text-white" />,
      tag: "Hardware Security",
      title: "Biometric Auth & Secure Hardware Storage",
      description:
        "Seamless login utilizing Apple FaceID, TouchID, and Android BiometricPrompt. Sensitive authentication tokens are stored in hardware-backed secure enclaves (iOS Keychain & Android Keystore) rather than insecure local files.",
      problemSolved: "Eliminates cumbersome password entry without sacrificing enterprise security.",
      clientBenefit: "Frictionless 1-second logins with bank-grade credential encryption.",
      tech: "iOS Keychain, Android Keystore, BiometricPrompt, OAuth2",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-white" />,
      tag: "Monetization",
      title: "In-App Purchases & Multi-Tier Subscriptions",
      description:
        "Flawless integration of Apple StoreKit 2 and Google Play Billing. Support one-time product unlocks, recurring auto-renewing subscriptions, free trials, and promotional discount codes with automated server-side receipt validation.",
      problemSolved: "Stops fraud and receipt tampering while maintaining compliance with App Store rules.",
      clientBenefit: "Predictable recurring app revenue with zero revenue leakage.",
      tech: "StoreKit 2, Google Play Billing, RevenueCat, Stripe Mobile SDK",
    },
  ];

  const decisionMatrix = [
    {
      dimension: "Development Cost",
      crossPlatform: "Single codebase for iOS & Android (40-50% savings)",
      pureNative: "Requires separate iOS (Swift) & Android (Kotlin) teams",
      webPWA: "Lowest cost, but lacks native store presence",
    },
    {
      dimension: "Time to Market",
      crossPlatform: "8 - 12 weeks to launch simultaneously on both stores",
      pureNative: "16 - 24 weeks developing platforms sequentially",
      webPWA: "4 - 8 weeks web-only release",
    },
    {
      dimension: "UI & Animation Fluidity",
      crossPlatform: "Consistently 60 FPS utilizing compiled native bridges",
      pureNative: "Native 120 FPS ProMotion ideal for 3D games/AR",
      webPWA: "Limited by mobile browser rendering engine",
    },
    {
      dimension: "Hardware Sensor Access",
      crossPlatform: "Full access to GPS, Camera, Bluetooth, HealthKit",
      pureNative: "Immediate zero-day access to new OS sensor APIs",
      webPWA: "Restricted background execution & sensor access",
    },
    {
      dimension: "App Store & Play Store Presence",
      crossPlatform: "100% full distribution on Apple App Store & Google Play",
      pureNative: "100% full distribution on Apple App Store & Google Play",
      webPWA: "Requires bookmarking from browser, no store discoverability",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Mobile UX Wireframing & Touch Gestures",
      description:
        "We map out thumb-friendly user flows, bottom-sheet navigations, and swipe gesture interactions designed specifically for one-handed mobile ergonomics.",
      clientProvides: "Core user stories and feature prioritization.",
    },
    {
      number: "02",
      title: "Interactive Figma Mobile Prototype",
      description:
        "We build clickable mobile prototypes that you can test on your personal iPhone or Android device before a single line of production code is written.",
      clientProvides: "Review and prototype feedback directly on your phone.",
    },
    {
      number: "03",
      title: "Cross-Platform Engineering & API Sync",
      description:
        "We code the application using React Native or Flutter, connecting backend REST/GraphQL APIs, offline storage, push notifications, and biometric authentication.",
      clientProvides: "Backend API access and test environment accounts.",
    },
    {
      number: "04",
      title: "Device Lab Stress Testing & Profiling",
      description:
        "We test memory consumption, battery drain, and network latency across a wide matrix of physical iOS and Android devices, screen sizes, and OS versions.",
      clientProvides: "Beta tester feedback via TestFlight and Google Play Beta.",
    },
    {
      number: "05",
      title: "App Store Review & Production Launch",
      description:
        "We prepare privacy nutrition labels, generate promotional store screenshots, configure in-app purchases, and manage the submission until officially approved.",
      clientProvides: "Apple Developer and Google Play Console access.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-teal-500/10 via-cyan-500/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Dual Platform Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800/50 mb-6">
              <div className="flex items-center gap-1.5 text-teal-700 dark:text-teal-300 font-semibold text-xs md:text-sm">
                <Apple className="w-4 h-4" />
                <span>iOS</span>
                <span className="text-gray-400">•</span>
                <TiVendorAndroid className="w-4 h-4 text-emerald-500" />
                <span>Android</span>
                <span className="text-gray-400">•</span>
                <span>Flutter &amp; React Native</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
              Native &amp; Cross-Platform{" "}
              <span className="bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Mobile Applications
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              We engineer high-performance mobile apps for iOS and Android using Flutter, React Native, Swift, and Kotlin. From offline data synchronization and biometric security to frictionless in-app purchases and guaranteed App Store approval.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact?service=App+Development"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-600 text-white rounded-xl font-bold text-base hover:shadow-xl hover:shadow-teal-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Discuss Your Mobile App Scope
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto px-8 py-4 border border-gray-300 dark:border-gray-700 hover:border-teal-500 text-gray-700 dark:text-gray-200 rounded-xl font-semibold text-base hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all flex items-center justify-center gap-2"
              >
                View App Portfolio
              </Link>
            </div>

            {/* Trust statement */}
            <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              100% App Store &amp; Google Play Acceptance Guarantee • Physical Device Tested • Complete Source Code Handover
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 md:p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800/80 backdrop-blur-md shadow-sm text-center"
              >
                <div className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent mb-1">
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

      {/* Dual Smartphone Interactive Showcase */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50 border-t border-b border-gray-100 dark:border-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase mb-2 block">
              Mobile User Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
              Designed for Thumbs, Engineered for Speed
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Explore our production mobile applications built for real-world user engagement across fintech, on-demand logistics, and mobile commerce.
            </p>

            {/* Mockup Switcher Buttons */}
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => setActiveAppMockup("fintech")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeAppMockup === "fintech"
                    ? "bg-teal-600 text-white shadow-md shadow-teal-500/25"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-teal-600"
                }`}
              >
                <CreditCard className="w-4 h-4" />
                Fintech Mobile Banking
              </button>
              <button
                onClick={() => setActiveAppMockup("delivery")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeAppMockup === "delivery"
                    ? "bg-teal-600 text-white shadow-md shadow-teal-500/25"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-teal-600"
                }`}
              >
                <MapPin className="w-4 h-4" />
                On-Demand Delivery App
              </button>
            </div>
          </div>

          {/* Interactive Phone Frame Container */}
          <div className="rounded-3xl border border-gray-200/80 dark:border-gray-800/80 bg-white/90 dark:bg-gray-900/90 p-6 md:p-10 shadow-xl relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Device Image */}
              <div className="relative aspect-[4/5] w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-900 dark:border-gray-800 bg-gray-100 dark:bg-gray-950">
                {activeAppMockup === "fintech" ? (
                  <Image
                    src="/portfolio/mobile-fintech.jpg"
                    alt="Fintech Mobile App UI by Maxora Technology"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                ) : (
                  <Image
                    src="/portfolio/food-delivery-app.jpg"
                    alt="On-Demand Delivery Mobile App UI by Maxora Technology"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                )}
              </div>

              {/* Feature Highlights for Active Mockup */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300">
                  {activeAppMockup === "fintech" ? "Fintech & Digital Wallet" : "On-Demand Delivery & Logistics"}
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 dark:text-white">
                  {activeAppMockup === "fintech"
                    ? "Sub-Second Crypto & Fiat Wallet Architecture"
                    : "Live Driver Telemetry & Geospatial Tracking"}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {activeAppMockup === "fintech"
                    ? "Equipped with biometric FaceID authentication, hardware-backed key storage, instant card management, and real-time push balance alerts."
                    : "Featuring background GPS location polling, WebSocket live courier tracking on interactive maps, automated order routing, and one-tap customer calls."}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" />
                    <span>60 FPS gesture-driven screen transitions and bottom-sheet controls</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" />
                    <span>Background push notification triggers with customized action buttons</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" />
                    <span>Full offline persistence so orders and records are never lost</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact?service=App+Development"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold text-sm hover:bg-teal-700 transition-colors"
                  >
                    Discuss This Architecture <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
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
              Mobile Friction
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
              Why Half-Baked Mobile Projects Stumble
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Building a successful mobile app requires more than converting a website into a webview. It demands real offline handling, device testing, and store compliance.
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
                  Leading cause of poor ratings and app uninstallations
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs: Core Pillars, Decision Matrix, Process & Deliverables */}
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
                Engineering Pillars
              </button>
              <button
                onClick={() => setActiveTab("matrix")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "matrix"
                    ? "bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Platform Matrix
              </button>
              <button
                onClick={() => setActiveTab("process")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "process"
                    ? "bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                5-Stage Lifecycle
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

          {/* TAB 1: CORE MOBILE PILLARS */}
          {activeTab === "features" && (
            <div className="grid md:grid-cols-2 gap-8">
              {mobilePillars.map((pil, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 hover:border-teal-500/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
                        {pil.icon}
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300">
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
                    <span className="font-mono text-teal-600 dark:text-teal-400">Stack: {pil.tech}</span>
                    <Link
                      href="/contact?service=App+Development"
                      className="text-teal-600 dark:text-teal-400 font-semibold hover:underline flex items-center gap-1"
                    >
                      Scope This <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: PLATFORM DECISION MATRIX */}
          {activeTab === "matrix" && (
            <div className="rounded-3xl border border-gray-200/80 dark:border-gray-800/80 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white uppercase font-bold text-xs border-b border-gray-200 dark:border-gray-800">
                    <tr>
                      <th className="py-4 px-6">Evaluation Criteria</th>
                      <th className="py-4 px-6 text-teal-600 dark:text-teal-400">Maxora Cross-Platform (React Native/Flutter)</th>
                      <th className="py-4 px-6 text-gray-700 dark:text-gray-300">Pure Native (Swift/Kotlin)</th>
                      <th className="py-4 px-6 text-gray-500 dark:text-gray-400">Web App (PWA)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    {decisionMatrix.map((row, idx) => (
                      <tr key={idx} className="bg-white dark:bg-gray-950/60 hover:bg-gray-50/50 dark:hover:bg-gray-900/50">
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                          {row.dimension}
                        </td>
                        <td className="py-4 px-6 text-teal-700 dark:text-teal-300 font-medium">
                          ✓ {row.crossPlatform}
                        </td>
                        <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                          {row.pureNative}
                        </td>
                        <td className="py-4 px-6 text-gray-500 dark:text-gray-400">
                          ✗ {row.webPWA}
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
                    <span>Cross-platform iOS and Android production codebase with 100% IP ownership</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-2 shrink-0" />
                    <span>Figma mobile design system with iOS Human Interface &amp; Android Material tokens</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-2 shrink-0" />
                    <span>Apple App Store &amp; Google Play Store submission management until approved</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-2 shrink-0" />
                    <span>Push notifications, deeplinking, and biometric login integration</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-2 shrink-0" />
                    <span>30-day post-launch warranty with crash reporting and bug fixes</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80">
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  Custom &amp; Hardware Add-Ons
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400 mt-2 shrink-0" />
                    <span>Bluetooth Low Energy (BLE) IoT hardware communication</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400 mt-2 shrink-0" />
                    <span>Apple HealthKit and Google Health Connect integrations</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400 mt-2 shrink-0" />
                    <span>Custom background audio players or VoIP calling integration</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400 mt-2 shrink-0" />
                    <span>Enterprise mobile device management (MDM) private distribution</span>
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
            Project Scoping
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white mb-4">
            How Mobile App Budgets Are Determined
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Mobile development scope varies based on screen volume, third-party hardware access (Bluetooth, Camera, GPS), and whether backend APIs already exist.
          </p>

          <div className="p-8 rounded-3xl bg-gray-50/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800/80 text-left grid md:grid-cols-3 gap-6 shadow-sm">
            <div>
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase block mb-1">MVP Launch</span>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Core Feature App</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Essential user flows, push notifications, authentication, and store approval to validate product-market fit.</p>
            </div>
            <div>
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase block mb-1">Consumer Platform</span>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">In-App Monetization</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">In-app subscriptions, interactive social feeds, offline data synchronization, and automated user onboarding.</p>
            </div>
            <div>
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase block mb-1">Enterprise Field App</span>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Workforce &amp; Hardware</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Barcode/QR scanning, Bluetooth hardware sync, offline field forms, and role-based staff permissions.</p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/contact?service=App+Development"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-600 text-white rounded-xl font-bold hover:shadow-xl hover:shadow-teal-500/25 transition-all"
            >
              Request Custom App Scoping Call
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
                  Connect your mobile apps to high-performance Next.js web applications and admin portals.
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-teal-600 dark:text-teal-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/Services/ai-automation"
              className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 hover:border-teal-500/50 transition-colors group flex items-center justify-between"
            >
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  AI Agents &amp; Workflow Automation
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Integrate intelligent AI assistants and automated WhatsApp notifications with your mobile app.
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-teal-600 dark:text-teal-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 border-t border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex p-4 rounded-3xl bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800/50 mb-8">
            <Smartphone className="w-8 h-8 text-teal-600 dark:text-teal-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-gray-900 dark:text-white mb-6">
            Ready to Launch on{" "}
            <span className="bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              iOS &amp; Android
            </span>
            ?
          </h2>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            From user journey wireframes to App Store certification, our mobile engineering team turns your product vision into a smooth, 60 FPS mobile reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push("/contact?service=App+Development")}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-600 text-white rounded-xl font-bold text-base hover:shadow-xl hover:shadow-teal-500/25 transition-all flex items-center justify-center gap-2 group"
            >
              Request Mobile App Scoping Call
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
            Guaranteed 24hr response • Requirement-based milestone scoping • Zero third-party lock-in
          </p>
        </div>
      </section>
    </>
  );
}
