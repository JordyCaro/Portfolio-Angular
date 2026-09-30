interface LocalizedPosition {
  name: string;
  description: string;
}

interface LocalizedProject {
  name?: string;
  description: string;
  outcome: string;
}

const paragraphs = (...lines: string[]): string => lines.join('\n\n');

const FIRST_STEPS = 'Una muestra de mis primeros pasos como desarrollador frontend.';
const FROM_SCRATCH = 'Se creó desde cero hasta llevarlo a producción, cumpliendo todos los requerimientos del cliente.';
const ANGULAR_AZURE = 'Desarrollado con <b>Angular (HTML, Bootstrap, TypeScript)</b> y conectado a <b>Azure</b>.';

export const esYearWords: Record<string, string> = {
  Jan: 'Ene',
  Apr: 'Abr',
  Aug: 'Ago',
  Dec: 'Dic',
  Present: 'Actualidad',
  Currently: 'Actualidad',
};

/** Keyed by the English `name` of each position; " at " separates role and company. */
export const esPositions: Record<string, LocalizedPosition> = {
  'CEO & Co-founder at Nemco-net': {
    name: 'CEO y Cofundador at Nemco-net',
    description: paragraphs(
      'Impulso la visión y el crecimiento de Nemco-net, un estudio que desarrolla automatizaciones, productos web y servicios digitales.',
      'Diseño soluciones de automatización, ciberseguridad y desarrollo web, incluidos agentes de IA para WhatsApp y otros canales.',
      'Gestiono la entrega con metodologías ágiles para que las ideas lleguen a producción sin desperdiciar tiempo ni presupuesto.',
      'Fortalezco las relaciones con clientes y aliados, y construyo Enjoy!, un producto que une tecnología, IA y acompañamiento humano para el bienestar emocional.',
    ),
  },
  'Technical Leader - Frontend Developer at MetNet': {
    name: 'Líder Técnico - Desarrollador Frontend at MetNet',
    description: paragraphs(
      'Lideré el desarrollo frontend de múltiples proyectos web, asegurando un código escalable y mantenible con tecnologías modernas.',
      'Alineé los esfuerzos entre los equipos de diseño, backend y frontend para garantizar una colaboración eficiente y experiencias de usuario coherentes.',
      'Traduje las necesidades del negocio en tareas accionables y entregué funcionalidades a tiempo.',
      'Facilité la comunicación, gestioné los reportes de avance y aseguré el cumplimiento de los hitos del proyecto.',
      'Brindé mentoría técnica, revisé código y promoví buenas prácticas para mantener altos estándares de calidad en el equipo.',
    ),
  },
  'Frontend Developer at Innclod': {
    name: 'Desarrollador Frontend at Innclod',
    description: paragraphs(
      'Desarrollé y mantuve interfaces web modernas, garantizando rendimiento, escalabilidad y diseño responsivo.',
      'Colaboré con equipos multidisciplinarios para integrar APIs RESTful e implementar funcionalidades basadas en datos.',
      'Participé en revisiones de código, control de versiones y mejora continua siguiendo prácticas ágiles.',
    ),
  },
  'Web Developer at Good Creatividad para el Desarrollo': {
    name: 'Desarrollador Web at Good Creatividad para el Desarrollo',
    description: paragraphs(
      'Mantenimiento y mejora continua de sitios web desarrollados con WordPress y Elementor, asegurando un funcionamiento óptimo, coherencia en el diseño y buen rendimiento.',
      'Corrección de errores, mejoras y actualizaciones de plataformas existentes para optimizar la usabilidad y cumplir los requerimientos de los clientes.',
      'Desarrollo de nuevas secciones y funcionalidades, adaptando los sistemas existentes a las necesidades cambiantes del negocio.',
      'Creación de sitios web completamente nuevos desde cero, siguiendo buenas prácticas de diseño moderno y SEO para garantizar la escalabilidad y la interacción de los usuarios.',
    ),
  },
  'Full Stack Developer at Creative Innovation Company': {
    name: 'Desarrollador Full Stack at Creative Innovation Company',
    description: paragraphs(
      'Desarrollo y mantenimiento de aplicaciones web con Angular y React, garantizando un diseño responsivo y un alto rendimiento.',
      'Integración y automatización de flujos de trabajo con herramientas como Zapier, Make y n8n, optimizando las operaciones del negocio y reduciendo las tareas manuales.',
      'Creación y mantenimiento de APIs RESTful con PHP, NestJS, Java y Spring Boot para lograr una integración fluida entre los servicios de front-end y back-end.',
      'Desarrollo y experimentación con asistentes basados en IA y agentes de automatización para tareas como atención al cliente, generación de prospectos y creación de contenido.',
      'Implementación de scripts en Python para tareas relacionadas con IA, procesamiento de datos e integración con APIs y servicios externos.',
    ),
  },
  'Full Stack Developer at Belcorp - External advisor': {
    name: 'Desarrollador Full Stack at Belcorp - Asesor externo',
    description: paragraphs(
      'Desarrollé nuevas landing pages para más de 12 países con Angular, React y Gatsby, implementando componentes responsivos y formularios reactivos para mejorar la interacción de los usuarios y la localización.',
      'Gestioné despliegues en múltiples entornos, incluida la creación de ramas, la preparación de notas de versión y la resolución de conflictos de código y errores, garantizando un funcionamiento fluido y la integración con el seguimiento de Google Analytics.',
    ),
  },
  'Frontend Developer at MetNet': {
    name: 'Desarrollador Frontend at MetNet',
    description: paragraphs(
      'Desarrollo de aplicaciones web con Angular, garantizando alto rendimiento y diseño responsivo.',
      'Creación e integración de APIs RESTful, conectando las aplicaciones de front-end con los servicios de back-end.',
      'Implementación de pruebas unitarias y de integración con frameworks como Jasmine y Karma para asegurar la calidad y confiabilidad del código.',
    ),
  },
  'Full Stack Developer as Freelance Web Developer': {
    name: 'Desarrollador Full Stack como Desarrollador Web Freelance',
    description: paragraphs(
      'Desarrollo de aplicaciones web con diversos frameworks de JavaScript como ReactJS y Angular.',
      'Creación de APIs con tecnologías como NodeJS y Firebase.',
      'Implementación de pruebas y control de calidad en las aplicaciones.',
    ),
  },
  'Web Developer at Multiparque': {
    name: 'Desarrollador Web at Multiparque',
    description: paragraphs(
      'Desarrollo de diversas páginas y contenido multimedia en gestores de contenido como WordPress.',
      'Migración de páginas y contenidos al framework React como parte de la actualización tecnológica de la empresa.',
      'Optimización del rendimiento y la experiencia de usuario de los sitios web mediante actualizaciones y mejoras periódicas.',
    ),
  },
};

/** Keyed by project `id`. */
export const esProjects: Record<string, LocalizedProject> = {
  nemogallery: {
    description: '<b>Una galería diseñada para mostrar fotos de Nemo y servir como proyecto de muestra.</b>\n\n' +
      'Desarrollado con <b>Astro, HTML, CSS y JavaScript</b>.\n\n',
    outcome: 'Se creó una galería interactiva y responsiva, con formulario de contacto incluido.',
  },
  thisportfolio: {
    name: 'Este portafolio',
    description: '<b>Si no es un déjà vu, es un bucle...</b>\n\n' +
      'Desarrollado con <b>Angular (HTML, Bootstrap, TypeScript)</b>.\n\n',
    outcome: 'Todo lo que estás viendo.',
  },
  lmndtv: {
    description: ANGULAR_AZURE + '\n\n' +
      'Sitio para comprar boletas con las que se participa en <b>rifas para ganar entradas</b> a distintos eventos o lugares específicos.\n\n' +
      'Permite comprar varias boletas de forma segura y consultar los sorteos y ganadores anteriores.\n',
    outcome: FROM_SCRATCH,
  },
  cargamasiva: {
    description: ANGULAR_AZURE + '\n\n' +
      'Software privado en el que los conductores y sus vehículos pueden <b>cargar sus documentos</b> para conectarse y conseguir cargas, otros conductores o trabajos.\n\n',
    outcome: 'Se corrigieron varios formularios para enviar y recibir documentos correctamente.',
  },
  nuevaeps: {
    description: 'Desarrollado con <b>Angular (HTML, CSS, TypeScript)</b> y conectado a <b>Azure</b>.\n\n' +
      'Sitio en el que los usuarios de esta EPS <b>pueden encontrar sedes y especialistas</b> según sus necesidades.\n\n' +
      'Permite buscar especialistas o centros de salud según la ciudad, la especialidad y otros parámetros.\n',
    outcome: FROM_SCRATCH,
  },
  honesolutions: {
    description: ANGULAR_AZURE + '\n\n' +
      'Software privado en el que distintos prestadores de salud gestionan a sus especialistas y usuarios.\n\n' +
      'Incluye formularios para crear, editar y eliminar contenido de diversas bases de datos, para que los administradores tengan mayor control.\n',
    outcome: 'Creación de nuevos componentes y formularios para controlar la creación y edición de sus bases de datos.',
  },
  firtsportfolio: {
    name: 'Primer portafolio',
    description: 'Desarrollado con <b>Angular (HTML, CSS, JavaScript)</b>.\n\n' +
      'Es simplemente mi primer portafolio. ¿Qué esperas para ir a verlo?\n\n',
    outcome: FIRST_STEPS,
  },
  filmpedia: {
    description: ANGULAR_AZURE + '\n\n' +
      '<b>Página de películas</b> que, a través de una <b>API</b>, trae un catálogo de películas con toda su información.\n\n' +
      'Puedes ver información básica sobre su producción, una sinopsis y su reparto.\n',
    outcome: 'Diseño y funcionalidad interesantes.',
  },
  blogdecafe: {
    description: 'Desarrollado con <b>Angular (HTML, CSS, JavaScript)</b>.\n\n' +
      'Página tipo blog en la que puedes encontrar distintos artículos y acceder a algunos cursos; su temática principal es el café.\n\n',
    outcome: FIRST_STEPS,
  },
  frontendstore: {
    description: 'Desarrollado con <b>Angular (HTML, CSS, JavaScript)</b>.\n\n' +
      'Tienda para comprar camisetas temáticas de distintos lenguajes de programación.\n\n' +
      '¡A LOS DESARROLLADORES LES VA A ENCANTAR!\n',
    outcome: FIRST_STEPS,
  },
  compracursos: {
    name: 'Carrito de compras',
    description: 'Desarrollado con <b>Angular (HTML, CSS, JavaScript)</b>.\n\n' +
      'Página especializada en la venta de cursos de distintas áreas, con carrito de compras.\n\n',
    outcome: FIRST_STEPS,
  },
};

/** Keyed by the English education title. */
export const esEducation: Record<string, string> = {
  'Systems Engineering': 'Ingeniería de Sistemas',
};

export const esSkillGroups: Record<string, string> = {
  'Data & Cloud': 'Datos y nube',
  'Automation & AI': 'Automatización e IA',
};
