'use client';

import { FormEvent, useState } from 'react';
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
};

const initialForm: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message.');
        return;
      }

      setStatus('success');
      setForm(initialForm);
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
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    required
                    value={form.name}
                    onChange={handleChange('name')}
                    disabled={status === 'loading'}
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
                    disabled={status === 'loading'}
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
                    disabled={status === 'loading'}
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
                    disabled={status === 'loading'}
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
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
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
