import type { Project } from '../types';

export const projects: Project[] = [
  // Enterprise Solutions
  {
    id: 'gbl-farmer-platform',
    title: 'GBL Farmer Platform',
    category: 'enterprise',
    description:
      'Enterprise agriculture platform supporting farmer registration, authentication, operational workflows, and Oracle-backed business processes.',
    technologies: ['React', 'TypeScript', 'NestJS', 'Oracle', 'MUI'],
    featured: true,
    confidential: true,
  },
  {
    id: 'sugar-distribution',
    title: 'Sugar Distribution Platform',
    category: 'enterprise',
    description:
      'Modernized billing workflows with Oracle integration, PDF generation, local printing, queue-based processing, and analytics instrumentation.',
    technologies: ['Laravel', 'PHP', 'Oracle', 'PHPWord', 'Queue'],
    featured: true,
    confidential: true,
  },
  {
    id: 'weighbridge',
    title: 'Weighbridge',
    category: 'enterprise',
    description:
      'Weighing-equipment integration and workflow for operational measurement and record keeping.',
    technologies: ['React', 'Node.js', 'TCP', 'Industrial Hardware'],
    confidential: true,
  },
  {
    id: 'print-automation',
    title: 'Print Automation',
    category: 'enterprise',
    description:
      'Document generation, local printing, and queue-based print delivery for enterprise workflows.',
    technologies: ['Laravel', 'PHPWord', 'LibreOffice', 'Queue', 'Windows Print Agent'],
    confidential: true,
  },

  // Manufacturing Systems
  {
    id: 'plant-monitoring',
    title: 'Plant Monitoring',
    category: 'manufacturing',
    description:
      'Real-time manufacturing dashboards using React, Electron, WebSocket, and AG Charts.',
    technologies: ['React', 'Electron', 'WebSocket', 'AG Charts'],
    featured: true,
    confidential: true,
  },
  {
    id: 'crushing-dashboard',
    title: 'Crushing Dashboard',
    category: 'manufacturing',
    description:
      'Operational dashboard for crushing processes with real-time metrics and alerts.',
    technologies: ['React', 'Node.js', 'WebSocket', 'MUI'],
    confidential: true,
  },
  {
    id: 'cane-trash-monitoring',
    title: 'Cane Trash Monitoring',
    category: 'manufacturing',
    description:
      'Computer vision pipeline using FastAPI, OpenCV, and RTSP streams for operational measurement.',
    technologies: ['Python', 'FastAPI', 'OpenCV', 'RTSP', 'React'],
    featured: true,
    confidential: true,
  },

  // Mobile
  {
    id: 'ngo-app',
    title: 'NGO App',
    category: 'mobile',
    description:
      'Freelance config-driven mobile app workflow for scholarship/application forms.',
    technologies: ['Expo Router', 'React Native', 'TypeScript', 'React Hook Form', 'Zod', 'Zustand'],
    freelance: true,
    githubUrl: 'https://github.com/amoghphadnis/NGO-APP',
  },

  // Personal
  {
    id: 'quick-swift',
    title: 'QuickSwift',
    category: 'personal',
    description: 'Same-day delivery app prototype.',
    technologies: ['JavaScript', 'React', 'Node.js'],
    githubUrl: 'https://github.com/amoghphadnis/QuickSwift',
  },
  {
    id: 'watch-world',
    title: 'WatchWorld',
    category: 'personal',
    description: 'Online e-commerce platform for luxury watches with an admin portal.',
    technologies: ['ASP.NET', 'C#', 'Microsoft SQL Server', 'Bootstrap'],
    githubUrl: 'https://github.com/amoghphadnis/WatchWorld',
  },
  {
    id: 'employee-management-system',
    title: 'Employee Management System',
    category: 'personal',
    description: 'Full-stack employee data management with secure CRUD and admin portal.',
    technologies: ['React', 'Apollo Client', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/amoghphadnis/Employee-Management-System',
  },
  {
    id: 'e-commerce-shopping-cart',
    title: 'E-commerce Shopping Cart',
    category: 'personal',
    description: 'Gaming accessories e-commerce app with cart and real-time pricing.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    githubUrl: 'https://github.com/amoghphadnis/E-commerce-Shopping-Cart-for-Gaming-Accessories',
  },
];
