// app/contact/ContactClient.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Send,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Compass,
  FileCode2,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "../lib/site-config";
import { contactPageContent } from "../lib/contact-data";
import { getStoredTrackingParams, captureTrackingParams } from "../lib/utm";
import { trackContactEvent } from "../lib/analytics";
import SolutionSelect from "../components/ui/SolutionSelect";

interface ContactFormData {
  name: string;
  whatsapp: string;
  businessName: string;
  socialProfile: string;
  service: string;
  email: string;
  message?: string;
  _hp?: string;
}

const stepIcons = [Compass, FileCode2, Rocket, ShieldCheck];

export default function ContactClient() {
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
  } = useForm<ContactFormData>({
    defaultValues: {
      service: "Website",
    },
  });

  const selectedService = watch("service");

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);
    try {
      const tracking = getStoredTrackingParams();
      const payload = {
        ...data,
        phone: data.whatsapp,
        businessName: data.businessName,
        socialProfile: data.socialProfile,
        websiteUrl: data.socialProfile.includes(".") ? data.socialProfile : undefined,
        formType: "contact",
        ...tracking,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.message || "Failed to submit inquiry. Please try again.");
      }

      router.push("/thank-you");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to send message.";
      setSubmitError(message);
    }
  };

  const contactCards = [
    {
      icon: Phone,
      title: "Direct WhatsApp & Call",
      details: siteConfig.contact.phoneDisplay,
      sub: siteConfig.contact.supportHours,
      color: "from-blue-500 to-cyan-500",
      action: {
        label: "Chat on WhatsApp",
        href: siteConfig.contact.whatsappLink,
        onClick: () => trackContactEvent("whatsapp"),
      },
    },
    {
      icon: Mail,
      title: "Email Inquiries",
      details: siteConfig.contact.email,
      sub: "Technical review within 24 hours",
      color: "from-purple-500 to-pink-500",
      action: {
        label: "Send Email",
        href: `mailto:${siteConfig.contact.email}`,
        onClick: () => trackContactEvent("email"),
      },
    },
    {
      icon: Clock,
      title: "Location & Coverage",
      details: siteConfig.contact.addressDisplay,
      sub: "Serving clients worldwide and India",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>{contactPageContent.header.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
            {contactPageContent.header.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {contactPageContent.header.description}
          </p>
        </div>

        {/* Contact info cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14 max-w-5xl mx-auto">
          {contactCards.map((item, i) => (
            <div
              key={i}
              className="glass-effect rounded-2xl p-6 hover-lift flex flex-col justify-between"
            >
              <div>
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-4 text-white`}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                <h2 className="text-base font-bold mb-1 text-gray-900 dark:text-white">
                  {item.title}
                </h2>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {item.details}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {item.sub}
                </p>
              </div>

              {item.action && (
                <div className="mt-4 pt-3 border-t border-gray-200/60 dark:border-gray-800/60">
                  <a
                    href={item.action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={item.action.onClick}
                    className="inline-flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>{item.action.label}</span>
                    <span className="ml-1">→</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Main Grid: Short Form + What to Expect */}
        <div className="grid lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          {/* Left: What to Expect & 4 Process Steps */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-effect rounded-3xl p-7 border border-blue-500/20">
              <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-3">
                {contactPageContent.whatToExpect.title}
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                <p>
                  <strong className="text-gray-900 dark:text-white block mb-0.5">
                    {contactPageContent.whatToExpect.whatToSend.label}
                  </strong>
                  {contactPageContent.whatToExpect.whatToSend.text}
                </p>
                <p>
                  <strong className="text-gray-900 dark:text-white block mb-0.5">
                    {contactPageContent.whatToExpect.howFastWeReply.label}
                  </strong>
                  {contactPageContent.whatToExpect.howFastWeReply.text}
                </p>
              </div>

              <div className="border-t border-gray-200/80 dark:border-gray-800/80 pt-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
                  4-Step Engineering Process
                </h3>

                <div className="space-y-3">
                  {contactPageContent.processSteps.map((s, idx) => {
                    const Icon = stepIcons[idx % stepIcons.length];
                    return (
                      <div key={s.step} className="flex gap-3 items-start">
                        <span className="text-xs font-mono font-bold text-blue-500 bg-blue-500/10 px-1.5 py-0.5 rounded">
                          {s.step}
                        </span>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                            {s.title}
                          </h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 leading-relaxed">
              {contactPageContent.whatToExpect.scopingNote}
            </p>
          </div>

          {/* Right: Short, Solution-Focused Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-effect !overflow-visible rounded-3xl p-7 sm:p-9 shadow-xl border border-gray-200/80 dark:border-gray-800/80 relative z-20">
              <h2 className="text-xl sm:text-2xl font-bold font-heading mb-1 text-gray-900 dark:text-white">
                Send Us a Quick Note
              </h2>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
                Tell us about your business and goals. We review requests and reply on WhatsApp.
              </p>

              {submitError && (
                <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs">
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
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      {...register("name", { required: "Full name is required" })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                      WhatsApp Number *
                    </label>
                    <input
                      {...register("whatsapp", {
                        required: "WhatsApp number is required",
                        pattern: {
                          value: /^(\+91[\-\s]?)?[6789]\d{9}$/,
                          message: "Enter a valid 10-digit number",
                        },
                      })}
                      placeholder="e.g. 7719545464"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    {errors.whatsapp && (
                      <p className="text-xs text-red-500 mt-1">{errors.whatsapp.message}</p>
                    )}
                  </div>
                </div>

                {/* Business Name & Social Media Profile Link (BOTH REQUIRED) */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                      Business Name *
                    </label>
                    <input
                      {...register("businessName", {
                        required: "Please provide your business name",
                      })}
                      placeholder="e.g. Acme Studio"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    {errors.businessName && (
                      <p className="text-xs text-red-500 mt-1">{errors.businessName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                      Social Media Profile Link *
                    </label>
                    <input
                      {...register("socialProfile", {
                        required: "Please provide your social profile link or handle",
                      })}
                      placeholder="e.g. instagram.com/acme or linkedin.com/company/acme"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    {errors.socialProfile && (
                      <p className="text-xs text-red-500 mt-1">{errors.socialProfile.message}</p>
                    )}
                  </div>
                </div>

                {/* Solution Dropdown & Optional Email */}
                <div className="grid sm:grid-cols-2 gap-4 items-start">
                  <div>
                    <SolutionSelect
                      label="Solution Needed"
                      required
                      options={contactPageContent.services}
                      value={selectedService || "Website"}
                      onChange={(val) =>
                        setValue("service", val, { shouldValidate: true })
                      }
                      placeholder="Select a solution..."
                      error={errors.service?.message}
                    />
                    <input
                      type="hidden"
                      {...register("service", { required: "Please select what you need" })}
                    />
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Short Project Note */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                    Brief Project Note (Optional)
                  </label>
                  <textarea
                    {...register("message")}
                    rows={2}
                    placeholder="What are your key goals or timeline? (e.g. Redesign existing site, new mobile app...)"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
                >
                  {isSubmitting ? "Submitting..." : "Request a Project Quote"}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
