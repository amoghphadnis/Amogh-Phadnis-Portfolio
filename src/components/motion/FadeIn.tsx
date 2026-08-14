import type { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { Box } from '@mui/material';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const directionOffset = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

export function FadeIn({ children, delay = 0, direction = 'up' }: FadeInProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const offset = directionOffset[direction];

  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <Box
      ref={ref}
      sx={{
        opacity: prefersReduced ? 1 : inView ? 1 : 0,
        transform: prefersReduced ? 'none' : inView ? 'translate(0, 0)' : `translate(${offset.x}px, ${offset.y}px)`,
        transition: `opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform 500ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
      }}
    >
      {children}
    </Box>
  );
}
