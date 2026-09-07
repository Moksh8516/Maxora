"use client";

import { useState } from "react";
import {
  ShoppingCart,
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
  Cpu,
  ShieldCheck,
  TrendingUp,
  Globe,
  Smartphone,
  Target,
  Package,
  Truck,
  CreditCard,
  Star,
  Sparkles,
  Brain,
  Search,
  Filter,
  BarChart3,
  Cloud,
  Database,
  Wifi,
  TabletSmartphone,
  Store,
  Gift,
  Tag,
  SmartphoneCharging,
} from "lucide-react";
import { useRouter } from "next/navigation";

const serviceData = {
  id: "ecommerce-development",
  title: "E-commerce Development",
  description: "Modern Online Stores & Shopping Experiences",
  fullDescription:
    "We create high-performance e-commerce solutions using both platform-based tools (Shopify, Wix) and custom development (Next.js/React). Our stores are optimized for conversions, integrated with AI features, and designed to scale with your business growth.",
  icon: <ShoppingCart className="w-6 h-6" />,
  features: [
    {
      title: "AI Product Recommendations",
      description: "Smart suggestions based on user behavior and preferences",
      icon: <Brain className="w-5 h-5" />,
      color: "purple",
    },
    {
      title: "Mobile-First Design",
      description: "Optimized for mobile shopping and seamless checkout",
      icon: <SmartphoneCharging className="w-5 h-5" />,
      color: "blue",
    },
    {
      title: "Instant Checkout",
      description: "One-click purchasing and multiple payment options",
      icon: <CreditCard className="w-5 h-5" />,
      color: "green",
    },
    {
      title: "Advanced Analytics",
      description: "Real-time sales data and customer insights dashboard",
      icon: <BarChart3 className="w-5 h-5" />,
      color: "yellow",
    },
    {
      title: "Inventory Management",
      description: "Automated stock tracking and low-stock alerts",
      icon: <Package className="w-5 h-5" />,
      color: "orange",
    },
    {
      title: "Multi-Channel Sales",
      description: "Sync with Amazon, eBay, and social media platforms",
      icon: <Globe className="w-5 h-5" />,
      color: "indigo",
    },
  ],
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Stripe",
    "PayPal",
    "Shopify API",
    "WooCommerce",
    "GraphQL",
    "Docker",
    "AWS",
  ],
  platforms: [
    {
      name: "Shopify",
      icon: <Store className="w-8 h-8" />,
      description: "Complete e-commerce platform with extensive app ecosystem",
      bestFor: ["Quick launch", "Small to medium businesses", "Dropshipping"],
      features: ["Easy setup", "Theme customization", "App integrations"],
    },
    {
      name: "Wix E-commerce",
      icon: <Sparkles className="w-8 h-8" />,
      description: "Drag-and-drop builder with e-commerce capabilities",
      bestFor: [
        "Creative businesses",
        "Portfolio stores",
        "Service-based products",
      ],
      features: ["Visual editor", "Built-in marketing", "Mobile editor"],
    },
    {
      name: "Custom React/Next.js",
      icon: <Code className="w-8 h-8" />,
      description: "Bespoke e-commerce solutions with full control",
      bestFor: ["Large businesses", "Complex requirements", "Unique branding"],
      features: ["Full customization", "AI integration", "High performance"],
    },
  ],
  aiFeatures: [
    {
      name: "AI Personalization",
      icon: <Brain className="w-8 h-8" />,
      description: "Personalized shopping experiences using machine learning",
      capabilities: [
        "Product recommendations",
        "Dynamic pricing",
        "Personalized content",
      ],
    },
    {
      name: "Chatbots & Assistants",
      icon: <MessageSquare className="w-8 h-8" />,
      description: "AI-powered customer support and shopping assistants",
      capabilities: ["24/7 support", "Order tracking", "Product queries"],
    },
    {
      name: "Predictive Analytics",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "AI-driven insights for business growth",
      capabilities: [
        "Sales forecasting",
        "Inventory prediction",
        "Customer lifetime value",
      ],
    },
  ],
  benefits: [
    {
      title: "Increased Conversions",
      description: "Optimized shopping experience drives higher sales",
      icon: <BarChart className="w-5 h-5" />,
      metric: "35%",
    },
    {
      title: "Mobile Revenue Growth",
      description: "Mobile-optimized stores capture growing mobile shoppers",
      icon: <Smartphone className="w-5 h-5" />,
      metric: "60%",
    },
    {
      title: "Faster Load Times",
      description: "Optimized performance reduces bounce rates",
      icon: <Zap className="w-5 h-5" />,
      metric: "3x",
    },
    {
      title: "24/7 Global Sales",
      description: "Your store is always open to customers worldwide",
      icon: <Globe className="w-5 h-5" />,
      metric: "100%",
    },
  ],
  process: [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "Define goals, target audience, and platform selection",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Create intuitive shopping interfaces and user flows",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Development & Integration",
      description: "Build store with payment gateways and inventory systems",
      icon: <Code className="w-6 h-6" />,
    },
    {
      step: "04",
      title: "AI Feature Implementation",
      description: "Integrate AI personalization and analytics features",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      step: "05",
      title: "Testing & Optimization",
      description: "Thorough testing across all devices and scenarios",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      step: "06",
      title: "Launch & Marketing",
      description: "Go live and implement marketing strategies",
      icon: <Rocket className="w-6 h-6" />,
    },
  ],
  caseStudies: [
    {
      title: "Fashion E-commerce Store",
      description: "Custom Next.js store with AI recommendation engine",
      results: [
        "200% revenue growth",
        "40% conversion rate increase",
        "AI-powered sizing recommendations",
      ],
      platform: "Custom Next.js",
    },
    {
      title: "Electronics Marketplace",
      description: "Shopify Plus store with advanced customization",
      results: [
        "500k+ monthly visitors",
        "Multi-currency support",
        "Integrated AR product preview",
      ],
      platform: "Shopify Plus",
    },
    {
      title: "Subscription Box Service",
      description:
        "Wix store with subscription management and AI personalization",
      results: [
        "10k+ subscribers",
        "95% retention rate",
        "AI-curated monthly boxes",
      ],
      platform: "Wix E-commerce",
    },
  ],
  ecommerceTypes: [
    {
      type: "B2C Retail",
      description: "Direct-to-consumer online stores and marketplaces",
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ["Product catalogs", "Shopping cart", "Checkout system"],
    },
    {
      type: "B2B E-commerce",
      description: "Business-to-business platforms with bulk ordering",
      icon: <Package className="w-6 h-6" />,
      features: ["Wholesale pricing", "Account management", "Bulk ordering"],
    },
    {
      type: "Dropshipping",
      description: "Inventory-free stores with supplier integration",
      icon: <Truck className="w-6 h-6" />,
      features: ["No inventory", "Supplier sync", "Automated fulfillment"],
    },
  ],
  integrations: [
    {
      category: "Payment Gateways",
      items: [
        "Stripe",
        "PayPal",
        "Square",
        "Authorize.net",
        "Apple Pay",
        "Google Pay",
      ],
    },
    {
      category: "Shipping & Logistics",
      items: ["ShipStation", "Shippo", "FedEx", "UPS", "DHL", "USPS"],
    },
    {
      category: "Marketing Tools",
      items: [
        "Mailchimp",
        "Klaviyo",
        "HubSpot",
        "Google Analytics",
        "Facebook Pixel",
      ],
    },
  ],
};

export default function EcommerceDevelopmentPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const router = useRouter();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-transparent dark:from-gray-900/50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-glow" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-lime-500/20 to-yellow-500/20 rounded-full blur-3xl animate-float-delayed" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-4 rounded-2xl glass-effect mb-8 hover-lift">
              <div className="p-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading text-gray-900 dark:text-white mb-6">
              E-commerce <span className="gradient-text">Development</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Modern Online Stores & AI-Powered Shopping Experiences
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              We create high-performance e-commerce solutions using both
              platform-based tools (Shopify, Wix) and custom development
              (Next.js/React). Our stores are optimized for conversions,
              integrated with AI features, and designed to scale with your
              business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/contact")}
                className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover-lift flex items-center justify-center gap-2"
              >
                Launch Your Online Store
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => router.push("/Case-Studies")}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors hover-lift"
              >
                View E-commerce Success Stories
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
                  ? "bg-gradient-to-r from-green-600 to-emerald-500 text-white"
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
                Complete E-commerce Solutions
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  At DigitalSolutions, we specialize in creating powerful
                  e-commerce platforms that drive sales and growth. Whether you
                  need a quick-start Shopify store or a fully custom Next.js
                  solution with AI capabilities, we deliver stores that convert
                  visitors into customers.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Our approach combines cutting-edge technology with proven
                  e-commerce strategies to create shopping experiences that are
                  intuitive, secure, and optimized for maximum conversions
                  across all devices.
                </p>
              </div>
            </div>

            {/* E-commerce Types */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceData.ecommerceTypes.map((type, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center mb-6">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                    {type.type}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {feature}
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                  AI-Powered Shopping
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Intelligent product recommendations, personalized experiences,
                  and AI-driven insights to boost sales and customer
                  satisfaction.
                </p>
              </div>

              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 flex items-center justify-center mb-6">
                  <SmartphoneCharging className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                  Mobile-First Design
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Optimized for mobile shoppers with fast loading, easy
                  navigation, and streamlined checkout processes on all devices.
                </p>
              </div>

              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-lime-600 to-yellow-500 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                  Scalable Architecture
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Built to handle traffic spikes, seasonal sales, and business
                  growth with cloud infrastructure and optimized performance.
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
                Advanced E-commerce{" "}
                <span className="gradient-text">Features</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our e-commerce solutions include cutting-edge features that
                drive conversions and provide exceptional shopping experiences.
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

            {/* AI Feature Showcase */}
            <div className="mt-12">
              <h3 className="text-2xl font-heading text-gray-900 dark:text-white mb-6">
                AI-Powered E-commerce Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {serviceData.aiFeatures.map((aiFeature, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl glass-effect hover-lift"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-green-600/10 to-emerald-500/10">
                        {aiFeature.icon}
                      </div>
                      <h4 className="text-lg font-heading text-gray-900 dark:text-white">
                        {aiFeature.name}
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {aiFeature.description}
                    </p>
                    <div className="space-y-2">
                      {aiFeature.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {capability}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Process Tab */}
        {activeTab === "process" && (
          <div className="space-y-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 dark:text-white mb-6">
                E-commerce Development{" "}
                <span className="gradient-text">Process</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We follow a comprehensive methodology to ensure your online
                store launches successfully and starts generating revenue
                quickly.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-emerald-500 to-lime-500 md:left-1/2 md:-translate-x-1/2" />

              <div className="space-y-12">
                {serviceData.process.map((step, index) => (
                  <div
                    key={index}
                    className={`relative flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-8`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center z-10">
                      {step.icon}
                    </div>
                    <div
                      className={`flex-grow ${index % 2 === 0 ? "md:text-right" : ""}`}
                    >
                      <div
                        className={`p-6 rounded-2xl glass-effect hover-lift max-w-lg ${index % 2 === 0 ? "md:ml-auto" : ""}`}
                      >
                        <span className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium mb-3">
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
                Platform <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We develop on all major e-commerce platforms, choosing the right
                technology based on your business needs, budget, and growth
                plans.
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
                    <div className="p-3 rounded-xl bg-gradient-to-r from-green-600/10 to-emerald-500/10">
                      {platform.icon}
                    </div>
                    <h3 className="text-2xl font-heading text-gray-900 dark:text-white">
                      {platform.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {platform.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Best for:
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {platform.bestFor.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Key Features:
                    </p>
                    <div className="space-y-2">
                      {platform.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Integration Showcase */}
            <div>
              <h3 className="text-2xl font-heading text-gray-900 dark:text-white mb-6">
                Seamless Integrations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {serviceData.integrations.map((integration, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl glass-effect hover-lift"
                  >
                    <h4 className="text-lg font-heading text-gray-900 dark:text-white mb-4">
                      {integration.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {integration.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-600/10 to-emerald-500/10 flex items-center justify-center mb-3 group-hover:from-green-600/20 group-hover:to-emerald-500/20">
                      <Code className="w-6 h-6 text-green-600 dark:text-green-400" />
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
                Our e-commerce solutions deliver measurable results that drive
                revenue growth and customer loyalty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceData.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center">
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
                E-commerce Success{" "}
                <span className="gradient-text">Stories</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {
                  "See how we've helped businesses transform their online sales with innovative e-commerce solutions."
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium">
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
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-500" />
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
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading text-gray-900 dark:text-white mb-6">
              Ready to Launch Your{" "}
              <span className="gradient-text">Online Store</span>?
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              {
                "Let's discuss how we can create the perfect e-commerce solution for your business, whether it's on Shopify, Wix, or a custom-built platform."
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/contact")}
                className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover-lift flex items-center justify-center gap-2"
              >
                Start Your E-commerce Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => router.push("/Portfolio")}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors hover-lift"
              >
                View E-commerce Portfolio
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
