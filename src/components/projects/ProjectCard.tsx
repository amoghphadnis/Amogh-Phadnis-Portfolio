import { Card, CardMedia, CardContent, Typography, Box, Button, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '../../types';
import { SpotlightCard } from '../motion/SpotlightCard';
import { tokens } from '../../theme/tokens';

interface ProjectCardProps {
  project: Project;
}

const categoryLabels: Record<string, string> = {
  enterprise: 'Enterprise',
  manufacturing: 'Manufacturing',
  mobile: 'Mobile',
  personal: 'Personal',
};

export function ProjectCard({ project }: ProjectCardProps) {
  const theme = useTheme();

  return (
    <SpotlightCard sx={{ height: '100%' }}>
      <Card
        component={project.githubUrl ? 'a' : Link}
        href={project.githubUrl}
        to={project.githubUrl ? undefined : `/projects/${project.id}`}
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          textDecoration: 'none',
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderRadius: tokens.radius.card,
          boxShadow: tokens.shadows.card,
          overflow: 'hidden',
          cursor: 'pointer',
          transition: `transform ${tokens.motion.normal} ease, box-shadow ${tokens.motion.normal} ease`,
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: tokens.shadows.cardHover,
          },
        }}
      >
        {project.image && (
          <CardMedia
            component="img"
            image={project.image ? import.meta.env.BASE_URL + encodeURI(project.image) : undefined}
            alt={project.title}
            sx={{
              height: 160,
              width: '100%',
              objectFit: 'cover',
              backgroundColor: theme.palette.background.default,
            }}
          />
        )}
        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, p: 3 }}>
          <Typography variant="overline" color="primary" sx={{ fontWeight: 600 }}>
            {categoryLabels[project.category]}
            {project.freelance ? ' • Freelance' : ''}
            {project.confidential ? ' • Confidential' : ''}
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {project.title}
          </Typography>

          {project.impact && (
            <Typography variant="body2" color="primary" sx={{ fontWeight: 600 }}>
              {project.impact}
            </Typography>
          )}

          <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
            {project.description}
          </Typography>

          <Box display="flex" flexWrap="wrap" gap={1}>
            {project.technologies.slice(0, 5).map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(89, 235, 203, 0.12)' : 'rgba(1, 114, 175, 0.12)',
                  color: theme.palette.text.primary,
                  borderRadius: tokens.radius.chip,
                }}
              />
            ))}
          </Box>

          {!project.githubUrl && (
            <Button
              variant="text"
              component={Link}
              to={`/projects/${project.id}`}
              sx={{
                alignSelf: 'flex-start',
                color: theme.palette.primary.main,
                fontWeight: 600,
                px: 0,
                '&:hover': { backgroundColor: 'transparent' },
              }}
            >
              View case study
            </Button>
          )}

          {project.githubUrl && (
            <Button
              variant="text"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<FaGithub />}
              sx={{
                alignSelf: 'flex-start',
                color: theme.palette.primary.main,
                fontWeight: 600,
                px: 0,
                '&:hover': { backgroundColor: 'transparent' },
              }}
            >
              View on GitHub
            </Button>
          )}
        </CardContent>
      </Card>
    </SpotlightCard>
  );
}
