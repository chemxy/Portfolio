'use client';

import { FormEvent, useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Alert,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  website: '',
};

const SUCCESS_COOLDOWN_MS = 30_000;
const COOLDOWN_STORAGE_KEY = 'contact-cooldown-until';

/** sessionStorage is the single source of truth. Missing/unavailable/expired => 0 (no cooldown). */
function readCooldownUntil(): number {
  if (typeof window === 'undefined') return 0;
  try {
    const raw = sessionStorage.getItem(COOLDOWN_STORAGE_KEY);
    if (!raw) return 0;
    const parsed = Number(raw);
    if (!Number.isFinite(parsed)) return 0;
    if (parsed <= Date.now()) {
      sessionStorage.removeItem(COOLDOWN_STORAGE_KEY);
      return 0;
    }
    return parsed;
  } catch {
    return 0;
  }
}

function writeCooldownUntil(until: number) {
  if (typeof window === 'undefined') return;
  try {
    if (until <= Date.now()) {
      sessionStorage.removeItem(COOLDOWN_STORAGE_KEY);
      return;
    }
    sessionStorage.setItem(COOLDOWN_STORAGE_KEY, String(until));
  } catch {
    // sessionStorage unavailable — no persistence (defaults to 0s)
  }
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [startedAt, setStartedAt] = useState(0);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  // Render mirror only — always written after sessionStorage, read via syncFromStorage()
  const [cooldownUntil, setCooldownUntil] = useState(0);
  const [now, setNow] = useState(0);

  const syncFromStorage = () => {
    const stored = readCooldownUntil();
    setCooldownUntil(stored);
    return stored;
  };

  useEffect(() => {
    const current = Date.now();
    setStartedAt(current);
    setNow(current);
    const stored = syncFromStorage();
    if (stored > current) {
      setStatus('success');
    }
  }, []);

  useEffect(() => {
    if (cooldownUntil <= 0) return;

    const tick = () => {
      const current = Date.now();
      setNow(current);
      const stored = readCooldownUntil();
      if (stored <= 0) {
        setCooldownUntil(0);
      }
    };

    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [cooldownUntil]);

  // sessionStorage is SoT; cooldownUntil mirror covers pre-hydrate first paint (0)
  const effectiveCooldownUntil = readCooldownUntil() || cooldownUntil;
  const isCoolingDown = effectiveCooldownUntil > now;
  const isDisabled = status === 'loading' || isCoolingDown;

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'loading' || readCooldownUntil() > Date.now()) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          website: form.website,
          startedAt,
        }),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setStatus('error');
        if (res.status === 429) {
          setErrorMessage(data.error || 'Please wait before sending again.');
        } else {
          setErrorMessage(data.error || 'Failed to send message.');
        }
        return;
      }

      setStatus('success');
      setForm(initialForm);
      setStartedAt(Date.now());
      const until = Date.now() + SUCCESS_COOLDOWN_MS;
      writeCooldownUntil(until);
      setCooldownUntil(readCooldownUntil());
      setNow(Date.now());
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          className="text-4xl font-bold text-center mb-16 text-secondary"
        >
          Contact Me
        </Typography>

        <Grid container spacing={6}>
          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <div className="space-y-6 animate-fadeIn">
              {[
                {
                  icon: <EmailIcon className="text-primary text-4xl" />,
                  title: 'Email',
                  info: 'chemxywork@gmail.com',
                },
                {
                  icon: <PhoneIcon className="text-primary text-4xl" />,
                  title: 'Phone',
                  info: '+1 123-456-7890',
                },
                {
                  icon: <LocationOnIcon className="text-primary text-4xl" />,
                  title: 'Location',
                  info: 'Victoria, BC, Canada',
                },
              ].map((item, index) => (
                <Box key={index} className="flex items-start space-x-4">
                  {item.icon}
                  <div>
                    <Typography variant="h6" className="text-secondary">
                      {item.title}
                    </Typography>
                    <Typography variant="body1" className="text-secondary-light">
                      {item.info}
                    </Typography>
                  </div>
                </Box>
              ))}
            </div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <form onSubmit={handleSubmit} className="space-y-4 animate-slideIn">
              {/* Honeypot — hidden from humans, filled by many bots */}
              <div
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
              >
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={handleChange('website')}
                />
              </div>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    required
                    value={form.name}
                    onChange={handleChange('name')}
                    disabled={isDisabled}
                    inputProps={{ maxLength: 100 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    required
                    value={form.email}
                    onChange={handleChange('email')}
                    disabled={isDisabled}
                    inputProps={{ maxLength: 200 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    required
                    value={form.subject}
                    onChange={handleChange('subject')}
                    disabled={isDisabled}
                    inputProps={{ maxLength: 200 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    required
                    value={form.message}
                    onChange={handleChange('message')}
                    disabled={isDisabled}
                    inputProps={{ maxLength: 5000 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  {status === 'success' && (
                    <Alert severity="success" className="mb-4">
                      Message sent successfully. I will get back to you soon.
                    </Alert>
                  )}
                  {status === 'error' && (
                    <Alert severity="error" className="mb-4">
                      {errorMessage}
                    </Alert>
                  )}
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    className="bg-primary hover:bg-primary-dark"
                    disabled={isDisabled}
                  >
                    {status === 'loading'
                      ? 'Sending...'
                      : isCoolingDown
                        ? 'Please wait...'
                        : 'Send Message'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
