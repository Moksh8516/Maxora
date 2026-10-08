"use client";

import { useState } from "react";
import {
  Smartphone,
  TabletSmartphone,
  Zap,
  Shield,
  CheckCircle,
  Code,
  Layers,
  Rocket,
  BarChart,
  Users,
  Clock,
  ChevronRight,
  ArrowRight,
  MessageSquare,
  Palette,
  ShieldCheck,
  TrendingUp,
  Apple,
  Sparkles,
  Cloud,
  Wifi,
  Globe,
  Cctv,
} from "lucide-react";
import { TiVendorAndroid } from "react-icons/ti";
import Link from "next/link";

const serviceData = {
  id: "app-development",
  title: "App Development",
  description: "Native & Cross-platform Mobile Applications",
  fullDescription:
    "We create powerful, user-friendly mobile applications for iOS and Android platforms. Our apps are designed to deliver exceptional user experiences, drive engagement, and help businesses connect with their audience on the go.",
  icon: <Smartphone className="w-6 h-6" />,
  features: [
    {
      title: "Native Performance",
      description:
        "Smooth, responsive apps built with platform-specific optimizations",
      icon: <Zap className="w-5 h-5" />,
      color: "yellow",
    },
    {
      title: "Cross-Platform Efficiency",
      description: "Unified codebase for both iOS and Android platforms using React Native & Flutter",
      icon: <TabletSmartphone className="w-5 h-5" />,
      color: "purple",
    },
    {
      title: "Offline Capability",
      description: "Function seamlessly with offline data caching and synchronization",
      icon: <Wifi className="w-5 h-5" />,
      color: "blue",
    },
    {
      title: "App Store Ready",
      description: "Fully compliant with Apple App Store and Google Play guidelines",
      icon: <Shield className="w-5 h-5" />,
      color: "green",
    },
    {
      title: "Push Notifications",
      description: "Engage and retain users with targeted real-time messaging",
      icon: <Sparkles className="w-5 h-5" />,
      color: "pink",
    },
    {
      title: "Cloud & Backend Integration",
      description: "Scalable backend with secure APIs, authentication, and database sync",
      icon: <Cloud className="w-5 h-5" />,
      color: "cyan",
    },
  ],
  technologies: [
    "React Native",
    "Flutter",
    "Swift",
    "Kotlin",
    "Firebase",
    "AWS Amplify",
    "Xcode",
    "Android Studio",
    "Redux",
    "GraphQL",
    "TypeScript",
    "Dart",
  ],
  platforms: [
    {
      name: "iOS",
      icon: <Apple className="w-8 h-8" />,
      technologies: ["Swift", "SwiftUI", "UIKit", "Core Data", "TestFlight"],
    },
    {
      name: "Android",
      icon: <TiVendorAndroid className="w-8 h-8" />,
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "Room",
        "Coroutines",
        "Google Play Services",
      ],
    },
    {
      name: "Cross-Platform",
      icon: <TabletSmartphone className="w-8 h-8" />,
      technologies: [
        "React Native",
        "Flutter",
        "TypeScript",
        "Dart",
        "Capacitor",
      ],
    },
  ],
  benefits: [
    {
      title: "Increased User Engagement",
      description: "Direct customer touchpoint with home-screen presence",
      icon: <Users className="w-5 h-5" />,
      metric: "3x",
    },
    {
      title: "Superior Speed & Smoothness",
      description: "Optimized 60fps animations and rapid interactive response",
      icon: <Rocket className="w-5 h-5" />,
      metric: "60%",
    },
    {
      title: "Higher Conversion Rates",
      description: "Streamlined checkout and native device feature adoption",
      icon: <BarChart className="w-5 h-5" />,
      metric: "40%",
    },
    {
      title: "24/7 Accessibility",
      description: "Users can interact with your core services anytime, anywhere",
      icon: <Clock className="w-5 h-5" />,
      metric: "100%",
    },
  ],
  process: [
    {
      step: "01",
      title: "Strategy & UX Research",
      description: "Define goals, user personas, and feature roadmaps",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      step: "02",
      title: "UI/UX Interactive Design",
      description: "Create pixel-perfect Figma screens and user journeys",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Prototype & Architecture",
      description: "Set up component architecture, state management, and API contracts",
      icon: <Cctv className="w-6 h-6" />,
    },
    {
      step: "04",
      title: "App Development",
      description: "Full-scale mobile engineering with clean, modular code",
      icon: <Code className="w-6 h-6" />,
    },
    {
      step: "05",
      title: "Testing & Quality Assurance",
      description: "Automated and manual testing across various screen resolutions and OS versions",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      step: "06",
      title: "Store Launch & Growth",
      description: "App Store & Play Store publishing with ongoing maintenance",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ],
  caseStudies: [
    {
      title: "On-Demand Delivery App",
      description: "Built a cross-platform mobile app with live GPS tracking and instant notifications",
      results: [
        "100k+ active installs",
        "4.8/5 app store rating",
        "70% daily active retention",
      ],
      platform: "iOS & Android",
    },
    {
      title: "mCommerce Shopping App",
      description: "Mobile commerce application with biometric login and one-tap checkout",
      results: [
        "3x mobile revenue growth",
        "45% faster checkout completion",
        "Sub-100ms API response time",
      ],
      platform: "React Native",
    },
    {
      title: "Enterprise Field Operations App",
      description: "Internal operations app with offline syncing and barcode scanning",
      results: [
        "50% productivity increase",
        "Zero data loss in offline mode",
        "10k+ daily operational logs",
      ],
      platform: "Flutter",
    },
  ],
  appTypes: [
    {
      type: "Native iOS & Android",
      description: "Platform-specific codebases for maximum device integration and performance",
      icon: <Zap className="w-6 h-6" />,
      bestFor: [
        "Hardware-intensive apps",
        "Complex AR/ML features",
        "Platform-exclusive design paradigms",
      ],
    },
    {
      type: "Cross-Platform (React Native / Flutter)",
      description: "Single codebase powering both major app stores with native feel",
      icon: <TabletSmartphone className="w-6 h-6" />,
      bestFor: [
        "Faster time to market",
        "Cost-effective multi-platform releases",
        "Consistent UI across platforms",
      ],
    },
    {
      type: "Progressive Web Apps (PWA)",
      description: "Web apps installable directly to mobile home screens",
      icon: <Globe className="w-6 h-6" />,
      bestFor: ["Instant distribution", "No store approval delay", "Lightweight footprint"],
    },
  ],
};

export default function AppDevelopmentClient() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent dark:from-gray-900/50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-4 rounded-2xl glass-effect mb-8 hover-lift">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading text-gray-900 dark:text-white mb-6">
              App <span className="gradient-text">Development</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Native & cross-platform mobile applications that drive user engagement
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              We design and build powerful, user-friendly mobile applications for iOS and
              Android platforms. From MVP validation to enterprise-grade apps, we deliver
              smooth performance and intuitive experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover-lift flex items-center justify-center gap-2"
              >
                Start Your App Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors hover-lift flex items-center justify-center gap-2"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-200 dark:border-gray-800 pb-4">
          {[
            "overview",
            "features",
            "process",
            "platforms",
            "benefits",
            "case-studies",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {tab
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 dark:text-white mb-6">
                Mobile App Engineering by Maxora Technology
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  At Maxora Technology, we craft tailored mobile applications that
                  combine sleek design with rock-solid architectural foundations.
                  Our team leverages modern ecosystems including React Native,
                  Flutter, Swift, and Kotlin to deliver native-feel experiences on both
                  Apple iOS and Google Android.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We collaborate closely throughout the entire lifecycle—from initial
                  wireframes and clickable prototypes to App Store submission and
                  continuous post-launch optimization.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceData.appTypes.map((appType, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center mb-6 text-white">
                    {appType.icon}
                  </div>
                  <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                    {appType.type}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {appType.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Best for:
                    </p>
                    {appType.bestFor.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center mb-6 text-white">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                  Fluid 60fps Performance
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Engineered with native UI threads, hardware acceleration, and optimized
                  bundle sizes for instant launch and fluid transitions.
                </p>
              </div>

              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 flex items-center justify-center mb-6 text-white">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                  App Store Compliance
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Built to adhere strictly to Apple Review Guidelines and Google Play
                  Policies, ensuring reliable approvals and fast release cycles.
                </p>
              </div>

              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-600 to-rose-500 flex items-center justify-center mb-6 text-white">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                  Modular Scalability
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Clean state management and decoupled API layers allow your application
                  to grow features without instability.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Features Tab */}
        {activeTab === "features" && (
          <div className="space-y-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 dark:text-white mb-6">
                Key <span className="gradient-text">Features</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Every mobile application we produce integrates essential mobile capabilities
                designed to boost user retention and organic App Store visibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceData.features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Process Tab */}
        {activeTab === "process" && (
          <div className="space-y-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 dark:text-white mb-6">
                Our Mobile Development{" "}
                <span className="gradient-text">Process</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                A rigorous, stage-gated development model ensuring your mobile app launches
                on schedule with enterprise-grade quality.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 md:left-1/2 md:-translate-x-1/2" />

              <div className="space-y-12">
                {serviceData.process.map((step, index) => (
                  <div
                    key={index}
                    className={`relative flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-8`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center z-10 text-white">
                      {step.icon}
                    </div>
                    <div className={`flex-grow ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      <div
                        className={`p-6 rounded-2xl glass-effect hover-lift max-w-lg ${index % 2 === 0 ? "md:ml-auto" : ""}`}
                      >
                        <span className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-3">
                          Step {step.step}
                        </span>
                        <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Platforms Tab */}
        {activeTab === "platforms" && (
          <div className="space-y-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 dark:text-white mb-6">
                Platform <span className="gradient-text">Expertise</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We develop across iOS, Android, and cross-platform runtimes using modern
                toolchains to match your target audience and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {serviceData.platforms.map((platform, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600/10 to-pink-500/10 text-purple-600 dark:text-purple-400">
                      {platform.icon}
                    </div>
                    <h3 className="text-2xl font-heading text-gray-900 dark:text-white">
                      {platform.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {platform.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {index === 0 && "Ideal for maximum performance, Apple ecosystem integration, and iOS App Store reach"}
                      {index === 1 && "Optimized for Android device diversity and Google Play Store distribution"}
                      {index === 2 && "Single codebase with maximum efficiency across both major stores"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-heading text-gray-900 dark:text-white mb-6">
                Mobile Technology Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {serviceData.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="group p-6 rounded-2xl glass-effect hover-lift flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600/10 to-pink-500/10 flex items-center justify-center mb-3 group-hover:from-purple-600/20 group-hover:to-pink-500/20">
                      <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Benefits Tab */}
        {activeTab === "benefits" && (
          <div className="space-y-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 dark:text-white mb-6">
                Business <span className="gradient-text">Benefits</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                A purpose-built mobile app creates a permanent brand presence on users&apos;
                devices, lifting lifetime value and customer engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceData.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white">
                      {benefit.icon}
                    </div>
                    <span className="text-3xl font-bold gradient-text">
                      {benefit.metric}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Case Studies Tab */}
        {activeTab === "case-studies" && (
          <div className="space-y-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 dark:text-white mb-6">
                Mobile Success <span className="gradient-text">Stories</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                See how Maxora Technology turns product ideas into high-ranking,
                crash-free mobile applications.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {serviceData.caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium">
                      {study.platform}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {study.description}
                  </p>
                  <div className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-4 rounded-2xl glass-effect mb-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white">
                <MessageSquare className="w-8 h-8" />
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading text-gray-900 dark:text-white mb-6">
              Ready to Build Your{" "}
              <span className="gradient-text">Mobile App</span>?
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how Maxora Technology can bring your iOS and Android
              app concepts to life with speed, reliability, and precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover-lift flex items-center justify-center gap-2"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors hover-lift flex items-center justify-center gap-2"
              >
                Explore Other Services
              </Link>
            </div>

            <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
              Get a response within 24 hours • No obligation scoping session
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
