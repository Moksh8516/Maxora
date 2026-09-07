"use client";

import { useState } from "react";
import {
  Globe,
  Smartphone,
  Target,
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
} from "lucide-react";
import { useRouter } from "next/navigation";

const serviceData = {
  id: "web-development",
  title: "Web Development",
  description: "Modern, high-performance web applications",
  fullDescription:
    "We build custom web applications using modern frameworks like Next.js, React, and TypeScript. Our solutions are optimized for performance, SEO, and user experience, helping businesses establish a strong online presence and drive growth.",
  icon: <Globe className="w-6 h-6" />,
  features: [
    {
      title: "Responsive Design",
      description: "Perfectly optimized for all devices and screen sizes",
      icon: <Smartphone className="w-5 h-5" />,
      color: "blue",
    },
    {
      title: "SEO Optimized",
      description: "Built with search engine optimization best practices",
      icon: <Target className="w-5 h-5" />,
      color: "purple",
    },
    {
      title: "Performance",
      description: "Lightning-fast loading times and smooth interactions",
      icon: <Zap className="w-5 h-5" />,
      color: "yellow",
    },
    {
      title: "Security",
      description: "Enterprise-grade security and protection",
      icon: <Shield className="w-5 h-5" />,
      color: "green",
    },
    {
      title: "Modern Stack",
      description: "Built with cutting-edge technologies and frameworks",
      icon: <Code className="w-5 h-5" />,
      color: "cyan",
    },
    {
      title: "Scalable Architecture",
      description: "Designed to grow with your business needs",
      icon: <Layers className="w-5 h-5" />,
      color: "indigo",
    },
  ],
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "AWS",
    "Vercel",
    "Docker",
    "Git",
  ],
  benefits: [
    {
      title: "Increased Online Visibility",
      description: "Stand out in search results and attract more visitors",
      icon: <BarChart className="w-5 h-5" />,
      metric: "85%",
    },
    {
      title: "Improved User Engagement",
      description: "Keep visitors interested with intuitive interfaces",
      icon: <Users className="w-5 h-5" />,
      metric: "70%",
    },
    {
      title: "Faster Performance",
      description: "Reduce bounce rates with optimized loading times",
      icon: <Rocket className="w-5 h-5" />,
      metric: "3x",
    },
    {
      title: "24/7 Availability",
      description: "Your business is always open to customers",
      icon: <Clock className="w-5 h-5" />,
      metric: "100%",
    },
  ],
  process: [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and plan the perfect solution",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Create wireframes and design mockups for your approval",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Development",
      description: "Building your application with modern technologies",
      icon: <Code className="w-6 h-6" />,
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing to ensure flawless performance",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      step: "05",
      title: "Deployment",
      description: "Launch your application and make it live",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      step: "06",
      title: "Maintenance & Support",
      description: "Ongoing support and updates for your application",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ],
  caseStudies: [
    {
      title: "E-commerce Platform",
      description: "Built a scalable online store with 200% revenue growth",
      results: [
        "200% revenue growth",
        "50% faster load times",
        "40% conversion increase",
      ],
    },
    {
      title: "SaaS Dashboard",
      description: "Enterprise dashboard with real-time analytics",
      results: [
        "10k+ active users",
        "99.9% uptime",
        "60% user engagement increase",
      ],
    },
    {
      title: "Mobile-First Web App",
      description: "Progressive web app with offline capabilities",
      results: [
        "3x mobile traffic",
        "70% lower bounce rate",
        "4.8/5 user rating",
      ],
    },
  ],
};

export default function WebDevelopmentPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const router = useRouter();
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-gray-900/50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-delayed" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-4 rounded-2xl glass-effect mb-8 hover-lift">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading text-gray-900 dark:text-white mb-6">
              Web <span className="gradient-text">Development</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Modern, high-performance web applications that drive business
              growth
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              We build custom web applications using modern frameworks like
              Next.js, React, and TypeScript. Our solutions are optimized for
              performance, SEO, and user experience, helping businesses
              establish a strong online presence and drive growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/contact")}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover-lift flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => router.push("/Case-Studies")}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors hover-lift"
              >
                View Case Studies
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
            "technologies",
            "benefits",
            "case-studies",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
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
                Custom Web Development Solutions
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  At DigitalSolutions, we specialize in creating bespoke web
                  applications that are tailored to your specific business
                  needs. Our team of experienced developers uses the latest
                  technologies to build scalable, secure, and high-performing
                  websites.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We believe in a collaborative approach, working closely with
                  you throughout the development process to ensure the final
                  product exceeds your expectations and helps you achieve your
                  business objectives.
                </p>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mb-6">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                  Performance First
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We build applications that load instantly and provide smooth
                  user experiences across all devices.
                </p>
              </div>

              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                  Enterprise Security
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {
                    "Your data and your customers' data are protected with industry-leading security measures."
                  }
                </p>
              </div>

              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                  Scalable Growth
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our solutions are designed to grow with your business,
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
                {
                  "Every web application we build includes these essential features to ensure success in today's digital landscape."
                }
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
                Our Development <span className="gradient-text">Process</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We follow a proven methodology to ensure your project is
                delivered on time, within budget, and exceeds expectations.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500 md:left-1/2 md:-translate-x-1/2" />

              <div className="space-y-12">
                {serviceData.process.map((step, index) => (
                  <div
                    key={index}
                    className={`relative flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-8`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center z-10">
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

        {/* Technologies Tab */}
        {activeTab === "technologies" && (
          <div className="space-y-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 dark:text-white mb-6">
                Technology <span className="gradient-text">Stack</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We use modern, battle-tested technologies to build robust and
                scalable web applications.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {serviceData.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl glass-effect hover-lift flex flex-col items-center justify-center text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600/10 to-cyan-500/10 flex items-center justify-center mb-3 group-hover:from-blue-600/20 group-hover:to-cyan-500/20">
                    <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {tech}
                  </span>
                </div>
              ))}
            </div>

            {/* Technology Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-4">
                  Frontend
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-blue-500" />
                    Next.js & React
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-blue-500" />
                    TypeScript
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-blue-500" />
                    Tailwind CSS
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-4">
                  Backend
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-cyan-500" />
                    Node.js
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-cyan-500" />
                    MongoDB & PostgreSQL
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-cyan-500" />
                    GraphQL & REST APIs
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-4">
                  DevOps
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-purple-500" />
                    AWS & Vercel
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-purple-500" />
                    Docker
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-purple-500" />
                    CI/CD Pipelines
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
                Our web development solutions deliver tangible results that
                drive business growth and success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceData.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
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
                Success <span className="gradient-text">Stories</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {
                  "See how we've helped businesses transform their digital presence with custom web solutions."
                }
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {serviceData.caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mb-6">
                    <CheckCircle className="w-6 h-6 text-white" />
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
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
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
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading text-gray-900 dark:text-white mb-6">
              Ready to Transform Your{" "}
              <span className="gradient-text">Digital Presence</span>?
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              {
                "Let's discuss how we can build the perfect web solution for your business needs and goals."
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/contact")}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover-lift flex items-center justify-center gap-2"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors hover-lift">
                View Our Portfolio
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
