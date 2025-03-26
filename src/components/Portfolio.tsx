'use client';

import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack web application built with React and Node.js',
    image: '/images/project1.jpg',
    github: 'https://github.com/yourusername/project1',
    demo: 'https://project1-demo.com'
  },
  {
    title: 'Project Two',
    description: 'Mobile-first responsive website using Next.js',
    image: '/images/project2.jpg',
    github: 'https://github.com/yourusername/project2',
    demo: 'https://project2-demo.com'
  },
  // Add more projects as needed
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          className="text-4xl font-bold text-center mb-16 text-secondary"
        >
          My Portfolio
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="h-full animate-scaleIn hover:shadow-xl transition-shadow">
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  className="h-48 object-cover"
                />
                <CardContent>
                  <Typography variant="h5" className="text-secondary mb-2">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" className="text-secondary-light">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions className="justify-end">
                  <Button 
                    startIcon={<GitHubIcon />}
                    href={project.github}
                    target="_blank"
                  >
                    Code
                  </Button>
                  <Button
                    startIcon={<LaunchIcon />}
                    href={project.demo}
                    target="_blank"
                    className="text-primary"
                  >
                    Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
} 