import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Box, Button, Chip, Grid, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { projects } from '../data/projects';
import { caseStudies } from '../data/caseStudies';
import { ArchitectureDiagram } from '../components/projects/ArchitectureDiagram';
import { FadeIn } from '../components/motion/FadeIn';
import { SEO } from '../components/common/SEO';
import { tokens } from '../theme/tokens';

export function ProjectCaseStudy() {
  const { projectId } = useParams<{ projectId: string }>();
  const theme = useTheme();
  const project = projects.find((p) => p.id === projectId);
  const study = caseStudies.find((c) => c.projectId === projectId);

  const currentIndex = project ? projects.findIndex((p) => p.id === project.id) : -1;
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  if (!project || !study) {
    return (
      <Container maxWidth="lg" sx={{ pt: { xs: 10, sm: 14 }, pb: 6 }}>
        <Typography variant="h1" sx={{ fontSize: '2rem', fontWeight: 700, mb: 2 }}>
          Case study not found
        </Typography>
        <Button component={Link} to="/projects" startIcon={<ArrowBack />}>
          Back to Projects
        </Button>
      </Container>
    );
  }

  return (
    <>
      <SEO
        title={`${project.title} — Amogh Anand Phadnis`}
        description={project.description}
      />

      <Container maxWidth="lg" sx={{ pt: { xs: 10, sm: 14 }, pb: 6 }}>
        <FadeIn>
          <Button
            component={Link}
            to="/projects"
            startIcon={<ArrowBack />}
            sx={{ mb: 2, fontWeight: 600 }}
          >
            Back to Projects
          </Button>
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', sm: '2.5rem' }, fontWeight: 700, mb: 1 }}>
            {project.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {study.overview}
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1} mb={4}>
            {project.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                sx={{
                  borderRadius: tokens.radius.chip,
                  fontWeight: 500,
                }}
              />
            ))}
          </Box>
        </FadeIn>

        <FadeIn delay={100}>
          <Paper elevation={2} sx={{ p: { xs: 2, sm: 4 }, borderRadius: tokens.radius.card, mb: 4 }}>
            <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 700, mb: 2 }}>
              Problem
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {study.problem}
            </Typography>
          </Paper>
        </FadeIn>

        <FadeIn delay={150}>
          <Box mb={4}>
            <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 700, mb: 2, textAlign: 'center' }}>
              Architecture
            </Typography>
            <ArchitectureDiagram steps={study.architecture} />
          </Box>
        </FadeIn>

        <FadeIn delay={200}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 3, borderRadius: tokens.radius.card, height: '100%' }}>
                <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 700, mb: 2 }}>
                  Responsibilities
                </Typography>
                <List dense>
                  {study.responsibilities.map((r, i) => (
                    <ListItem key={i} disableGutters>
                      <ListItemText primary={r} primaryTypographyProps={{ variant: 'body2' }} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 3, borderRadius: tokens.radius.card, height: '100%' }}>
                <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 700, mb: 2 }}>
                  Outcomes
                </Typography>
                <List dense>
                  {study.outcomes.map((o, i) => (
                    <ListItem key={i} disableGutters>
                      <ListItemText primary={o} primaryTypographyProps={{ variant: 'body2' }} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </FadeIn>

        {study.challenges && (
          <FadeIn delay={250}>
            <Paper elevation={2} sx={{ p: { xs: 2, sm: 4 }, borderRadius: tokens.radius.card, mt: 4, mb: 4 }}>
              <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 700, mb: 2 }}>
                Challenges
              </Typography>
              <List dense>
                {study.challenges.map((c, i) => (
                  <ListItem key={i} disableGutters>
                    <ListItemText primary={c} primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </FadeIn>
        )}

        {study.metrics && (
          <FadeIn delay={300}>
            <Box mb={4}>
              <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 700, mb: 2 }}>
                Metrics
              </Typography>
              <Grid container spacing={2}>
                {study.metrics.map((m) => (
                  <Grid item xs={6} sm={4} key={m.label}>
                    <Paper
                      elevation={2}
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        borderRadius: tokens.radius.card,
                        background: theme.palette.mode === 'dark' ? tokens.colors.dark.surface : tokens.colors.light.surface,
                      }}
                    >
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {m.label}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                        {m.value}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </FadeIn>
        )}

        <FadeIn delay={350}>
          <Divider sx={{ my: 4 }} />
          <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
            {prevProject ? (
              <Button
                component={Link}
                to={`/projects/${prevProject.id}`}
                startIcon={<ArrowBack />}
                sx={{ fontWeight: 600 }}
              >
                {prevProject.title}
              </Button>
            ) : (
              <Box />
            )}
            {nextProject ? (
              <Button
                component={Link}
                to={`/projects/${nextProject.id}`}
                endIcon={<ArrowForward />}
                sx={{ fontWeight: 600 }}
              >
                {nextProject.title}
              </Button>
            ) : (
              <Box />
            )}
          </Box>
        </FadeIn>
      </Container>
    </>
  );
}
