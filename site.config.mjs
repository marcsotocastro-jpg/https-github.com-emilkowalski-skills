// Configuración de IA en Simple. Es lo único que necesitas tocar para publicar.
export default {
  name: 'IA en Simple',
  // Dominio definitivo, sin barra final. Cámbialo si al final usas iaensimple.es.
  url: 'https://iaensimple.com',

  // Titular del sitio (obligatorio por la LSSI en el aviso legal). Rellena tus datos reales.
  owner: {
    name: '[NOMBRE Y APELLIDOS O RAZÓN SOCIAL]',
    nif: '[NIF/CIF]',
    address: '[DIRECCIÓN POSTAL COMPLETA]',
    email: '[EMAIL DE CONTACTO]',
  },

  // Autor que firma las guías. Una persona real con nombre mejora la confianza (E-E-A-T).
  author: {
    name: { es: 'Equipo IA en Simple', en: 'The IA en Simple team' },
    bio: {
      es: 'Escribimos guías prácticas para que cualquier persona pueda usar la inteligencia artificial en su día a día, sin tecnicismos. Probamos cada ejemplo antes de publicarlo.',
      en: 'We write practical guides so anyone can use artificial intelligence in everyday life, without jargon. We test every example before publishing it.',
    },
  },

  // Google AdSense. 1) Pega tu ID de editor (ca-pub-…) para solicitar la revisión.
  // 2) Cuando te aprueben, crea un bloque por espacio y pega su número en "slots".
  adsense: {
    client: '', // ej. 'ca-pub-1234567890123456'
    feedLayoutKey: '', // data-ad-layout-key del bloque In-feed
    slots: {
      'after-intro': '',   // In-article, después de la introducción de cada guía
      'mid-article': '',   // In-article, a mitad de la guía
      'before-faq': '',    // Display, antes de las preguntas frecuentes
      'sidebar': '',       // Display 300×250 en la barra lateral (solo ordenador)
      'home-mid': '',      // Display horizontal en la portada
      'list-feed': '',     // In-feed dentro de los listados de guías
    },
  },

  // Google Analytics 4 (opcional), ej. 'G-XXXXXXXXXX'.
  ga4: '',

  // Redes sociales (deja vacías las que no uses).
  social: { instagram: '', tiktok: '', youtube: '', linkedin: '' },

  // Herramientas recomendadas. Pon tu enlace de afiliado en "aff" y se usará con rel="sponsored".
  pricesCheckedOn: { es: 'octubre de 2026', en: 'October 2026' },
  tools: [
    { n: 'ChatGPT', url: 'https://chatgpt.com', aff: '', r: 4.7,
      es: { d: 'El asistente de OpenAI para escribir, resolver dudas y analizar archivos.', u: 'Redactar, resumir, estudiar, programar', p: 'Gratis / desde 23 €/mes' },
      en: { d: "OpenAI's assistant for writing, answering questions and analysing files.", u: 'Writing, summarising, studying, coding', p: 'Free / from €23/mo' } },
    { n: 'Claude', url: 'https://claude.ai', aff: '', r: 4.7,
      es: { d: 'El asistente de Anthropic, muy bueno con textos largos y documentos.', u: 'Escribir con calidad, analizar PDF, código', p: 'Gratis / desde 18 €/mes' },
      en: { d: "Anthropic's assistant, strong with long texts and documents.", u: 'Quality writing, PDF analysis, code', p: 'Free / from €18/mo' } },
    { n: 'Gemini', url: 'https://gemini.google.com', aff: '', r: 4.4,
      es: { d: 'La IA de Google, integrada con Gmail, Docs y el buscador.', u: 'Resúmenes, trabajo con Google Workspace', p: 'Gratis / desde 22 €/mes' },
      en: { d: "Google's AI, built into Gmail, Docs and Search.", u: 'Summaries, Google Workspace tasks', p: 'Free / from €22/mo' } },
    { n: 'Perplexity', url: 'https://perplexity.ai', aff: '', r: 4.5,
      es: { d: 'Un buscador con IA que responde y cita sus fuentes.', u: 'Investigar y verificar datos', p: 'Gratis / desde 20 €/mes' },
      en: { d: 'An AI search engine that answers and cites its sources.', u: 'Research and fact-checking', p: 'Free / from €20/mo' } },
    { n: 'Canva', url: 'https://canva.com', aff: '', r: 4.6,
      es: { d: 'Diseño sencillo con funciones de IA para imágenes y presentaciones.', u: 'Publicaciones, logos, presentaciones', p: 'Gratis / desde 12 €/mes' },
      en: { d: 'Easy design with AI features for images and presentations.', u: 'Social posts, logos, slides', p: 'Free / from €12/mo' } },
    { n: 'Cursor', url: 'https://cursor.com', aff: '', r: 4.5,
      es: { d: 'Un editor de código con IA integrada.', u: 'Programar más rápido', p: 'Gratis / desde 20 $/mes' },
      en: { d: 'A code editor with built-in AI.', u: 'Coding faster', p: 'Free / from $20/mo' } },
    { n: 'Lovable', url: 'https://lovable.dev', aff: '', r: 4.3,
      es: { d: 'Crea aplicaciones web describiéndolas con tus palabras.', u: 'Prototipos y webs sin programar', p: 'Gratis / desde 25 $/mes' },
      en: { d: 'Build web apps by describing them in plain words.', u: 'Prototypes and sites without coding', p: 'Free / from $25/mo' } },
  ],
};
