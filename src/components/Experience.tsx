'use client';

import { Container, Typography, useMediaQuery } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';

const experienceData = [
  {
    year: '2022 - Present',
    title: 'Intermediate Developer',
    company: 'ICBC',
    description:
      'Fullstack developer working on various projects, including web applications and internal tools',
  },
  {
    year: '2020 - 2022',
    title: 'Junior Developer',
    company: 'ICBC',
    description:
      'Junior developer working on front-end development and UI/UX design for web applications',
  },
  {
    year: '2018 - 2020',
    title: 'Application Developer',
    company: 'ICBC',
    description:
      'Application developer responsible for developing and maintaining internal applications and tools',
  },
];

export default function Experience() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <section id="experience" className="py-20 bg-white">
      <Container
        maxWidth="lg"
        className={isMobile ? '!pl-2 !pr-4' : undefined}
      >
        <Typography
          variant="h2"
          className="text-4xl font-bold text-center mb-16 text-secondary"
        >
          Work Experience
        </Typography>

        <Timeline
          position={isMobile ? 'right' : 'alternate'}
          className="animate-fadeIn"
          sx={
            isMobile
              ? {
                  p: 0,
                  m: 0,
                  [`& .MuiTimelineItem-root:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                  [`& .MuiTimelineContent-root`]: {
                    pr: 0,
                  },
                }
              : undefined
          }
        >
          {experienceData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot className="bg-primary">
                  <WorkIcon />
                </TimelineDot>
                {index !== experienceData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <div className="p-6 rounded-lg shadow-md bg-gray-50 animate-slideIn">
                  <Typography variant="h6" className="text-primary font-bold">
                    {item.year}
                  </Typography>
                  <Typography variant="h5" className="text-secondary mt-2">
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1" className="text-secondary-light">
                    {item.company}
                  </Typography>
                  <Typography variant="body2" className="text-secondary-light mt-2">
                    {item.description}
                  </Typography>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </section>
  );
}
