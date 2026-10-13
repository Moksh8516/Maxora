// app/lib/mailer.ts
import nodemailer from "nodemailer";
import { greetingTemplate, greetingPlainText } from "../components/ui/greetingTemplate";

function getTransporter() {
  const email = (process.env.SMTP_EMAIL?.trim() || "tmaxora@gmail.com");
  const password = (process.env.SMTP_PASSWORD?.trim().replace(/\s+/g, "") || "ptjbmvbaaioskozh");

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: email,
      pass: password,
    },
  });
}

/**
 * Customer confirmation email
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

  const senderEmail = (process.env.SMTP_EMAIL?.trim() || "tmaxora@gmail.com");

  try {
    await transporter.sendMail({
      from: `"Maxora Technology" <${senderEmail}>`,
      replyTo: senderEmail,
      to: email.trim(),
      subject: "We received your inquiry - Maxora Technology",
      text: greetingPlainText(name, company),
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
 * New lead notification email -> admin
 */
export async function sendAdminLeadEmail(data: AdminLeadEmailParams) {
  const transporter = getTransporter();
  if (!transporter) {
    console.warn("SMTP credentials not configured. Lead data received:", data);
    return;
  }

  const recipients = [
    process.env.OWNER1_EMAIL?.trim() || "moksh8516@gmail.com",
    process.env.OWNER2_EMAIL?.trim() || "maxoratechnology@gmail.com",
  ]
    .filter(Boolean)
    .join(",");

  const subjectPrefix =
    data.formType === "ai-visibility-check"
      ? "[AI Visibility Audit Request]"
      : "[New Client Lead]";

  const senderEmail = (process.env.SMTP_EMAIL?.trim() || "tmaxora@gmail.com");
  const leadIdentifier = data.businessName || data.name;

  const plainTextContent = `
${subjectPrefix}: ${leadIdentifier}
--------------------------------------------------
Full Name: ${data.name}
Email: ${data.email}
WhatsApp/Phone: ${data.phone}
${data.businessName ? `Business Name: ${data.businessName}\n` : ""}${data.socialProfile ? `Social Profile: ${data.socialProfile}\n` : ""}${data.websiteUrl ? `Website URL: ${data.websiteUrl}\n` : ""}${data.city ? `City: ${data.city}\n` : ""}${data.service ? `Service: ${data.service}\n` : ""}${data.budget ? `Budget: ${data.budget}\n` : ""}${data.timeline ? `Timeline: ${data.timeline}\n` : ""}
${data.message ? `Message:\n${data.message}\n` : ""}
Attribution:
${data.utm_source ? `- Source: ${data.utm_source}\n` : ""}${data.utm_medium ? `- Medium: ${data.utm_medium}\n` : ""}${data.utm_campaign ? `- Campaign: ${data.utm_campaign}\n` : ""}${data.fbclid ? `- FBCLID: ${data.fbclid}\n` : ""}
Submitted At: ${new Date().toISOString()}
`.trim();

  try {
    await transporter.sendMail({
      from: `"Maxora Leads" <${senderEmail}>`,
      replyTo: data.email,
      to: recipients,
      subject: `${subjectPrefix} ${leadIdentifier} (${data.service || "General"})`,
      text: plainTextContent,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; color: #1e293b; line-height: 1.5; padding: 20px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 0;">
            ${data.formType === "ai-visibility-check" ? "New AI Visibility Audit Request" : "New Client Inquiry"}
          </h2>
          <table cellpadding="8" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #f8fafc;">
              <td style="width: 35%; color: #475569;"><strong>Full Name:</strong></td>
              <td style="color: #0f172a;">${data.name}</td>
            </tr>
            <tr>
              <td style="color: #475569;"><strong>Email:</strong></td>
              <td><a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">${data.email}</a></td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="color: #475569;"><strong>WhatsApp / Phone:</strong></td>
              <td><a href="tel:${data.phone}" style="color: #2563eb; text-decoration: none;">${data.phone}</a></td>
            </tr>
            ${data.businessName ? `<tr><td style="color: #475569;"><strong>Business Name:</strong></td><td style="color: #0f172a;">${data.businessName}</td></tr>` : ""}
            ${data.socialProfile ? `<tr style="background-color: #f8fafc;"><td style="color: #475569;"><strong>Social Media:</strong></td><td><a href="${data.socialProfile.startsWith("http") ? data.socialProfile : `https://${data.socialProfile.replace(/^@/, "")}`}" style="color: #2563eb; text-decoration: none;">${data.socialProfile}</a></td></tr>` : ""}
            ${data.websiteUrl ? `<tr><td style="color: #475569;"><strong>Website:</strong></td><td><a href="${data.websiteUrl}" style="color: #2563eb; text-decoration: none;">${data.websiteUrl}</a></td></tr>` : ""}
            ${data.city ? `<tr><td style="color: #475569;"><strong>City:</strong></td><td style="color: #0f172a;">${data.city}</td></tr>` : ""}
            ${data.service ? `<tr style="background-color: #f8fafc;"><td style="color: #475569;"><strong>Service Needed:</strong></td><td style="color: #0f172a;">${data.service}</td></tr>` : ""}
            ${data.budget ? `<tr><td style="color: #475569;"><strong>Budget:</strong></td><td style="color: #0f172a;">${data.budget}</td></tr>` : ""}
            ${data.timeline ? `<tr style="background-color: #f8fafc;"><td style="color: #475569;"><strong>Timeline:</strong></td><td style="color: #0f172a;">${data.timeline}</td></tr>` : ""}
          </table>

          ${data.message ? `
            <div style="margin-top: 24px; padding: 14px; background-color: #f1f5f9; border-radius: 6px;">
              <strong style="color: #334155; display: block; margin-bottom: 6px;">Client Message / Notes:</strong>
              <p style="margin: 0; color: #1e293b; white-space: pre-wrap;">${data.message}</p>
            </div>
          ` : ""}

          ${(data.utm_source || data.fbclid) ? `
            <div style="margin-top: 20px; padding-top: 12px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
              <strong>Attribution:</strong>
              ${data.utm_source ? `Source: ${data.utm_source} | ` : ""}
              ${data.utm_medium ? `Medium: ${data.utm_medium} | ` : ""}
              ${data.utm_campaign ? `Campaign: ${data.utm_campaign} | ` : ""}
              ${data.fbclid ? `FBCLID: ${data.fbclid}` : ""}
            </div>
          ` : ""}
        </div>
      `,
    });
    return true;
  } catch (error) {
    console.error("Failed to send admin lead email:", error);
    return false;
  }
}
