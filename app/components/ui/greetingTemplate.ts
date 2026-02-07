export const greetingTemplate = (name: string, company: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0; padding:0; font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%); min-height: 100vh; padding: 20px;">
  <center>
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 580px; margin: 40px auto;">
      <!-- Header with Gradient -->
      <tr>
        <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px 12px 0 0; padding: 40px 20px; text-align: center;">
          <h1 style="margin:0; color: white; font-size: 32px; font-weight: 300; letter-spacing: 1px;">
            Welcome, ${name}!
          </h1>
          <div style="font-size: 48px; margin-top: 15px;">✨</div>
        </td>
      </tr>
      
      <!-- Main Content Card -->
      <tr>
        <td style="background: white; padding: 40px 30px; border-radius: 0 0 12px 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.08);">
          <!-- Introduction -->
          <p style="color: #555; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">
            We're absolutely delighted to connect with you. Your message has been received and is currently in the best hands.
          </p>
          
          <!-- Key Message -->
          <div style="background: #f8f9ff; border-left: 4px solid #667eea; padding: 20px; margin: 30px 0; border-radius: 0 8px 8px 0;">
            <p style="color: #444; font-size: 15px; line-height: 1.7; margin: 0;">
              <strong>What's next?</strong><br>
              Our team is reviewing your inquiry and will get back to you within 24-48 hours with a thoughtful response.
            </p>
          </div>
          
          <!-- Additional Info -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
            <tr>
              <td style="width: 24px; vertical-align: top; padding-right: 12px;">
                <div style="color: #667eea; font-size: 20px;">✓</div>
              </td>
              <td>
                <p style="color: #555; font-size: 15px; line-height: 1.6; margin: 0 0 10px 0;">
                  We've sent a confirmation to your email
                </p>
              </td>
            </tr>
            <tr>
              <td style="width: 24px; vertical-align: top; padding-right: 12px;">
                <div style="color: #667eea; font-size: 20px;">⏱</div>
              </td>
              <td>
                <p style="color: #555; font-size: 15px; line-height: 1.6; margin: 0;">
                  Response time: 24-48 hours
                </p>
              </td>
            </tr>
          </table>
          
          <!-- Warm Closing -->
          <p style="color: #555; font-size: 16px; line-height: 1.6; margin: 40px 0 20px 0;">
            Wishing You a Wonderful Day Ahead,<br>
            <span style="color: #667eea; font-size: 18px; font-weight: 600; margin-top: 5px; display: block;">
              ${company}
            </span>
          </p>
          
          <!-- Signature Decoration -->
          <div style="border-top: 1px solid #eee; margin-top: 40px; padding-top: 25px; text-align: center;">
            <p style="color: #888; font-size: 14px; margin: 0 0 8px 0;">
              Need immediate assistance?
            </p>
            <a href="mailto:maxoratechnology@gmail.com" style="color: #667eea; text-decoration: none; font-weight: 500; font-size: 15px;">
              maxoratechnology@gmail.com
            </a>
          </div>
        </td>
      </tr>
      
      <!-- Footer -->
      <tr>
        <td style="padding: 30px 20px 20px 20px; text-align: center;">
          <p style="color: #999; font-size: 12px; line-height: 1.5; margin: 0;">
            This is an automated message. Please do not reply directly to this email.<br>
            © ${new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <p style="color: #aaa; font-size: 11px; margin-top: 15px;">
            <a href="#" style="color: #aaa; text-decoration: none; margin: 0 10px;">Privacy Policy</a> • 
            <a href="#" style="color: #aaa; text-decoration: none; margin: 0 10px;">Terms of Service</a> • 
            <a href="#" style="color: #aaa; text-decoration: none; margin: 0 10px;">Unsubscribe</a>
          </p>
        </td>
      </tr>
    </table>
    
    <!-- Subtle Pattern Background -->
    <div style="max-width: 600px; margin: 0 auto; opacity: 0.03; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: -1; pointer-events: none;">
      <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="150" stroke="currentColor" stroke-width="2"/>
        <circle cx="200" cy="200" r="100" stroke="currentColor" stroke-width="1"/>
        <circle cx="200" cy="200" r="50" stroke="currentColor" stroke-width="1"/>
      </svg>
    </div>
  </center>
</body>
</html>
`;
