import { Container, Typography, Box, Button, Grid, Chip, Card, CardContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { engineeringHighlights, skillGroups } from '../data/skills';
import { TextReveal } from '../components/motion/TextReveal';
import { FadeIn } from '../components/motion/FadeIn';
import { SEO } from '../components/common/SEO';
import { tokens } from '../theme/tokens';

const featuredProjects = projects.filter((p) => p.featured);

export function Showcase() {
  const theme = useTheme();

  return (
    <>
      <SEO
        title="Amogh Anand Phadnis | Showcase"
        description="Visual-first showcase of Amogh Phadnis's software engineering projects and capabilities."
      />

      <Container maxWidth="xl" sx={{ pt: { xs: 10, sm: 14 }, pb: 6 }}>
        <FadeIn>
          <Box
            sx={{
              minHeight: { sm: '60vh' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              mb: 8,
              p: { xs: 2, sm: 6 },
              borderRadius: tokens.radius.card,
              background:
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(1, 114, 175, 0.2), rgba(89, 235, 203, 0.1))'
                  : 'linear-gradient(135deg, rgba(1, 114, 175, 0.1), rgba(89, 235, 203, 0.05))',
            }}
          >
            <TextReveal
              as="h1"
              text={profile.name}
              sx={{
                width: '100%',
                justifyContent: 'center',
                fontSize: { xs: '2.5rem', sm: '4rem' },
                fontWeight: 900,
                mb: 2,
              }}
            />
            <TextReveal
              as="h2"
              text={profile.title}
              delay={profile.name.length * 25}
              sx={{
                width: '100%',
                justifyContent: 'center',
                fontSize: { xs: '1.5rem', sm: '2rem' },
                fontWeight: 700,
                color: 'primary.main',
                mb: 3,
              }}
            />
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720, mb: 4 }}>
              {profile.headline}
            </Typography>
            <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">
              <Button
                variant="contained"
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<FaGithub />}
                sx={{
                  background: tokens.colors.accent.gradient,
                  color: tokens.colors.accent.black,
                  borderRadius: tokens.radius.button,
                  fontWeight: 700,
                }}
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                href={profile.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<FaLinkedin />}
                sx={{ borderRadius: tokens.radius.button, fontWeight: 700 }}
              >
                LinkedIn
              </Button>
            </Box>
          </Box>
        </FadeIn>

        <FadeIn delay={150}>
          <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', sm: '2.25rem' }, fontWeight: 800, mb: 4 }}>
            Engineering Highlights
          </Typography>
          <Grid container spacing={2} mb={8}>
            {engineeringHighlights.map((h, i) => (
              <Grid item xs={12} sm={6} md={3} key={h.title}>
                <Card
                  sx={{
                    height: '100%',
                    background: i % 2 === 0 ? tokens.colors.accent.gradient : tokens.colors.accent.cardGradient,
                    color: tokens.colors.accent.black,
                    borderRadius: tokens.radius.card,
                    boxShadow: tokens.shadows.card,
                    transition: `transform ${tokens.motion.normal} ease`,
                    '&:hover': { transform: 'scale(1.03)' },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {h.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {h.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </FadeIn>

        <FadeIn delay={200}>
          <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', sm: '2.25rem' }, fontWeight: 800, mb: 4 }}>
            Selected Work
          </Typography>
          <Grid container spacing={3} mb={8}>
            {featuredProjects.map((project, index) => (
              <Grid item xs={12} md={6} key={project.id}>
                <FadeIn delay={index * 100}>
                  <Card
                    component={Link}
                    to={`/projects/${project.id}`}
                    sx={{
                      height: '100%',
                      textDecoration: 'none',
                      backgroundColor: theme.palette.background.paper,
                      color: theme.palette.text.primary,
                      borderRadius: tokens.radius.card,
                      boxShadow: tokens.shadows.card,
                      transition: `transform ${tokens.motion.normal} ease`,
                      '&:hover': { transform: 'translateY(-4px)', boxShadow: tokens.shadows.cardHover },
                    }}
                  >
                    <CardContent>
                      <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>
                        {project.category}
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" paragraph>
                        {project.description}
                      </Typography>
                      <Box display="flex" flexWrap="wrap" gap={1}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              borderRadius: tokens.radius.chip,
                              backgroundColor: theme.palette.mode === 'dark' ? 'rgba(89, 235, 203, 0.12)' : 'rgba(1, 114, 175, 0.12)',
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </FadeIn>
              </Grid>
            ))}
          </Grid>
        </FadeIn>

        <FadeIn delay={250}>
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 700, mb: 2 }}>
              Technology
            </Typography>
            <Box display="flex" flexWrap="wrap" justifyContent="center" gap={1}>
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
          </Box>
        </FadeIn>
      </Container>
    </>
  );
}
