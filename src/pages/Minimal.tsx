import { Container, Typography, Box, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/profile';
import { engineeringHighlights } from '../data/skills';
import { projects } from '../data/projects';
import { experience } from '../data/experience';
import { FadeIn } from '../components/motion/FadeIn';
import { SEO } from '../components/common/SEO';

const featuredProjects = projects.filter((p) => p.featured);

export function Minimal() {
  return (
    <>
      <SEO
        title="Amogh Anand Phadnis | Minimal"
        description="Clean, professional overview of Amogh Phadnis's software engineering experience."
      />

      <Container maxWidth="md" sx={{ pt: { xs: 10, sm: 14 }, pb: 6 }}>
        <FadeIn>
          <Box mb={6}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 700, mb: 1 }}>
              {profile.name}
            </Typography>
            <Typography variant="h2" color="primary" sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' }, fontWeight: 600, mb: 3 }}>
              {profile.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {profile.summary}
            </Typography>
            <Box display="flex" gap={2} flexWrap="wrap" mt={2}>
              <Button
                component={Link}
                to="/projects"
                variant="outlined"
                sx={{ borderRadius: '12px', fontWeight: 600 }}
              >
                View Projects
              </Button>
              <Button
                href={profile.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<FaLinkedin />}
                sx={{ borderRadius: '12px', fontWeight: 600 }}
              >
                LinkedIn
              </Button>
              <Button
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<FaGithub />}
                sx={{ borderRadius: '12px', fontWeight: 600 }}
              >
                GitHub
              </Button>
            </Box>
          </Box>
        </FadeIn>

        <FadeIn delay={100}>
          <Divider sx={{ my: 4 }} />
          <Box mb={6}>
            <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>
              Engineering Highlights
            </Typography>
            {engineeringHighlights.map((h, i) => (
              <Typography key={h.title} variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
                {i + 1}. {h.title} — {h.description}
              </Typography>
            ))}
          </Box>
        </FadeIn>

        <FadeIn delay={150}>
          <Divider sx={{ my: 4 }} />
          <Box mb={6}>
            <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>
              Selected Projects
            </Typography>
            {featuredProjects.map((p) => (
              <Box key={p.id} mb={2}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {p.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </FadeIn>

        <FadeIn delay={200}>
          <Divider sx={{ my: 4 }} />
          <Box mb={6}>
            <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>
              Experience
            </Typography>
            {experience.map((job) => (
              <Box key={job.id} mb={3}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {job.role} — {job.company}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {job.startDate} – {job.endDate} • {job.location}
                </Typography>
                {job.bullets.map((b, i) => (
                  <Typography key={i} variant="body2" color="text.secondary">
                    • {b}
                  </Typography>
                ))}
              </Box>
            ))}
          </Box>
        </FadeIn>

        <FadeIn delay={250}>
          <Divider sx={{ my: 4 }} />
          <Box>
            <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>
              Contact
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {profile.email}
            </Typography>
          </Box>
        </FadeIn>
      </Container>
    </>
  );
}
