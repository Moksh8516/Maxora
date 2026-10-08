"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ShoppingCart,
  Zap,
  Shield,
  CreditCard,
  Truck,
  CheckCircle,
  ArrowRight,
  Sparkles,
  BarChart,
  ShoppingBag,
  Store,
  Boxes,
  Percent,
  RefreshCw,
  Clock,
  Layers,
  Code,
  MessageSquare,
} from "lucide-react";

export default function EcommerceClient() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("features");

  const serviceData = {
    title: "E-Commerce Development Services",
    subtitle: "High-Converting Online Stores",
    description:
      "Scale your digital commerce with high-speed, secure e-commerce platforms engineered by Maxora Technology. From custom headless Shopify and WooCommerce to enterprise multi-vendor marketplaces, we create seamless shopping experiences that drive sales.",
    gradient: "from-green-600 to-emerald-500",
    stats: [
      { value: "3.2x", label: "Average Conversion Rate Boost" },
      { value: "<1.2s", label: "Target Page Load Speed" },
      { value: "99.99%", label: "Checkout Reliability" },
      { value: "100%", label: "Secure PCI-DSS Workflows" },
    ],
    features: [
      {
        icon: <ShoppingCart className="w-6 h-6 text-white" />,
        title: "Custom Storefront Design & UX",
        description:
          "Mobile-first, conversion-optimized shopping flows with frictionless cart and checkout experiences.",
        capabilities: [
          "Custom UI/UX brand styling",
          "Mobile-first responsive layouts",
          "One-page checkout flows",
          "Live search & product filtering",
        ],
      },
      {
        icon: <CreditCard className="w-6 h-6 text-white" />,
        title: "Secure Payment & Multi-Currency",
        description:
          "Integrate Stripe, PayPal, Razorpay, Apple Pay, Google Pay, and global currencies with automated tax compliance.",
        capabilities: [
          "Global payment gateways",
          "Multi-currency conversion",
          "Automated sales tax & VAT",
          "Fraud prevention & SSL security",
        ],
      },
      {
        icon: <Boxes className="w-6 h-6 text-white" />,
        title: "Inventory & Order Management",
        description:
          "Real-time inventory synchronization across sales channels, multi-warehouse support, and automated fulfillment.",
        capabilities: [
          "Real-time stock level updates",
          "Multi-location warehousing",
          "Automated shipping label printing",
          "Return & refund management",
        ],
      },
      {
        icon: <BarChart className="w-6 h-6 text-white" />,
        title: "E-Commerce Analytics & Growth",
        description:
          "Deep integration with Google Analytics 4, Meta Pixel, abandoned cart recovery, and customer lifetime value reporting.",
        capabilities: [
          "Enhanced ecommerce GA4 tracking",
          "Automated abandoned cart emails",
          "Customer retention metrics",
          "Upsell & cross-sell algorithms",
        ],
      },
    ],
    platforms: [
      {
        name: "Shopify & Shopify Plus",
        description:
          "Custom Shopify theme development, private app creation, and headless Shopify with Next.js frontend.",
        features: [
          "Liquid theme development",
          "Shopify Storefront API",
          "App integrations",
          "Checkout customization",
        ],
      },
      {
        name: "WooCommerce & WordPress",
        description:
          "Flexible, scalable WooCommerce solutions with customized checkout flows, plugins, and caching layers.",
        features: [
          "Custom WooCommerce themes",
          "High-performance database indexing",
          "Subscription engines",
          "B2B wholesale portals",
        ],
      },
      {
        name: "Custom Full-Stack E-Commerce",
        description:
          "Headless e-commerce built with Next.js, Node.js, and PostgreSQL for enterprise brands with unique business logic.",
        features: [
          "Sub-second page speeds",
          "Infinite scalability",
          "Custom product configurators",
          "Direct ERP/WMS synchronization",
        ],
      },
    ],
    benefits: [
      {
        title: "Higher Conversion Rates",
        description:
          "Optimized checkout steps, lightning-fast product loading, and intuitive mobile design maximize completed transactions.",
        metric: "+65%",
        icon: <ShoppingBag className="w-6 h-6 text-white" />,
      },
      {
        title: "Accelerated Store Speed",
        description:
          "Sub-second page loads reduce bounce rates and boost organic search ranking on Google.",
        metric: "<1.2s",
        icon: <Zap className="w-6 h-6 text-white" />,
      },
      {
        title: "Automated Operations",
        description:
          "Seamless integrations with shipping providers, accounting software, and CRM reduce manual fulfillment labor.",
        metric: "-50%",
        icon: <RefreshCw className="w-6 h-6 text-white" />,
      },
      {
        title: "Global Reach",
        description:
          "Multi-language, multi-currency, and localized tax calculations allow your brand to sell effortlessly worldwide.",
        metric: "Global",
        icon: <Store className="w-6 h-6 text-white" />,
      },
    ],
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient opacity-50" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
              <Sparkles className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium gradient-text">
                {serviceData.subtitle}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-heading text-gray-900 dark:text-white mb-6">
              Modern <span className="gradient-text">E-Commerce Platforms</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              {serviceData.description}
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
              {["features", "platforms", "benefits"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-medium capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg"
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
                Engineered for <span className="gradient-text">Sales Growth</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Maxora Technology delivers custom e-commerce solutions that
                streamline the buyer journey, optimize shopping cart conversions,
                and provide secure payment management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceData.features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center mb-6">
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
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "platforms" && (
          <div className="space-y-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 dark:text-white mb-6">
                E-Commerce <span className="gradient-text">Platforms</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We develop across industry-leading platforms and build custom
                architectures tailored to your specific commercial goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {serviceData.platforms.map((platform, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl glass-effect hover-lift flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-2xl font-heading text-gray-900 dark:text-white mb-4">
                      {platform.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {platform.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {platform.features.map((feat, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm"
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 shrink-0" />
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
                Measurable <span className="gradient-text">E-Commerce ROI</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Boost average order value, increase customer retention, and
                expand your business to global markets.
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
              Ready to Accelerate Your{" "}
              <span className="gradient-text">E-Commerce Revenue</span>?
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with Maxora Technology to launch or redesign your online
              store for maximum speed and conversions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/contact")}
                className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover-lift flex items-center justify-center gap-2"
              >
                Schedule Store Consultation
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
              Fast turnaround • Custom architecture • 24hr response
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
