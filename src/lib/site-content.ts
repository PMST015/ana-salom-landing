// Contenido central de la landing page de Ana María Salom Reyes.
// Editar aquí actualiza copy, FAQ (incl. JSON-LD) y placeholders de logos en toda la página.

export const SITE_URL = "https://www.anamariasalomreyes.com"; // TODO: reemplazar por el dominio real antes de publicar

export const GA_MEASUREMENT_ID = "G-MS5FVFH0TY";

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
  trustStat: "+35 años · +25.000 horas de acompañamiento",
  pillars: ["Sanación", "Cuidado", "Propósito", "Regeneración"],
  signature:
    "Acompaño a transformar la historia vivida en consciencia, propósito y posibilidad regenerativa.",
};

export const bio = {
  paragraphs: [
    "Más de 35 años acompañando procesos de desarrollo humano, transformación y liderazgo en personas, familias, empresas y comunidades — en momentos de transición, crisis, conflicto o búsqueda de sentido. Mi trabajo integra lo psicológico, lo biográfico, lo corporal y lo contemplativo: no solo lo que necesita sanar, sino también lo que está llamado a desplegarse.",
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
  blurb: string;
  alt: string;
};

export const services: Service[] = [
  {
    slug: "psicoterapia-integral",
    title: "Psicoterapia Integral",
    summary: "Sanar e integrar tu historia.",
    blurb:
      "Un espacio para reconocer e integrar lo que la historia de vida dejó inscrito en el cuerpo, las emociones y los vínculos. Ideal ante crisis vitales, duelos o ansiedad.",
    alt: "Mujer en un momento de escucha profunda durante una sesión de psicoterapia, luz cálida",
  },
  {
    slug: "acompanamiento-familiar",
    title: "Acompañamiento Familiar",
    summary: "El primer ecosistema de cuidado.",
    blurb:
      "Acompaño a las familias a escuchar lo que necesita ser reconocido o transformado, para relacionarse desde más vida. Ideal ante conflictos, distanciamiento o tensiones intergeneracionales.",
    alt: "Madre e hija compartiendo un momento cálido al aire libre al atardecer",
  },
  {
    slug: "cuidado-de-cuidadores",
    title: "Cuidado de Cuidadores",
    summary: "Cuidar sin desaparecer.",
    blurb:
      "Para quienes sostienen a otros: familiares, terapeutas, líderes y equipos. Recuperamos recursos internos, límites y una forma de cuidar que también te incluya a ti.",
    alt: "Persona ayudando a un adulto mayor con su movilidad, momento cálido al aire libre",
  },
  {
    slug: "proposito-vivo",
    title: "Propósito Vivo",
    summary: "Escuchar lo que quiere emerger.",
    blurb:
      "El propósito se revela al integrar nuestra historia y escuchar lo que nos mueve. Ideal ante reinvenciones, jubilación, nido vacío o decisiones importantes.",
    alt: "Mujer escribiendo en su diario junto a una ventana con luz natural",
  },
  {
    slug: "trabajo-biografico",
    title: "Trabajo Biográfico",
    summary: "Descubrir el hilo de tu vida.",
    blurb:
      "Recorremos tu historia no para cambiar lo vivido, sino para descubrir el hilo que la atraviesa. Ideal ante umbrales vitales o el deseo de reconciliarte con el pasado.",
    alt: "Manos entrelazadas de una pareja mayor caminando por un campo dorado al atardecer",
  },
];

export const specialties = [
  {
    pillar: "Sanación",
    slug: "sanacion",
    items: [
      "Trauma y regulación emocional",
      "Duelo y pérdidas",
      "Crisis y transiciones vitales",
      "Trabajo biográfico",
    ],
  },
  {
    pillar: "Cuidado",
    slug: "cuidado",
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
    slug: "proposito",
    items: [
      "Propósito y sentido de vida",
      "Desarrollo personal y de consciencia",
    ],
  },
  {
    pillar: "Regeneración",
    slug: "regeneracion",
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

export type LogoItem = { name: string; slug: string; href?: string; scale?: number };

export const companies: LogoItem[] = [
  { name: "Alpina", slug: "alpina", scale: 1.1, href: "https://alpina.com/" },
  { name: "Bavaria", slug: "bavaria", scale: 1.1, href: "https://www.bavaria.co/" },
  { name: "Suramericana", slug: "suramericana", scale: 1.1, href: "https://www.sura.co/" },
  {
    name: "Contact Center Americas",
    slug: "contact-center-americas",
    scale: 1.1,
    href: "https://www.contactcenteramericas.com/",
  },
  { name: "G4S", slug: "g4s", href: "https://www.g4s.com/es-co" },
  { name: "Asopagos S.A.", slug: "asopagos", href: "https://www.asopagos.com/" },
  { name: "Redeban Multicolor", slug: "redeban-multicolor", href: "https://www.redeban.com/" },
  { name: "ParqueArauco", slug: "parquearauco", href: "https://www.parauco.com/" },
  {
    name: "Seguros Falabella",
    slug: "seguros-falabella",
    href: "https://www.bancofalabella.com.co/seguros-falabella",
  },
  { name: "Colpatria", slug: "colpatria", href: "https://www.davibank.com/" },
  { name: "corona", slug: "corona", href: "https://www.corona.co/" },
  { name: "Carvajal", slug: "carvajal", href: "https://www.carvajal.com/" },
  { name: "UNICEF Perú", slug: "unicef-peru", href: "https://www.unicef.org/peru/" },
  {
    name: "LATAM Airlines",
    slug: "latam-airlines",
    scale: 1.1,
    href: "https://www.latamairlines.com/",
  },
];

export const allies: LogoItem[] = [
  { name: "Satori — Despertar para Prosperar", slug: "satori", href: "https://satoridespertar.com/" },
  { name: "IDG Hub Colombia", slug: "idg-hub-colombia", href: "https://www.quantichumanism.org/idg-colombia/" },
  { name: "País de Raíz", slug: "pais-de-raiz", href: "https://www.paisderaiz.com/nosotros" },
  {
    name: "Humanistic Management Network",
    slug: "humanistic-management-network",
    href: "https://humanisticmanagement.network/",
  },
  { name: "Alianza Pachamama", slug: "alianza-pachamama", href: "https://pachamama.org/" },
];

export const nav = [
  { href: "#sobre-ana", label: "Sobre mí" },
  { href: "#empresas", label: "Empresas" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#servicios", label: "Servicios" },
  { href: "#aliados", label: "Aliados" },
  { href: "#faq", label: "Preguntas frecuentes" },
];
