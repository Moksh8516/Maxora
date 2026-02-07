"use client";

import { useState } from "react";
import {
  LayoutDashboard,
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
  Search,
  ShoppingCart,
  Palette as DesignIcon,
  Database,
  Cctv,
  Wrench,
  Plug,
  Server,
  Cloud,
  Smartphone,
  Target,
  RefreshCw,
} from "lucide-react";
import { useRouter } from "next/navigation";

const serviceData = {
  id: "wordpress-development",
  title: "WordPress Development",
  description: "Custom WordPress Websites & E-commerce Solutions",
  fullDescription:
    "We create powerful, scalable, and secure WordPress websites that drive business growth. From custom themes to enterprise-grade WooCommerce stores, we deliver solutions that combine flexibility with professional design and development.",
  icon: <LayoutDashboard className="w-6 h-6" />,
  features: [
    {
      title: "Custom Theme Development",
      description: "Bespoke designs tailored to your brand identity",
      icon: <Palette className="w-5 h-5" />,
      color: "blue",
    },
    {
      title: "WooCommerce Solutions",
      description: "Full-featured online stores with advanced capabilities",
      icon: <ShoppingCart className="w-5 h-5" />,
      color: "purple",
    },
    {
      title: "Speed Optimization",
      description: "Lightning-fast loading times for better conversions",
      icon: <Zap className="w-5 h-5" />,
      color: "yellow",
    },
    {
      title: "Enterprise Security",
      description: "Multi-layer security and regular malware scans",
      icon: <Shield className="w-5 h-5" />,
      color: "green",
    },
    {
      title: "SEO Ready",
      description: "Built with search engine optimization best practices",
      icon: <Search className="w-5 h-5" />,
      color: "teal",
    },
    {
      title: "Responsive Design",
      description: "Perfectly optimized for all devices and screens",
      icon: <Smartphone className="w-5 h-5" />,
      color: "indigo",
    },
  ],
  technologies: [
    "WordPress Core",
    "WooCommerce",
    "Elementor Pro",
    "Divi Builder",
    "ACF Pro",
    "Gravity Forms",
    "Yoast SEO",
    "WP Rocket",
    "BuddyBoss",
    "LearnDash",
    "WPML",
    "Custom APIs",
  ],
  services: [
    {
      name: "Custom WordPress Development",
      icon: <Code className="w-8 h-8" />,
      description: "Bespoke themes and plugins built from scratch",
      features: [
        "Custom Post Types",
        "Advanced Custom Fields",
        "API Integration",
      ],
    },
    {
      name: "WooCommerce Stores",
      icon: <ShoppingCart className="w-8 h-8" />,
      description: "Complete e-commerce solutions with advanced features",
      features: [
        "Payment Gateways",
        "Inventory Management",
        "Shipping Solutions",
      ],
    },
    {
      name: "WordPress Maintenance",
      icon: <Wrench className="w-8 h-8" />,
      description: "Ongoing support and updates for your website",
      features: [
        "Security Updates",
        "Performance Optimization",
        "Regular Backups",
      ],
    },
  ],
  benefits: [
    {
      title: "Easy Content Management",
      description: "User-friendly interface for non-technical users",
      icon: <LayoutDashboard className="w-5 h-5" />,
      metric: "95%",
    },
    {
      title: "Cost-Effective Solutions",
      description: "Powerful features without custom development costs",
      icon: <TrendingUp className="w-5 h-5" />,
      metric: "60%",
    },
    {
      title: "Rapid Deployment",
      description: "Get your website live in weeks, not months",
      icon: <Rocket className="w-5 h-5" />,
      metric: "2-4 Weeks",
    },
    {
      title: "SEO Friendly",
      description: "Built-in optimization for better search rankings",
      icon: <Search className="w-5 h-5" />,
      metric: "85%",
    },
  ],
  process: [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Understanding your goals, audience, and requirements",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Creating wireframes and visual designs for approval",
      icon: <DesignIcon className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Development",
      description: "Building your website with custom features",
      icon: <Code className="w-6 h-6" />,
    },
    {
      step: "04",
      title: "Content Integration",
      description: "Adding all content, images, and media",
      icon: <Database className="w-6 h-6" />,
    },
    {
      step: "05",
      title: "Testing & Quality",
      description: "Thorough testing across all devices and browsers",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      step: "06",
      title: "Launch & Training",
      description: "Going live and training your team",
      icon: <Rocket className="w-6 h-6" />,
    },
  ],
  caseStudies: [
    {
      title: "E-commerce Marketplace",
      description: "Multi-vendor WooCommerce store with custom features",
      results: [
        "300+ vendors onboarded",
        "5x revenue growth",
        "40% faster load times",
      ],
      category: "WooCommerce",
    },
    {
      title: "Membership Platform",
      description: "Custom membership site with subscription management",
      results: ["10k+ active members", "99.9% uptime", "70% user retention"],
      category: "Membership",
    },
    {
      title: "Corporate Website",
      description: "Enterprise WordPress site with multilingual support",
      results: [
        "3x organic traffic",
        "50% lead increase",
        "Multi-language support",
      ],
      category: "Corporate",
    },
  ],
  wordpressTypes: [
    {
      type: "Corporate Websites",
      description: "Professional business websites with CMS capabilities",
      icon: <Globe className="w-6 h-6" />,
      bestFor: ["Businesses", "Non-profits", "Professional services"],
    },
    {
      type: "E-commerce Stores",
      description: "Full-featured online stores with WooCommerce",
      icon: <ShoppingCart className="w-6 h-6" />,
      bestFor: ["Retailers", "Dropshipping", "Digital products"],
    },
    {
      type: "Membership Sites",
      description: "Subscription-based content and community platforms",
      icon: <Users className="w-6 h-6" />,
      bestFor: ["Courses", "Premium content", "Communities"],
    },
  ],
  plugins: [
    {
      category: "Essential",
      items: [
        "Yoast SEO",
        "WP Rocket",
        "Gravity Forms",
        "Advanced Custom Fields",
      ],
    },
    {
      category: "E-commerce",
      items: ["WooCommerce", "Product Add-ons", "Subscription", "Membership"],
    },
    {
      category: "Performance",
      items: [
        "WP-Optimize",
        "Redis Cache",
        "CDN Integration",
        "Image Optimization",
      ],
    },
  ],
};

export default function WordPressDevelopmentPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const router = useRouter();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-gray-900/50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-full blur-3xl animate-float-delayed" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-4 rounded-2xl glass-effect mb-8 hover-lift">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500">
                <LayoutDashboard className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading text-gray-900 dark:text-white mb-6">
              WordPress <span className="gradient-text">Development</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Custom WordPress Websites & E-commerce Solutions
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              We create powerful, scalable, and secure WordPress websites that
              drive business growth. From custom themes to enterprise-grade
              WooCommerce stores, we deliver solutions that combine flexibility
              with professional design and development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/Contact")}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover-lift flex items-center justify-center gap-2"
              >
                Start Your WordPress Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => router.push("/Case-Studies")}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors hover-lift"
              >
                View WordPress Case Studies
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
            "services",
            "benefits",
            "case-studies",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-600 to-teal-500 text-white"
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
                Custom WordPress Development Solutions
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  At DigitalSolutions, we specialize in creating bespoke
                  WordPress solutions that are tailored to your specific
                  business needs. Our team of experienced WordPress developers
                  uses the latest technologies to build scalable, secure, and
                  high-performing websites.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Whether you need a simple blog, a corporate website, or a
                  complex e-commerce store, we deliver solutions that combine
                  the power of WordPress with professional design and
                  development practices.
                </p>
              </div>
            </div>

            {/* WordPress Types */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceData.wordpressTypes.map((type, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center mb-6">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                    {type.type}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Best for:
                    </p>
                    {type.bestFor.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-500" />
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                  Blazing Fast Performance
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our WordPress sites are optimized for speed with caching, CDN,
                  and image optimization for the best user experience.
                </p>
              </div>

              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-500 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                  Enterprise Security
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We implement multi-layer security measures including
                  firewalls, malware scanning, and regular updates to protect
                  your site.
                </p>
              </div>

              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-500 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                  SEO Optimized
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Built with SEO best practices to ensure your website ranks
                  well in search engines and attracts organic traffic.
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
                WordPress <span className="gradient-text">Features</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Every WordPress website we build includes these essential
                features to ensure success and provide the best user experience.
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

            {/* Plugin Showcase */}
            <div className="mt-12">
              <h3 className="text-2xl font-heading text-gray-900 dark:text-white mb-6">
                Premium Plugins & Tools
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {serviceData.plugins.map((pluginCategory, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl glass-effect hover-lift"
                  >
                    <h4 className="text-lg font-heading text-gray-900 dark:text-white mb-4">
                      {pluginCategory.category}
                    </h4>
                    <ul className="space-y-2">
                      {pluginCategory.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                        >
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
                Our WordPress <span className="gradient-text">Process</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We follow a proven methodology to ensure your WordPress website
                is delivered on time, within budget, and exceeds expectations.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-teal-500 to-indigo-500 md:left-1/2 md:-translate-x-1/2" />

              <div className="space-y-12">
                {serviceData.process.map((step, index) => (
                  <div
                    key={index}
                    className={`relative flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-8`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center z-10">
                      {step.icon}
                    </div>
                    <div
                      className={`flex-grow ${index % 2 === 0 ? "md:text-right" : ""}`}
                    >
                      <div
                        className={`p-6 rounded-2xl glass-effect hover-lift max-w-lg ${index % 2 === 0 ? "md:ml-auto" : ""}`}
                      >
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">
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

        {/* Services Tab */}
        {activeTab === "services" && (
          <div className="space-y-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 dark:text-white mb-6">
                WordPress <span className="gradient-text">Services</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We offer a comprehensive range of WordPress services to meet all
                your needs, from development to ongoing maintenance.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {serviceData.services.map((service, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600/10 to-teal-500/10">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-heading text-gray-900 dark:text-white">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600/10 to-teal-500/10 flex items-center justify-center mb-3 group-hover:from-blue-600/20 group-hover:to-teal-500/20">
                      <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
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
                  Page Builders
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-blue-500" />
                    Elementor Pro
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-blue-500" />
                    Divi Builder
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-blue-500" />
                    Beaver Builder
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-4">
                  E-commerce
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-teal-500" />
                    WooCommerce
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-teal-500" />
                    Subscription Plugins
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-teal-500" />
                    Payment Gateways
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-4">
                  Performance & Security
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-indigo-500" />
                    WP Rocket
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-indigo-500" />
                    Wordfence Security
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-indigo-500" />
                    CDN Integration
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
                Our WordPress development solutions deliver tangible results
                that drive business growth and customer satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceData.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center">
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
                WordPress Success <span className="gradient-text">Stories</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {`See how we've helped businesses transform their online presence
                with custom WordPress solutions.`}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {serviceData.caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">
                      {study.category}
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
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-500" />
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
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading text-gray-900 dark:text-white mb-6">
              Ready to Build Your{" "}
              <span className="gradient-text">WordPress Website</span>?
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              {`Let's discuss how we can create the perfect WordPress solution for your
              business needs and goals.`}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/Contact")}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover-lift flex items-center justify-center gap-2"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => router.push("/Portfolio")}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors hover-lift"
              >
                View WordPress Portfolio
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
