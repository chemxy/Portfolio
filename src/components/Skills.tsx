import { Container, Typography, Grid } from '@mui/material';
import skillsData from '@/data/skills.json';

type SkillCategory = {
  category: string;
  skills: string[];
};

const categories = skillsData as SkillCategory[];

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

        {/* xs: 1 col · sm: 2 cols · lg: 3 cols */}
        <Grid container spacing={4}>
          {categories.map((group) => (
            <Grid item xs={12} sm={6} lg={4} key={group.category} className="animate-fadeIn">
              <div className="h-full rounded-xl border border-gray-200 bg-white p-6">
                <Typography
                  variant="h5"
                  className="text-primary font-bold mb-4"
                >
                  {group.category}
                </Typography>
                <ul className="list-disc list-outside space-y-1 pl-5">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-[16px]">
                        {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
