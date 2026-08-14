import { Grid, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import { FadeIn } from '../motion/FadeIn';

const categoryOrder = ['enterprise', 'manufacturing', 'mobile', 'personal'] as const;

const categoryTitles: Record<string, string> = {
  enterprise: 'Enterprise Solutions',
  manufacturing: 'Manufacturing Systems',
  mobile: 'Mobile Applications',
  personal: 'Personal Projects',
};

export function ProjectGrid() {
  const theme = useTheme();

  const grouped = categoryOrder.map((category) => ({
    category,
    title: categoryTitles[category],
    items: projects.filter((p) => p.category === category),
  }));

  return (
    <Box>
      {grouped.map((group) => (
        <Box key={group.category} mb={6}>
          <FadeIn>
            <Typography
              variant="h3"
              sx={{
                fontSize: '1.5rem',
                fontWeight: 700,
                mb: 3,
                pb: 1,
                borderBottom: `1px solid ${theme.palette.divider}`,
              }}
            >
              {group.title}
            </Typography>
          </FadeIn>

          <Grid container spacing={3}>
            {group.items.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <FadeIn delay={index * 100}>
                  <ProjectCard project={project} />
                </FadeIn>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}
