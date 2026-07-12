import { createHash } from 'crypto';

export const CONTACT_LIMITS = {
  name: 100,
  email: 200,
  subject: 200,
  message: 5000,
  minSubmitMs: 3000,
  perMinute: 1,
  perHour: 5,
  dedupeWindowMs: 10 * 60 * 1000,
} as const;

export type ContactFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type GuardFailure = {
  ok: false;
  status: 400 | 429;
  error: string;
};

export type GuardSuccess = {
  ok: true;
};

export type GuardResult = GuardFailure | GuardSuccess;

type TimestampBucket = number[];

const ipHits = new Map<string, TimestampBucket>();
const contentHits = new Map<string, number>();

function pruneTimestamps(timestamps: number[], windowMs: number, now: number) {
  return timestamps.filter((ts) => now - ts < windowMs);
}

function pruneMaps(now: number) {
  for (const [ip, hits] of ipHits) {
    const minute = pruneTimestamps(hits, 60_000, now);
    const hour = pruneTimestamps(hits, 60 * 60_000, now);
    const kept = hour.length >= minute.length ? hour : minute;
    if (kept.length === 0) ipHits.delete(ip);
    else ipHits.set(ip, kept);
  }

  for (const [hash, ts] of contentHits) {
    if (now - ts >= CONTACT_LIMITS.dedupeWindowMs) {
      contentHits.delete(hash);
    }
  }
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim();
    if (first) return first;
  }

  const realIp = request.headers.get('x-real-ip')?.trim();
  if (realIp) return realIp;

  return 'unknown';
}

export function hashContactContent(fields: Pick<ContactFields, 'email' | 'subject' | 'message'>) {
  return createHash('sha256')
    .update(`${fields.email}\n${fields.subject}\n${fields.message}`)
    .digest('hex');
}

export function validateHoneypot(website: string | undefined): GuardResult {
  if (website && website.trim().length > 0) {
    return { ok: false, status: 400, error: 'Invalid submission.' };
  }
  return { ok: true };
}

export function validateTiming(startedAt: unknown): GuardResult {
  if (typeof startedAt !== 'number' || !Number.isFinite(startedAt)) {
    return { ok: false, status: 400, error: 'Invalid submission.' };
  }

  const elapsed = Date.now() - startedAt;
  if (elapsed < CONTACT_LIMITS.minSubmitMs || elapsed > 24 * 60 * 60_000) {
    return {
      ok: false,
      status: 400,
      error: 'Please take a moment to complete the form before sending.',
    };
  }

  return { ok: true };
}

export function validateFieldLengths(fields: ContactFields): GuardResult {
  if (fields.name.length > CONTACT_LIMITS.name) {
    return { ok: false, status: 400, error: 'Name is too long.' };
  }
  if (fields.email.length > CONTACT_LIMITS.email) {
    return { ok: false, status: 400, error: 'Email is too long.' };
  }
  if (fields.subject.length > CONTACT_LIMITS.subject) {
    return { ok: false, status: 400, error: 'Subject is too long.' };
  }
  if (fields.message.length > CONTACT_LIMITS.message) {
    return { ok: false, status: 400, error: 'Message is too long.' };
  }
  return { ok: true };
}

export function checkRateLimit(ip: string): GuardResult {
  const now = Date.now();
  pruneMaps(now);

  const hits = pruneTimestamps(ipHits.get(ip) ?? [], 60 * 60_000, now);
  const lastMinute = hits.filter((ts) => now - ts < 60_000);

  if (lastMinute.length >= CONTACT_LIMITS.perMinute) {
    return {
      ok: false,
      status: 429,
      error: 'Please wait before sending again.',
    };
  }

  if (hits.length >= CONTACT_LIMITS.perHour) {
    return {
      ok: false,
      status: 429,
      error: 'Too many messages. Please try again later.',
    };
  }

  return { ok: true };
}

export function checkDuplicateContent(
  fields: Pick<ContactFields, 'email' | 'subject' | 'message'>
): GuardResult {
  const now = Date.now();
  pruneMaps(now);

  const hash = hashContactContent(fields);
  const previous = contentHits.get(hash);

  if (previous !== undefined && now - previous < CONTACT_LIMITS.dedupeWindowMs) {
    return {
      ok: false,
      status: 429,
      error: 'Please wait before sending again.',
    };
  }

  return { ok: true };
}

/** Call only after Resend succeeds so failed attempts don't burn the quota window incorrectly for duplicates after success. */
export function recordSuccessfulSubmit(
  ip: string,
  fields: Pick<ContactFields, 'email' | 'subject' | 'message'>
) {
  const now = Date.now();
  pruneMaps(now);

  const hits = pruneTimestamps(ipHits.get(ip) ?? [], 60 * 60_000, now);
  hits.push(now);
  ipHits.set(ip, hits);

  contentHits.set(hashContactContent(fields), now);
}

export function runContactGuards(input: {
  request: Request;
  website?: string;
  startedAt?: unknown;
  fields: ContactFields;
}): GuardResult {
  const steps: GuardResult[] = [
    validateHoneypot(input.website),
    validateTiming(input.startedAt),
    validateFieldLengths(input.fields),
    checkRateLimit(getClientIp(input.request)),
    checkDuplicateContent(input.fields),
  ];

  for (const step of steps) {
    if (!step.ok) return step;
  }

  return { ok: true };
}
