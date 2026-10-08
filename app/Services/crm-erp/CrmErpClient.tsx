"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Database,
  Layers,
  BarChart,
  Bot,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Users,
  LineChart,
  ChevronRight,
  Clock,
  Workflow,
  Cpu,
  Brain,
  MessageSquare,
} from "lucide-react";

export default function CrmErpClient() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("features");

  const serviceData = {
    title: "Custom CRM & ERP Development",
    subtitle: "Enterprise Intelligence",
    description:
      "Transform your business operations with intelligent CRM and ERP systems engineered by Maxora Technology. We build custom platforms that automate complex workflows, streamline business data, and scale your operations.",
    gradient: "from-indigo-600 to-blue-500",
    stats: [
      { value: "45%", label: "Operational Efficiency Boost" },
      { value: "60%", label: "Reduction in Manual Tasks" },
      { value: "99.9%", label: "System Reliability & Uptime" },
      { value: "3x", label: "Faster Decision Making" },
    ],
    features: [
      {
        icon: <Bot className="w-6 h-6 text-white" />,
        title: "Workflow Automation & Logic",
        description:
          "Automate recurring business tasks, approval flows, lead routing, and status notifications with intelligent business rules.",
        capabilities: [
          "Automated lead assignment",
          "Multi-stage approval workflows",
          "Automated customer notifications",
          "Task scheduling & triggers",
        ],
      },
      {
        icon: <BarChart className="w-6 h-6 text-white" />,
        title: "Real-Time Analytics & Dashboards",
        description:
          "Gain actionable business insights with interactive dashboards, KPI monitoring, custom reporting, and executive metrics.",
        capabilities: [
          "Sales pipeline forecasting",
          "Resource allocation tracking",
          "Financial & billing dashboards",
          "Custom report generation",
        ],
      },
      {
        icon: <Layers className="w-6 h-6 text-white" />,
        title: "Enterprise System Integration",
        description:
          "Unify your disparate tools, accounting platforms, communication apps, and third-party APIs into a single centralized portal.",
        capabilities: [
          "Payment gateway & accounting APIs",
          "Email & calendar sync",
          "ERP inventory connectors",
          "Custom REST & GraphQL endpoints",
        ],
      },
      {
        icon: <Shield className="w-6 h-6 text-white" />,
        title: "Enterprise Security & Compliance",
        description:
          "Protect mission-critical company data with role-based access control (RBAC), multi-factor authentication, and encrypted data stores.",
        capabilities: [
          "Granular role permissions",
          "Comprehensive audit logging",
          "End-to-end data encryption",
          "SOC 2 & GDPR compliant design",
        ],
      },
    ],
    modules: [
      {
        title: "Sales & CRM Intelligence",
        features: [
          "Lead capturing & qualification",
          "Contact & account management",
          "Visual deal pipeline tracking",
          "Activity timelines & logging",
          "Automated follow-up reminders",
        ],
      },
      {
        title: "Operations & ERP Management",
        features: [
          "Inventory & warehouse tracking",
          "Order processing & fulfillment",
          "Vendor & procurement management",
          "Resource planning & scheduling",
          "Automated invoice & billing",
        ],
      },
      {
        title: "Customer Support & Service",
        features: [
          "Omnichannel ticket management",
          "SLA tracking & alerts",
          "Customer knowledge base",
          "Satisfaction surveys (CSAT)",
          "Self-service customer portals",
        ],
      },
      {
        title: "Human Resources & Payroll",
        features: [
          "Employee records management",
          "Time & attendance tracking",
          "Leave management workflows",
          "Performance review pipelines",
          "Document management & storage",
        ],
      },
    ],
    benefits: [
      {
        title: "Streamlined Operations",
        description:
          "Eliminate data silos by uniting sales, operations, and finance within a cohesive platform tailored to your exact workflows.",
        metric: "+45%",
        icon: <Workflow className="w-6 h-6 text-white" />,
      },
      {
        title: "Informed Decision-Making",
        description:
          "Equip managers with real-time operational reporting and data visualizations for proactive decisions.",
        metric: "3x",
        icon: <Brain className="w-6 h-6 text-white" />,
      },
      {
        title: "Scalable Architecture",
        description:
          "Engineered with modern cloud frameworks to support growing user counts, high transaction volume, and expanding business units.",
        metric: "99.9%",
        icon: <Cpu className="w-6 h-6 text-white" />,
      },
      {
        title: "Reduced Operational Costs",
        description:
          "Eliminate expensive per-seat software licensing fees with a proprietary CRM/ERP tailored to your organization.",
        metric: "-35%",
        icon: <Clock className="w-6 h-6 text-white" />,
      },
    ],
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient opacity-50" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
              <Sparkles className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-medium gradient-text">
                {serviceData.subtitle}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-heading text-gray-900 dark:text-white mb-6">
              Custom <span className="gradient-text">CRM & ERP Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              {serviceData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/contact")}
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover-lift flex items-center justify-center gap-2"
              >
                Discuss Your ERP Project
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

      {/* Content Tabs Navigation */}
      <section className="py-12 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex p-1 rounded-2xl glass-effect">
              {["features", "modules", "benefits"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-medium capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg"
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

      {/* Tab Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {activeTab === "features" && (
          <div className="space-y-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 dark:text-white mb-6">
                Engineered for <span className="gradient-text">Efficiency</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Maxora Technology develops custom CRM and ERP platforms that
                empower organizations to operate faster, communicate
                seamlessly, and eliminate redundant administrative overhead.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceData.features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center mb-6">
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
                        <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "modules" && (
          <div className="space-y-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 dark:text-white mb-6">
                Modular <span className="gradient-text">Business Modules</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Choose the modular features your business needs today, and scale
                smoothly as your organization grows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceData.modules.map((module, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl glass-effect hover-lift"
                >
                  <h3 className="text-2xl font-heading text-gray-900 dark:text-white mb-6">
                    {module.title}
                  </h3>
                  <ul className="space-y-3">
                    {module.features.map((feat, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "benefits" && (
          <div className="space-y-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 dark:text-white mb-6">
                Measurable <span className="gradient-text">Business ROI</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our custom CRM/ERP implementations provide quantifiable
                returns by removing repetitive manual labor and accelerating
                client turnaround.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceData.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center">
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
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading text-gray-900 dark:text-white mb-6">
              Ready to Upgrade Your{" "}
              <span className="gradient-text">Business Systems</span>?
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a strategy session with Maxora Technology to discuss your
              custom CRM/ERP requirements and architecture roadmap.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/contact")}
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover-lift flex items-center justify-center gap-2"
              >
                Schedule Technical Consultation
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
              Direct communication • Tailored system architecture • 24hr response
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
