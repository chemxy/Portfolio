'use client';

import { Container, Typography, Box, Button } from '@mui/material';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/images/welcome-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <Container maxWidth="lg" className="relative z-10">
        <Box className="text-center text-white animate-fadeIn">
          <div className="mb-8 inline-block rounded-full overflow-hidden border-4 border-white/30">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width={180}
              height={180}
              className="rounded-full"
              priority
            />
          </div>
          
          <Typography 
            variant="h1" 
            className="text-5xl md:text-6xl font-bold mb-4 animate-slideIn"
          >
            Your Name
          </Typography>
          
          <Typography 
            variant="h2" 
            className="text-2xl md:text-3xl mb-8 text-gray-200 animate-slideIn"
          >
            Full Stack Developer
          </Typography>

          <div className="flex justify-center gap-4 animate-scaleIn">
            <Button
              variant="contained"
              startIcon={<GitHubIcon />}
              href="https://github.com/yourusername"
              target="_blank"
              className="bg-primary hover:bg-primary-dark"
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              startIcon={<LinkedInIcon />}
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="border-white text-white hover:bg-white/10"
            >
              LinkedIn
            </Button>
          </div>
        </Box>
      </Container>
    </section>
  );
} 