// Fuente única del CV: el sitio (/) y la versión imprimible (/cv) se generan desde aquí.
import type { ImageMetadata } from 'astro';
import cascada from '../assets/photos/cascada.jpg';
import lago from '../assets/photos/lago.jpg';
import legoRobot from '../assets/photos/lego-robot.jpg';
import burbujas from '../assets/photos/burbujas.jpg';

export interface Role {
  title: string;
  period: string;
  scope?: string;
  highlights: string[];
}

export interface Job {
  company: string;
  description?: string;
  period: string;
  roles: Role[];
  stack?: string[];
}

export interface ImpactCard {
  photo: ImageMetadata;
  photoAlt: string;
  kicker: string;
  title: string;
  /** Etiquetas que entran deslizándose al hacer hover (efecto "julia"). */
  reveals: string[];
}

export const profile = {
  name: 'Abner Omar Sánchez Hernández',
  shortName: 'Abner Sánchez',
  headline: 'Engineering Manager · CTO · Java Full‑Stack',
  location: 'Ciudad de México',
  email: 'aosanchezh@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abner-sho',
  github: 'https://github.com/AbnerSHO',
  website: 'https://abnersho.github.io',
  tagline:
    'Construyo, modernizo y opero plataformas que cuestan menos y hacen más, y llevo la IA generativa de la demo a producción.',
  summary:
    'Líder de tecnología con 15 años de experiencia construyendo, modernizando y operando plataformas de mensajería, servicios de valor agregado y sistemas de gobierno. Como responsable de toda la tecnología de una empresa de innovación, reduje entre 76% y 85% el costo mensual de sus plataformas principales, modernicé sistemas heredados de alto riesgo sin afectar la operación y llevé la IA generativa (RAG, agentes, MCP) a productos para clientes. Combino visión de negocio y desarrollo de equipos con práctica técnica diaria en Java (Quarkus, Spring), Python, React/Angular y CI/CD.',
  heroPhoto: burbujas,
  heroPhotoAlt: 'Macro de burbujas en un vaso con luz rosa y violeta',
};

export const metrics = [
  { value: '15', unit: 'años', label: 'construyendo y operando plataformas' },
  { value: '−76%', unit: '', label: 'costo mensual de SVA y Business Messaging' },
  { value: '−85%', unit: '', label: 'costo mensual de Gougo, IA incluida' },
  { value: '5', unit: 'países', label: 'con servicios en operación' },
];

export const impact: ImpactCard[] = [
  {
    photo: cascada,
    photoAlt: 'Cascada sobre una poza turquesa rodeada de selva',
    kicker: 'FinOps',
    title: 'Menos <span>costo</span>',
    reveals: [
      '~$250k → ~$60k MXN al mes en SVA',
      '~$100k → ~$15k MXN al mes en Gougo',
      'Rearquitectura hacia Quarkus',
    ],
  },
  {
    photo: legoRobot,
    photoAlt: 'Robot de LEGO junto a un pequeño cactus en maceta',
    kicker: 'IA generativa',
    title: 'IA en <span>producción</span>',
    reveals: [
      'RAG sobre PostgreSQL para retail',
      'Agentes en WhatsApp · A2A',
      'LLMOps con control de costos',
    ],
  },
  {
    photo: lago,
    photoAlt: 'Lago en calma que refleja nubes y cerros, con un muelle flotante',
    kicker: 'Modernización',
    title: 'Legados <span>sin ruido</span>',
    reveals: [
      'GlassFish → microservicios Quarkus',
      'Angular 9 → 21 · JS → React',
      'HBase → PostgreSQL · Kafka → RabbitMQ',
    ],
  },
];

export const experience: Job[] = [
  {
    company: 'Neaxis (antes Softerik)',
    description: 'Empresa de innovación tecnológica',
    period: 'abr 2021 – jul 2026',
    roles: [
      {
        title: 'CTO / Gerente de TI',
        period: 'dic 2023 – jul 2026',
        scope:
          'Responsable de toda la tecnología de la empresa (todas las verticales), reportando a la Dirección General, con un equipo de 6 desarrolladores.',
        highlights: [
          'Reduje el costo mensual de las plataformas SVA y Business Messaging de ~$250k a ~$60k MXN (−76%) y el de Gougo de ~$100k a ~$15k MXN (−85%, incluyendo IA), mediante rearquitectura hacia Quarkus, inventario y depuración de servidores, dominios y servicios, y reorganización de los costos de infraestructura.',
          'Reemplacé una solución de IA de un proveedor externo con un desarrollo propio: asistente conversacional con RAG sobre PostgreSQL para que clientes de retail consultaran sus estadísticas en lenguaje natural (Python/FastAPI, WebSockets, Ollama Cloud), más un módulo de visibilidad y asistente de IA en el dashboard.',
          'Definí la estrategia de LLMOps del área: selección de modelos abiertos, despliegue y control de costos de inferencia para operar IA generativa en producción a bajo costo.',
          'Lideré MVPs de IA generativa integrados a WhatsApp: pedidos de restaurante por chat, reconocimiento de telas por imagen y extracción de datos de etiquetas en aparadores, con agentes y flujos multiagente (Strands Agents, LangChain, CrewAI con protocolo A2A).',
          'Modernicé Gougo, sistema de retail con código desde 2017: de GlassFish a microservicios Quarkus, dashboard de JavaScript puro a React, migración de MongoDB y MySQL 5.7 a versiones actuales y mantenimiento de la app móvil (Expo).',
          'Integré IA al ciclo de desarrollo (Claude Code) y a la gestión mediante automatizaciones con MCP (estimación de puntos de función en YouTrack para medir rendimiento y costos), acelerando migraciones críticas como HBase → PostgreSQL y Kafka → RabbitMQ.',
        ],
      },
      {
        title: 'Director de TI — Vertical Mobile',
        period: 'abr 2022 – dic 2023',
        scope:
          'Responsable de la tecnología de la vertical (SVA, Campañas y Business Messaging) en coordinación con la Dirección de Negocio.',
        highlights: [
          'Mantuve en operación una plataforma construida originalmente por ~250 desarrolladores con solo 2 personas, y formé un equipo de 5.',
          'Operé servicios en México, Omán, Arabia Saudita, Polonia y Grecia: internacionalización con idiomas de derecha a izquierda (árabe), sesiones de prueba en inglés con testers locales e integración de webhooks y eventos de operadores.',
          'Implementé pipelines CI/CD en GitLab CI con runners propios para despliegues a producción en Docker, y gestión de identidades y accesos (IAM/SSO) con Keycloak.',
          'Integré carrier billing y una solución de cobro marca blanca de Mercado Pago (terminales y ligas de pago).',
          'Reduje deuda técnica: Dropwizard → Quarkus, Angular 9 → 21, adopción de React, Next.js y Tailwind para rendimiento y SEO, y migración de portales de Alfresco a Next.js.',
        ],
      },
      {
        title: 'Desarrollador Java Senior — Business Messaging',
        period: 'abr 2021 – mar 2022',
        highlights: [
          'Desarrollé el MVP de una plataforma de mensajería RCS como partner de Google, ampliada después a SMS (Procom) y WhatsApp (API oficial y proveedor BSP).',
          'Backend en Dropwizard y frontend en Angular; asumí también el frontend tras la salida del desarrollador responsable.',
        ],
      },
    ],
    stack: ['Quarkus', 'Python', 'FastAPI', 'React', 'Angular', 'PostgreSQL', 'Keycloak', 'GitLab CI', 'Docker', 'AWS', 'Ollama'],
  },
  {
    company: 'IDS Comercial',
    period: 'abr – nov 2020',
    roles: [
      {
        title: 'System Engineer',
        period: 'abr – nov 2020',
        highlights: [
          'Líder técnico de la fábrica de software para AMIS: aplicaciones en Angular y microservicios Spring Boot en Google Cloud Platform.',
        ],
      },
    ],
    stack: ['Angular', 'Spring Boot', 'GCP'],
  },
  {
    company: 'Tribunal Federal de Justicia Administrativa (TFJA)',
    period: 'nov 2012 – sep 2019',
    roles: [
      {
        title: 'Subdirector de Área · Jefe de Departamento · Técnico Administrativo',
        period: '2012 – 2019',
        scope: 'Lideré un equipo de 6 desarrolladores Java y un equipo de diseño web.',
        highlights: [
          'NEU (notificaciones y Boletín Jurisdiccional): ETL de las Salas de todo el país y mensajería con ActiveMQ; migración a GCP con microservicios Spring Boot/Cloud, App Engine, Cloud SQL y SendGrid.',
          'Expediente Virtual: búsqueda en 32 bases de datos SQL Server distribuidas; migrado a contenedores Docker y desplegado en Kubernetes en GCP.',
          'Mantenimiento y rediseño del portal tfja.gob.mx (Django) y sus micrositios.',
        ],
      },
    ],
    stack: ['Java', 'Spring Cloud', 'ActiveMQ', 'SQL Server', 'Kubernetes', 'GCP', 'Django'],
  },
  {
    company: 'CONACYT',
    period: 'ago 2011 – abr 2012',
    roles: [{ title: 'Colaborador del OIC', period: 'ago 2011 – abr 2012', highlights: [] }],
  },
];

export const skills = [
  'Liderazgo y crecimiento de equipos',
  'Arquitectura de software y microservicios',
  'Modernización de sistemas heredados',
  'Optimización de costos en la nube (FinOps)',
  'IA generativa: RAG, agentes, MCP, A2A',
  'LLMOps: selección, despliegue y costo de modelos',
  'DevSecOps y CI/CD',
  'Scrum y Kanban',
  'Comunicación con negocio y socios',
  'Sistemas de diseño (Atomic Design)',
];

export const stack: { group: string; items: string[] }[] = [
  { group: 'Backend', items: ['Java', 'Quarkus', 'Spring Boot', 'Dropwizard', 'Java EE', 'Python', 'FastAPI', 'Django'] },
  { group: 'Frontend', items: ['Angular', 'React', 'Next.js', 'Tailwind'] },
  { group: 'IA', items: ['RAG', 'MCP', 'A2A', 'Strands Agents', 'LangChain', 'CrewAI', 'Ollama', 'Claude Code'] },
  { group: 'Datos y mensajería', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle', 'Kafka', 'RabbitMQ'] },
  { group: 'Cloud y DevSecOps', items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'Keycloak', 'Linux'] },
  { group: 'Diseño', items: ['GIMP', 'Inkscape', 'Blender', 'Krita'] },
];

export const education = [
  { degree: 'Ingeniería en Informática (Titulado)', school: 'UPIICSA – IPN', period: '2008 – 2012' },
  { degree: 'Técnico en Informática (Titulado)', school: 'CECyT No. 13 – IPN', period: '2005 – 2008' },
];

export const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Avanzado — CELEX ESCA Tepepan, todos los niveles incl. preparación Cambridge' },
];

export const interests = ['Automatización y electrónica (Arduino)', 'Cultura maker y DIY', 'Acuarela', 'LEGO', 'Videojuegos', 'Fotografía'];
