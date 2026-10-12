// app/components/ui/greetingTemplate.ts

export const greetingTemplate = (name: string, company?: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Maxora Technology</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 580px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #1e293b; padding: 32px 30px; text-align: left; border-bottom: 3px solid #2563eb;">
              <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">
                Maxora Technology
              </h1>
              <p style="margin: 6px 0 0 0; font-size: 13px; color: #94a3b8;">
                Software Engineering & Digital Solutions
              </p>
            </td>
          </tr>

          <!-- Main Body Content -->
          <tr>
            <td style="padding: 36px 30px 24px 30px;">
              <p style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #0f172a;">
                Hello ${name}${company ? ` (${company})` : ""},
              </p>
              
              <p style="margin: 0 0 16px 0; font-size: 14px; color: #334155;">
                Thank you for reaching out to Maxora Technology. We have safely received your inquiry and project details.
              </p>

              <!-- Process Box -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f1f5f9; border-radius: 8px; border-left: 4px solid #2563eb; margin: 24px 0;">
                <tr>
                  <td style="padding: 16px 20px;">
                    <p style="margin: 0 0 6px 0; font-size: 13px; font-weight: 600; color: #0f172a;">
                      What happens next?
                    </p>
                    <p style="margin: 0; font-size: 13px; color: #475569;">
                      Our engineering team is reviewing your requirements. We will review your project scope and follow up directly on WhatsApp or email within 24 hours.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Quick Connect Details -->
              <p style="margin: 0 0 12px 0; font-size: 13px; color: #334155;">
                If your project is urgent or you would like to share additional files, feel free to message our team directly:
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 0 0 24px 0;">
                <tr>
                  <td style="padding: 8px 0; font-size: 13px; color: #334155;">
                    <strong>WhatsApp:</strong> 
                    <a href="https://wa.me/917719545464" style="color: #2563eb; text-decoration: none;">+91 7719545464</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-size: 13px; color: #334155;">
                    <strong>Direct Email:</strong> 
                    <a href="mailto:info@maxoratechnology.com" style="color: #2563eb; text-decoration: none;">info@maxoratechnology.com</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-size: 13px; color: #334155;">
                    <strong>Website:</strong> 
                    <a href="https://maxoratechnology.com" style="color: #2563eb; text-decoration: none;">maxoratechnology.com</a>
                  </td>
                </tr>
              </table>

              <p style="margin: 24px 0 0 0; font-size: 14px; color: #334155;">
                Warm regards,<br>
                <strong>The Maxora Engineering Team</strong>
              </p>
            </td>
          </tr>

          <!-- Footer with Real Compliance Links -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0 0 8px 0; font-size: 12px; color: #64748b;">
                Maxora Technology • Punjab, India • Serving Clients Worldwide
              </p>
              <p style="margin: 0; font-size: 11px; color: #94a3b8;">
                <a href="https://maxoratechnology.com/privacy" style="color: #64748b; text-decoration: underline;">Privacy Policy</a> • 
                <a href="https://maxoratechnology.com/terms" style="color: #64748b; text-decoration: underline;">Terms of Service</a> • 
                <a href="https://maxoratechnology.com/contact" style="color: #64748b; text-decoration: underline;">Contact Us</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export const greetingPlainText = (name: string, company?: string) => `
Hello ${name}${company ? ` (${company})` : ""},

Thank you for contacting Maxora Technology. We have safely received your inquiry and project requirements.

What happens next?
Our engineering team is reviewing your project details. We will follow up with you directly via WhatsApp or email within 24 hours.

If your project is urgent or you would like to send additional specifications, reach us directly:
- WhatsApp: +91 7719545464 (https://wa.me/917719545464)
- Email: info@maxoratechnology.com
- Website: https://maxoratechnology.com

Warm regards,
The Maxora Engineering Team
Maxora Technology • Punjab, India
Privacy Policy: https://maxoratechnology.com/privacy
`;
