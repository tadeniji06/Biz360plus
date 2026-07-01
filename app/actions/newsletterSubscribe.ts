'use server';

export interface NewsletterSubscribeState {
  status: 'idle' | 'success' | 'error';
  message: string;
}

// ─── SVG Icons (inline, email-safe) ───────────────────────────────────────────
const ICON = {
  news: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="2" stroke="#1A56DB" stroke-width="1.8"/><path d="M7 9h10M7 13h7M7 17h5" stroke="#1A56DB" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  chart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 17l5-5 4 4 9-9" stroke="#1A56DB" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 21h18" stroke="#1A56DB" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  star: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#1A56DB" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  arrow: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 6l6 6-6 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

// ─── Premium Onboarding Email ─────────────────────────────────────────────────
function buildOnboardingEmail(firstName: string): string {
  const year = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Welcome to Business360</title>
  <!--[if mso]>
  <noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#EAECF0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">

<!-- Preheader (hidden preview text) -->
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
  Welcome to Business360, ${firstName}. Your access to Africa's premier business intelligence starts now.&nbsp;&#847;&nbsp;
</div>

<!-- Outer wrapper -->
<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation"
  style="background-color:#EAECF0;min-width:100%;">
  <tr>
    <td align="center" style="padding:40px 16px 48px;">

      <!-- Email card — max 600px -->
      <table width="600" cellpadding="0" cellspacing="0" border="0" role="presentation"
        style="max-width:600px;width:100%;">

        <!-- ── TOP LOGO BAR ── -->
        <tr>
          <td align="center" style="padding-bottom:24px;">
            <table cellpadding="0" cellspacing="0" border="0" role="presentation">
              <tr>
                <td style="padding:10px 24px;background:#0A0F1E;border-radius:999px;">
                  <span style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                    font-size:16px;font-weight:900;letter-spacing:-0.04em;color:#FFFFFF;
                    line-height:1;display:inline-block;">
                    Business<span style="color:#60A5FA;">360</span>
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ── HERO BLOCK ── -->
        <tr>
          <td style="background:linear-gradient(160deg,#0A0F1E 0%,#0E1F5B 55%,#1A56DB 100%);
            border-radius:16px 16px 0 0;padding:56px 48px 48px;text-align:center;">

            <!-- Gold accent rule -->
            <div style="width:48px;height:3px;background:linear-gradient(90deg,#C9A84C,#F5D88A);
              border-radius:999px;margin:0 auto 32px;"></div>

            <h1 style="margin:0 0 16px;font-family:'Georgia',serif;
              font-size:36px;font-weight:700;line-height:1.2;
              color:#FFFFFF;letter-spacing:-0.02em;">
              Welcome, ${firstName}.
            </h1>

            <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
              font-size:16px;line-height:1.7;
              color:rgba(255,255,255,0.68);max-width:420px;margin:0 auto;">
              You've joined Africa's most trusted source for business intelligence,
              analysis, and insight — delivered directly to you.
            </p>

            <!-- Bottom fade for smooth transition into white body -->
            <div style="margin-top:48px;height:1px;
              background:linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent);"></div>
          </td>
        </tr>

        <!-- ── WHITE BODY ── -->
        <tr>
          <td style="background:#FFFFFF;padding:48px 48px 0;">

            <!-- Greeting paragraph -->
            <p style="margin:0 0 8px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
              font-size:15px;color:#6B7280;">
              Dear ${firstName},
            </p>
            <p style="margin:0 0 32px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
              font-size:15px;line-height:1.75;color:#374151;">
              Thank you for subscribing to <strong style="color:#111827;">Business360</strong>.
              You now have access to sharp, credible reporting across every vertical that
              matters — from Finance and Technology to FemmeBiz and the broader Economy.
              We hold ourselves to a single standard: <em>excellence</em>.
            </p>

            <!-- ── SECTION DIVIDER ── -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation"
              style="margin-bottom:32px;">
              <tr>
                <td style="border-top:1px solid #E5E7EB;"></td>
                <td style="width:12px;"></td>
                <td style="white-space:nowrap;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                  font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;
                  color:#9CA3AF;padding:0 12px;">
                  What to expect
                </td>
                <td style="width:12px;"></td>
                <td style="border-top:1px solid #E5E7EB;"></td>
              </tr>
            </table>

            <!-- ── BENEFITS LIST ── -->

            <!-- Benefit 1 -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation"
              style="margin-bottom:20px;">
              <tr>
                <td style="width:44px;vertical-align:top;padding-top:2px;">
                  <table cellpadding="0" cellspacing="0" border="0" role="presentation">
                    <tr>
                      <td style="width:40px;height:40px;background:#EEF2FF;border-radius:10px;
                        text-align:center;vertical-align:middle;">
                        ${ICON.news}
                      </td>
                    </tr>
                  </table>
                </td>
                <td style="padding-left:16px;vertical-align:top;">
                  <p style="margin:0 0 4px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                    font-size:14px;font-weight:700;color:#111827;letter-spacing:-0.01em;">
                    Breaking Business News
                  </p>
                  <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                    font-size:13px;line-height:1.6;color:#6B7280;">
                    Real-time updates on the stories shaping Africa's business landscape —
                    curated and verified by our editorial team.
                  </p>
                </td>
              </tr>
            </table>

            <!-- Benefit 2 -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation"
              style="margin-bottom:20px;">
              <tr>
                <td style="width:44px;vertical-align:top;padding-top:2px;">
                  <table cellpadding="0" cellspacing="0" border="0" role="presentation">
                    <tr>
                      <td style="width:40px;height:40px;background:#EEF2FF;border-radius:10px;
                        text-align:center;vertical-align:middle;">
                        ${ICON.chart}
                      </td>
                    </tr>
                  </table>
                </td>
                <td style="padding-left:16px;vertical-align:top;">
                  <p style="margin:0 0 4px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                    font-size:14px;font-weight:700;color:#111827;letter-spacing:-0.01em;">
                    In-Depth Industry Analysis
                  </p>
                  <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                    font-size:13px;line-height:1.6;color:#6B7280;">
                    Deep reporting across Tech, Finance, Hospitality, Retail, Economy,
                    Real Estate, Marketing, and FemmeBiz.
                  </p>
                </td>
              </tr>
            </table>

            <!-- Benefit 3 -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation"
              style="margin-bottom:36px;">
              <tr>
                <td style="width:44px;vertical-align:top;padding-top:2px;">
                  <table cellpadding="0" cellspacing="0" border="0" role="presentation">
                    <tr>
                      <td style="width:40px;height:40px;background:#EEF2FF;border-radius:10px;
                        text-align:center;vertical-align:middle;">
                        ${ICON.star}
                      </td>
                    </tr>
                  </table>
                </td>
                <td style="padding-left:16px;vertical-align:top;">
                  <p style="margin:0 0 4px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                    font-size:14px;font-weight:700;color:#111827;letter-spacing:-0.01em;">
                    Exclusive Reports &amp; Insights
                  </p>
                  <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                    font-size:13px;line-height:1.6;color:#6B7280;">
                    Premium intelligence crafted exclusively for our subscribers —
                    the kind of analysis that informs real business decisions.
                  </p>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- ── DARK CTA BAND ── -->
        <tr>
          <td style="background:#0A0F1E;padding:36px 48px;text-align:center;">
            <p style="margin:0 0 20px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
              font-size:14px;line-height:1.6;color:rgba(255,255,255,0.65);">
              Your first edition awaits. Start exploring Business360 today.
            </p>
            <table cellpadding="0" cellspacing="0" border="0" role="presentation"
              style="margin:0 auto;">
              <tr>
                <td style="background:#1A56DB;border-radius:8px;">
                  <a href="https://www.thisisbusiness360.com"
                    style="display:inline-block;padding:14px 36px;
                      font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                      font-size:14px;font-weight:700;color:#FFFFFF;text-decoration:none;
                      letter-spacing:0.01em;border-radius:8px;">
                    Read Today's Stories
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ── VERTICALS SECTION ── -->
        <tr>
          <td style="background:#FFFFFF;padding:36px 48px 40px;">

            <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation"
              style="margin-bottom:20px;">
              <tr>
                <td style="border-top:1px solid #E5E7EB;"></td>
                <td style="width:12px;"></td>
                <td style="white-space:nowrap;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                  font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;
                  color:#9CA3AF;padding:0 12px;">
                  Our verticals
                </td>
                <td style="width:12px;"></td>
                <td style="border-top:1px solid #E5E7EB;"></td>
              </tr>
            </table>

            <!-- Row 1 -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation"
              style="margin-bottom:10px;">
              <tr>
                <td style="padding:9px 14px;background:#F9FAFB;border-radius:6px;
                  border:1px solid #E5E7EB;text-align:center;
                  font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                  font-size:12px;font-weight:600;color:#374151;letter-spacing:0.01em;">
                  News
                </td>
                <td width="10"></td>
                <td style="padding:9px 14px;background:#F9FAFB;border-radius:6px;
                  border:1px solid #E5E7EB;text-align:center;
                  font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                  font-size:12px;font-weight:600;color:#374151;letter-spacing:0.01em;">
                  Technology
                </td>
                <td width="10"></td>
                <td style="padding:9px 14px;background:#F9FAFB;border-radius:6px;
                  border:1px solid #E5E7EB;text-align:center;
                  font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                  font-size:12px;font-weight:600;color:#374151;letter-spacing:0.01em;">
                  Finance
                </td>
                <td width="10"></td>
                <td style="padding:9px 14px;background:#F9FAFB;border-radius:6px;
                  border:1px solid #E5E7EB;text-align:center;
                  font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                  font-size:12px;font-weight:600;color:#374151;letter-spacing:0.01em;">
                  Economy
                </td>
              </tr>
            </table>
            <!-- Row 2 -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
              <tr>
                <td style="padding:9px 14px;background:#F9FAFB;border-radius:6px;
                  border:1px solid #E5E7EB;text-align:center;
                  font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                  font-size:12px;font-weight:600;color:#374151;letter-spacing:0.01em;">
                  Hospitality
                </td>
                <td width="10"></td>
                <td style="padding:9px 14px;background:#F9FAFB;border-radius:6px;
                  border:1px solid #E5E7EB;text-align:center;
                  font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                  font-size:12px;font-weight:600;color:#374151;letter-spacing:0.01em;">
                  Retail
                </td>
                <td width="10"></td>
                <td style="padding:9px 14px;background:#F9FAFB;border-radius:6px;
                  border:1px solid #E5E7EB;text-align:center;
                  font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                  font-size:12px;font-weight:600;color:#374151;letter-spacing:0.01em;">
                  FemmeBiz
                </td>
                <td width="10"></td>
                <td style="padding:9px 14px;background:#F9FAFB;border-radius:6px;
                  border:1px solid #E5E7EB;text-align:center;
                  font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                  font-size:12px;font-weight:600;color:#374151;letter-spacing:0.01em;">
                  Real Estate
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- ── SIGN-OFF BLOCK ── -->
        <tr>
          <td style="background:#FAFAFA;border-top:1px solid #E5E7EB;
            border-left:1px solid #E5E7EB;border-right:1px solid #E5E7EB;
            padding:32px 48px;">
            <p style="margin:0 0 6px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
              font-size:14px;color:#374151;line-height:1.7;">
              We're glad you're here.
            </p>
            <p style="margin:0 0 20px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
              font-size:14px;color:#374151;line-height:1.7;">
              Warm regards,
            </p>
            <p style="margin:0;font-family:'Georgia',serif;font-size:18px;
              font-weight:700;color:#111827;letter-spacing:-0.01em;">
              The Business360 Editorial Team
            </p>
            <div style="width:32px;height:2px;background:linear-gradient(90deg,#1A56DB,#60A5FA);
              border-radius:999px;margin-top:12px;"></div>
          </td>
        </tr>

        <!-- ── FOOTER ── -->
        <tr>
          <td style="background:#0A0F1E;border-radius:0 0 16px 16px;padding:28px 48px;
            text-align:center;">

            <!-- Footer logo -->
            <p style="margin:0 0 16px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
              font-size:14px;font-weight:900;letter-spacing:-0.04em;color:#FFFFFF;">
              Business<span style="color:#60A5FA;">360</span>
            </p>

            <!-- Social links -->
            <table cellpadding="0" cellspacing="0" border="0" role="presentation"
              style="margin:0 auto 20px;">
              <tr>
                <td style="padding:0 10px;">
                  <a href="https://twitter.com/business360ng"
                    style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                    font-size:12px;font-weight:600;color:rgba(255,255,255,0.55);
                    text-decoration:none;letter-spacing:0.04em;text-transform:uppercase;">
                    Twitter
                  </a>
                </td>
                <td style="color:rgba(255,255,255,0.2);font-size:14px;">|</td>
                <td style="padding:0 10px;">
                  <a href="https://linkedin.com/company/business360ng"
                    style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                    font-size:12px;font-weight:600;color:rgba(255,255,255,0.55);
                    text-decoration:none;letter-spacing:0.04em;text-transform:uppercase;">
                    LinkedIn
                  </a>
                </td>
                <td style="color:rgba(255,255,255,0.2);font-size:14px;">|</td>
                <td style="padding:0 10px;">
                  <a href="https://www.thisisbusiness360.com"
                    style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                    font-size:12px;font-weight:600;color:rgba(255,255,255,0.55);
                    text-decoration:none;letter-spacing:0.04em;text-transform:uppercase;">
                    Website
                  </a>
                </td>
              </tr>
            </table>

            <p style="margin:0 0 6px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
              font-size:11px;line-height:1.6;color:rgba(255,255,255,0.35);">
              You received this because you subscribed at
              <a href="https://www.thisisbusiness360.com"
                style="color:rgba(255,255,255,0.45);text-decoration:underline;">
                thisisbusiness360.com
              </a>
            </p>
            <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
              font-size:10px;color:rgba(255,255,255,0.2);letter-spacing:0.04em;
              text-transform:uppercase;">
              &copy; ${year} Business360 &nbsp;&middot;&nbsp; Africa's Premier Business Publication
            </p>
          </td>
        </tr>

      </table>
      <!-- / Email card -->

    </td>
  </tr>
</table>

</body>
</html>`;
}

// ─── Internal Notification Email ──────────────────────────────────────────────
function buildNotificationEmail(firstName: string, lastName: string, email: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111;">
      <div style="background: #1a56db; padding: 20px 24px; border-radius: 6px 6px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px;">New Newsletter Subscription</h1>
        <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 13px;">Business360 Newsletters</p>
      </div>
      <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 6px 6px;">
        <h2 style="font-size: 15px; color: #374151; margin: 0 0 12px;">Subscriber Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 12px; background: white; border: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; width: 30%;">First Name</td>
            <td style="padding: 8px 12px; background: white; border: 1px solid #e5e7eb; border-left: none; font-size: 14px; font-weight: 600;">${firstName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background: #f9fafb; border: 1px solid #e5e7eb; border-top: none; font-size: 12px; color: #6b7280;">Last Name</td>
            <td style="padding: 8px 12px; background: #f9fafb; border: 1px solid #e5e7eb; border-top: none; border-left: none; font-size: 14px; font-weight: 600;">${lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background: white; border: 1px solid #e5e7eb; border-top: none; font-size: 12px; color: #6b7280;">Email</td>
            <td style="padding: 8px 12px; background: white; border: 1px solid #e5e7eb; border-top: none; border-left: none; font-size: 14px;">${email}</td>
          </tr>
        </table>
        <p style="font-size: 12px; color: #9ca3af; margin: 24px 0 0; border-top: 1px solid #e5e7eb; padding-top: 16px;">
          Submitted via Business360 Newsletters &bull; ${new Date().toLocaleString('en-GB', { timeZone: 'Africa/Lagos' })} WAT
        </p>
      </div>
    </div>
  `;
}

// ─── Server Action ─────────────────────────────────────────────────────────────
export async function newsletterSubscribe(
  _prevState: NewsletterSubscribeState,
  formData: FormData
): Promise<NewsletterSubscribeState> {
  const firstName = (formData.get('firstName') as string)?.trim();
  const lastName = (formData.get('lastName') as string)?.trim();
  const email = (formData.get('email') as string)?.trim();

  if (!firstName || !lastName || !email) {
    return { status: 'error', message: 'Please fill in all required fields.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return { status: 'error', message: 'Server configuration error. Please try again later.' };
  }

  const sendEmail = async (payload: object) => {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Resend ${res.status}: ${body}`);
    }
    return res;
  };

  try {
    await Promise.all([
      // 1. Internal team notification
      sendEmail({
        from: 'Business360 Newsletters <newsletter@thisisbusiness360.com>',
        to: ['m360solutionsgroup@gmail.com'],
        subject: `New Subscriber — ${firstName} ${lastName}`,
        html: buildNotificationEmail(firstName, lastName, email),
      }),

      // 2. Onboarding welcome to subscriber
      sendEmail({
        from: 'Business360 <newsletter@thisisbusiness360.com>',
        to: [email],
        subject: `Welcome to Business360, ${firstName}.`,
        html: buildOnboardingEmail(firstName),
      }),
    ]);

    return { status: 'success', message: 'Subscribed successfully.' };
  } catch (err) {
    console.error('Error sending newsletter emails:', err);
    return {
      status: 'error',
      message: 'Could not complete your subscription. Please try again shortly.',
    };
  }
}
