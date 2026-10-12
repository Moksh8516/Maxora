// app/thank-you/ThankYouClient.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CheckCircle2, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "../lib/site-config";
import { trackLeadEvent, trackContactEvent } from "../lib/analytics";

export default function ThankYouClient() {
  useEffect(() => {
    // Prevent duplicate Lead events on refresh
    const alreadyFired = sessionStorage.getItem("lead_tracked");
    if (!alreadyFired) {
      trackLeadEvent({ source: "thank_you_page" });
      sessionStorage.setItem("lead_tracked", "true");
    }
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-cyan-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-cyan-950/10 -z-10" />

      <div className="max-w-2xl w-full mx-auto text-center glass-effect rounded-3xl p-8 sm:p-12 shadow-2xl border border-blue-500/20">
        <div className="w-16 h-16 rounded-2xl bg-green-500/10 text-green-500 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
          Request Received!
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          Thank you for reaching out to Maxora Technology. Our engineering team reviews inquiries promptly and will connect with you on WhatsApp within a few hours.
        </p>

        <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-sm text-blue-700 dark:text-blue-300 font-medium mb-8 flex items-center justify-center gap-2">
          <ShieldCheck className="w-5 h-5 shrink-0" />
          <span>Need immediate answers? Connect with our team directly on WhatsApp right now.</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContactEvent("whatsapp")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-lg hover:bg-[#20ba59] transition-all shadow-lg shadow-green-900/20"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp Now</span>
          </a>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            <span>Return to Homepage</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          Phone: {siteConfig.contact.phoneDisplay} | Email: {siteConfig.contact.email}
        </p>
      </div>
    </section>
  );
}
