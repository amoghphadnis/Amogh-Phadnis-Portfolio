import { Container, Typography } from '@mui/material';
import { ProjectGrid } from '../components/projects/ProjectGrid';
import { FadeIn } from '../components/motion/FadeIn';
import { SEO } from '../components/common/SEO';

export function Projects() {
  return (
    <>
      <SEO
        title="Projects — Amogh Anand Phadnis"
        description="Selected enterprise, manufacturing, mobile, and personal software engineering projects by Amogh Phadnis."
      />

      <Container maxWidth="lg" sx={{ pt: { xs: 10, sm: 14 }, pb: 6 }}>
        <FadeIn>
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', sm: '2.5rem' }, fontWeight: 700, mb: 2 }}>
            Projects
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            A selection of work across enterprise systems, manufacturing monitoring, mobile applications, and personal projects.
          </Typography>
        </FadeIn>

        <FadeIn delay={100}>
          <ProjectGrid />
        </FadeIn>
      </Container>
    </>
  );
}
