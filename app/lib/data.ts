// ============================================================
// DATOS DEL SITIO — Edita estos valores para personalizar el sitio
// ============================================================

export const DOCTOR = {
  name: "Dra. Sofía Vargas Astorga",
  shortName: "Dra. Sofía Vargas",
  title: "Médica Pediatra",
  cedula: "Cédula de Especialidad: 14966705",
  certificado: "Certificado CMeP No. 28082",
  /**
   * Ruta a la foto de la doctora.
   * Coloca el archivo en /public/doctor-photo.jpg y cambia esta ruta.
   * Mientras tanto, se muestra un placeholder.
   */
  photo: "/doctor-photo.jpg",
  bio: `Soy médica pediatra con formación especializada y una convicción genuina: que cada niño merece atención cuidadosa y cada familia merece claridad.

Mi práctica está basada en evidencia clínica actualizada, pero sobre todo en la escucha activa y el trato humano. Atiendo desde recién nacidos hasta adolescentes, acompañando a las familias en cada etapa del crecimiento de sus hijos.`,
  philosophy:
    "Cada niño es único. Cada familia tiene su historia. Mi trabajo es acompañarlos con honestidad, calidez y conocimiento médico sólido — para que cada consulta sea un espacio de confianza real.",
};

export const CONTACT = {
  // Teléfonos
  phone_citas: "6181879509",
  phone_citas_display: "618 187 9509",
  phone_urgencias: "6181686184",
  phone_urgencias_display: "618 168 6184",

  // WhatsApp — número en formato internacional sin + ni espacios (código México: 52)
  whatsapp: "526181879509",
  whatsapp_message: "Hola Dra. Sofía, me gustaría agendar una cita.",

  // Redes y correo
  email: "sofiavargas.astorga@gmail.com",
  instagram: "@dra.sofivargas",
  instagram_url: "https://www.instagram.com/dra.sofivargas",

  // Dirección
  clinic_name: "Centro Médico SIONÉ",
  office: "Consultorio 5",
  address: "Paseo de los Pinos #501, Col. Esperanza",
  city: "Durango, Dgo., México",

  // TODO: Reemplazar con el enlace real a Google Maps
  maps_url:
    "https://maps.google.com/?q=Paseo+de+los+Pinos+501+Col.+Esperanza+Durango",
};

export const HOURS: { day: string; time: string }[] = [
  { day: "Lunes – Viernes", time: "9:00 am – 2:00 pm  ·  4:00 pm – 7:00 pm" },
  { day: "Sábado", time: "9:00 am – 1:00 pm" },
  { day: "Domingo", time: "Cerrado" },
];

export const SERVICES: {
  id: string;
  title: string;
  description: string;
}[] = [
  {
    id: "recien-nacido",
    title: "Atención al Recién Nacido",
    description:
      "Evaluación completa del neonato en sus primeros días de vida. Orientación a padres primerizos sobre lactancia, sueño seguro y señales de alerta.",
  },
  {
    id: "crecimiento",
    title: "Control de Crecimiento y Desarrollo",
    description:
      "Seguimiento del desarrollo físico, motor y cognitivo en cada etapa. Detección oportuna de cualquier variación en la curva de crecimiento.",
  },
  {
    id: "vacunacion",
    title: "Orientación en Vacunación",
    description:
      "Esquema de vacunación completo, actualizado y explicado con claridad. Resolución de dudas sobre vacunas del calendario oficial y opcionales.",
  },
  {
    id: "consulta-general",
    title: "Consulta Pediátrica General",
    description:
      "Diagnóstico y tratamiento de enfermedades comunes: infecciones, alergias, problemas digestivos, respiratorios y de conducta.",
  },
  {
    id: "seguimiento",
    title: "Seguimiento de Salud Infantil",
    description:
      "Revisiones periódicas preventivas para detectar de manera temprana cualquier alteración y garantizar el bienestar continuo de tu hijo.",
  },
  {
    id: "evaluacion",
    title: "Evaluación Integral",
    description:
      "Valoración completa del estado de salud: nutrición, hábitos, sueño, desarrollo emocional y bienestar general del niño.",
  },
];

export const WHY_CHOOSE: {
  title: string;
  description: string;
}[] = [
  {
    title: "Trato cálido y cercano",
    description:
      "Cada visita es un espacio seguro. Tu hijo será atendido con paciencia, respeto y cariño genuino desde el primer momento.",
  },
  {
    title: "Comunicación clara con los padres",
    description:
      "Explico diagnósticos y tratamientos en un lenguaje comprensible, sin tecnicismos innecesarios. Ninguna pregunta es demasiado pequeña.",
  },
  {
    title: "Atención verdaderamente personalizada",
    description:
      "Conozco la historia de cada niño y doy seguimiento real a su evolución. No existen consultas genéricas aquí.",
  },
  {
    title: "Certificación vigente",
    description:
      "Certificada por el Consejo Mexicano de Pediatría y con actualización constante en evidencia clínica y guías internacionales.",
  },
  {
    title: "Accesibilidad y respuesta rápida",
    description:
      "Disponible por WhatsApp para dudas puntuales y con número de urgencias exclusivo para cuando más lo necesitas.",
  },
  {
    title: "Vocación genuina",
    description:
      "La pediatría no es solo mi profesión — es mi vocación. Acompañar el crecimiento sano de cada niño es lo que me motiva cada día.",
  },
];

export const FAQS: { question: string; answer: string }[] = [
  {
    question: "¿Desde qué edad atiende la Dra. Sofía?",
    answer:
      "Atiendo desde el recién nacido hasta la adolescencia. Es ideal traer a tu bebé en los primeros días de vida para una evaluación inicial y orientación completa para los papás.",
  },
  {
    question: "¿Cómo agendo una cita?",
    answer:
      "Puedes escribirme directamente por WhatsApp o llamar al número de citas. Te respondo a la brevedad para encontrar el horario más conveniente para ti y tu familia.",
  },
  {
    question: "¿Qué debo llevar a la primera consulta?",
    answer:
      "Trae la cartilla de vacunación de tu hijo, cualquier estudio médico previo si tiene, y una lista de las dudas o preocupaciones que quieras resolver. No hay nada demasiado pequeño para preguntar.",
  },
  {
    question: "¿Atienden urgencias?",
    answer:
      "Sí. Cuento con un número exclusivo para urgencias disponible para situaciones que requieran atención inmediata fuera del horario de consulta.",
  },
  {
    question: "¿Tiene convenio con seguros médicos?",
    answer:
      "Por el momento la consulta es de pago particular. Te invito a contactarme directamente para más información sobre tarifas y opciones de pago.",
  },
  {
    question: "¿Puedo resolver dudas rápidas por WhatsApp?",
    answer:
      "Sí, dentro de mis posibilidades respondo dudas puntuales por WhatsApp. Para situaciones más complejas, siempre recomendaré una consulta formal para darte la atención que mereces.",
  },
];
