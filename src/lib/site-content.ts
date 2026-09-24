// Contenido central de la landing page de Ana María Salom Reyes.
// Editar aquí actualiza copy, FAQ (incl. JSON-LD) y placeholders de logos en toda la página.

export const SITE_URL = "https://www.anamariasalomreyes.com"; // TODO: reemplazar por el dominio real antes de publicar

export const contact = {
  whatsappNumber: "573157839103",
  whatsappDisplay: "+57 315 7839103",
  whatsappMessage: "Hola Ana, me gustaría agendar una primera conversación contigo.",
  instagramHandle: "anasalomreyes",
  instagramUrl: "https://www.instagram.com/anasalomreyes",
  linkedinUrl: "https://www.linkedin.com/in/anamariasalomreyes", // TODO: confirmar URL exacta de LinkedIn
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
    "Acompaño a personas, familias, líderes, organizaciones y comunidades en procesos de transformación profunda que integran psicología, cuerpo, biografía, vínculos, consciencia y propósito para convertir el aprendizaje en una nueva manera de ser, relacionarnos y actuar.",
  trustStat: "+30 años · +20.000 horas de acompañamiento",
  pillars: ["Sanación", "Cuidado", "Propósito", "Regeneración"],
  signature:
    "Acompaño a transformar la historia vivida en consciencia, propósito y posibilidad regenerativa.",
};

export const bio = {
  paragraphs: [
    "Soy psicóloga, psicoterapeuta integral y coach de propósito, con más de 30 años de experiencia acompañando procesos de desarrollo humano, transformación y liderazgo en personas, familias, equipos, empresas y comunidades en momentos de transición, crisis, conflicto, búsqueda de sentido y ampliación de consciencia.",
    "Mi trabajo integra la dimensión psicológica, biográfica, corporal, relacional, contemplativa y de propósito, comprendiendo a cada persona no solo desde aquello que necesita sanar, sino también desde aquello que está llamado a desplegar.",
    "Soy una mujer colombo-libanesa, psicóloga y humanista. Mi propia historia me enseñó tempranamente el valor de las raíces, la familia, la diversidad, el encuentro entre culturas y el legado. Ese recorrido me ha llevado a una convicción: la transformación profunda ocurre cuando aquello que comprendemos puede encarnarse en la manera como vivimos, cuidamos, nos relacionamos y ponemos nuestros dones al servicio de algo mayor que nosotros mismos.",
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
  description: string;
  idealFor: string;
};

export const services: Service[] = [
  {
    slug: "psicoterapia-integral",
    title: "Psicoterapia Integral",
    summary: "Sanación y transformación",
    description:
      "Un espacio de acompañamiento profundo para reconocer, comprender e integrar aquello que la historia de vida ha dejado inscrito en el cuerpo, las emociones, los pensamientos, los vínculos y las maneras de estar en el mundo. El proceso no busca reducir a la persona a un síntoma, sino escuchar la historia vivida, reconocer recursos internos y abrir espacio a nuevas posibilidades de relación consigo misma, con los demás y con la vida.",
    idealFor:
      "Personas que atraviesan crisis vitales, pérdidas, duelos, heridas relacionales, ansiedad o sobrecarga emocional; que reconocen patrones que se repiten en sus relaciones o decisiones; o que sienten que una antigua manera de vivir ya no representa quienes son hoy.",
  },
  {
    slug: "acompanamiento-familiar",
    title: "Acompañamiento Familiar",
    summary: "El primer ecosistema de cuidado",
    description:
      "La familia, como primer ecosistema de cuidado, pertenencia, identidad y propósito, contiene una semilla fundamental para la transformación. Acompaño a las familias a escuchar aquello que necesita ser reconocido, cuidado, reparado o transformado, para cultivar nuevas formas de relacionarse que generen más vida en cada integrante y en el sistema familiar.",
    idealFor:
      "Familias que atraviesan conflictos recurrentes, distanciamiento o rupturas en sus vínculos, tensiones intergeneracionales, sobrecarga de alguno de sus miembros o patrones que se repiten de generación en generación — también familias que, sin estar en crisis, desean fortalecer sus vínculos y aprender a cuidarse sin perder la individualidad.",
  },
  {
    slug: "cuidado-de-cuidadores",
    title: "Cuidado de Cuidadores",
    summary: "Cuidar sin desaparecer en el acto de cuidar",
    description:
      "Un espacio dirigido a quienes dedican una parte significativa de su vida a sostener a otros: familiares, profesionales de la salud y la educación, terapeutas, líderes, equipos y personas al servicio de comunidades. El proceso invita a reconocer cómo estamos cuidando y cómo estamos siendo cuidados, recuperar recursos internos, reconocer límites y necesidades, y transformar el autocuidado en una práctica consciente que también incluya a quien cuida.",
    idealFor:
      "Personas que se sienten agotadas de sostener a otros, viven sobrecarga o culpa al poner límites, han postergado sus propias necesidades, o sienten desgaste emocional en su rol de cuidado.",
  },
  {
    slug: "proposito-vivo",
    title: "Propósito Vivo",
    summary: "Coaching de propósito y transiciones",
    description:
      "El propósito es una experiencia viva que puede revelarse cuando reconocemos quiénes somos, integramos nuestra historia, escuchamos aquello que nos mueve profundamente y ponemos nuestros dones al servicio de algo que trasciende el beneficio individual. Este acompañamiento integra autoconocimiento, trabajo biográfico, coaching y prácticas contemplativas para tender un puente entre el mundo interior y la vida cotidiana.",
    idealFor:
      "Personas que se preguntan '¿y ahora qué?', atraviesan cambios de etapa, reinvenciones profesionales, jubilación, nido vacío o migraciones, o que necesitan tomar decisiones importantes desde mayor coherencia.",
  },
  {
    slug: "trabajo-biografico",
    title: "Trabajo Biográfico",
    summary: "Descubrir el hilo de tu vida",
    description:
      "Desde una mirada de orientación antroposófica e integral, acompaño a recorrer la propia historia no para cambiar aquello que ocurrió, sino para descubrir el hilo que la atraviesa y el sentido que puede emerger al mirarla desde el presente. Aquello que alguna vez vivimos únicamente como ruptura o fracaso puede revelar también aprendizajes y recursos que hoy podemos integrar conscientemente.",
    idealFor:
      "Personas en un umbral vital que sienten necesidad de comprender su historia con mayor profundidad, atraviesan cambios de etapa, pérdidas o reinvenciones profesionales, o desean reconciliarse con decisiones y experiencias del pasado.",
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
    description:
      "Acompañamiento individual para quienes atraviesan crisis, transiciones, duelos o búsquedas de sentido — y también para quienes, sin estar en crisis, desean vivir con mayor consciencia y propósito.",
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
    description:
      "Consultoría y acompañamiento para empresas familiares, equipos directivos, colegios, universidades y cámaras de comercio — porque una organización también tiene cultura, vínculos, heridas, patrones y capacidad regenerativa.",
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
