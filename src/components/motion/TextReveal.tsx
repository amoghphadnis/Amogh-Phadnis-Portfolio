import { useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { Box } from '@mui/material';

interface TextRevealProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  delay?: number;
  className?: string;
  sx?: Record<string, unknown>;
}

export function TextReveal({ text, as: Tag = 'span', delay = 0, sx = {} }: TextRevealProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const chars = useMemo(() => text.split(''), [text]);

  return (
    <Box
      component={Tag}
      ref={ref}
      sx={{
        display: 'inline-flex',
        flexWrap: 'wrap',
        ...sx,
      }}
      aria-label={text}
    >
      {chars.map((char, index) => (
        <Box
          key={index}
          component="span"
          sx={{
            display: 'inline-block',
            opacity: prefersReduced || inView ? 1 : 0,
            transform: prefersReduced || inView ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 400ms cubic-bezier(0.4, 0, 0.2, 1) ${delay + index * 25}ms, transform 400ms cubic-bezier(0.4, 0, 0.2, 1) ${delay + index * 25}ms`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </Box>
      ))}
    </Box>
  );
}
