'use client';

import {
  Container,

  Typography
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineOppositeContent
} from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';


const educationData = [
  {
    year: '2018 - 2022',
    degree: 'Bachelor of Science in Computer Science',
    school: 'University Name',
    description: 'Graduated with honors, specialized in Software Engineering'
  },
  {
    year: '2016 - 2018',
    degree: 'Associate Degree in Programming',
    school: 'College Name',
    description: 'Foundation in programming fundamentals'
  },
  // Add more education items as needed
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          className="text-4xl font-bold text-center mb-16 text-secondary"
        >
          Education
        </Typography>

        <Timeline position="left" className="animate-fadeIn">
          {educationData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent>
                <Typography className="text-primary font-light">
                  {item.year}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="bg-primary">
                  <SchoolIcon />
                </TimelineDot>
                {index !== educationData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                  <Typography className="text-secondary mt-2">
                    {item.degree}
                  </Typography>
                  <Typography variant="subtitle1" className="text-secondary-light">
                    {item.school}
                  </Typography>
                  <Typography variant="body2" className="text-secondary-light mt-2">
                    {item.description}
                  </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </section>
  );
} 