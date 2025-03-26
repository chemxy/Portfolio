'use client';

import { Container, Typography, Grid, LinearProgress, Box } from '@mui/material';

const skillsData = [
  { name: 'HTML/CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'TypeScript', level: 70 },
  { name: 'Python', level: 65 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          className="text-4xl font-bold text-center mb-16 text-secondary"
        >
          My Skills
        </Typography>

        <Grid container spacing={4}>
          {skillsData.map((skill, index) => (
            <Grid item xs={12} sm={6} key={index} className="animate-fadeIn">
              <Box className="mb-4">
                <Typography variant="h6" className="text-secondary mb-2">
                  {skill.name}
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={skill.level} 
                  className="h-2 rounded-full bg-gray-200"
                  sx={{
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: '#b636ff'
                    }
                  }}
                />
                <Typography variant="body2" className="text-right mt-1 text-secondary-light">
                  {skill.level}%
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
} 