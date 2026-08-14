import { Container, Typography, Box, Grid, Stepper, Step, StepLabel, StepContent, Paper, List, ListItem, ListItemText } from '@mui/material';
import { profile } from '../data/profile';
import { experience } from '../data/experience';
import { skillGroups } from '../data/skills';
import { FadeIn } from '../components/motion/FadeIn';
import { SEO } from '../components/common/SEO';
import { tokens } from '../theme/tokens';

const timeline = [
  { years: '2022–2023', label: 'Full-Stack Web Development' },
  { years: '2023–2025', label: 'React, CI/CD, Scalable Frontend Systems' },
  { years: '2025–Present', label: 'Enterprise Software, Manufacturing Systems, Workflow Automation, Computer Vision' },
];

export function About() {
  return (
    <>
      <SEO
        title="About — Amogh Anand Phadnis"
        description="Background, experience, and engineering focus of Amogh Phadnis, Software Developer at Godavari Biorefineries Ltd."
      />

      <Container maxWidth="lg" sx={{ pt: { xs: 10, sm: 14 }, pb: 6 }}>
        <FadeIn>
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', sm: '2.5rem' }, fontWeight: 700, mb: 2 }}>
            About
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {profile.summary}
          </Typography>
        </FadeIn>

        <FadeIn delay={100}>
          <Box mb={6}>
            <Typography variant="h2" sx={{ fontSize: '1.75rem', fontWeight: 700, mb: 3 }}>
              Experience
            </Typography>
            <Grid container spacing={3}>
              {experience.map((job) => (
                <Grid item xs={12} key={job.id}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      borderRadius: tokens.radius.card,
                      transition: `transform ${tokens.motion.normal} ease`,
                      '&:hover': { transform: 'translateY(-4px)' },
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {job.role} — {job.company}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {job.startDate} – {job.endDate} • {job.location}
                    </Typography>
                    <List dense disablePadding>
                      {job.bullets.map((bullet, i) => (
                        <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                          <ListItemText primary={bullet} primaryTypographyProps={{ variant: 'body2' }} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </FadeIn>

        <FadeIn delay={150}>
          <Box mb={6}>
            <Typography variant="h2" sx={{ fontSize: '1.75rem', fontWeight: 700, mb: 3 }}>
              Skills
            </Typography>
            <Grid container spacing={3}>
              {skillGroups.map((group) => (
                <Grid item xs={12} sm={6} md={4} key={group.title}>
                  <Paper elevation={2} sx={{ p: 3, borderRadius: tokens.radius.card, height: '100%' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      {group.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {group.items.join(' • ')}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </FadeIn>

        <FadeIn delay={200}>
          <Box mb={6}>
            <Typography variant="h2" sx={{ fontSize: '1.75rem', fontWeight: 700, mb: 3 }}>
              Timeline
            </Typography>
            <Stepper orientation="vertical" nonLinear>
              {timeline.map((item) => (
                <Step key={item.years} active>
                  <StepLabel>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {item.years}
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <Typography variant="body1" color="text.secondary">
                      {item.label}
                    </Typography>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Box>
        </FadeIn>

        <FadeIn delay={250}>
          <Box>
            <Typography variant="h2" sx={{ fontSize: '1.75rem', fontWeight: 700, mb: 2 }}>
              Future Goals
            </Typography>
            <Typography variant="body1" color="text.secondary">
              I aim to continue building impactful, reliable software that bridges operational gaps — from manufacturing floors to enterprise workflows — and to lead engineering decisions around architecture, integration, and maintainability.
            </Typography>
          </Box>
        </FadeIn>
      </Container>
    </>
  );
}
