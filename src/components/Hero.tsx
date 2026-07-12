
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
              src="/images/pro2.png"
              alt="Profile"
              width={240}
              height={240}
              className="rounded-full"
              priority
            />
          </div>
          
          <Typography 
            variant="h1" 
            className="uppercase text-4xl md:text-5xl text-gray-100 animate-slideIn"
          >
            xingyun chen
          </Typography>
          
          <Typography 
            variant="h2" 
            className="capitalize text-5xl! md:text-2xl mt-4! text-gray animate-slideIn"
          >
            full stack developer
          </Typography>

          <div className="flex justify-center gap-4 animate-scaleIn mt-12">
            <Button
              variant="contained"
              startIcon={<GitHubIcon />}
              href="https://github.com/chemxy"
              target="_blank"
              className="bg-primary hover:bg-primary-dark"
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              startIcon={<LinkedInIcon />}
              href="https://linkedin.com/in/chemxy"
              target="_blank"
              className="bg-white/92! border-white text-white hover:bg-white/70!"
            >
              LinkedIn
            </Button>
          </div>
        </Box>
      </Container>
    </section>
  );
} 