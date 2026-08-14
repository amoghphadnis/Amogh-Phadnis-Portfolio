import type { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    projectId: 'gbl-farmer-platform',
    overview:
      'Enterprise agriculture platform that supports farmer registration, authentication, operational workflows, and Oracle-backed business processes.',
    problem:
      'Manual and fragmented farmer onboarding and operational tracking created delays, duplicated data, and limited visibility into field-level activity.',
    challenges: [
      'Reconciling stateful enterprise data with a responsive frontend.',
      'Building forms that work reliably on mobile devices used in the field.',
      'Connecting Oracle workflows to user-facing notifications.',
    ],
    architecture: [
      { label: 'React Frontend', description: 'MUI-driven responsive web interface' },
      { label: 'NestJS API', description: 'Business logic and service orchestration' },
      { label: 'Oracle Database', description: 'Enterprise records and workflows' },
      { label: 'WhatsApp Notifications', description: 'Field communication layer' },
    ],
    technologies: ['React', 'TypeScript', 'NestJS', 'Oracle', 'MUI', 'WhatsApp API'],
    responsibilities: [
      'Built and maintained frontend for farmer registration and operational workflows.',
      'Integrated Oracle-backed data services and forms.',
      'Implemented authentication and access control flows.',
      'Worked on notification and communication features.',
    ],
    outcomes: [
      'Streamlined farmer onboarding and data entry.',
      'Reduced manual tracking by moving core workflows to a web platform.',
    ],
    metrics: [
      { label: 'Platform', value: 'Web + Mobile-friendly' },
      { label: 'Data layer', value: 'Oracle-backed' },
    ],
  },
  {
    projectId: 'sugar-distribution',
    overview:
      'Modernized billing workflows with Oracle integration, PDF generation, local printing, queue-based processing, and analytics instrumentation.',
    problem:
      'Billing documents were manually generated and printed, leading to delays, errors, and inconsistent record keeping.',
    challenges: [
      'Coordinating multiple document-generation services in a reliable queue.',
      'Supporting local printer drivers across Windows agents.',
      'Maintaining data consistency between Oracle and generated documents.',
    ],
    architecture: [
      { label: 'Laravel', description: 'Application and queue dispatch' },
      { label: 'Queue', description: 'Asynchronous document jobs' },
      { label: 'PHPWord', description: 'Document template generation' },
      { label: 'LibreOffice', description: 'Format conversion' },
      { label: 'Windows Print Agent', description: 'Local printer dispatch' },
      { label: 'Printer', description: 'Physical output' },
    ],
    technologies: ['Laravel', 'PHP', 'Oracle', 'PHPWord', 'LibreOffice', 'Queue'],
    responsibilities: [
      'Designed and built queue-based document processing.',
      'Integrated PDF generation and local print workflows.',
      'Wired Oracle data sources into billing outputs.',
    ],
    outcomes: [
      'Reduced manual document handling.',
      'Improved consistency of generated bills.',
    ],
    metrics: [
      { label: 'Document pipeline', value: 'Queue-driven' },
      { label: 'Output', value: 'PDF / Print' },
    ],
  },
  {
    projectId: 'plant-monitoring',
    overview:
      'Real-time manufacturing dashboards using React, Electron, WebSocket, and AG Charts.',
    problem:
      'Production floor operators needed a single, real-time view of plant telemetry without refreshing static pages.',
    challenges: [
      'Handling high-frequency sensor data without overwhelming the UI.',
      'Building a reliable WebSocket consumer in an Electron desktop app.',
      'Visualizing time-series data for non-technical operators.',
    ],
    architecture: [
      { label: 'Sensors / PLC', description: 'Data sources on the factory floor' },
      { label: 'Backend', description: 'Data ingestion and normalization' },
      { label: 'WebSocket', description: 'Live data transport' },
      { label: 'Electron Dashboard', description: 'Desktop operator interface' },
    ],
    technologies: ['React', 'Electron', 'WebSocket', 'AG Charts', 'Node.js'],
    responsibilities: [
      'Built the Electron dashboard interface.',
      'Implemented WebSocket consumers for real-time charts.',
      'Worked on AG Charts visualizations for plant telemetry.',
    ],
    outcomes: [
      'Provided real-time visibility into manufacturing processes.',
      'Reduced operator reliance on manual data checks.',
    ],
    metrics: [
      { label: 'Transport', value: 'WebSocket' },
      { label: 'Runtime', value: 'Electron' },
    ],
  },
  {
    projectId: 'cane-trash-monitoring',
    overview:
      'Computer vision pipeline using FastAPI, OpenCV, and RTSP streams for operational measurement.',
    problem:
      'Manual measurement of incoming cane quality was inconsistent and slow.',
    challenges: [
      'Processing RTSP streams with low latency and high reliability.',
      'Building OpenCV measurement logic that adapts to varying lighting.',
      'Serving processed results to a React dashboard in near real time.',
    ],
    architecture: [
      { label: 'RTSP Camera', description: 'Video stream source' },
      { label: 'OpenCV', description: 'Image processing and measurement' },
      { label: 'FastAPI', description: 'API and processing service' },
      { label: 'REST API', description: 'Integration with dashboard' },
      { label: 'Dashboard', description: 'React frontend for operators' },
    ],
    technologies: ['Python', 'FastAPI', 'OpenCV', 'RTSP', 'React'],
    responsibilities: [
      'Built the FastAPI service for frame processing.',
      'Integrated OpenCV measurement pipeline.',
      'Connected the output to a React dashboard.',
    ],
    outcomes: [
      'Enabled faster, more consistent operational measurement.',
      'Reduced manual inspection time.',
    ],
    metrics: [
      { label: 'Pipeline', value: 'OpenCV / FastAPI' },
      { label: 'Input', value: 'RTSP streams' },
    ],
  },
  {
    projectId: 'ngo-app',
    overview:
      'Freelance config-driven mobile app workflow for scholarship and application forms.',
    problem:
      'Application forms varied frequently and needed a maintainable, multi-step mobile experience.',
    challenges: [
      'Designing form components that adapt to changing field sets.',
      'Implementing robust validation across multi-step flows.',
      'Keeping form state consistent across screens.',
    ],
    architecture: [
      { label: 'Expo Router', description: 'Mobile navigation' },
      { label: 'React Native', description: 'Cross-platform UI' },
      { label: 'React Hook Form', description: 'Form state and validation' },
      { label: 'Zod', description: 'Schema validation' },
      { label: 'Zustand', description: 'State management' },
    ],
    technologies: ['Expo Router', 'React Native', 'TypeScript', 'React Hook Form', 'Zod', 'Zustand'],
    responsibilities: [
      'Built reusable, config-driven form components.',
      'Implemented multi-step form flows with validation.',
      'Set up Zustand state management for form data.',
    ],
    outcomes: [
      'Delivered a maintainable multi-step mobile form workflow.',
      'Reduced form change effort through configuration.',
    ],
    metrics: [
      { label: 'Target', value: 'Mobile' },
      { label: 'Validation', value: 'Zod / RHF' },
    ],
  },
  {
    projectId: 'weighbridge',
    overview:
      'Weighing-equipment integration and workflow for capturing and recording operational measurements.',
    problem:
      'Weighbridge readings were manually transcribed, creating delays and transcription errors.',
    challenges: [
      'Integrating industrial scales over TCP and serial protocols.',
      'Building a stable data capture workflow in a noisy factory environment.',
      'Aligning captured weights with Oracle business records.',
    ],
    architecture: [
      { label: 'Weighing Scale', description: 'Serial / TCP output' },
      { label: 'Capture Service', description: 'Read and normalize weight data' },
      { label: 'React UI', description: 'Operator entry and validation' },
      { label: 'Oracle', description: 'Record storage and integration' },
    ],
    technologies: ['React', 'Node.js', 'TCP', 'Industrial Hardware', 'Oracle'],
    responsibilities: [
      'Built the UI for operator weight capture and validation.',
      'Worked on data transmission from hardware capture service to Oracle.',
      'Handled error states and retry logic for unstable connections.',
    ],
    outcomes: [
      'Reduced manual transcription errors.',
      'Improved traceability of weighbridge measurements.',
    ],
    metrics: [
      { label: 'Interface', value: 'Serial / TCP' },
      { label: 'Storage', value: 'Oracle' },
    ],
  },
];
