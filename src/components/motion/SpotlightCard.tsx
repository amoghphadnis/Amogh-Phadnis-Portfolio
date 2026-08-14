import { useRef, useState, type ReactNode } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { tokens } from '../../theme/tokens';

interface SpotlightCardProps {
  children: ReactNode;
  sx?: Record<string, unknown>;
}

export function SpotlightCard({ children, sx = {} }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const theme = useTheme();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 50, y: 50 });

  return (
    <Box
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: tokens.radius.card,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at ${position.x}% ${position.y}%, ${
            theme.palette.mode === 'dark'
              ? 'rgba(89, 235, 203, 0.18)'
              : 'rgba(1, 114, 175, 0.18)'
          }, transparent 45%)`,
          opacity: 0,
          transition: `opacity ${tokens.motion.normal} ease`,
          pointerEvents: 'none',
        },
        '&:hover::before': {
          opacity: 1,
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
