import type { Project } from '../types';

export const projects: Project[] = [
  // Enterprise Solutions
  {
    id: 'gbl-farmer-platform',
    title: 'GBL Farmer Platform',
    category: 'enterprise',
    description:
      'Enterprise agriculture platform supporting farmer registration, authentication, operational workflows, and Oracle-backed business processes.',
    impact: 'Streamlined farmer onboarding and operational visibility for the enterprise agriculture team.',
    image: 'images/Projects/GBL Farmer Platform.png',
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
    impact: 'Reduced manual billing and print handling across the distribution team.',
    image: 'images/Banners/hero.webp',
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
    impact: 'Cut weighbridge transcription errors and improved record traceability.',
    image: 'images/Banners/hero2.jpg',
    technologies: ['React', 'Node.js', 'TCP', 'Industrial Hardware'],
    confidential: true,
  },
  {
    id: 'print-automation',
    title: 'Print Automation',
    category: 'enterprise',
    description:
      'Document generation, local printing, and queue-based print delivery for enterprise workflows.',
    impact: 'Automated queue-based document printing and delivery for operations.',
    image: 'images/Banners/hero5.webp',
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
    impact: 'Gave operators live plant telemetry without manual data checks.',
    image: 'images/Banners/hero3.png',
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
    impact: 'Delivered real-time crushing metrics and alerts for floor operators.',
    image: 'images/Banners/hero4.webp',
    technologies: ['React', 'Node.js', 'WebSocket', 'MUI'],
    confidential: true,
  },
  {
    id: 'cane-trash-monitoring',
    title: 'Cane Trash Monitoring',
    category: 'manufacturing',
    description:
      'Computer vision pipeline using FastAPI, OpenCV, and RTSP streams for operational measurement.',
    impact: 'Reduced manual cane-inspection time with computer vision.',
    image: 'images/Banners/hero2.jpg',
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
    impact: 'Delivered a reusable, config-driven multi-step mobile form workflow.',
    image: 'images/Banners/hero5.webp',
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
    impact: 'Prototyped a same-day delivery logistics flow.',
    image: 'images/Banners/hero3.png',
    technologies: ['JavaScript', 'React', 'Node.js'],
    githubUrl: 'https://github.com/amoghphadnis/QuickSwift',
  },
  {
    id: 'watch-world',
    title: 'WatchWorld',
    category: 'personal',
    description: 'Online e-commerce platform for luxury watches with an admin portal.',
    impact: 'Built a watch e-commerce experience with an admin dashboard.',
    image: 'images/Projects/WatchWorld_Home.png',
    technologies: ['ASP.NET', 'C#', 'Microsoft SQL Server', 'Bootstrap'],
    githubUrl: 'https://github.com/amoghphadnis/WatchWorld',
  },
  {
    id: 'employee-management-system',
    title: 'Employee Management System',
    category: 'personal',
    description: 'Full-stack employee data management with secure CRUD and admin portal.',
    impact: 'Shipped full-stack employee CRUD with secure admin access.',
    image: 'images/Projects/EMS_1.png',
    technologies: ['React', 'Apollo Client', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/amoghphadnis/Employee-Management-System',
  },
  {
    id: 'e-commerce-shopping-cart',
    title: 'E-commerce Shopping Cart',
    category: 'personal',
    description: 'Gaming accessories e-commerce app with cart and real-time pricing.',
    impact: 'Created a gaming accessories store with cart and real-time pricing.',
    image: 'images/Projects/GamingAccessories_Home_Desktop.png',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    githubUrl: 'https://github.com/amoghphadnis/E-commerce-Shopping-Cart-for-Gaming-Accessories',
  },
];
