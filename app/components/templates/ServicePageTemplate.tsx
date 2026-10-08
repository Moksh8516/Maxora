// app/components/templates/ServicePageTemplate.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Layers,
  Cpu,
  Workflow,
  HelpCircle,
  MessageSquare,
  Globe,
  Code,
  Smartphone,
  Layout,
  ShoppingCart,
  Database,
} from "lucide-react";
import { ServiceData } from "../../lib/services-data";

interface ServicePageTemplateProps {
  data: ServiceData;
}

const otherServices = [
  {
    slug: "web-development",
    title: "Web Development",
    icon: Globe,
    desc: "Fast Next.js & React web applications.",
  },
  {
    slug: "app-development",
    title: "Mobile App Development",
    icon: Smartphone,
    desc: "Cross-platform iOS & Android mobile apps.",
  },
  {
    slug: "wordpress",
    title: "WordPress Development",
    icon: Layout,
    desc: "Custom Gutenberg block themes & WooCommerce.",
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Solutions",
    icon: ShoppingCart,
    desc: "Shopify, WooCommerce & headless stores.",
  },
  {
    slug: "crm-erp",
    title: "Custom CRM & ERP",
    icon: Database,
    desc: "Tailored business management & automation.",
  },
  {
    slug: "seo-aeo",
    title: "SEO & AI Optimization",
    icon: Sparkles,
    desc: "Technical SEO, Core Web Vitals & AI citations.",
  },
];

export default function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const relatedServices = otherServices.filter((s) => s.slug !== data.slug);

  return (
    <article className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-cyan-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-cyan-950/10 -z-10" />
      <div className="absolute top-24 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-96 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <header className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Serving Clients Across India & Worldwide</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
            {data.h1}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {data.subheading}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1"
            >
              <span>Schedule Free Technical Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/Services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 text-gray-800 dark:text-gray-200 font-semibold hover:bg-white dark:hover:bg-gray-900 transition-all duration-300"
            >
              <span>Explore All Services</span>
            </Link>
          </div>
        </header>

        {/* Detailed Overview */}
        <section className="max-w-4xl mx-auto mb-20 p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/60 dark:border-gray-800/60 shadow-xl backdrop-blur-sm">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 dark:text-white mb-6">
            Overview & Approach
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {data.intro}
          </p>
        </section>

        {/* Who It's For */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              Who Is This Service For?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              We partner with businesses where digital quality and direct collaboration directly impact growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {data.whoItsFor.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/70 dark:bg-gray-900/70 border border-gray-200/60 dark:border-gray-800/60 flex items-start gap-4 hover:-translate-y-1 transition-transform"
              >
                <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <p className="text-gray-700 dark:text-gray-300 font-medium leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What's Included (Deliverables) */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">
              <Layers className="w-4 h-4" /> Deliverables
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              What&apos;s Included In Every Project
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Complete engineering from frontend design to secure backend integration and deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {data.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold mb-6">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-20 bg-gray-50/60 dark:bg-gray-900/30 rounded-3xl p-8 sm:p-12 border border-gray-200/50 dark:border-gray-800/50 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">
              <Workflow className="w-4 h-4" /> Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              Our 4-Step Engineering Process
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Transparent, milestone-driven delivery keeping your team aligned from concept to launch.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800/80"
              >
                <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">
            <Cpu className="w-4 h-4" /> Stack
          </div>
          <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white mb-8">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {data.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800/80 text-gray-800 dark:text-gray-200 font-medium text-sm shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">
              <HelpCircle className="w-4 h-4" /> Questions & Answers
            </div>
            <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Clear answers to common questions about our {data.h1.toLowerCase()} services.
            </p>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800/80 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 font-semibold text-lg text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180 text-blue-600 dark:text-blue-400" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Cross-Service Internal Linking */}
        <section className="mb-20 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 dark:text-white mb-3">
              Explore Our Other Digital Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We provide end-to-end digital capabilities across web, mobile, commerce, and enterprise systems.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/Services/${service.slug}`}
                  className="group p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800/80 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                      {service.desc}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                    Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Final CTA Card */}
        <section className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 sm:p-12 text-center text-white shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="w-8 h-8" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Ready to Start Your {data.h1.replace(" Company in India", "").replace(" Services in India", "")} Project?
          </h2>
          <p className="text-lg text-blue-50 max-w-2xl mx-auto mb-8">
            Tell us about your project, timeline, and goals. We will provide an honest discussion and a practical roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-700 font-bold text-lg hover:bg-blue-50 hover:shadow-xl transition-all"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+917719545464"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/60 text-white font-semibold text-lg hover:bg-white/10 transition-all"
            >
              <span>Call (+91) 7719545464</span>
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}
