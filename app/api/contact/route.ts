// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { sendAdminLeadEmail, sendGreetingEmail } from "../../lib/mailer";

// Simple in-memory rate limiter: IP -> array of timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 6;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("cf-connecting-ip") ||
      req.headers.get("x-real-ip") ||
      "unknown-ip";

    if (ip !== "unknown-ip" && isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please wait a few minutes." },
        { status: 429 },
      );
    }

    const body = await req.json();
    const {
      name,
      email,
      phone,
      whatsapp,
      company,
      businessName,
      socialProfile,
      socialUrl,
      websiteUrl,
      businessOrSocial,
      city,
      service,
      budget,
      timeline,
      message,
      formType,
      honeypot,
      _hp,
      utm_source,
      utm_medium,
      utm_campaign,
      fbclid,
    } = body;

    // 1️⃣ Honeypot spam trap
    if (honeypot || _hp) {
      // Silently return success to avoid tipping off spambots
      return NextResponse.json({
        success: true,
        message: "Request received successfully",
      });
    }

    const contactPhone = phone || whatsapp;
    const resolvedBusiness = businessName || company || businessOrSocial || "";
    const resolvedSocial = socialProfile || socialUrl || "";

    if (!name || !contactPhone) {
      return NextResponse.json(
        { success: false, message: "Name and WhatsApp/phone number are required" },
        { status: 400 },
      );
    }

    const cleanPhone = String(contactPhone).replace(/[^\d+]/g, "");
    const digitsOnly = cleanPhone.replace(/\D/g, "");
    if (digitsOnly.length < 7 || digitsOnly.length > 16) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid phone or WhatsApp number" },
        { status: 400 },
      );
    }

    const cleanEmail = email ? String(email).trim().toLowerCase() : "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address" },
        { status: 400 },
      );
    }

    const leadData = {
      name: String(name).trim(),
      email: cleanEmail,
      phone: cleanPhone,
      businessName: resolvedBusiness ? String(resolvedBusiness).trim() : undefined,
      socialProfile: resolvedSocial ? String(resolvedSocial).trim() : undefined,
      websiteUrl: websiteUrl ? String(websiteUrl).trim() : undefined,
      city: city ? String(city).trim() : undefined,
      service: service ? String(service).trim() : undefined,
      budget: budget ? String(budget).trim() : undefined,
      timeline: timeline ? String(timeline).trim() : undefined,
      message: message ? String(message).trim() : undefined,
      formType: formType || "contact",
      utm_source: utm_source ? String(utm_source) : undefined,
      utm_medium: utm_medium ? String(utm_medium) : undefined,
      utm_campaign: utm_campaign ? String(utm_campaign) : undefined,
      fbclid: fbclid ? String(fbclid) : undefined,
    };

    // 2️⃣ Optional customer greeting email if valid email supplied
    if (cleanEmail && cleanEmail.includes("@")) {
      sendGreetingEmail({
        name: leadData.name,
        email: cleanEmail,
        company: resolvedBusiness,
      }).catch((err) => console.error("Greeting email error:", err));
    }

    // 3️⃣ Admin notification email
    await sendAdminLeadEmail(leadData);

    // 4️⃣ Optional Google Sheet Webhook
    const sheetWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (sheetWebhookUrl) {
      fetch(sheetWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          ...leadData,
        }),
      }).catch((webhookErr) => {
        console.error("Google Sheet webhook error:", webhookErr);
      });
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
