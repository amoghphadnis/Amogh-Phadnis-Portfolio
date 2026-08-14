export type ProjectCategory = 'enterprise' | 'manufacturing' | 'mobile' | 'personal';

export type Template = 'engineering' | 'showcase' | 'minimal';

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  headline: string;
  location: string;
  email: string;
  linkedInUrl: string;
  githubUrl: string;
  instagramUrl?: string;
  resumeUrl: string;
  summary: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface EngineeringHighlight {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  featured?: boolean;
  freelance?: boolean;
  confidential?: boolean;
  githubUrl?: string;
  image?: string;
}

export interface ArchitectureStep {
  label: string;
  description?: string;
}

export interface CaseStudy {
  projectId: string;
  overview: string;
  problem: string;
  challenges?: string[];
  architecture: ArchitectureStep[];
  technologies: string[];
  responsibilities: string[];
  outcomes: string[];
  metrics?: { label: string; value: string }[];
}
