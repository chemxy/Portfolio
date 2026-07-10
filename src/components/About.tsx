import BusinessIcon from '@mui/icons-material/Business';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import SpeedIcon from '@mui/icons-material/Speed';
import { Container, Grid, Paper, Typography } from '@mui/material';

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
                src="/images/pro1.png"
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
                Full-stack developer, software developer with good self-initiatives, excellent organization and researching skill, and great attention
                to detail. Fast learner. Problem solver. 5+ years of work experience and project experience in web development. Led and completed
                many projects with industry standard quality. Contract instructor in Pacific Design Academy teaching web design & development in
                React and WordPress.
              </Typography>

              {/* Features */}
              <Grid container spacing={3}>
                {[
                  {
                    icon: <CodeIcon className="text-primary text-4xl" />,
                    title: 'Clean Code',
                    description: 'Writing clean, maintainable code'
                  },
                  {
                    icon: <SpeedIcon className="text-primary text-4xl" />,
                    title: 'Performance',
                    description: 'Fast load times and lag free interaction'
                  },
                  {
                    icon: <DevicesIcon className="text-primary text-4xl" />,
                    title: 'Responsive',
                    description: 'Providing seamless experiences across all devices and screen sizes'
                  },
                  {
                    icon: <BusinessIcon className="text-primary text-4xl" />,
                    title: 'Enterprise Standards',
                    description: 'Enterprise-level solutions with best practices and security'
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