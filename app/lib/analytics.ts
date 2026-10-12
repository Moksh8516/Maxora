// app/lib/analytics.ts
"use client";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export function trackPageView(pathname: string) {
  if (typeof window === "undefined") return;

  // Google Analytics
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (gaId && window.gtag) {
    window.gtag("config", gaId, {
      page_path: pathname,
    });
  }

  // Meta Pixel
  if (window.fbq) {
    window.fbq("track", "PageView");
  }
}

export function trackLeadEvent(parameters: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;

  // Google Analytics 4
  if (window.gtag) {
    window.gtag("event", "generate_lead", parameters);
  }

  // Meta Pixel
  if (window.fbq) {
    window.fbq("track", "Lead", parameters);
  }
}

export function trackContactEvent(method: "whatsapp" | "phone" | "email" = "whatsapp") {
  if (typeof window === "undefined") return;

  // Google Analytics 4
  if (window.gtag) {
    window.gtag("event", "contact", { method });
  }

  // Meta Pixel
  if (window.fbq) {
    window.fbq("track", "Contact", { method });
  }
}
