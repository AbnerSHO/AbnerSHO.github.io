// Fuente única del CV: el sitio (/) y la versión imprimible (/cv) se generan desde aquí.
import type { ImageMetadata } from 'astro';
import cascada from '../assets/photos/cascada.jpg';
import lago from '../assets/photos/lago.jpg';
import legoRobot from '../assets/photos/lego-robot.jpg';
import escritorio from '../assets/photos/escritorio.jpg';
import alebrije from '../assets/photos/alebrije.jpg';
import gatitos from '../assets/photos/gatitos.jpg';
import teclado from '../assets/photos/teclado.jpg';
import cempasuchil from '../assets/photos/cempasuchil.jpg';
import playa from '../assets/photos/playa.jpg';
import niebla from '../assets/photos/niebla.jpg';
import caracol from '../assets/photos/caracol.jpg';
import burbujas from '../assets/photos/burbujas.jpg';
import albercaMar from '../assets/photos/alberca-mar.jpg';
// Versiones para el hover (generadas con scripts/color-splash.py)
import cempasuchilSplash from '../assets/photos/splash/cempasuchil.jpg';
import tecladoSplash from '../assets/photos/splash/teclado.jpg';
import gatitosSplash from '../assets/photos/splash/gatitos.jpg';
import playaSplash from '../assets/photos/splash/playa.jpg';
import burbujasSplash from '../assets/photos/splash/burbujas.jpg';

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
  metric: string;
  title: string;
  description: string;
  /** Etiquetas que entran deslizándose al hacer hover (efecto "julia"). */
  reveals: string[];
  wide?: boolean;
}

export interface GalleryPhoto {
  photo: ImageMetadata;
  alt: string;
  caption: string;
  tall?: boolean;
  wide?: boolean;
  /** Se muestra deslavada (casi blanca) y al hacer hover aparece tal cual, sin zoom. */
  soft?: boolean;
  /** Versión alterna que aparece al hacer hover (scripts/color-splash.py). */
  splash?: { photo: ImageMetadata; tone: string };
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
  heroPhoto: alebrije,
  heroPhotoAlt: 'Alebrije monumental azul con lengua rosa y colmillos, de noche entre papel picado',
  heroPhotoCredit: ['Alebrije «Kanil Nak» de Ricardo Pavel Elvira Calderón', 'Foto: Abner Sánchez'],
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
    metric: '−76%',
    title: 'Menos <span>costo</span>, misma operación',
    description: 'Rearquitectura e inventario de infraestructura en las plataformas principales.',
    reveals: [
      'SVA y Business Messaging: ~$250k → ~$60k MXN/mes',
      'Gougo: ~$100k → ~$15k MXN/mes (−85%, IA incluida)',
      'Depuración de servidores, dominios y servicios',
    ],
    wide: true,
  },
  {
    photo: legoRobot,
    photoAlt: 'Robot de LEGO junto a un pequeño cactus en maceta',
    kicker: 'IA generativa',
    metric: 'RAG',
    title: 'IA en <span>producción</span>',
    description: 'De reemplazar a un proveedor externo a operar modelos abiertos a bajo costo.',
    reveals: ['Asistente RAG sobre PostgreSQL', 'MVPs multiagente en WhatsApp', 'LLMOps y costo de inferencia'],
  },
  {
    photo: escritorio,
    photoAlt: 'Escritorio de trabajo con monitor mostrando código, teclado mecánico y micrófono',
    kicker: 'Equipos',
    metric: '250 → 2',
    title: 'Hacer <span>más</span> con menos',
    description: 'Una plataforma construida por ~250 desarrolladores, operada con 2 personas.',
    reveals: ['Formé equipos de 5 y 6 devs', 'CI/CD con GitLab y runners propios', 'IA en el ciclo de desarrollo'],
  },
  {
    photo: lago,
    photoAlt: 'Lago en calma que refleja nubes y cerros, con un muelle flotante',
    kicker: 'Modernización',
    metric: '9 → 21',
    title: 'Legados <span>sin ruido</span>',
    description: 'Sistemas heredados de alto riesgo modernizados sin detener la operación.',
    reveals: [
      'GlassFish y Dropwizard → Quarkus',
      'Angular 9 → 21 · JavaScript puro → React',
      'HBase → PostgreSQL · Kafka → RabbitMQ',
    ],
    wide: true,
  },
];

export const gallery: GalleryPhoto[] = [
  { photo: gatitos, alt: 'Cuatro gatitos blancos y naranjas mirando a la cámara', caption: 'Equipo de QA', splash: { photo: gatitosSplash, tone: '#ff9b4a' } },
  { photo: cempasuchil, alt: 'Flores de cempasúchil frente a un canal con un puente rojo', caption: 'Cempasúchil', tall: true, splash: { photo: cempasuchilSplash, tone: '#f7b733' } },
  { photo: teclado, alt: 'Teclado mecánico compacto gris y menta', caption: 'Herramienta de trabajo', wide: true, splash: { photo: tecladoSplash, tone: '#5fd3b0' } },
  { photo: niebla, alt: 'Camino entre pinos cubierto de niebla', caption: 'Niebla en el bosque', tall: true },
  { photo: playa, alt: 'Playa con oleaje y un tronco seco bajo cielo azul', caption: 'Pacífico', splash: { photo: playaSplash, tone: '#47a6ec' } },
  { photo: caracol, alt: 'Caracol blanco sobre una playa de conchas', caption: 'Detalles', soft: true },
  { photo: burbujas, alt: 'Macro de burbujas con luz rosa y violeta', caption: 'Macro', splash: { photo: burbujasSplash, tone: '#c56cf0' } },
  { photo: albercaMar, alt: 'Alberca azul con vista al mar y nubes', caption: 'Horizonte', wide: true },
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

/** `color` es cualquier color CSS; tiñe la tarjeta, su brillo y sus chips al hacer hover. */
export const stack: { group: string; color: string; items: string[] }[] = [
  { group: 'Backend', color: '#47c3ec', items: ['Java', 'Quarkus', 'Spring Boot', 'Dropwizard', 'Java EE', 'Python', 'FastAPI', 'Django'] },
  { group: 'Frontend', color: '#ff6fae', items: ['Angular', 'React', 'Next.js', 'Tailwind'] },
  { group: 'IA', color: '#b18cff', items: ['RAG', 'MCP', 'A2A', 'Strands Agents', 'LangChain', 'CrewAI', 'Ollama', 'Claude Code'] },
  { group: 'Datos y mensajería', color: '#f7d046', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle', 'Kafka', 'RabbitMQ'] },
  { group: 'Cloud y DevSecOps', color: '#4ade9b', items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'Keycloak', 'Linux'] },
  { group: 'Diseño', color: '#ff9b4a', items: ['GIMP', 'Inkscape', 'Blender', 'Krita'] },
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
