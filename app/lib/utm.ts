// app/lib/utm.ts
"use client";

export interface UtmData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  fbclid?: string;
  gclid?: string;
  landing_page?: string;
  referrer?: string;
}

const STORAGE_KEY = "maxora_tracking_params";

export function captureTrackingParams(): UtmData {
  if (typeof window === "undefined") return {};

  try {
    const searchParams = new URLSearchParams(window.location.search);
    const existing = sessionStorage.getItem(STORAGE_KEY);
    const stored: UtmData = existing ? JSON.parse(existing) : {};

    const utm_source = searchParams.get("utm_source") || stored.utm_source || "";
    const utm_medium = searchParams.get("utm_medium") || stored.utm_medium || "";
    const utm_campaign = searchParams.get("utm_campaign") || stored.utm_campaign || "";
    const utm_term = searchParams.get("utm_term") || stored.utm_term || "";
    const utm_content = searchParams.get("utm_content") || stored.utm_content || "";
    const fbclid = searchParams.get("fbclid") || stored.fbclid || "";
    const gclid = searchParams.get("gclid") || stored.gclid || "";
    const landing_page = stored.landing_page || window.location.pathname;
    const referrer = stored.referrer || document.referrer || "";

    const combined: UtmData = {
      ...(utm_source && { utm_source }),
      ...(utm_medium && { utm_medium }),
      ...(utm_campaign && { utm_campaign }),
      ...(utm_term && { utm_term }),
      ...(utm_content && { utm_content }),
      ...(fbclid && { fbclid }),
      ...(gclid && { gclid }),
      ...(landing_page && { landing_page }),
      ...(referrer && { referrer }),
    };

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(combined));
    return combined;
  } catch {
    return {};
  }
}

export function getStoredTrackingParams(): UtmData {
  if (typeof window === "undefined") return {};
  try {
    const existing = sessionStorage.getItem(STORAGE_KEY);
    return existing ? JSON.parse(existing) : {};
  } catch {
    return {};
  }
}
