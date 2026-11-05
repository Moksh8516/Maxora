// app/components/templates/ServiceLandingPage.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  Phone,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Building2,
  Clock,
  Layers,
  HelpCircle,
  ChevronDown,
  Check,
  X,
  AlertTriangle,
  Zap,
  Users,
  Award,
  Calendar,
  Send,
  Code2,
  MapPin,
  Laptop,
  CheckCircle,
} from "lucide-react";
import { siteConfig } from "@/app/lib/site-config";
import { portfolioContent } from "@/app/lib/portfolio-data";
import type { LandingPageData, PackageItem } from "@/content/landing-pages/types";

import PatialaTransformationDemo from "@/components/landing/demos/PatialaTransformationDemo";
import HeroParticleCanvas from "@/app/components/portfolio/HeroParticleCanvas";
import BrandSlider, { type BrandList } from "@/components/ui/hero-01-utils/brand-slider";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiAnthropic,
  SiGooglegemini,
  SiLangchain,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiFlutter,
} from "react-icons/si";
import { motion } from "framer-motion";

// Icon resolution helper
function getIcon(name: string) {
  switch (name) {
    case "Clock":
      return <Clock className="w-5 h-5" />;
    case "AlertTriangle":
      return <AlertTriangle className="w-5 h-5" />;
    case "Users":
      return <Users className="w-5 h-5" />;
    case "Zap":
      return <Zap className="w-5 h-5" />;
    case "ShieldCheck":
      return <ShieldCheck className="w-5 h-5" />;
    case "Building2":
      return <Building2 className="w-5 h-5" />;
    case "Code2":
      return <Code2 className="w-5 h-5" />;
    case "Sparkles":
      return <Sparkles className="w-5 h-5" />;
    case "MapPin":
      return <MapPin className="w-5 h-5" />;
    case "Laptop":
      return <Laptop className="w-5 h-5" />;
    case "CheckCircle2":
      return <CheckCircle2 className="w-5 h-5" />;
    default:
      return <CheckCircle2 className="w-5 h-5" />;
  }
}

const techBrandList: BrandList[] = [
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-5 h-5 text-gray-900 dark:text-white" />,
  },
  {
    name: "React",
    icon: <SiTypescript className="w-5 h-5 text-[#3178C6]" />,
  },
  // {
  //   name: "OpenAI GPT-4o",
  //   icon: <SiOpenai className="w-5 h-5 text-[#10A37F]" />,
  // },
  {
    name: "Claude",
    icon: <SiAnthropic className="w-5 h-5 text-[#D97706]" />,
  },
  {
    name: "Google Gemini",
    icon: <SiGooglegemini className="w-5 h-5 text-[#4285F4]" />,
  },
  {
    name: "LangChain AI",
    icon: <SiLangchain className="w-5 h-5 text-[#1C3C3C] dark:text-[#2BD576]" />,
  },
  {
    name: "Python & FastAPI",
    icon: <SiFastapi className="w-5 h-5 text-[#009688]" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-5 h-5 text-[#4169E1]" />,
  },
  {
    name: "Redis In-Memory",
    icon: <SiRedis className="w-5 h-5 text-[#DC382D]" />,
  },
  {
    name: "Docker",
    icon: <SiDocker className="w-5 h-5 text-[#2496ED]" />,
  },
  {
    name: "Flutter & Dart",
    icon: <SiFlutter className="w-5 h-5 text-[#02569B]" />,
  },
];

interface ServiceLandingPageProps {
  data: LandingPageData;
}

export default function ServiceLandingPage({ data }: ServiceLandingPageProps) {
  // Accordion state - first FAQ open by default
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showTechNote, setShowTechNote] = useState<boolean>(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "Local Shop / Retail",
    service: data.primaryKeyword,
    budget: "₹20,000 – ₹50,000",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email || undefined,
          phone: formData.phone,
          whatsapp: formData.phone,
          businessName: formData.businessType,
          service: formData.service,
          budget: formData.budget,
          message: formData.message || `Enquiry from ${data.primaryKeyword} landing page`,
          formType: `LandingPage-${data.slug}`,
        }),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setFormStatus("success");
        setStatusMessage("Thank you! Your enquiry has been received. Our team will review your business needs and reply with a fixed plan within 24 hours.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          businessType: "Local Shop / Retail",
          service: data.primaryKeyword,
          budget: "₹20,000 – ₹50,000",
          message: "",
        });
      } else {
        setFormStatus("error");
        setStatusMessage(json.message || "Something went wrong. Please try WhatsApp directly.");
      }
    } catch (err) {
      setFormStatus("error");
      setStatusMessage("Could not send enquiry right now. Please tap the WhatsApp button below to speak directly.");
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById("enquiry-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/917719545464?text=${encodeURIComponent(message)}`;
  };

  // Case studies filtered or top 3 real portfolio pieces
  const relevantCaseStudies = portfolioContent.caseStudies.slice(0, 3);

  return (
    <div className="relative bg-white dark:bg-[#050A15] text-[#050A15] dark:text-[#F4F7FC] transition-colors duration-300">

      {/* 1. BREADCRUMBS */}
      <nav aria-label="Breadcrumb" className="bg-[#07050d] border-b border-purple-950/40 py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400">
            {data.breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                {idx > 0 && <span className="text-gray-600">/</span>}
                {idx === data.breadcrumbs.length - 1 ? (
                  <span className="font-semibold text-purple-200" aria-current="page">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.href} className="hover:text-purple-300 transition-colors">
                    {crumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* 2. HERO SECTION - Wine Purple & Black Gray Cyber Luxe */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden bg-[#0a0712] text-white border-b border-purple-900/30">
        {/* Interactive Wine-Purple Particle Canvas */}
        <HeroParticleCanvas theme="wine-purple" mode="dark" />

        {/* Ambient Wine Purple & Black-Gray Blurred Glowing Halos */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-900/35 via-fuchsia-900/20 to-transparent rounded-full blur-[130px]" />
          <div className="absolute top-1/3 -right-24 w-[420px] h-[420px] bg-gradient-to-bl from-[#4a0e4e]/30 via-purple-950/25 to-transparent rounded-full blur-[140px]" />
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-t from-purple-950/40 via-fuchsia-950/20 to-transparent rounded-full blur-[120px]" />

          {/* Delicate Obsidian & Purple Grid Texture */}
          <div
            className="absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(168,85,247,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(168,85,247,0.2) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 80%)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-200 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm shadow-purple-950/50">
              <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>{data.hero.badge}</span>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 font-heading">
              {data.hero.h1}
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
              {data.hero.subheading}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                type="button"
                onClick={scrollToForm}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-[#7E22CE] via-[#9333EA] to-[#C026D3] hover:from-[#6B21A8] hover:to-[#A21CAF] text-white font-semibold text-base shadow-lg shadow-purple-900/40 hover:shadow-purple-900/60 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>{data.hero.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <a
                href={getWhatsAppLink(data.hero.whatsappPrefilledText)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-md transition-all active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Trust Strip */}
            <div className="pt-8 border-t border-purple-900/30 max-w-3xl mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {data.hero.trustPromises.map((promise, idx) => (
                  <div key={idx} className="inline-flex items-center space-x-2 text-xs sm:text-sm text-gray-300 bg-purple-950/40 border border-purple-500/20 px-3.5 py-1.5 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{promise}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. TECH & PLATFORM MARQUEE (Existing BrandSlider Component - Light Container) */}
      <div className="bg-slate-50 dark:bg-[#070D1C] border-b border-gray-200/80 dark:border-white/5 pt-6 pb-2">
        <BrandSlider
          brandList={techBrandList}
          title="Advanced Engineering & AI Technologies"
          className="w-full pb-4 pt-2"
        />
      </div>

      {/* 4. AEO QUICK ANSWER CONTAINER (Light Color Palette Below Hero) */}
      <section className="py-12 bg-white dark:bg-[#050A15] border-b border-gray-200/80 dark:border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <div className="rounded-2xl bg-slate-50/80 dark:bg-[#081226] border border-gray-200/90 dark:border-white/10 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/70 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-bold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                Direct Answer
              </span>
              <span className="text-xs text-gray-500 dark:text-[#AFC5E1] font-medium">
                Verified by Maxora Senior Engineering Team
              </span>
            </div>

            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 font-heading leading-snug">
              {data.quickAnswer.question}
            </h2>

            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              {data.quickAnswer.answer}
            </p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE DEMO ANIMATION */}
      {data.slug === "website-development-company-in-patiala" && (
        <section className="py-6 sm:py-8 bg-slate-950/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <PatialaTransformationDemo />
          </div>
        </section>
      )}

      {/* 4. IS THIS FOR YOU? (Pain Points) */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#050A15]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white font-heading mb-4">
              {data.painPoints.sectionTitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-[#AFC5E1]">
              {data.painPoints.sectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {data.painPoints.items.map((pain, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-red-50/50 dark:bg-red-950/10 border border-red-200/60 dark:border-red-900/30 hover:border-red-400 dark:hover:border-red-700/50 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 flex items-center justify-center mb-4">
                  {getIcon(pain.iconName)}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {pain.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-[#AFC5E1] leading-relaxed">
                  {pain.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT YOU GET / BENEFITS */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] dark:bg-[#070E1E] border-y border-gray-200/70 dark:border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white font-heading mb-4">
              {data.benefits.sectionTitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-[#AFC5E1]">
              {data.benefits.sectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {data.benefits.items.map((benefit, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-white dark:bg-[#0A1428] border border-gray-200 dark:border-white/10 hover:border-[#056BFF]/40 dark:hover:border-[#00D5F2]/40 transition-all shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#056BFF]/10 text-[#056BFF] dark:text-[#00D5F2] flex items-center justify-center mb-4">
                  {getIcon(benefit.iconName)}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-[#AFC5E1] leading-relaxed">
                  {benefit.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE MAXORA + COMPARISON TABLE */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#050A15]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white font-heading mb-4">
              {data.whyMaxora.sectionTitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-[#AFC5E1]">
              {data.whyMaxora.sectionSubtitle}
            </p>
          </div>

          {/* Differentiators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
            {data.whyMaxora.differentiators.map((diff, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-[#081226] border border-gray-200 dark:border-white/10"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-[#056BFF] dark:text-[#00D5F2]" />
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    {diff.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-[#AFC5E1] leading-relaxed">
                  <strong className="text-gray-900 dark:text-white">What this means for you: </strong>
                  {diff.meaning}
                </p>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {data.whyMaxora.comparison.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-[#AFC5E1]">
                {data.whyMaxora.comparison.subtitle}
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#050A15] text-white">
                    <th className="p-4 font-semibold">What Matters</th>
                    <th className="p-4 font-bold bg-[#056BFF] text-white">Maxora Technology</th>
                    <th className="p-4 font-semibold text-gray-300">Typical Agency</th>
                    <th className="p-4 font-semibold text-gray-300">Freelancer</th>
                    <th className="p-4 font-semibold text-gray-300">DIY Website Builder</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-white/10 bg-white dark:bg-[#081226]">
                  {data.whyMaxora.comparison.rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                      <td className="p-4 font-medium text-gray-900 dark:text-white">
                        {row.feature}
                      </td>
                      <td className="p-4 font-bold text-[#056BFF] dark:text-[#00D5F2] bg-[#056BFF]/5">
                        {row.maxora}
                      </td>
                      <td className="p-4 text-gray-600 dark:text-gray-400">
                        {row.typicalAgency}
                      </td>
                      <td className="p-4 text-gray-600 dark:text-gray-400">
                        {row.freelancer}
                      </td>
                      <td className="p-4 text-gray-600 dark:text-gray-400">
                        {row.diyBuilder}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES WE HELP */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] dark:bg-[#070E1E] border-y border-gray-200/70 dark:border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white font-heading mb-4">
              {data.industries.sectionTitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-[#AFC5E1]">
              {data.industries.sectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {data.industries.items.map((ind, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white dark:bg-[#0A1428] border border-gray-200 dark:border-white/10 hover:border-[#056BFF]/40 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 dark:text-white text-base">
                    {ind.name}
                  </h3>
                  {ind.tag && (
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-[#056BFF] dark:text-[#00D5F2]">
                      {ind.tag}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-[#AFC5E1] leading-relaxed">
                  {ind.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HOW IT WORKS (Process) */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#050A15]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white font-heading mb-4">
              {data.process.sectionTitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-[#AFC5E1]">
              {data.process.sectionSubtitle}
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {data.process.steps.map((st, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-start gap-5 p-6 rounded-2xl bg-gray-50 dark:bg-[#081226] border border-gray-200 dark:border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-[#056BFF] text-white font-bold text-lg flex items-center justify-center shrink-0">
                  {st.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {st.title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="p-3 rounded-lg bg-white dark:bg-[#050A15] border border-gray-100 dark:border-white/5">
                      <span className="font-semibold text-gray-900 dark:text-white block mb-0.5">What you do:</span>
                      <span className="text-gray-600 dark:text-[#AFC5E1]">{st.clientAction}</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white dark:bg-[#050A15] border border-gray-100 dark:border-white/5">
                      <span className="font-semibold text-[#056BFF] dark:text-[#00D5F2] block mb-0.5">What you receive:</span>
                      <span className="text-gray-600 dark:text-[#AFC5E1]">{st.clientGets}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PACKAGES */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] dark:bg-[#070E1E] border-y border-gray-200/70 dark:border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white font-heading mb-4">
              {data.packages.sectionTitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-[#AFC5E1]">
              {data.packages.sectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {data.packages.items.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all ${pkg.isPopular
                  ? "bg-white dark:bg-[#0A1428] border-2 border-[#056BFF] shadow-xl lg:-translate-y-2"
                  : "bg-white dark:bg-[#081226] border border-gray-200 dark:border-white/10"
                  }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#056BFF] text-white text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {pkg.tagline}
                  </p>

                  <div className="py-3 px-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 mb-6">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {pkg.priceNote}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.inclusions.map((inc, iIdx) => (
                      <li key={iIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-700 dark:text-[#AFC5E1]">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={getWhatsAppLink(pkg.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl text-center text-sm font-semibold transition-all inline-flex items-center justify-center gap-2 ${pkg.isPopular
                    ? "bg-[#056BFF] hover:bg-[#0456cc] text-white shadow-md"
                    : "bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-900 dark:text-white"
                    }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire for {pkg.name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. RESULTS YOU CAN EXPECT */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#050A15]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white font-heading mb-4">
              {data.expectedResults.sectionTitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-[#AFC5E1]">
              {data.expectedResults.sectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {data.expectedResults.items.map((res, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-emerald-50/40 dark:bg-emerald-950/10 border border-emerald-200/50 dark:border-emerald-900/30"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                  {getIcon(res.iconName)}
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                  {res.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-[#AFC5E1] leading-relaxed">
                  {res.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PROOF / SELECTED WORK */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] dark:bg-[#070E1E] border-y border-gray-200/70 dark:border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-[#056BFF] dark:text-[#00D5F2] text-xs font-bold uppercase tracking-wider mb-3">
              <span>Real Work</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white font-heading mb-4">
              Real Websites & Systems Built By Our Team
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-[#AFC5E1]">
              Explore real projects and working systems created by our team to help businesses get more customers and save time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
            {relevantCaseStudies.map((study) => (
              <div
                key={study.id}
                className="rounded-2xl overflow-hidden bg-white dark:bg-[#0A1428] border border-gray-200 dark:border-white/10 shadow-sm flex flex-col justify-between"
              >
                <div className="p-6">
                  <span className="text-[11px] font-bold text-[#056BFF] dark:text-[#00D5F2] uppercase tracking-wider block mb-2">
                    {study.industry}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {study.projectName}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-[#AFC5E1] leading-relaxed mb-4">
                    {study.whatWeBuilt}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-semibold">
                      ✓ Fast on mobile
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-[#056BFF] dark:text-[#00D5F2] text-[11px] font-semibold">
                      ✓ 100% Owned
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-300 text-[11px] font-semibold">
                      ✓ Easy to Update
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-white/5 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                  <Link
                    href="/portfolio"
                    className="text-xs font-bold text-[#056BFF] dark:text-[#00D5F2] inline-flex items-center hover:underline"
                  >
                    <span>View in our work gallery</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                  {study.isLiveDemo && (
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-400 px-2 py-0.5 rounded-full">
                      Live Preview Available
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Strict Honesty Rule: Real reviews placeholder */}
          <div className="text-center text-xs text-gray-500 dark:text-gray-400 italic">
            {/* TODO: add real verified client reviews as they are recorded */}
            <span>All portfolio items shown above are genuine software builds designed and engineered by Maxora Technology.</span>
          </div>
        </div>
      </section>

      {/* 12. LOCAL SECTION (City pages only) */}
      {data.localSection && (
        <section className="py-16 sm:py-20 bg-white dark:bg-[#050A15]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30 dark:from-[#09152E] dark:via-[#081226] dark:to-[#050A15] border border-blue-200/60 dark:border-blue-900/40">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#056BFF] dark:text-[#00D5F2]" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  Serving Local Businesses in {data.localSection.city} & Nearby Areas
                </h2>
              </div>

              <p className="text-sm sm:text-base text-gray-700 dark:text-[#AFC5E1] mb-6 leading-relaxed">
                {data.localSection.localAdvantage}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-200 dark:border-white/10">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-3">
                    Areas & Local Hubs Covered
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {data.localSection.areas.map((area, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-3 py-1 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-medium text-gray-700 dark:text-gray-300"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-3">
                    How We Meet & Communicate
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-[#AFC5E1]">
                    {data.localSection.meetingOptions.map((opt, oIdx) => (
                      <li key={oIdx} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{opt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 13. ACCESSIBLE FAQ ACCORDION (Answers rendered directly in HTML) */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] dark:bg-[#070D1B] border-y border-gray-200/70 dark:border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#056BFF]/10 text-[#056BFF] dark:text-[#00D5F2] text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Direct Answers</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white font-heading mb-4">
              {data.faqs.sectionTitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-[#AFC5E1]">
              {data.faqs.sectionSubtitle}
            </p>
          </div>

          <div className="space-y-4">
            {data.faqs.items.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen
                    ? "bg-white dark:bg-[#081226] border-[#056BFF]/40 dark:border-[#00D5F2]/40 shadow-sm"
                    : "bg-white/80 dark:bg-[#081226]/60 border-gray-200 dark:border-white/10"
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-bold font-heading text-gray-900 dark:text-white">
                      {faq.question}
                    </span>
                    <div
                      className={`p-2 rounded-xl shrink-0 transition-transform duration-200 ${isOpen
                        ? "bg-[#056BFF] text-white rotate-180"
                        : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-[#AFC5E1]"
                        }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accessible: always in HTML for bots & SEO */}
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100 px-6 pb-6" : "max-h-0 opacity-0 px-6 pb-0"
                      }`}
                  >
                    <p className="text-sm sm:text-base text-gray-600 dark:text-[#AFC5E1] leading-relaxed pt-2 border-t border-gray-100 dark:border-white/5">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. RELATED SERVICES */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#050A15]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white font-heading mb-3">
              {data.relatedServices.sectionTitle}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-[#AFC5E1]">
              {data.relatedServices.sectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.relatedServices.links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="group p-5 rounded-2xl bg-gray-50 dark:bg-[#081226] border border-gray-200 dark:border-white/10 hover:border-[#056BFF] dark:hover:border-[#00D5F2] transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-base group-hover:text-[#056BFF] dark:group-hover:text-[#00D5F2] transition-colors mb-2">
                    {link.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-[#AFC5E1] leading-relaxed mb-4">
                    {link.description}
                  </p>
                </div>
                <div className="flex items-center text-xs font-bold text-[#056BFF] dark:text-[#00D5F2]">
                  <span>Explore service</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 15. FINAL CTA + ENQUIRY FORM */}
      <section id="enquiry-form-section" className="py-16 sm:py-24 bg-[#050A15] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#056BFF]/15 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
          <div className="text-center mb-12">
            <span className="px-3 py-1 rounded-full bg-[#056BFF]/20 text-[#00D5F2] text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              Free Consultation & Fixed-Price Plan
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Tell us about your business. Get a clear plan and fixed quote within 24 hours.
            </h2>
            <p className="text-base sm:text-lg text-[#AFC5E1] max-w-2xl mx-auto">
              No salespeople and no pressure. You will discuss directly with developers who build the software.
            </p>
          </div>

          <div className="bg-[#0A1224] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
            {formStatus === "success" ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Enquiry Received</h3>
                <p className="text-sm text-[#AFC5E1] max-w-md mx-auto leading-relaxed">
                  {statusMessage}
                </p>
                <div className="pt-4">
                  <a
                    href={getWhatsAppLink(`Hello Maxora Technology, I just submitted an inquiry for ${data.primaryKeyword} and would like to connect on WhatsApp.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    <span>Continue on WhatsApp Now</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gurpreet Singh / Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070D1B] border border-white/10 text-white placeholder-gray-500 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                      WhatsApp or Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070D1B] border border-white/10 text-white placeholder-gray-500 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                      Email Address <span className="text-gray-400 font-normal lowercase">(for quote PDF)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070D1B] border border-white/10 text-white placeholder-gray-500 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Business Type */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                      Your Business Type
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070D1B] border border-white/10 text-white text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                    >
                      <option value="Local Shop / Retail">Local Shop / Retail Store</option>
                      <option value="Clinic / Hospital / Healthcare">Clinic / Hospital / Healthcare</option>
                      <option value="Coaching / School / Education">Coaching / School / Education</option>
                      <option value="Manufacturer / Exporter">Manufacturer / Exporter / Factory</option>
                      <option value="Real Estate / Builder">Real Estate / Builder / Broker</option>
                      <option value="Restaurant / Food Service">Restaurant / Food Service / Bakery</option>
                      <option value="Professional Services (CA, Lawyer, Consultant)">Professional Services (CA, Lawyer, Consultant)</option>
                      <option value="Startup / Tech Venture">Startup / Tech Venture</option>
                    </select>
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                      What Do You Need?
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={formData.service}
                      className="w-full px-4 py-3 rounded-xl bg-[#070D1B]/50 border border-white/10 text-gray-300 text-sm cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                      Approximate Budget (Optional)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070D1B] border border-white/10 text-white text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                    >
                      <option value="Under ₹20,000">Under ₹20,000 (Basic business page)</option>
                      <option value="₹20,000 – ₹50,000">₹20,000 – ₹50,000 (Complete business site)</option>
                      <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000 (Store, custom portal, or app)</option>
                      <option value="Above ₹1,00,000">Above ₹1,00,000 (Custom ERP, advanced system)</option>
                      <option value="Need Advice">Need advice on budget</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                      Tell us what you want to achieve
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. We have a retail store in Patiala and want to showcase products and take WhatsApp orders."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070D1B] border border-white/10 text-white placeholder-gray-500 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none resize-none"
                    />
                  </div>
                </div>

                {formStatus === "error" && (
                  <div className="p-3 rounded-xl bg-red-950/60 border border-red-700/60 text-xs text-red-300">
                    {statusMessage}
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#7E22CE] via-[#9333EA] to-[#C026D3] hover:from-[#6B21A8] hover:to-[#A21CAF] text-white font-semibold text-sm transition-all shadow-lg shadow-purple-900/40 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{formStatus === "submitting" ? "Sending Enquiry..." : "Get My Free Plan & Quote"}</span>
                  </button>

                  <span className="text-xs text-gray-400">
                    🔒 No spam. Direct developer consultation within 24 hours.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* COLLAPSIBLE NOTE FOR TECHNICAL TEAMS (Translating jargon) */}
      <section className="py-6 bg-gray-50 dark:bg-[#070D1A] border-t border-gray-200 dark:border-white/5 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <button
            type="button"
            onClick={() => setShowTechNote(!showTechNote)}
            className="text-xs font-mono text-gray-500 dark:text-[#AFC5E1] hover:text-[#056BFF] inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>{showTechNote ? "Hide Technical Specifications" : "For Technical Evaluators / IT Teams: Click to view technical stack details"}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showTechNote ? "rotate-180" : ""}`} />
          </button>

          {showTechNote && (
            <div className="mt-4 p-4 rounded-xl bg-white dark:bg-[#09152C] border border-gray-200 dark:border-white/10 text-left text-xs text-gray-600 dark:text-[#AFC5E1] space-y-2">
              <p className="font-semibold text-gray-900 dark:text-white">Underlying Technical Foundation:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Server-Side Rendering (SSR) and Static Site Generation (SSG) with Next.js App Router for sub-2s mobile loading.</li>
                <li>Strict Schema.org JSON-LD microdata graph (BreadcrumbList, Service, FAQPage, ProfessionalService) for Google & AEO citation.</li>
                <li>Clean semantic HTML5 markup meeting WCAG 2.1 AA accessibility standards and zero page-builder bloat.</li>
                <li>Full source code ownership handed over via GitHub or private repository upon milestone completion.</li>
              </ul>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
