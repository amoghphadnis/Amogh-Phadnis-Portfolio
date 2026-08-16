import { Container, Typography, Box, Button, Avatar, Grid, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/profile';
import { engineeringHighlights, skillGroups } from '../data/skills';
import { projects } from '../data/projects';
import { FadeIn } from '../components/motion/FadeIn';
import { TextReveal } from '../components/motion/TextReveal';
import { ProjectCard } from '../components/projects/ProjectCard';
import { SEO } from '../components/common/SEO';
import { tokens } from '../theme/tokens';

const featuredProjects = projects.filter((p) => p.featured);

export function Home() {
  const theme = useTheme();

  return (
    <>
      <SEO
        title="Amogh Anand Phadnis | Software Developer — Enterprise & Manufacturing Systems"
        description="Portfolio of Amogh Phadnis, a Software Developer building enterprise applications, manufacturing systems, and workflow automation."
      />

      <Container maxWidth="lg" sx={{ pt: { xs: 10, sm: 14 }, pb: 6 }}>
        <FadeIn>
          <Box textAlign="center" mb={6}>
            <Avatar
              alt={profile.name}
              src={`${import.meta.env.BASE_URL}images/Amogh.jpg`}
              sx={{
                width: 180,
                height: 180,
                mx: 'auto',
                mb: 3,
                boxShadow: tokens.shadows.card,
              }}
            />
            <TextReveal
              as="h1"
              text={profile.name}
              sx={{
                width: '100%',
                justifyContent: 'center',
                fontSize: { xs: '2rem', sm: '2.5rem' },
                fontWeight: 700,
                mb: 1,
              }}
            />
            <TextReveal
              as="h2"
              text={profile.title}
              delay={profile.name.length * 25}
              sx={{
                width: '100%',
                justifyContent: 'center',
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                fontWeight: 600,
                mb: 1,
                color: 'primary.main',
              }}
            />
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: 720,
                mx: 'auto',
                mb: 2,
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.5,
              }}
            >
              {profile.headline}
            </Typography>
            <Typography
              variant="subtitle1"
              color="primary"
              sx={{
                maxWidth: 640,
                mx: 'auto',
                mb: 3,
                fontWeight: 500,
                letterSpacing: 0.5,
              }}
            >
              {profile.tagline}
            </Typography>

            <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap" mb={4}>
              <Button
                variant="contained"
                component={Link}
                to="/projects"
                sx={{
                  background: tokens.colors.accent.gradient,
                  color: tokens.colors.accent.black,
                  borderRadius: tokens.radius.button,
                  px: 3,
                  py: 1.5,
                  fontWeight: 700,
                  boxShadow: tokens.shadows.card,
                  '&:hover': { transform: 'scale(1.05)', boxShadow: tokens.shadows.cardHover },
                  transition: `transform ${tokens.motion.normal} ease`,
                }}
              >
                View Projects
              </Button>
              <Button
                variant="outlined"
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<FaGithub />}
                sx={{ borderRadius: tokens.radius.button, fontWeight: 600 }}
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                href={profile.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<FaLinkedin />}
                sx={{ borderRadius: tokens.radius.button, fontWeight: 600 }}
              >
                LinkedIn
              </Button>
              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                sx={{ borderRadius: tokens.radius.button, fontWeight: 600 }}
              >
                Get in Touch
              </Button>
            </Box>
          </Box>
        </FadeIn>

        <FadeIn delay={150}>
          <Box textAlign="center" mb={8}>
            <Typography variant="h3" sx={{ fontSize: '1.75rem', fontWeight: 700, mb: 4 }}>
              Engineering Highlights
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {engineeringHighlights.map((h) => (
                <Grid item xs={12} sm={6} md={3} key={h.title}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: tokens.radius.card,
                      background: tokens.colors.accent.gradient,
                      color: tokens.colors.accent.black,
                      height: '100%',
                      transition: `transform ${tokens.motion.normal} ease`,
                      '&:hover': { transform: 'scale(1.03)' },
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      {h.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'inherit', opacity: 0.9 }}>
                      {h.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </FadeIn>

        <FadeIn delay={150}>
          <Box mb={8}>
            <Typography variant="h3" sx={{ fontSize: '1.75rem', fontWeight: 700, mb: 3, textAlign: 'center' }}>
              Selected Projects
            </Typography>
            <Grid container spacing={3}>
              {featuredProjects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={project.id}>
                  <FadeIn delay={index * 100}>
                    <ProjectCard project={project} />
                  </FadeIn>
                </Grid>
              ))}
            </Grid>
            <Box textAlign="center" mt={3}>
              <Button component={Link} to="/projects" variant="outlined" sx={{ borderRadius: tokens.radius.button, fontWeight: 600 }}>
                View all projects
              </Button>
            </Box>
          </Box>
        </FadeIn>

        <FadeIn delay={150}>
          <Box textAlign="center" mb={8}>
            <Typography variant="h3" sx={{ fontSize: '1.75rem', fontWeight: 700, mb: 3 }}>
              Technology
            </Typography>
            <Box display="flex" flexWrap="wrap" justifyContent="center" gap={1} mb={4}>
              {skillGroups.flatMap((g) => g.items).map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{
                    borderRadius: tokens.radius.chip,
                    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(89, 235, 203, 0.12)' : 'rgba(1, 114, 175, 0.12)',
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                  }}
                />
              ))}
            </Box>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              sx={{
                background: tokens.colors.accent.gradient,
                color: tokens.colors.accent.black,
                borderRadius: tokens.radius.button,
                px: 3,
                py: 1.5,
                fontWeight: 700,
                '&:hover': { transform: 'scale(1.05)' },
                transition: `transform ${tokens.motion.normal} ease`,
              }}
            >
              Let's work together
            </Button>
          </Box>
        </FadeIn>
      </Container>
    </>
  );
}
