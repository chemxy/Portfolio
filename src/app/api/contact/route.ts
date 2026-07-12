import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  getClientIp,
  recordSuccessfulSubmit,
  runContactGuards,
} from '@/lib/contact-guard';

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactBody = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
  startedAt?: number;
};

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    const body = (await request.json()) as ContactBody;
    const name = body.name?.trim() ?? '';
    const email = body.email?.trim() ?? '';
    const subject = body.subject?.trim() ?? '';
    const message = body.message?.trim() ?? '';
    const website = body.website ?? '';

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const fields = { name, email, subject, message };
    const guard = runContactGuards({
      request,
      website,
      startedAt: body.startedAt,
      fields,
    });

    if (!guard.ok) {
      return NextResponse.json({ error: guard.error }, { status: guard.status });
    }

    const to = process.env.CONTACT_TO_EMAIL ?? 'chemxywork@gmail.com';

    const { data, error } = await resend.emails.send({
      from: 'Roger Personal Website Contact <onboarding@resend.dev>',
      to: [to],
      replyTo: email,
      subject: `[Roger Personal Website] ${subject}`,
      html: `
        <h2>New contact message from your personal website</h2>
        <p><strong>From Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>From Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll('\n', '<br />')}</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message || 'Failed to send email.' },
        { status: 500 }
      );
    }

    recordSuccessfulSubmit(getClientIp(request), fields);

    return NextResponse.json({ ok: true, id: data?.id });
  } catch {
    return NextResponse.json(
      { error: 'Unexpected error while sending email.' },
      { status: 500 }
    );
  }
}
