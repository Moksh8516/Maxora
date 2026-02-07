import nodemailer from "nodemailer";
import { greetingTemplate } from "../components/ui/greetingTemplate";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

/**
 * Greeting email → customer
 */
export async function sendGreetingEmail({
  name,
  email,
  company,
}: {
  name: string;
  email: string;
  company: string;
}) {
  await transporter.sendMail({
    from: `"Maxora Technology" <${process.env.SMTP_EMAIL}>`,
    to: email,
    subject: "Thanks for contacting Maxora Technology 🚀",
    html: greetingTemplate(name, company),
  });
}

/**
 * New lead email → admin
 */
export async function sendAdminLeadEmail({
  name,
  email,
  phone,
  company,
  service,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message?: string;
}) {
  await transporter.sendMail({
    from: `"New Lead - Website" <${process.env.SMTP_EMAIL}>`,
    to: process.env.OWNER1_EMAIL + "," + process.env.OWNER2_EMAIL,
    subject: `🚨 New Lead: ${service}`,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2>New Contact Form Submission</h2>
        <table cellpadding="8" cellspacing="0" border="0">
          <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Company:</strong></td><td>${company}</td></tr>
          <tr><td><strong>Service:</strong></td><td>${service}</td></tr>
        </table>

        <h3>Message</h3>
        <p>${message}</p>
      </div>
    `,
  });
}
