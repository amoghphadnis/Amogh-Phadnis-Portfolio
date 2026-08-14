import type { ReactNode } from 'react';
import { FadeIn } from './FadeIn';

interface StaggerListProps {
  children: ReactNode[];
  baseDelay?: number;
  stagger?: number;
}

export function StaggerList({ children, baseDelay = 0, stagger = 100 }: StaggerListProps) {
  return (
    <>
      {children.map((child, index) => (
        <FadeIn key={index} delay={baseDelay + index * stagger} direction="up">
          {child}
        </FadeIn>
      ))}
    </>
  );
}
