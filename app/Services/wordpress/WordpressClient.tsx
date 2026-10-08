"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Layout,
  Code,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Search,
  ShoppingCart,
  Server,
  RefreshCw,
  Cpu,
  Layers,
  MessageSquare,
} from "lucide-react";

export default function WordpressClient() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("features");

  const serviceData = {
    title: "WordPress Development Services",
    subtitle: "Custom Themes & High-Performance Websites",
    description:
      "Empower your marketing and editorial teams with custom, secure, and blazing-fast WordPress solutions built by Maxora Technology. From bespoke Gutenberg block themes and WooCommerce shops to custom plugin engineering and headless WP architectures.",
    gradient: "from-teal-600 to-emerald-500",
    stats: [
      { value: "95+", label: "Target Google PageSpeed Score" },
      { value: "<1.5s", label: "Average Page Load Time" },
      { value: "100%", label: "Custom Responsive Design" },
      { value: "24/7", label: "Security & Monitoring Available" },
    ],
    features: [
      {
        icon: <Layout className="w-6 h-6 text-white" />,
        title: "Bespoke Theme & Gutenberg Blocks",
        description:
          "Zero bloated page builders. We build lightweight, modular Gutenberg block themes tailored to your brand identity.",
        capabilities: [
          "Custom block development",
          "Clean semantic HTML5 markup",
          "Fast CSS/Tailwind integration",
          "Full mobile responsiveness",
        ],
      },
      {
        icon: <Code className="w-6 h-6 text-white" />,
        title: "Custom Plugin Engineering",
        description:
          "Extend WordPress functionality with secure, tailor-made plugins designed specifically for your business logic.",
        capabilities: [
          "Custom post types & taxonomies",
          "REST API / GraphQL integration",
          "Third-party CRM & ERP synchronization",
          "Custom payment gateway modules",
        ],
      },
      {
        icon: <Zap className="w-6 h-6 text-white" />,
        title: "Speed Optimization & Core Web Vitals",
        description:
          "Advanced caching strategies, image compression, database query optimization, and asset minification for peak speed.",
        capabilities: [
          "Object caching with Redis/Memcached",
          "Next-gen WebP/AVIF image delivery",
          "CDN & Cloudflare setup",
          "Clean database indexing",
        ],
      },
      {
        icon: <Shield className="w-6 h-6 text-white" />,
        title: "WordPress Security & Hardening",
        description:
          "Enterprise hardening, vulnerability scanning, automated backups, and malware protection to keep your site secure.",
        capabilities: [
          "Two-factor authentication (2FA)",
          "Brute-force protection & firewalls",
          "SSL & security headers",
          "Automated off-site backups",
        ],
      },
    ],
    solutions: [
      {
        name: "Corporate & Marketing Websites",
        description:
          "High-converting corporate sites that allow marketing teams to create landing pages effortlessly.",
        features: [
          "Modular block design",
          "SEO meta configuration",
          "Lead form integrations",
          "Multilingual support (WPML/Polylang)",
        ],
      },
      {
        name: "WooCommerce E-Commerce",
        description:
          "Custom WooCommerce stores optimized for high-volume transactions and seamless checkout flows.",
        features: [
          "Custom shop & product page templates",
          "Fast AJAX cart & checkout",
          "Subscription & membership plugins",
          "Automated shipping and tax rules",
        ],
      },
      {
        name: "Headless WordPress (Decoupled)",
        description:
          "WordPress CMS as the backend content management engine paired with Next.js frontend for incredible performance.",
        features: [
          "GraphQL & REST API endpoints",
          "Next.js static site generation (SSG)",
          "Instant global edge distribution",
          "Unmatched security & isolation",
        ],
      },
    ],
    benefits: [
      {
        title: "Effortless Content Management",
        description:
          "An intuitive editorial workflow enabling your team to publish blog posts, case studies, and landing pages with zero coding.",
        metric: "100%",
        icon: <Layout className="w-6 h-6 text-white" />,
      },
      {
        title: "Top-Tier PageSpeed",
        description:
          "Optimized theme architecture achieves 90+ Google PageSpeed scores, boosting SEO ranking and user retention.",
        metric: "95+",
        icon: <Zap className="w-6 h-6 text-white" />,
      },
      {
        title: "Enterprise Hardened Security",
        description:
          "Robust firewalls and secure coding standards safeguard your customer data from common vulnerabilities.",
        metric: "24/7",
        icon: <Shield className="w-6 h-6 text-white" />,
      },
      {
        title: "Search Engine Optimized",
        description:
          "Built-in schema markup, clean sitemaps, and optimized HTML ensure your content ranks prominently in Google.",
        metric: "SEO Ready",
        icon: <Search className="w-6 h-6 text-white" />,
      },
    ],
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient opacity-50" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
              <Sparkles className="w-4 h-4 text-teal-500" />
              <span className="text-sm font-medium gradient-text">
                {serviceData.subtitle}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-heading text-gray-900 dark:text-white mb-6">
              Custom <span className="gradient-text">WordPress Development</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              {serviceData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/contact")}
                className="group px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover-lift flex items-center justify-center gap-2"
              >
                Start Your WordPress Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => router.push("/services")}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors hover-lift"
              >
                Explore All Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-12 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex p-1 rounded-2xl glass-effect">
              {["features", "solutions", "benefits"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-medium capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-teal-600 to-emerald-500 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {activeTab === "features" && (
          <div className="space-y-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 dark:text-white mb-6">
                Engineered for <span className="gradient-text">Speed & Security</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Maxora Technology crafts clean, custom WordPress sites without
                clunky page builder plugins, delivering fast load times, top-tier
                security, and high search engine visibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceData.features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-500 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-heading text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.capabilities.map((cap, capIndex) => (
                      <li
                        key={capIndex}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <CheckCircle className="w-4 h-4 text-teal-500 shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "solutions" && (
          <div className="space-y-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 dark:text-white mb-6">
                WordPress <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Tailored solutions for corporate marketing, high-traffic publishers,
                and modern WooCommerce storefronts.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {serviceData.solutions.map((solution, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl glass-effect hover-lift flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-2xl font-heading text-gray-900 dark:text-white mb-4">
                      {solution.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {solution.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {solution.features.map((feat, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm"
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-600 to-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "benefits" && (
          <div className="space-y-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 dark:text-white mb-6">
                Tangible <span className="gradient-text">WordPress Benefits</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Deliver exceptional web experiences for visitors while giving
                your internal team intuitive publishing tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceData.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-500 flex items-center justify-center">
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
      </div>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-4 rounded-2xl glass-effect mb-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-500 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading text-gray-900 dark:text-white mb-6">
              Ready to Upgrade Your{" "}
              <span className="gradient-text">WordPress Site</span>?
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch with Maxora Technology for custom WordPress
              development, theme redesigns, or performance optimization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/contact")}
                className="group px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover-lift flex items-center justify-center gap-2"
              >
                Schedule WP Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => router.push("/services")}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors hover-lift"
              >
                View Other Services
              </button>
            </div>

            <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
              Clean code • Zero bloat • 24hr response
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
