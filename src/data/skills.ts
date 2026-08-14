import type { EngineeringHighlight, SkillGroup } from '../types';

export const engineeringHighlights: EngineeringHighlight[] = [
  {
    title: 'Enterprise Application Development',
    description: 'Production-grade web applications for internal operations and field workflows.',
    icon: 'enterprise',
  },
  {
    title: 'Workflow Automation',
    description: 'Queue processing, PDF/print automation, billing, and notification workflows.',
    icon: 'automation',
  },
  {
    title: 'Manufacturing & Industrial Systems',
    description: 'Real-time monitoring, PLC/sensor integration, and operational dashboards.',
    icon: 'manufacturing',
  },
  {
    title: 'Real-Time Dashboards',
    description: 'WebSocket and Electron-based dashboards for live manufacturing data.',
    icon: 'dashboard',
  },
  {
    title: 'Computer Vision',
    description: 'OpenCV, FastAPI, and RTSP pipelines for operational measurement.',
    icon: 'vision',
  },
  {
    title: 'Mobile Applications',
    description: 'React Native / Expo workflows for field and application use cases.',
    icon: 'mobile',
  },
  {
    title: 'Oracle & Database Engineering',
    description: 'Oracle-backed business processes, SQL design, and data integrity.',
    icon: 'database',
  },
  {
    title: 'API Design & Integration',
    description: 'REST, WebSocket, and NestJS/FastAPI service integration.',
    icon: 'api',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'PHP', 'C#'],
  },
  {
    title: 'Frontend',
    items: ['React', 'React Native / Expo', 'MUI', 'Electron', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'NestJS', 'FastAPI', 'Laravel', 'Express', 'PHP'],
  },
  {
    title: 'Data & Storage',
    items: ['Oracle', 'MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Tools & DevOps',
    items: ['Git', 'Vite', 'Webpack', 'CI/CD', 'Linux', 'Apache'],
  },
];
