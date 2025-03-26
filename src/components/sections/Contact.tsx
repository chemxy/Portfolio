'use client';

import { Container, Typography, Grid, TextField, Button, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="contact" className="py-20 bg-white">
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
                  info: 'your.email@example.com'
                },
                {
                  icon: <PhoneIcon className="text-primary text-4xl" />,
                  title: 'Phone',
                  info: '+1 234 567 890'
                },
                {
                  icon: <LocationOnIcon className="text-primary text-4xl" />,
                  title: 'Location',
                  info: 'City, Country'
                }
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
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    required
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
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    className="bg-primary hover:bg-primary-dark"
                  >
                    Send Message
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