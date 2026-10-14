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

function getTestEventCode(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const fromUrl = urlParams.get("test_event_code");
    if (fromUrl) {
      sessionStorage.setItem("meta_test_event_code", fromUrl);
      return fromUrl;
    }
    return sessionStorage.getItem("meta_test_event_code");
  } catch {
    return null;
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
    const testCode = getTestEventCode();
    if (testCode) {
      window.fbq("track", "PageView", {}, { test_event_code: testCode });
    } else {
      window.fbq("track", "PageView");
    }
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
    const testCode = getTestEventCode();
    if (testCode) {
      window.fbq("track", "Lead", parameters, { test_event_code: testCode });
    } else {
      window.fbq("track", "Lead", parameters);
    }
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
    const testCode = getTestEventCode();
    if (testCode) {
      window.fbq("track", "Contact", { method }, { test_event_code: testCode });
    } else {
      window.fbq("track", "Contact", { method });
    }
  }
}
