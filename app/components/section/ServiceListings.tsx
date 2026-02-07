// components/sections/ServiceListings.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Smartphone,
  Globe,
  Layout,
  ShoppingCart,
  Database,
  Cloud,
  Code,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Target,
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: React.ReactNode;
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  technologies: string[];
  benefits: string[];
  // pricing: {
  //   starter: string;
  //   professional: string;
  //   enterprise: string;
  // };
  href: string;
  gradient: string;
  featured: boolean;
}

export default function ServiceListings() {
  const [activeService, setActiveService] = useState<string>("web-development");

  const services: Service[] = [
    {
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
        },
        {
          title: "SEO Optimized",
          description: "Built with search engine optimization best practices",
          icon: <Target className="w-5 h-5" />,
        },
        {
          title: "Performance",
          description: "Lightning-fast loading times and smooth interactions",
          icon: <Zap className="w-5 h-5" />,
        },
        {
          title: "Security",
          description: "Enterprise-grade security and protection",
          icon: <Shield className="w-5 h-5" />,
        },
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
      ],
      benefits: [
        "Increased online visibility",
        "Improved user engagement",
        "Higher conversion rates",
        "Scalable architecture",
      ],
      // pricing: {
      //   starter: "$5,000+",
      //   professional: "$15,000+",
      //   enterprise: "Custom",
      // },
      href: "/service/web-development",
      gradient: "from-blue-600 to-cyan-500",
      featured: true,
    },
    {
      id: "app-development",
      title: "App Development",
      description: "Native and cross-platform mobile applications",
      fullDescription:
        "We develop powerful mobile applications for iOS and Android using React Native and Flutter. Our apps deliver exceptional user experiences while maintaining high performance and reliability.",
      icon: <Smartphone className="w-6 h-6" />,
      features: [
        {
          title: "Cross-Platform",
          description: "Single codebase for iOS and Android",
          icon: <Globe className="w-5 h-5" />,
        },
        {
          title: "Native Performance",
          description: "Smooth animations and responsive UI",
          icon: <Zap className="w-5 h-5" />,
        },
        {
          title: "Offline Support",
          description: "Functionality without internet connection",
          icon: <Cloud className="w-5 h-5" />,
        },
        {
          title: "App Store Ready",
          description: "Compliant with all store guidelines",
          icon: <CheckCircle className="w-5 h-5" />,
        },
      ],
      technologies: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Firebase",
        "Redux",
      ],
      benefits: [
        "Reach customers on mobile",
        "Increase user engagement",
        "Monetization opportunities",
        "Brand visibility",
      ],
      // pricing: {
      //   starter: "$10,000+",
      //   professional: "$25,000+",
      //   enterprise: "Custom",
      // },
      href: "/service/App-development",
      gradient: "from-purple-600 to-pink-500",
      featured: true,
    },
    {
      id: "ecommerce",
      title: "eCommerce Solutions",
      description: "Full-featured online stores and marketplaces",
      fullDescription:
        "We build robust eCommerce platforms with secure payment processing, inventory management, and analytics. Whether you need a Shopify store or custom marketplace, we have the expertise to deliver.",
      icon: <ShoppingCart className="w-6 h-6" />,
      features: [
        {
          title: "Payment Integration",
          description: "Multiple secure payment gateways",
          icon: <CheckCircle className="w-5 h-5" />,
        },
        {
          title: "Inventory Management",
          description: "Real-time stock tracking and management",
          icon: <Database className="w-5 h-5" />,
        },
        {
          title: "Analytics Dashboard",
          description: "Detailed sales and customer insights",
          icon: <Target className="w-5 h-5" />,
        },
        {
          title: "Mobile Commerce",
          description: "Optimized for mobile shopping",
          icon: <Smartphone className="w-5 h-5" />,
        },
      ],
      technologies: [
        "Shopify",
        "WooCommerce",
        "Next.js",
        "Stripe",
        "MongoDB",
        "Redis",
      ],
      benefits: [
        "24/7 online sales",
        "Global reach",
        "Automated processes",
        "Scalable platform",
      ],
      // pricing: {
      //   starter: "$8,000+",
      //   professional: "$20,000+",
      //   enterprise: "Custom",
      // },
      href: "/service/Ecommerce",
      gradient: "from-green-600 to-emerald-500",
      featured: true,
    },
    {
      id: "wordpress",
      title: "WordPress Solutions",
      description: "Custom themes, plugins, and websites",
      fullDescription:
        "We create custom WordPress solutions including themes, plugins, and full websites. Our WordPress development focuses on performance, security, and ease of use for content managers.",
      icon: <Layout className="w-6 h-6" />,
      features: [
        {
          title: "Custom Themes",
          description: "Unique designs tailored to your brand",
          icon: <Layout className="w-5 h-5" />,
        },
        {
          title: "Plugin Development",
          description: "Custom functionality for specific needs",
          icon: <Code className="w-5 h-5" />,
        },
        {
          title: "WooCommerce",
          description: "eCommerce functionality for WordPress",
          icon: <ShoppingCart className="w-5 h-5" />,
        },
        {
          title: "Maintenance",
          description: "Regular updates and security patches",
          icon: <Shield className="w-5 h-5" />,
        },
      ],
      technologies: [
        "WordPress",
        "PHP",
        "JavaScript",
        "WooCommerce",
        "MySQL",
        "REST API",
      ],
      benefits: [
        "Easy content management",
        "SEO friendly",
        "Large plugin ecosystem",
        "Cost-effective",
      ],
      // pricing: {
      //   starter: "$3,000+",
      //   professional: "$10,000+",
      //   enterprise: "Custom",
      // },
      href: "/service/Wordpress",
      gradient: "bg-gradient-to-r from-blue-600 to-cyan-500",
      featured: false,
    },
    {
      id: "crm-erp",
      title: "Custom CRM/ERP",
      description: "Tailored business management systems",
      fullDescription:
        "We develop custom CRM and ERP solutions that streamline your business operations. Our systems automate workflows, improve productivity, and provide valuable insights through analytics.",
      icon: <Database className="w-6 h-6" />,
      features: [
        {
          title: "Workflow Automation",
          description: "Automate repetitive tasks and processes",
          icon: <Zap className="w-5 h-5" />,
        },
        {
          title: "Analytics & Reports",
          description: "Comprehensive business intelligence",
          icon: <Target className="w-5 h-5" />,
        },
        {
          title: "Integration Ready",
          description: "Connect with existing tools and systems",
          icon: <CheckCircle className="w-5 h-5" />,
        },
        {
          title: "Scalable Architecture",
          description: "Grow with your business needs",
          icon: <Cloud className="w-5 h-5" />,
        },
      ],
      technologies: [
        "Node.js",
        "React",
        "PostgreSQL",
        "Redis",
        "Docker",
        "AWS",
      ],
      benefits: [
        "Improved efficiency",
        "Better data management",
        "Enhanced collaboration",
        "Cost reduction",
      ],
      // pricing: {
      //   starter: "$25,000+",
      //   professional: "$50,000+",
      //   enterprise: "Custom",
      // },
      href: "/service/Crm-erp",
      gradient: "from-indigo-600 to-blue-500",
      featured: false,
    },
    // {
    //   id: "cloud-solutions",
    //   title: "Cloud Solutions",
    //   description: "Cloud migration and infrastructure",
    //   fullDescription:
    //     "We provide comprehensive cloud solutions including migration, infrastructure setup, and management. Our expertise in AWS and Azure ensures your applications are scalable, secure, and cost-effective.",
    //   icon: <Cloud className="w-6 h-6" />,
    //   features: [
    //     {
    //       title: "Cloud Migration",
    //       description: "Seamless migration to cloud platforms",
    //       icon: <Cloud className="w-5 h-5" />,
    //     },
    //     {
    //       title: "Infrastructure Setup",
    //       description: "Optimized cloud architecture",
    //       icon: <Database className="w-5 h-5" />,
    //     },
    //     {
    //       title: "Security & Compliance",
    //       description: "Enterprise-grade security measures",
    //       icon: <Shield className="w-5 h-5" />,
    //     },
    //     {
    //       title: "Cost Optimization",
    //       description: "Reduce cloud spending efficiently",
    //       icon: <CheckCircle className="w-5 h-5" />,
    //     },
    //   ],
    //   technologies: [
    //     "AWS",
    //     "Azure",
    //     "Docker",
    //     "Kubernetes",
    //     "Terraform",
    //     "CI/CD",
    //   ],
    //   benefits: [
    //     "Reduced infrastructure costs",
    //     "Improved scalability",
    //     "Enhanced security",
    //     "Better reliability",
    //   ],
    //   // pricing: {
    //   //   starter: "$10,000+",
    //   //   professional: "$30,000+",
    //   //   enterprise: "Custom",
    //   // },
    //   href: "/service/Cloud",
    //   gradient: "from-teal-600 to-cyan-500",
    //   featured: false,
    // },
  ];

  const activeServiceData =
    services.find((service) => service.id === activeService) || services[0];

  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Service Navigation */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-2">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    activeService === service.id
                      ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg shadow-blue-500/25`
                      : "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-lg ${
                        activeService === service.id
                          ? "bg-white/20"
                          : `bg-gradient-to-br ${service.gradient}`
                      }`}
                    >
                      <div
                        className={
                          activeService === service.id
                            ? "text-white"
                            : "text-white"
                        }
                      >
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">{service.title}</h3>
                        {service.featured && (
                          <span className="text-xs px-2 py-1 rounded-full bg-white/20 text-white">
                            Popular
                          </span>
                        )}
                      </div>
                      <p
                        className={`text-sm mt-1 ${
                          activeService === service.id
                            ? "text-white/90"
                            : "text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:w-2/3">
            <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200/50 dark:border-gray-800/50 overflow-hidden">
              {/* Service Header */}
              <div
                className={`p-8 bg-gradient-to-r ${activeServiceData.gradient}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-xl bg-white/20 backdrop-blur-sm">
                      {activeServiceData.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">
                        {activeServiceData.title}
                      </h3>
                      <p className="text-white/90">
                        {activeServiceData.description}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={activeServiceData.href}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-8">
                {/* Description */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Overview
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {activeServiceData.fullDescription}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeServiceData.features.map((feature, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200/50 dark:border-gray-700/50"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                            {feature.icon}
                          </div>
                          <div>
                            <h5 className="font-bold text-gray-900 dark:text-white mb-1">
                              {feature.title}
                            </h5>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies & Benefits */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Technologies */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeServiceData.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 rounded-lg bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Business Benefits
                    </h4>
                    <ul className="space-y-3">
                      {activeServiceData.benefits.map((benefit, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pricing */}
                {/* <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Project Pricing
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(activeServiceData.pricing).map(
                      ([plan, price]) => (
                        <div
                          key={plan}
                          className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-700/50"
                        >
                          <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 capitalize">
                            {plan} Plan
                          </div>
                          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {price}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {price === "Custom"
                              ? "Contact for quote"
                              : "Starting from"}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
