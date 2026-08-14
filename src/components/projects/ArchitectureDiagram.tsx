import { Box, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import type { ArchitectureStep } from '../../types';
import { FadeIn } from '../motion/FadeIn';
import { tokens } from '../../theme/tokens';

interface ArchitectureDiagramProps {
  steps: ArchitectureStep[];
}

export function ArchitectureDiagram({ steps }: ArchitectureDiagramProps) {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      my={4}
    >
      {steps.map((step, index) => (
        <FadeIn key={index} delay={index * 150} direction="up">
          <Box display="flex" flexDirection="column" alignItems="center" width="100%">
            <Paper
              elevation={3}
              sx={{
                p: 2,
                textAlign: 'center',
                minWidth: { xs: 240, sm: 320 },
                background:
                  theme.palette.mode === 'dark'
                    ? tokens.colors.dark.surface
                    : tokens.colors.light.surface,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: tokens.radius.card,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {step.label}
              </Typography>
              {step.description && (
                <Typography variant="body2" color="text.secondary" mt={0.5}>
                  {step.description}
                </Typography>
              )}
            </Paper>
            {index < steps.length - 1 && (
              <Box
                sx={{
                  width: '2px',
                  height: '24px',
                  my: 1,
                  background: tokens.colors.accent.gradient,
                }}
              />
            )}
          </Box>
        </FadeIn>
      ))}
    </Box>
  );
}
