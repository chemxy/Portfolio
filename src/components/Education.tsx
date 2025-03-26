'use client';

import {Container, Typography} from '@mui/material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';


const educationData = [
    {
        year: '2016 - 2022',
        degree: 'Bachelor of Software Engineering ',
        school: 'University of Victoria',
        location: 'Victoria, BC, Canada',
        description: ''
    },
];

export default function Education() {
    return (
        <section id="education" className="py-20 bg-white ">
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
                                <Typography className="text-secondary mt-2">
                                    {item.degree}
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot className="bg-primary">
                                    <SchoolIcon/>
                                </TimelineDot>
                                {index !== educationData.length - 1 && <TimelineConnector/>}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="subtitle1" className="text-secondary-light">
                                    {item.school}
                                </Typography>
                                <Typography variant="body2" className="text-secondary-light mt-2">
                                    {item.location}
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