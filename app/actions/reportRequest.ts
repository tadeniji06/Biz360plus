'use server';

export interface ReportRequestState {
  status: 'idle' | 'success' | 'error';
  message: string;
}

export async function requestReport(
  reportTitle: string,
  reportSlug: string,
  _prevState: ReportRequestState,
  formData: FormData
): Promise<ReportRequestState> {
  const name = (formData.get('name') as string)?.trim();
  const email = (formData.get('email') as string)?.trim();
  const phone = (formData.get('phone') as string)?.trim();
  const country = (formData.get('country') as string)?.trim();

  if (!name || !email || !country) {
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

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111;">
      <div style="background: #1a56db; padding: 20px 24px; border-radius: 6px 6px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px;">New Report Download Request</h1>
        <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 13px;">Business360 Intelligence Reports</p>
      </div>
      <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 6px 6px;">
        <h2 style="font-size: 15px; color: #374151; margin: 0 0 12px;">Report Requested</h2>
        <p style="font-size: 16px; font-weight: bold; color: #1a56db; background: white; border: 1px solid #e5e7eb; padding: 12px 16px; border-radius: 4px; margin: 0 0 24px;">${reportTitle}</p>

        <h2 style="font-size: 15px; color: #374151; margin: 0 0 12px;">Requestor Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 12px; background: white; border: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; width: 30%;">Full Name</td>
            <td style="padding: 8px 12px; background: white; border: 1px solid #e5e7eb; border-left: none; font-size: 14px; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background: #f9fafb; border: 1px solid #e5e7eb; border-top: none; font-size: 12px; color: #6b7280;">Email</td>
            <td style="padding: 8px 12px; background: #f9fafb; border: 1px solid #e5e7eb; border-top: none; border-left: none; font-size: 14px;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background: white; border: 1px solid #e5e7eb; border-top: none; font-size: 12px; color: #6b7280;">Phone</td>
            <td style="padding: 8px 12px; background: white; border: 1px solid #e5e7eb; border-top: none; border-left: none; font-size: 14px;">${phone || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background: #f9fafb; border: 1px solid #e5e7eb; border-top: none; font-size: 12px; color: #6b7280;">Country</td>
            <td style="padding: 8px 12px; background: #f9fafb; border: 1px solid #e5e7eb; border-top: none; border-left: none; font-size: 14px;">${country}</td>
          </tr>
        </table>

        <p style="font-size: 12px; color: #9ca3af; margin: 24px 0 0; border-top: 1px solid #e5e7eb; padding-top: 16px;">
          Submitted via Business360 Reports &bull; ${new Date().toLocaleString('en-GB', { timeZone: 'Africa/Lagos' })} WAT
        </p>
      </div>
    </div>
  `;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Business360 Reports <onboarding@resend.dev>',
        to: ['m360solutionsgroup@gmail.com'],
        subject: `📊 New Report Request — ${reportTitle}`,
        html,
      }),
    });

    if (!res.ok) {
      const errorBody = await res.text();
      console.error('Resend API error:', res.status, errorBody);
      return {
        status: 'error',
        message: 'Could not send your request. Please try again shortly.',
      };
    }

    return {
      status: 'success',
      message: 'Details received.',
    };
  } catch (err) {
    console.error('Network error calling Resend:', err);
    return {
      status: 'error',
      message: 'A network error occurred. Please check your connection and try again.',
    };
  }
}
