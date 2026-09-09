"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Code,
  Globe,
  Layout,
  ShoppingCart,
  Database,
  Smartphone,
  Cloud,
  Shield,
  ArrowRight,
  Sparkles,
  Zap,
  Cpu,
} from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  href: string;
  gradient: string;
  badge?: string;
}

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences and drive business growth.",
      icon: <Smartphone className="w-6 h-6" />,
      features: [
        "iOS & Android",
        "React Native",
        "Flutter",
        "Performance Optimization",
      ],
      href: "/service/App-development",
      gradient: "from-purple-600 to-pink-500",
      badge: "Popular",
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Modern, responsive web applications built with cutting-edge technologies for optimal performance and scalability.",
      icon: <Globe className="w-6 h-6" />,
      features: ["React/Next.js", "TypeScript", "Performance", "SEO Optimized"],
      href: "/service/Web-development",
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      id: 3,
      title: "WordPress Solutions",
      description:
        "Custom WordPress themes, plugins, and e-commerce solutions tailored to your specific business needs.",
      icon: <Layout className="w-6 h-6" />,
      features: ["Custom Themes", "WooCommerce", "Plugin Dev", "Maintenance"],
      href: "/service/Wordpress",
      gradient: "from-green-600 to-emerald-500",
    },
    {
      id: 4,
      title: "eCommerce Platforms",
      description:
        "Full-featured online stores with secure payment gateways, inventory management, and analytics.",
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ["Shopify", "WooCommerce", "Custom", "Payment Integration"],
      href: "/service/Ecommerce",
      gradient: "from-orange-600 to-red-500",
    },
    {
      id: 5,
      title: "Custom CRM/ERP",
      description:
        "Tailored business management systems that streamline operations and improve productivity.",
      icon: <Database className="w-6 h-6" />,
      features: ["Custom Workflows", "Automation", "Analytics", "Integration"],
      href: "/service/Crm-erp",
      gradient: "from-indigo-600 to-blue-500",
    },
    {
      id: 6,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure, migration, and management services for modern businesses.",
      icon: <Cloud className="w-6 h-6" />,
      features: ["AWS/Azure", "Migration", "Security", "DevOps"],
      href: "/service/Cloud",
      gradient: "from-teal-600 to-cyan-500",
      badge: "New",
    },
  ];

  const featuredServices = services.slice(0, 3);

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent dark:via-gray-900/20" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" /> Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Solutions That{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent relative z-10">
                Power Your Growth
              </span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-500/20 -rotate-1" />
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            We deliver cutting-edge digital solutions that transform businesses
            and create lasting value for our clients.
          </p>
        </div>

        {/* Featured Services Grid (Desktop) */}
        <div className="hidden lg:grid grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="relative group"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-2xl" />
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                {/* Icon */}
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>

                {/* Badge */}
                {service.badge && (
                  <span
                    className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-semibold ${
                      service.badge === "Popular"
                        ? "bg-orange-500/20 text-orange-600 dark:text-orange-400"
                        : "bg-green-500/20 text-green-600 dark:text-green-400"
                    }`}
                  >
                    {service.badge}
                  </span>
                )}

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Grid */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.slice(0, 4).map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-br ${service.gradient}`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    {service.badge && (
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          service.badge === "Popular"
                            ? "bg-orange-500/20 text-orange-600 dark:text-orange-400"
                            : "bg-green-500/20 text-green-600 dark:text-green-400"
                        }`}
                      >
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-medium"
                  >
                    Learn More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <Link
            href="/Services"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            View All Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              value: "01",
              label: "Focused Digital Agency",
              icon: <Cpu className="w-5 h-5" />,
            },
            {
              value: "100%",
              label: "Dedicated to Your Goals",
              icon: <Sparkles className="w-5 h-5" />,
            },
            {
              value: "Direct",
              label: "Clear Communication",
              icon: <Code className="w-5 h-5" />,
            },
            {
              value: "Built",
              label: "Around Your Business",
              icon: <Shield className="w-5 h-5" />,
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex p-3 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Process
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We follow a proven methodology to ensure project success from
              concept to deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform -translate-y-1/2" />

            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understanding your goals and requirements",
              },
              {
                step: "02",
                title: "Planning",
                desc: "Creating detailed project roadmap and strategy",
              },
              {
                step: "03",
                title: "Development",
                desc: "Building your solution with agile methodology",
              },
              {
                step: "04",
                title: "Launch",
                desc: "Deployment, testing, and ongoing support",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="relative z-10 bg-white dark:bg-gray-900 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
