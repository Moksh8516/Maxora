// app/lib/mailer.ts
import nodemailer from "nodemailer";
import { greetingTemplate } from "../components/ui/greetingTemplate";

function getTransporter() {
  if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
    return null;
  }
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

/**
 * Greeting email -> customer
 */
export async function sendGreetingEmail({
  name,
  email,
  company = "",
}: {
  name: string;
  email: string;
  company?: string;
}) {
  const transporter = getTransporter();
  if (!transporter || !email) return;

  try {
    await transporter.sendMail({
      from: `"Maxora Technology" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: "Thanks for contacting Maxora Technology 🚀",
      html: greetingTemplate(name, company),
    });
  } catch (error) {
    console.error("Failed to send customer greeting email:", error);
  }
}

export interface AdminLeadEmailParams {
  name: string;
  email: string;
  phone: string;
  businessName?: string;
  socialProfile?: string;
  websiteUrl?: string;
  city?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  formType?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  fbclid?: string;
}

/**
 * New lead email -> admin
 */
export async function sendAdminLeadEmail(data: AdminLeadEmailParams) {
  const transporter = getTransporter();
  if (!transporter) {
    console.warn("SMTP credentials not configured. Lead data received:", data);
    return;
  }

  const recipients = [
    process.env.OWNER1_EMAIL || "info@maxoratechnology.com",
    process.env.OWNER2_EMAIL,
  ]
    .filter(Boolean)
    .join(",");

  const subjectPrefix =
    data.formType === "ai-visibility-check"
      ? "🤖 AI Visibility Request"
      : "🚨 New Client Lead";

  try {
    await transporter.sendMail({
      from: `"Website Leads" <${process.env.SMTP_EMAIL}>`,
      to: recipients,
      subject: `${subjectPrefix}: ${data.name} (${data.service || "General"})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #1e293b; line-height: 1.5;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
            ${data.formType === "ai-visibility-check" ? "New AI Visibility Check Submission" : "New Contact Form Submission"}
          </h2>
          <table cellpadding="6" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #f8fafc;">
              <td style="width: 35%;"><strong>Full Name:</strong></td>
              <td>${data.name}</td>
            </tr>
            <tr>
              <td><strong>Email:</strong></td>
              <td><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td><strong>WhatsApp / Phone:</strong></td>
              <td><a href="tel:${data.phone}">${data.phone}</a></td>
            </tr>
            ${data.businessName ? `<tr><td><strong>Business Name:</strong></td><td>${data.businessName}</td></tr>` : ""}
            ${data.socialProfile ? `<tr style="background-color: #f8fafc;"><td><strong>Social Media Link:</strong></td><td><a href="${data.socialProfile.startsWith("http") ? data.socialProfile : `https://${data.socialProfile.replace(/^@/, "")}`}">${data.socialProfile}</a></td></tr>` : ""}
            ${data.websiteUrl ? `<tr><td><strong>Website URL:</strong></td><td><a href="${data.websiteUrl}">${data.websiteUrl}</a></td></tr>` : ""}
            ${data.city ? `<tr><td><strong>City:</strong></td><td>${data.city}</td></tr>` : ""}
            ${data.service ? `<tr style="background-color: #f8fafc;"><td><strong>Service Needed:</strong></td><td>${data.service}</td></tr>` : ""}
            ${data.budget ? `<tr><td><strong>Budget Range:</strong></td><td>${data.budget}</td></tr>` : ""}
            ${data.timeline ? `<tr style="background-color: #f8fafc;"><td><strong>Timeline:</strong></td><td>${data.timeline}</td></tr>` : ""}
          </table>

          ${data.message ? `
            <h3 style="margin-top: 20px; color: #334155;">Project Message / Notes</h3>
            <p style="background-color: #f1f5f9; padding: 12px; border-radius: 8px;">${data.message}</p>
          ` : ""}

          ${(data.utm_source || data.fbclid) ? `
            <h4 style="margin-top: 20px; color: #64748b;">Attribution Tracking</h4>
            <ul style="font-size: 12px; color: #64748b; padding-left: 18px;">
              ${data.utm_source ? `<li><strong>Source:</strong> ${data.utm_source}</li>` : ""}
              ${data.utm_medium ? `<li><strong>Medium:</strong> ${data.utm_medium}</li>` : ""}
              ${data.utm_campaign ? `<li><strong>Campaign:</strong> ${data.utm_campaign}</li>` : ""}
              ${data.fbclid ? `<li><strong>FBCLID:</strong> ${data.fbclid}</li>` : ""}
            </ul>
          ` : ""}
        </div>
      `,
    });
  } catch (error) {
    console.error("Failed to send admin lead email:", error);
    throw error;
  }
}
