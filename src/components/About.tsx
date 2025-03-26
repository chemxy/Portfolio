'use client';

import { Container, Typography, Grid, Paper } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import SpeedIcon from '@mui/icons-material/Speed';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          className="text-4xl font-bold text-center mb-16 text-secondary"
        >
          About Me
        </Typography>

        <Grid container spacing={6}>
          {/* Left side - Image */}
          <Grid item xs={12} md={6}>
            <div className="relative">
              <img
                src="/images/about-img.jpg"
                alt="About Me"
                className="w-full rounded-lg shadow-lg animate-slideIn"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg -z-10" />
            </div>
          </Grid>

          {/* Right side - Content */}
          <Grid item xs={12} md={6}>
            <div className="space-y-6 animate-fadeIn">
              <Typography variant="h6" className="text-secondary-light">
                Who am I?
              </Typography>
              <Typography variant="body1" className="text-secondary mb-6">
                I am a passionate Full Stack Developer with expertise in building modern web applications.
                With a strong foundation in both front-end and back-end development, I create efficient
                and scalable solutions that solve real-world problems.
              </Typography>

              {/* Features */}
              <Grid container spacing={3}>
                {[
                  {
                    icon: <CodeIcon className="text-primary text-4xl" />,
                    title: 'Clean Code',
                    description: 'Writing clean, maintainable code is my priority'
                  },
                  {
                    icon: <DevicesIcon className="text-primary text-4xl" />,
                    title: 'Responsive',
                    description: 'My layouts work on any device, big or small'
                  },
                  {
                    icon: <SpeedIcon className="text-primary text-4xl" />,
                    title: 'Performance',
                    description: 'Fast load times and lag free interaction'
                  }
                ].map((feature, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Paper elevation={0} className="p-4 text-center hover:shadow-md transition-shadow">
                      {feature.icon}
                      <Typography variant="h6" className="my-2 text-secondary">
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" className="text-secondary-light">
                        {feature.description}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
} 