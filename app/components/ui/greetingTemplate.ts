// app/components/ui/greetingTemplate.ts

export const greetingTemplate = (name: string, company?: string) => `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 580px; margin: 0 auto; color: #1e293b; line-height: 1.6; padding: 24px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px;">
  <div style="border-bottom: 2px solid #2563eb; padding-bottom: 12px; margin-bottom: 20px;">
    <h2 style="margin: 0; color: #0f172a; font-size: 20px; font-weight: 700;">Maxora Technology</h2>
    <p style="margin: 4px 0 0 0; font-size: 13px; color: #64748b;">Software Engineering & Digital Solutions</p>
  </div>

  <p style="margin: 0 0 16px 0; font-size: 15px; color: #0f172a;">
    Hi ${name}${company ? ` (${company})` : ""},
  </p>

  <p style="margin: 0 0 16px 0; font-size: 14px; color: #334155;">
    Thank you for reaching out to us. We have received your inquiry and project details.
  </p>

  <div style="background-color: #f8fafc; border-left: 4px solid #2563eb; padding: 14px 18px; margin: 20px 0; border-radius: 0 6px 6px 0;">
    <strong style="color: #0f172a; font-size: 13px; display: block; margin-bottom: 4px;">What happens next?</strong>
    <p style="margin: 0; font-size: 13px; color: #475569;">
      Our engineering team is reviewing your requirements. We will follow up with an initial review directly within 24 hours.
    </p>
  </div>

  <p style="margin: 0 0 12px 0; font-size: 14px; color: #334155;">
    If you need to share additional specifications or have questions in the meantime, you can reply directly to this email or contact us:
  </p>

  <p style="margin: 0 0 20px 0; font-size: 13px; color: #475569;">
    • <strong>WhatsApp & Phone:</strong> +91 7719545464<br>
    • <strong>Email:</strong> <a href="mailto:info@maxoratechnology.com" style="color: #2563eb; text-decoration: none;">info@maxoratechnology.com</a><br>
    • <strong>Website:</strong> <a href="https://maxoratechnology.com" style="color: #2563eb; text-decoration: none;">maxoratechnology.com</a>
  </p>

  <p style="margin: 24px 0 0 0; font-size: 14px; color: #334155;">
    Best regards,<br>
    <strong>Maxora Technology Team</strong><br>
    <span style="font-size: 12px; color: #64748b;">Punjab, India</span>
  </p>
</div>
`;

export const greetingPlainText = (name: string, company?: string) => `
Hi ${name}${company ? ` (${company})` : ""},

Thank you for reaching out to Maxora Technology. We have safely received your inquiry and project details.

What happens next?
Our engineering team is reviewing your requirements. We will follow up with you directly within 24 hours.

If you have additional files or urgent questions, you can reply directly to this email or reach us at:
• WhatsApp & Phone: +91 7719545464
• Email: info@maxoratechnology.com
• Website: https://maxoratechnology.com

Best regards,
Maxora Technology Team
Punjab, India
`.trim();
