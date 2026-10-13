// app/ai-visibility-check/AiVisibilityCheckClient.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Sparkles,
  Send,
  ShieldAlert,
  ArrowRight,
  Code,
  FileText,
  Zap,
  Network,
  HelpCircle,
} from "lucide-react";
import { aiVisibilityContent } from "../lib/ai-visibility-data";
import { getStoredTrackingParams, captureTrackingParams } from "../lib/utm";
import SolutionSelect from "../components/ui/SolutionSelect";

interface VisibilityFormData {
  name: string;
  whatsapp: string;
  businessName: string;
  socialProfile: string;
  email: string;
  service?: string;
  _hp?: string;
}

const fixIcons = [Network, FileText, Zap, Code];

export default function AiVisibilityCheckClient() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    captureTrackingParams();
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<VisibilityFormData>({
    defaultValues: {
      service: "Search & AI Visibility",
    },
  });

  const selectedService = watch("service");

  const onSubmit = async (data: VisibilityFormData) => {
    setSubmitError(null);
    try {
      const tracking = getStoredTrackingParams();
      const payload = {
        ...data,
        phone: data.whatsapp,
        businessName: data.businessName,
        socialProfile: data.socialProfile,
        websiteUrl: data.socialProfile.includes(".") ? data.socialProfile : undefined,
        formType: "ai-visibility-check",
        message: `Business: ${data.businessName} | Social/Link: ${data.socialProfile} | Service: ${data.service || "Search & AI Visibility"}`,
        ...tracking,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.message || "Something went wrong. Please try again.");
      }

      router.push("/thank-you");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to submit request.";
      setSubmitError(message);
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById("audit-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-28 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-transparent to-cyan-50/40 dark:from-blue-950/30 dark:via-transparent dark:to-cyan-950/20 -z-10" />
        <div className="absolute -left-20 top-28 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl -z-10" />
        <div className="absolute -right-20 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 mb-6">
            <Sparkles className="w-4 h-4" />
            <span>{aiVisibilityContent.hero.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
            {aiVisibilityContent.hero.title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            {aiVisibilityContent.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all"
            >
              <span>{aiVisibilityContent.hero.primaryCta}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-base"
            >
              {aiVisibilityContent.hero.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 border-t border-gray-200/60 dark:border-gray-800/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              How the AI Visibility Check Works
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              A transparent, 3-step audit conducted directly by our technical engineers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aiVisibilityContent.steps.map((step) => (
              <div key={step.step} className="glass-effect rounded-2xl p-8 relative">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xl mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Fix Afterwards */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/40 border-y border-gray-200/60 dark:border-gray-800/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              What We Fix After the Audit
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              If your business is not being cited, we engineer the technical foundation LLMs require to recognize and reference your company.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {aiVisibilityContent.fixes.map((fix, idx) => {
              const Icon = fixIcons[idx % fixIcons.length];
              return (
                <div
                  key={fix.title}
                  className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800/80"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {fix.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {fix.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Honest Disclaimer */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-gray-800 dark:text-gray-200 flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="text-sm leading-relaxed">
              <strong className="block text-amber-800 dark:text-amber-300 font-semibold mb-1">
                {aiVisibilityContent.disclaimer.title}
              </strong>
              {aiVisibilityContent.disclaimer.text}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="audit-form" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="glass-effect !overflow-visible rounded-3xl p-8 sm:p-10 shadow-2xl border border-blue-500/20 relative z-20">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 dark:text-white mb-2">
                Request Free AI Visibility Check
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Short form. We research your business and citations, then reply on WhatsApp.
              </p>
            </div>

            {submitError && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm">
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                type="text"
                {...register("_hp")}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name & WhatsApp */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    {...register("whatsapp", {
                      required: "WhatsApp or phone number is required",
                      pattern: {
                        value: /^\+?[0-9\s\-()]{7,20}$/,
                        message: "Please enter a valid phone number",
                      },
                      validate: (val) => {
                        const digits = String(val).replace(/\D/g, "");
                        return (
                          (digits.length >= 7 && digits.length <= 15) ||
                          "Please enter a valid phone number (7-15 digits)"
                        );
                      },
                    })}
                    placeholder="e.g. +1 415 555 2671"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  {errors.whatsapp && (
                    <p className="text-xs text-red-500 mt-1">{errors.whatsapp.message}</p>
                  )}
                </div>
              </div>

              {/* Business Name & Social Media Profile Link */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="aiBusinessName"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Business Name *
                  </label>
                  <input
                    id="aiBusinessName"
                    {...register("businessName", {
                      required: "Business name is required",
                    })}
                    placeholder="e.g. Acme Studio"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  {errors.businessName && (
                    <p className="text-xs text-red-500 mt-1">{errors.businessName.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="aiSocialProfile"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Social Media Profile Link <span className="text-gray-400 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    id="aiSocialProfile"
                    {...register("socialProfile")}
                    placeholder="e.g. instagram.com/acme or linkedin.com/company/acme"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>

              {/* Service Solution Select & Optional Email */}
              <div className="grid sm:grid-cols-2 gap-4 items-start">
                <div>
                  <SolutionSelect
                    label="Service Area"
                    options={aiVisibilityContent.solutions}
                    value={selectedService || "Search & AI Visibility"}
                    onChange={(val) =>
                      setValue("service", val, { shouldValidate: true })
                    }
                    placeholder="Select service area..."
                    error={errors.service?.message}
                  />
                  <input type="hidden" {...register("service")} />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email address is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-base hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
              >
                {isSubmitting ? "Submitting..." : "Get Free AI Visibility Check"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 border-t border-gray-200/60 dark:border-gray-800/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 mb-3">
              <HelpCircle className="w-4 h-4" />
              <span>Questions & Answers</span>
            </div>
            <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {aiVisibilityContent.faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800/80"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
