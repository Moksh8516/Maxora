/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
  Database,
  Zap,
  Target,
  CheckCircle,
  Cloud,
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
  Brain,
  Workflow,
  Layers,
  Server,
  Sparkles,
  RefreshCw,
  Shield,
  Key,
  Lock,
  PieChart,
  LineChart,
  Settings,
  Upload,
  Download,
  Bell,
  Eye,
  Globe,
  Smartphone,
} from "lucide-react";
import { useRouter } from "next/navigation";

const serviceData = {
  id: "crm-erp",
  title: "AI-Powered CRM/ERP",
  description: "Intelligent Business Management Systems",
  fullDescription:
    "We develop custom CRM and ERP solutions enhanced with AI capabilities that streamline your business operations. Our intelligent systems automate workflows, improve productivity, and provide predictive insights through advanced analytics and machine learning.",
  icon: <Database className="w-6 h-6" />,
  features: [
    {
      title: "AI Workflow Automation",
      description: "Intelligent automation of repetitive tasks and processes",
      icon: <Zap className="w-5 h-5" />,
      color: "purple",
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered forecasting and business intelligence",
      icon: <Brain className="w-5 h-5" />,
      color: "blue",
    },
    {
      title: "Smart Integration",
      description: "AI-driven connectivity with existing tools and systems",
      icon: <Workflow className="w-5 h-5" />,
      color: "indigo",
    },
    {
      title: "Scalable AI Architecture",
      description: "Machine learning models that grow with your business",
      icon: <Layers className="w-5 h-5" />,
      color: "cyan",
    },
    {
      title: "Automated Reporting",
      description: "AI-generated insights and automated report generation",
      icon: <BarChart className="w-5 h-5" />,
      color: "green",
    },
    {
      title: "Intelligent Security",
      description: "AI-powered threat detection and security monitoring",
      icon: <ShieldCheck className="w-5 h-5" />,
      color: "red",
    },
  ],
  technologies: [
    "Node.js",
    "React",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS",
    "TensorFlow",
    "Python",
    "Machine Learning",
    "GraphQL",
    "MongoDB",
    "Kubernetes",
  ],
  aiFeatures: [
    {
      name: "AI-Powered Analytics",
      icon: <Brain className="w-8 h-8" />,
      description: "Predictive insights and intelligent data analysis",
      capabilities: [
        "Sales forecasting",
        "Customer behavior prediction",
        "Risk analysis",
      ],
    },
    {
      name: "Process Automation",
      icon: <Zap className="w-8 h-8" />,
      description: "Intelligent workflow automation and optimization",
      capabilities: [
        "Smart routing",
        "Automated approvals",
        "Task prioritization",
      ],
    },
    {
      name: "Intelligent CRM",
      icon: <Users className="w-8 h-8" />,
      description: "AI-enhanced customer relationship management",
      capabilities: [
        "Lead scoring",
        "Personalized recommendations",
        "Sentiment analysis",
      ],
    },
  ],
  benefits: [
    {
      title: "Improved Efficiency",
      description: "AI automation reduces manual work by up to 70%",
      icon: <Zap className="w-5 h-5" />,
      metric: "70%",
    },
    {
      title: "Better Decision Making",
      description: "Predictive analytics for data-driven decisions",
      icon: <Brain className="w-5 h-5" />,
      metric: "3x",
    },
    {
      title: "Enhanced Collaboration",
      description: "AI-powered insights for team alignment",
      icon: <Users className="w-5 h-5" />,
      metric: "85%",
    },
    {
      title: "Cost Reduction",
      description: "Automation reduces operational costs significantly",
      icon: <TrendingUp className="w-5 h-5" />,
      metric: "40%",
    },
  ],
  process: [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Analyze business processes and AI opportunities",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      step: "02",
      title: "AI Strategy & Planning",
      description: "Design AI features and system architecture",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Development & Integration",
      description: "Build AI models and integrate with existing systems",
      icon: <Code className="w-6 h-6" />,
    },
    {
      step: "04",
      title: "AI Training & Testing",
      description: "Train machine learning models and test accuracy",
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      step: "05",
      title: "Deployment & Training",
      description: "Launch system and train users on AI features",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      step: "06",
      title: "AI Optimization",
      description: "Continuous improvement of AI models and features",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ],
  caseStudies: [
    {
      title: "Manufacturing ERP with AI",
      description: "AI-powered production planning and inventory management",
      results: [
        "30% reduction in waste",
        "45% faster order processing",
        "AI-driven demand forecasting",
      ],
      category: "Manufacturing",
    },
    {
      title: "Enterprise CRM with AI",
      description: "Intelligent customer relationship management system",
      results: [
        "60% higher lead conversion",
        "AI-powered sales forecasting",
        "Automated customer segmentation",
      ],
      category: "Enterprise CRM",
    },
    {
      title: "Retail AI-ERP System",
      description: "AI-enhanced inventory and supply chain management",
      results: [
        "40% inventory cost reduction",
        "AI-driven restocking alerts",
        "95% forecast accuracy",
      ],
      category: "Retail",
    },
  ],
  systemTypes: [
    {
      type: "CRM Systems",
      description: "AI-powered customer relationship management",
      icon: <Users className="w-6 h-6" />,
      features: ["Lead scoring", "Sales forecasting", "Customer analytics"],
    },
    {
      type: "ERP Systems",
      description: "Enterprise resource planning with AI capabilities",
      icon: <Workflow className="w-6 h-6" />,
      features: [
        "Inventory management",
        "Financial planning",
        "Supply chain AI",
      ],
    },
    {
      type: "Custom Solutions",
      description: "Tailored business management systems",
      icon: <Settings className="w-6 h-6" />,
      features: ["Process automation", "AI integration", "Custom reporting"],
    },
  ],
  aiCapabilities: [
    {
      category: "Machine Learning",
      items: [
        "Predictive analytics",
        "Pattern recognition",
        "Anomaly detection",
        "Recommendation engines",
      ],
    },
    {
      category: "Natural Language",
      items: [
        "Chatbots",
        "Sentiment analysis",
        "Document processing",
        "Voice recognition",
      ],
    },
    {
      category: "Computer Vision",
      items: [
        "Image recognition",
        "Document digitization",
        "Quality control",
        "Visual analytics",
      ],
    },
  ],
};

function Code(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function Rocket(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

export default function CRMerpPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const router = useRouter();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent dark:from-gray-900/50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-delayed" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-4 rounded-2xl glass-effect mb-8 hover-lift">
              <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500">
                <Database className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading text-gray-900 dark:text-white mb-6">
              AI-Powered <span className="gradient-text">CRM/ERP</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Intelligent Business Management Systems with AI Capabilities
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              We develop custom CRM and ERP solutions enhanced with AI
              capabilities that streamline your business operations. Our
              intelligent systems automate workflows, improve productivity, and
              provide predictive insights through advanced analytics and machine
              learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/Contact")}
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover-lift flex items-center justify-center gap-2"
              >
                Transform Your Business with AI
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => router.push("/Case-Studies")}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors hover-lift"
              >
                View AI Implementation Cases
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
            "ai-capabilities",
            "benefits",
            "case-studies",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-indigo-600 to-blue-500 text-white"
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
                Intelligent Business Management Systems
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  At DigitalSolutions, we specialize in creating AI-powered CRM
                  and ERP solutions that transform how businesses operate. Our
                  systems combine the power of machine learning, predictive
                  analytics, and intelligent automation to deliver unprecedented
                  efficiency and insights.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  From sales forecasting and inventory optimization to automated
                  customer service and financial planning, our AI-enhanced
                  systems help you make smarter decisions, reduce costs, and
                  accelerate growth.
                </p>
              </div>
            </div>

            {/* System Types */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceData.systemTypes.map((type, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl glass-effect hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center mb-6">
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
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500" />
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                  AI-Powered Insights
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Machine learning algorithms provide predictive analytics and
                  intelligent recommendations for better decision-making.
                </p>
              </div>

              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                  Intelligent Automation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  AI-driven automation of repetitive tasks, workflows, and
                  processes to boost efficiency and reduce errors.
                </p>
              </div>

              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-3">
                  Scalable Architecture
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Cloud-native systems designed to grow with your business and
                  adapt to changing AI requirements.
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
                AI-Enhanced <span className="gradient-text">Features</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our CRM/ERP systems include advanced AI capabilities that
                transform traditional business management into intelligent
                operations.
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
                AI-Powered Modules
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {serviceData.aiFeatures.map((aiFeature, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl glass-effect hover-lift"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-600/10 to-blue-500/10">
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
                          <Sparkles className="w-4 h-4 text-indigo-500" />
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
                AI Development <span className="gradient-text">Process</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We follow a specialized methodology that integrates AI
                development with traditional system implementation for optimal
                results.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-blue-500 to-purple-500 md:left-1/2 md:-translate-x-1/2" />

              <div className="space-y-12">
                {serviceData.process.map((step, index) => (
                  <div
                    key={index}
                    className={`relative flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-8`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center z-10">
                      {step.icon}
                    </div>
                    <div
                      className={`flex-grow ${index % 2 === 0 ? "md:text-right" : ""}`}
                    >
                      <div
                        className={`p-6 rounded-2xl glass-effect hover-lift max-w-lg ${index % 2 === 0 ? "md:ml-auto" : ""}`}
                      >
                        <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-3">
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

        {/* AI Capabilities Tab */}
        {activeTab === "ai-capabilities" && (
          <div className="space-y-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 dark:text-white mb-6">
                Advanced AI <span className="gradient-text">Capabilities</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We integrate cutting-edge AI technologies to enhance every
                aspect of your business management system.
              </p>
            </div>

            {/* AI Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceData.aiCapabilities.map((category, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl glass-effect hover-lift"
                >
                  <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-6">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-600/10 to-blue-500/10 flex items-center justify-center mb-3 group-hover:from-indigo-600/20 group-hover:to-blue-500/20">
                      <Cpu className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
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
                  AI & Machine Learning
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-indigo-500" />
                    TensorFlow & PyTorch
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-indigo-500" />
                    Python & Scikit-learn
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-indigo-500" />
                    Natural Language Processing
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-4">
                  Backend & Database
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-blue-500" />
                    Node.js & Express
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-blue-500" />
                    PostgreSQL & MongoDB
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-blue-500" />
                    Redis & Message Queues
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl glass-effect hover-lift">
                <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-4">
                  Infrastructure & DevOps
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-purple-500" />
                    Docker & Kubernetes
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <ChevronRight className="w-4 h-4 text-purple-500" />
                    AWS & GCP
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
                AI-powered CRM/ERP systems deliver measurable improvements
                across all aspects of your business operations.
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

        {/* Case Studies Tab */}
        {activeTab === "case-studies" && (
          <div className="space-y-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 dark:text-white mb-6">
                AI Implementation{" "}
                <span className="gradient-text">Success Stories</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {
                  "See how we've helped businesses transform their operations with AI-powered management systems."
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium">
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
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500" />
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
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading text-gray-900 dark:text-white mb-6">
              Ready to Transform Your Business with{" "}
              <span className="gradient-text">AI</span>?
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              {
                "Let's discuss how we can create an intelligent CRM/ERP system that leverages AI to drive your business forward."
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/Contact")}
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover-lift flex items-center justify-center gap-2"
              >
                Schedule AI Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => router.push("/Portfolio")}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors hover-lift"
              >
                View AI Implementation Portfolio
              </button>
            </div>

            <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
              Get a response within 24 hours • No obligation AI consultation
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
