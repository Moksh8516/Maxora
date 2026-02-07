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
  Server,
  Rocket,
  BarChart,
  Users,
  Clock,
  ChevronRight,
  ArrowRight,
  MessageSquare,
  Palette,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Apple,
  Sparkles,
  Cloud,
  Wifi,
  Database,
  Globe,
  Cctv,
} from "lucide-react";
import { TiVendorAndroid } from "react-icons/ti";
import { useRouter } from "next/navigation";

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
        "Smooth, responsive apps built with platform-specific technologies",
      icon: <Zap className="w-5 h-5" />,
      color: "yellow",
    },
    {
      title: "Cross-Platform",
      description: "Single codebase for both iOS and Android platforms",
      icon: <TabletSmartphone className="w-5 h-5" />,
      color: "purple",
    },
    {
      title: "Offline Capability",
      description: "Function seamlessly without internet connection",
      icon: <Wifi className="w-5 h-5" />,
      color: "blue",
    },
    {
      title: "App Store Ready",
      description: "Fully compliant with Apple and Google guidelines",
      icon: <Shield className="w-5 h-5" />,
      color: "green",
    },
    {
      title: "Push Notifications",
      description: "Engage users with timely updates and messages",
      icon: <Sparkles className="w-5 h-5" />,
      color: "pink",
    },
    {
      title: "Cloud Integration",
      description: "Scalable backend with secure data synchronization",
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
      technologies: ["Swift", "UIKit", "SwiftUI", "Core Data", "ARKit"],
    },
    {
      name: "Android",
      icon: <TiVendorAndroid className="w-8 h-8" />,
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "Room",
        "Coroutines",
        "ML Kit",
      ],
    },
    {
      name: "Cross-Platform",
      icon: <TabletSmartphone className="w-8 h-8" />,
      technologies: [
        "React Native",
        "Flutter",
        "Ionic",
        "Xamarin",
        "Capacitor",
      ],
    },
  ],
  benefits: [
    {
      title: "Increased User Engagement",
      description: "Direct access to customers through their mobile devices",
      icon: <Users className="w-5 h-5" />,
      metric: "3x",
    },
    {
      title: "Faster Performance",
      description: "Native apps provide superior speed and responsiveness",
      icon: <Rocket className="w-5 h-5" />,
      metric: "60%",
    },
    {
      title: "Higher Conversion Rates",
      description: "Optimized mobile experiences drive more conversions",
      icon: <BarChart className="w-5 h-5" />,
      metric: "40%",
    },
    {
      title: "24/7 Accessibility",
      description: "Users can access your services anytime, anywhere",
      icon: <Clock className="w-5 h-5" />,
      metric: "100%",
    },
  ],
  process: [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "Define goals, target audience, and feature requirements",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Create intuitive interfaces and user experience flows",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Prototype Development",
      description: "Build a functional prototype for testing and feedback",
      icon: <Cctv className="w-6 h-6" />,
    },
    {
      step: "04",
      title: "App Development",
      description: "Full-scale development with modern technologies",
      icon: <Code className="w-6 h-6" />,
    },
    {
      step: "05",
      title: "Testing & Quality",
      description: "Rigorous testing across all devices and scenarios",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      step: "06",
      title: "Launch & Maintenance",
      description: "App store deployment and ongoing support",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ],
  caseStudies: [
    {
      title: "Fitness Tracking App",
      description: "Built a comprehensive fitness app with real-time analytics",
      results: [
        "500k+ downloads",
        "4.9/5 app store rating",
        "70% daily active users",
      ],
      platform: "iOS & Android",
    },
    {
      title: "E-commerce Mobile App",
      description: "Shopping app with AR try-on and instant checkout",
      results: [
        "3x mobile revenue growth",
        "45% faster checkout",
        "2M+ monthly transactions",
      ],
      platform: "Cross-platform",
    },
    {
      title: "Enterprise Productivity",
      description: "Internal tools app for a Fortune 500 company",
      results: [
        "50% productivity increase",
        "99.9% uptime",
        "10k+ daily users",
      ],
      platform: "iOS & Android",
    },
  ],
  appTypes: [
    {
      type: "Native Apps",
      description: "Platform-specific applications for maximum performance",
      icon: <Zap className="w-6 h-6" />,
      bestFor: [
        "High-performance needs",
        "Platform-specific features",
        "Complex animations",
      ],
    },
    {
      type: "Cross-Platform",
      description: "Single codebase for multiple platforms",
      icon: <TabletSmartphone className="w-6 h-6" />,
      bestFor: [
        "Faster development",
        "Budget efficiency",
        "Consistent UX across platforms",
      ],
    },
    {
      type: "Progressive Web Apps",
      description: "Web applications with native-like features",
      icon: <Globe className="w-6 h-6" />,
      bestFor: ["Wide reach", "No app store approval", "Easier updates"],
    },
  ],
};

export default function AppDevelopmentPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const router = useRouter();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent dark:from-gray-900/50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float-delayed" />

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
              Native & cross-platform mobile applications that drive engagement
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              We create powerful, user-friendly mobile applications for iOS and
              Android platforms. Our apps are designed to deliver exceptional
              user experiences, drive engagement, and help businesses connect
              with their audience on the go.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/Contact")}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover-lift flex items-center justify-center gap-2"
              >
                Start Your App Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => router.push("/Case-Studies")}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors hover-lift"
              >
                View Mobile Case Studies
              </button>
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
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
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
            {/* Full Description */}
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 dark:text-white mb-6">
                Custom Mobile App Development Solutions
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  At DigitalSolutions, we specialize in creating bespoke mobile
                  applications that are tailored to your specific business
                  needs. Our team of experienced developers uses the latest
                  technologies to build scalable, secure, and high-performing
                  apps for iOS, Android, and cross-platform solutions.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We believe in a collaborative approach, working closely with
                  you throughout the development process to ensure the final
                  product exceeds your expectations and helps you achieve your
                  business objectives in the mobile space.
                </p>
              </div>
            </div>

            {/* App Types */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceData.appTypes.map((appType, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center mb-6">
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

            {/* Value Proposition */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                  Native Performance
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our apps deliver native-level performance with smooth
                  animations and responsive interactions.
                </p>
              </div>

              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                  App Store Compliance
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  All our apps are built to meet strict App Store and Play Store
                  guidelines for seamless approval.
                </p>
              </div>

              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-600 to-rose-500 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                  Scalable Architecture
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our solutions are designed to grow with your user base,
                  handling increased traffic and features.
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
                {`Every mobile application we build includes these essential features to ensure
                success in today's competitive app market.`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceData.features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r from-${feature.color}-600 to-${feature.color}-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
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
                Our App Development{" "}
                <span className="gradient-text">Process</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We follow a proven methodology to ensure your mobile app is
                delivered on time, within budget, and exceeds expectations.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 md:left-1/2 md:-translate-x-1/2" />

              <div className="space-y-12">
                {serviceData.process.map((step, index) => (
                  <div
                    key={index}
                    className={`relative flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-8`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center z-10">
                      {step.icon}
                    </div>
                    <div
                      className={`flex-grow ${index % 2 === 0 ? "md:text-right" : ""}`}
                    >
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
                We develop for all major mobile platforms using modern,
                battle-tested technologies to build robust and scalable
                applications.
              </p>
            </div>

            {/* Platform Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {serviceData.platforms.map((platform, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600/10 to-pink-500/10">
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
                      {index === 0 &&
                        "Ideal for maximum performance and iOS-specific features"}
                      {index === 1 &&
                        "Perfect for reaching Android's vast user base"}
                      {index === 2 &&
                        "Best for cost-effective multi-platform deployment"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Technology Stack */}
            <div>
              <h3 className="text-2xl font-heading text-gray-900 dark:text-white mb-6">
                Technology Stack
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

            {/* Technology Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-4">
                  Frontend Frameworks
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-purple-500" />
                    React Native
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-purple-500" />
                    Flutter
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-purple-500" />
                    SwiftUI & Jetpack Compose
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-4">
                  Backend & Database
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-pink-500" />
                    Firebase
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-pink-500" />
                    AWS Amplify
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-pink-500" />
                    GraphQL & REST APIs
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-4">
                  Tools & Infrastructure
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-indigo-500" />
                    Xcode & Android Studio
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-indigo-500" />
                    Fastlane & CI/CD
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-indigo-500" />
                    App Store Connect
                  </li>
                </ul>
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
                Our mobile app development solutions deliver tangible results
                that drive business growth and customer loyalty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceData.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
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
                {
                  "See how we've helped businesses transform their mobile presence with custom app solutions."
                }
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {serviceData.caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
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
                      <div
                        key={resultIndex}
                        className="flex items-center gap-2"
                      >
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
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading text-gray-900 dark:text-white mb-6">
              Ready to Build Your{" "}
              <span className="gradient-text">Mobile App</span>?
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              {` Let's discuss how we can create the perfect mobile solution for
              your business needs and goals.`}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/Contact")}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover-lift flex items-center justify-center gap-2"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => router.push("/Portfolio")}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors hover-lift"
              >
                View Our App Portfolio
              </button>
            </div>

            <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
              Get a response within 24 hours • No obligation consultation
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
