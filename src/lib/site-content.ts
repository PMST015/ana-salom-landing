// Contenido central de la landing page de Ana María Salom Reyes.
// Editar aquí actualiza copy, FAQ (incl. JSON-LD) y placeholders de logos en toda la página.

export const SITE_URL = "https://www.anamariasalomreyes.com"; // TODO: reemplazar por el dominio real antes de publicar

export const contact = {
  whatsappNumber: "573157839103",
  whatsappDisplay: "+57 315 7839103",
  whatsappMessage: "Hola Ana, me gustaría agendar una primera conversación contigo.",
  instagramHandle: "anasalomreyes",
  instagramUrl: "https://www.instagram.com/anasalomreyes",
  linkedinUrl: "https://www.linkedin.com/in/ana-mar%C3%ADa-salom-reyes/",
  city: "Bogotá, Colombia",
};

export const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  contact.whatsappMessage
)}`;

export const brand = {
  name: "Ana María Salom Reyes",
  descriptor:
    "Psicóloga · Psicoterapeuta Integral · Consultora y Facilitadora de Transformación Regenerativa · Coach de Propósito",
  heroTitle: "Transformar para regenerar",
  heroSubtitle:
    "Sanar lo vivido. Cuidarnos para cuidar. Recordar nuestro propósito. Poner nuestros dones al servicio de la vida.",
  heroLead:
    "Acompaño a personas, familias y empresas familiares en procesos de transformación profunda — psicología, cuerpo, biografía y propósito, al servicio de una nueva manera de vivir y relacionarnos.",
  trustStat: "+30 años · +20.000 horas de acompañamiento",
  pillars: ["Sanación", "Cuidado", "Propósito", "Regeneración"],
  signature:
    "Acompaño a transformar la historia vivida en consciencia, propósito y posibilidad regenerativa.",
};

export const bio = {
  paragraphs: [
    "Más de 30 años acompañando procesos de desarrollo humano, transformación y liderazgo en personas, familias, empresas y comunidades — en momentos de transición, crisis, conflicto o búsqueda de sentido. Mi trabajo integra lo psicológico, lo biográfico, lo corporal y lo contemplativo: no solo lo que necesita sanar, sino también lo que está llamado a desplegarse.",
    "Soy colombo-libanesa, psicóloga y humanista. Mi propia historia me enseñó el valor de las raíces, la familia y el encuentro entre culturas — y me llevó a una convicción: la transformación ocurre cuando lo que comprendemos se encarna en la forma en que vivimos, cuidamos y nos relacionamos.",
  ],
  credentials: [
    "Psicología, Universidad de los Andes (Bogotá, 1991)",
    "Especialización en Administración — Gerencia de Recursos Humanos, Universidad de los Andes (1996)",
    "Maestría en Programación Neurolingüística, Colinde Colombia (2001–2002)",
    "Certificación en Descodificación Biológica, École de Biodécodage, Francia (2011)",
    "Coaching de Propósito Individual y Organizacional, True Purpose Institute, USA (2018–2020)",
    "Conscious Business Journey Consultant & Change Agent, USA (2020–2021)",
    "Formación en Trabajo Biográfico, Colegio Montecervino, Chía (2024–2025)",
    "Formación en Psicoterapia Antroposófica, ADMAC (2025–actualmente)",
  ],
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  alt: string;
};

export const services: Service[] = [
  {
    slug: "psicoterapia-integral",
    title: "Psicoterapia Integral",
    summary: "Sanar e integrar tu historia.",
    tags: ["Crisis vitales", "Duelos", "Ansiedad"],
    alt: "Mujer en un momento de escucha profunda durante una sesión de psicoterapia, luz cálida",
  },
  {
    slug: "acompanamiento-familiar",
    title: "Acompañamiento Familiar",
    summary: "El primer ecosistema de cuidado.",
    tags: ["Conflictos", "Distanciamiento", "Vínculos"],
    alt: "Madre e hija compartiendo un momento cálido al aire libre al atardecer",
  },
  {
    slug: "cuidado-de-cuidadores",
    title: "Cuidado de Cuidadores",
    summary: "Cuidar sin desaparecer.",
    tags: ["Agotamiento", "Límites", "Autocuidado"],
    alt: "Abrazo cálido entre madre e hija, expresión de cuidado y afecto",
  },
  {
    slug: "proposito-vivo",
    title: "Propósito Vivo",
    summary: "Escuchar lo que quiere emerger.",
    tags: ["Transiciones", "Reinvención", "Sentido"],
    alt: "Mujer escribiendo en su diario junto a una ventana con luz natural",
  },
  {
    slug: "trabajo-biografico",
    title: "Trabajo Biográfico",
    summary: "Descubrir el hilo de tu vida.",
    tags: ["Umbrales vitales", "Legado", "Reconciliación"],
    alt: "Manos entrelazadas de una pareja mayor caminando por un campo dorado al atardecer",
  },
];

export const specialties = [
  {
    pillar: "Sanación",
    items: [
      "Trauma y regulación emocional",
      "Duelo y pérdidas",
      "Crisis y transiciones vitales",
      "Trabajo biográfico",
    ],
  },
  {
    pillar: "Cuidado",
    items: [
      "Autocuidado y cuidado",
      "Cuidado de cuidadores",
      "Sobrecarga y desgaste del cuidador",
      "Terapia y acompañamiento familiar",
      "Conflictos familiares e intergeneracionales",
      "Relaciones y vínculos",
    ],
  },
  {
    pillar: "Propósito",
    items: [
      "Propósito y sentido de vida",
      "Desarrollo personal y de consciencia",
    ],
  },
  {
    pillar: "Regeneración",
    items: ["Bienestar y regeneración organizacional y comunitaria"],
  },
];

export const audiences = {
  b2c: {
    title: "Personas",
    description: "Acompañamiento individual en crisis, transiciones o búsqueda de sentido.",
    segments: [
      "Personas en procesos de sanación, duelo o transición vital",
      "Buscadores de propósito y crecimiento personal",
      "Cuidadores familiares y profesionales sobrecargados",
      "Migrantes y parejas en procesos de adaptación cultural",
      "Adultos +60 en nueva longevidad",
    ],
  },
  b2b: {
    title: "Empresas familiares y organizaciones",
    description: "Consultoría para empresas familiares, equipos y organizaciones.",
    segments: [
      "Empresas familiares en procesos de sucesión o conflicto intergeneracional",
      "Comités directivos y equipos de liderazgo",
      "Colegios y universidades",
      "Cámaras de comercio y gremios",
    ],
  },
};

export type FAQItem = { question: string; answer: string };

export const faqs: FAQItem[] = [
  {
    question: "¿Necesito estar atravesando una crisis para iniciar un proceso?",
    answer:
      "No. Algunas personas llegan porque atraviesan dolor, ansiedad, pérdidas, conflictos o transiciones importantes; otras porque sienten que una manera de vivir ya no les alcanza y desean comprender mejor su historia, sus relaciones o su propósito. El proceso puede comenzar tanto desde una dificultad como desde el deseo profundo de crecer y vivir con mayor consciencia y sentido.",
  },
  {
    question: "¿En qué se diferencia tu abordaje de una psicoterapia tradicional?",
    answer:
      "Mi mirada es integral. Además de atender pensamientos y emociones, podemos explorar el cuerpo, la historia biográfica, los vínculos, los patrones familiares y transgeneracionales, los recursos internos y las preguntas de sentido y propósito. La metodología se adapta a la persona y no la persona a una metodología.",
  },
  {
    question: "¿Trabajas también con familias?",
    answer:
      "Sí. Acompaño familias que atraviesan conflictos, distanciamientos, transiciones o dificultades intergeneracionales. El objetivo no es determinar quién tiene razón, sino crear condiciones para que puedan emerger mayor escucha, responsabilidad, límites saludables y nuevas posibilidades de relación.",
  },
  {
    question: "¿Tengo que ser una persona espiritual para trabajar contigo?",
    answer:
      "No. Mi práctica respeta profundamente las creencias, convicciones y caminos de cada persona. Cuando la dimensión espiritual o contemplativa es significativa para quien consulta, puede integrarse al proceso; cuando no lo es, no constituye un requisito.",
  },
  {
    question: "¿Cómo sabremos hacia dónde orientar el proceso?",
    answer:
      "Las primeras conversaciones nos permiten comprender qué estás viviendo, qué necesitas y qué deseas transformar. Desde allí cocreamos una orientación de trabajo que puede evolucionar a medida que el proceso avanza. Más que aplicar una fórmula, buscamos escuchar qué necesita atención y qué posibilidad de desarrollo está intentando emerger.",
  },
  {
    question:
      "Cuido de otros y siento que me estoy quedando sin espacio para mí. ¿Este acompañamiento puede ayudarme?",
    answer:
      "Sí. Uno de los focos de mi trabajo es acompañar a quienes sostienen a otros: dentro de una familia, un equipo, una organización o una comunidad. Cuidar puede ser una profunda expresión de amor y propósito, pero cuando implica olvidarnos permanentemente de nosotros mismos puede convertirse en agotamiento o pérdida de sentido. Trabajamos para recuperar el autocuidado, reconocer límites y descubrir una manera de cuidar que incluya también a quien cuida.",
  },
];

// Placeholders — reemplazar con logos y datos reales que Ana entregue.
export type LogoPlaceholder = { name: string; href?: string };

export const companies: LogoPlaceholder[] = [
  { name: "Empresa familiar 1" },
  { name: "Empresa familiar 2" },
  { name: "Empresa familiar 3" },
  { name: "Empresa familiar 4" },
];

export const allies: LogoPlaceholder[] = [
  { name: "Proyecto aliado 1", href: "#" },
  { name: "Proyecto aliado 2", href: "#" },
  { name: "Proyecto aliado 3", href: "#" },
  { name: "Proyecto aliado 4", href: "#" },
];

export const nav = [
  { href: "#sobre-ana", label: "Sobre mí" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#servicios", label: "Servicios" },
  { href: "#empresas", label: "Empresas" },
  { href: "#aliados", label: "Aliados" },
  { href: "#faq", label: "Preguntas frecuentes" },
];
