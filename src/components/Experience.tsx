
import { Container, Typography,  } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";

const experienceData = [
  {
    year: '2022 - Present',
    title: 'Senior Full Stack Developer',
    company: 'Tech Company Name',
    description: 'Leading development of enterprise web applications using React and Node.js'
  },
  {
    year: '2020 - 2022',
    title: 'Full Stack Developer',
    company: 'Another Company',
    description: 'Developed and maintained multiple client projects'
  },
  {
    year: '2018 - 2020',
    title: 'Junior Developer',
    company: 'Startup Name',
    description: 'Started career as a front-end developer working with React'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          className="text-4xl font-bold text-center mb-16 text-secondary"
        >
          Work Experience
        </Typography>

        <Timeline position="alternate" className="animate-fadeIn">
          {experienceData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot className="bg-primary">
                  <WorkIcon />
                </TimelineDot>
                {index !== experienceData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <div className={`p-6 rounded-lg shadow-md bg-gray-50 
                  ${index % 2 === 0 ? 'animate-slideIn' : 'animate-slideIn'}`}
                >
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