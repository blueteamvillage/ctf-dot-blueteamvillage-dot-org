/*
 * EkoParty 2026 page copy, in English and Argentine Spanish (voseo — the page
 * is for a Buenos Aires audience, so Spanish is the default).
 *
 * Never translated, per the event spec: flags, hashes, filenames, paths,
 * commands, scenario identifiers (INC-000 …), challenge titles, and product
 * names (SkillBit, Docker, GitHub Container Registry). Those live in the
 * challenge data or as literals in the page, not in here.
 *
 * `es` is typed against `typeof en`, so a key added to one language fails the
 * build until it exists in the other.
 */

export type Lang = "es" | "en"

const en = {
  langToggle: { label: "Language", es: "Español", en: "English" },

  hero: {
    eyebrow: "Blue Team Village · BlueSpace",
    subtitle: "BlueSpace Argentina",
    body: "Join Blue Team Village and BlueSpace for a hands-on defensive cybersecurity experience in Buenos Aires. Investigate malware artifacts, analyze containerized evidence, reconstruct a realistic security incident, and test your OSINT skills.",
    body2:
      "The experience includes beginner-friendly investigations and advanced challenges adapted from the DEF CON 34 Project Obsidian competition.",
    cards: {
      dates: "October 7–9, 2026",
      place: "Buenos Aires, Argentina",
      malware: "Malware Forensics",
      ir: "Incident Response",
      osint: "OSINT/GEOSINT",
      scoring: "SkillBit Scoring",
    },
    ctaPrimary: "Join the CTF",
    ctaSecondary: "Prepare Your System",
    ctaOsint: "Start the OSINT Challenge",
  },

  about: {
    eyebrow: "The collaboration",
    heading: "Blue Team Village × BlueSpace",
    body: "BlueSpace is EkoParty's community space for defensive security, and for 2026 it hosts the Blue Team Village CTF in Buenos Aires. You compete in person at the Centro de Convenciones, with the BTV team providing technical support remotely. Everything runs in Spanish and English.",
    body2:
      "The lineup is adapted from Project Obsidian, the competition BTV ran at DEF CON 34 — rebuilt for a shorter event and a smaller, sharper set of challenges.",
  },

  overview: {
    eyebrow: "What you're walking into",
    heading: "Competition Overview",
    challenges: "Challenges",
    points: "Total points",
    scenarios: "Scenarios",
    tracks: "Scored tracks",
    scenariosDetail: "7 malware + INC-030 capstone",
    note: "Malware Forensics and the Incident Response Capstone are 2,700 points across 16 challenges. OSINT/GEOSINT adds 8 more at 150 points each (1,200 points), for 24 challenges and 3,900 points in total.",
  },

  malware: {
    eyebrow: "Track 01",
    heading: "Malware Forensics",
    body: "Investigate safe forensic snapshots from realistic Linux incidents. Examine processes, persistence mechanisms, configuration files, malware indicators, and network artifacts to determine what happened.",
    meta: "10 challenges · 2,100 points · 7 scenarios",
  },

  ir: {
    eyebrow: "Track 02",
    heading: "Incident Response Capstone",
    body: "Investigate selected phases of the Northbridge Logistics incident. Correlate identity, endpoint, and network evidence to identify initial access, establish the timeline, analyze the foothold, and determine the lateral-movement method.",
    body2:
      "The six questions form one connected investigation, but each is scored independently — you can complete them in any order and you don't need to finish one to attempt the next.",
    meta: "6 challenges · 600 points · INC-030",
  },

  osint: {
    eyebrow: "Track 03",
    heading: "OSINT / GEOSINT",
    body: "Examine panoramic imagery and environmental clues to determine where an incident or observation occurred. Identify landmarks, infrastructure, language, road markings, and other geographic indicators before submitting your finding.",
    body2:
      "Browser-based and mobile-friendly — no Docker, no virtual machine, no local SIEM. Instructions are available in Spanish and English.",
    cta: "Open the GEOSINT environment",
    meta: "8 challenges · 150 points each · 1,200 points",
  },

  lineup: {
    eyebrow: "All 24 challenges",
    heading: "Challenge Lineup",
    intro:
      "Grouped by track and scenario. A challenge can be listed here before it is launchable — the button stays disabled until its evidence and scoring have passed validation.",
    filters: {
      all: "All Challenges",
      malware: "Malware Forensics",
      ir: "Incident Response",
      osint: "OSINT/GEOSINT",
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
      available: "Available",
    },
    countOne: "challenge",
    countMany: "challenges",
    pointsShown: "points shown",
    empty: "No challenges match this filter yet.",
    emptyHint: "Try 'All Challenges' to see the full lineup.",
    card: {
      scenario: "Scenario",
      difficulty: "Difficulty",
      points: "Points",
      environment: "Environment",
      launch: "Launch in SkillBit",
      notYet: "Not yet available",
    },
    availability: {
      available: "Available",
      "coming-soon": "Coming Soon",
      unavailable: "Temporarily Unavailable",
    },
    difficulty: {
      Beginner: "Beginner",
      Intermediate: "Intermediate",
      Advanced: "Advanced",
      TBA: "To be assigned",
    },
  },

  participate: {
    eyebrow: "Getting started",
    heading: "How to Participate",
    steps: [
      "Register or sign in through SkillBit.",
      "Compete solo or join or create a team of up to 4.",
      "Select a challenge track.",
      "Open the provided container, evidence package, or OSINT environment.",
      "Analyze the evidence and determine the answer.",
      "Submit the flag through SkillBit.",
      "Ask in the BTV Discord if you need assistance.",
    ],
    notice:
      "Challenge availability may change while the BTV team completes final validation and event preparation.",
  },

  tech: {
    eyebrow: "Before you arrive",
    heading: "Technical Setup",
    intro:
      "Do this before you get to the venue. Conference wifi is not the place to discover you need a 2 GB image.",
    allHeading: "All participants",
    all: [
      "Laptop with a current web browser",
      "Reliable internet access",
      "A SkillBit account",
      "Access to BTV, SkillBit, GitHub Container Registry, and GEOSINT domains",
      "Ability to download event artifacts",
    ],
    osintHeading: "OSINT participants",
    osint: [
      "Browser with JavaScript and WebGL enabled",
      "No local virtual machine, SIEM, or Docker installation required",
    ],
    malwareHeading: "Malware & capstone participants",
    malware: [
      "Docker Desktop or Docker Engine",
      "Minimum 8 GB RAM",
      "20 GB free storage recommended",
      "Command-line access",
      "Ability to pull approved images from GitHub Container Registry",
    ],
    appleSilicon:
      "On Apple Silicon, some images may need AMD64 emulation. Where that applies, the challenge will say so and give you the flag to pass.",
  },

  schedule: {
    eyebrow: "When things happen",
    heading: "Event Schedule",
    tz: "All times are Argentina Time (ART, UTC−3).",
    rows: [
      { day: "Wednesday, October 7", what: "CTF start", time: "09:00" },
      { day: "Friday, October 9", what: "Scoreboard hidden", time: "14:00" },
      { day: "Friday, October 9", what: "CTF end", time: "17:00" },
    ],
  },

  rules: {
    eyebrow: "The ground rules",
    heading: "Rules & Eligibility",
    items: [
      "Open to all EkoParty attendees. In-person participation at BlueSpace.",
      "Flags are submitted through SkillBit only. Scores are final as recorded there.",
      "Do not attack the scoring platform, the venue network, or other participants.",
      "Do not share flags or answers with other teams during the competition.",
      "All evidence is sanitized and safe to analyze. Nothing in the challenges should be run outside its container.",
      "The Blue Team Village Code of Conduct applies for the whole event.",
    ],
    teamSize: "Maximum team size",
    teamSizeValue: "4",
    prizes: "Prize eligibility",
    prizesValue: "In-person attendance required",
  },

  skillbit: {
    eyebrow: "Scoring and submission",
    heading: "SkillBit Access",
    body: "Registration is open now. Challenge launch, flag submission, scoring, and the leaderboard all run through SkillBit. You need an account before the competition opens.",
    cta: "Open SkillBit",
  },

  support: {
    eyebrow: "If you get stuck",
    heading: "Support",
    body: "BTV staff provide technical support remotely throughout the event, with BlueSpace volunteers on site at the Centro de Convenciones. Ask for help in the BTV Discord.",
    channel: "Join the BTV Discord",
  },

  partners: {
    eyebrow: "With thanks to",
    heading: "Partners & Acknowledgements",
    body: "This event is a collaboration between Blue Team Village, EkoParty, and BlueSpace, with scoring provided by SkillBit. The challenge lineup is adapted from Project Obsidian at DEF CON 34, built by BTV volunteers.",
  },

  faqEyebrow: "Common questions",
  faqHeading: "Frequently Asked Questions",

  faq: [
    {
      q: "Do I need to be at EkoParty in person?",
      a: "Yes — the CTF runs in person at BlueSpace, Centro de Convenciones Buenos Aires. BTV provides technical support remotely.",
    },
    {
      q: "Do I need a team?",
      a: "No. You can compete solo or in a team of up to 4.",
    },
    {
      q: "Is this beginner-friendly?",
      a: "Yes. Eight of the sixteen malware and capstone challenges are Beginner or Intermediate, and the OSINT track needs nothing but a browser. The Advanced challenges are there if you want them.",
    },
    {
      q: "Do I need to know Linux?",
      a: "For the malware-forensics and capstone tracks, basic command-line comfort helps a lot. The OSINT track needs none.",
    },
    {
      q: "Will the challenges work on an Apple Silicon Mac?",
      a: "Yes. Where a challenge image needs AMD64 emulation, the instructions tell you exactly what to pass.",
    },
    {
      q: "Is the malware real?",
      a: "No. Every challenge uses sanitized forensic snapshots and inert artifacts. Nothing executes and nothing calls out.",
    },
    {
      q: "In which language are the challenges?",
      a: "Challenge descriptions and instructions are available in Spanish and English. Technical identifiers — filenames, paths, commands, hashes — stay unchanged in both.",
    },
    {
      q: "Why are some launch buttons disabled?",
      a: "A challenge appears in the lineup once it is confirmed for the event, but its button only activates after its evidence, answer, grader, and SkillBit import have passed validation.",
    },
  ],

  legal: {
    eyebrow: "The fine print",
    heading: "Code of Conduct, Privacy & Terms",
    body: "Participating in the BTV CTF means agreeing to the Blue Team Village Code of Conduct, and to the terms and privacy policy for this site.",
    coc: "Code of Conduct",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },

  backToChallenges: "All challenges",
}

export type EkopartyCopy = typeof en

const es: EkopartyCopy = {
  langToggle: { label: "Idioma", es: "Español", en: "English" },

  hero: {
    eyebrow: "Blue Team Village · BlueSpace",
    subtitle: "BlueSpace Argentina",
    body: "Sumate a Blue Team Village y BlueSpace para una experiencia práctica de ciberseguridad defensiva en Buenos Aires. Investigá artefactos de malware, analizá evidencia en contenedores, reconstruí un incidente de seguridad realista y poné a prueba tus habilidades de OSINT.",
    body2:
      "La experiencia incluye investigaciones accesibles para principiantes y desafíos avanzados adaptados de la competencia Project Obsidian de DEF CON 34.",
    cards: {
      dates: "7 al 9 de octubre de 2026",
      place: "Buenos Aires, Argentina",
      malware: "Forense de malware",
      ir: "Respuesta a incidentes",
      osint: "OSINT/GEOSINT",
      scoring: "Puntaje en SkillBit",
    },
    ctaPrimary: "Sumate al CTF",
    ctaSecondary: "Prepará tu equipo",
    ctaOsint: "Empezá el desafío OSINT",
  },

  about: {
    eyebrow: "La colaboración",
    heading: "Blue Team Village × BlueSpace",
    body: "BlueSpace es el espacio comunitario de seguridad defensiva de EkoParty, y en 2026 recibe al CTF de Blue Team Village en Buenos Aires. Vas a competir presencialmente en el Centro de Convenciones, con el equipo de BTV brindando soporte técnico de forma remota. Todo se desarrolla en español e inglés.",
    body2:
      "El conjunto de desafíos está adaptado de Project Obsidian, la competencia que BTV presentó en DEF CON 34, reconstruida para un evento más corto y un conjunto de desafíos más acotado.",
  },

  overview: {
    eyebrow: "Qué te espera",
    heading: "Resumen de la competencia",
    challenges: "Desafíos",
    points: "Puntos totales",
    scenarios: "Escenarios",
    tracks: "Pistas puntuadas",
    scenariosDetail: "7 de malware + capstone INC-030",
    note: "Forense de malware y el capstone de respuesta a incidentes suman 2.700 puntos en 16 desafíos. OSINT/GEOSINT agrega 8 desafíos más de 150 puntos cada uno (1.200 puntos), para un total de 24 desafíos y 3.900 puntos.",
  },

  malware: {
    eyebrow: "Pista 01",
    heading: "Forense de malware",
    body: "Investigá capturas forenses seguras de incidentes reales en Linux. Examiná procesos, mecanismos de persistencia, archivos de configuración, indicadores de malware y artefactos de red para determinar qué ocurrió.",
    meta: "10 desafíos · 2.100 puntos · 7 escenarios",
  },

  ir: {
    eyebrow: "Pista 02",
    heading: "Capstone de respuesta a incidentes",
    body: "Investigá fases seleccionadas del incidente de Northbridge Logistics. Correlacioná evidencia de identidad, endpoint y red para identificar el acceso inicial, establecer la línea de tiempo, analizar el punto de apoyo y determinar el método de movimiento lateral.",
    body2:
      "Las seis preguntas forman una única investigación conectada, pero cada una se puntúa de forma independiente: podés resolverlas en cualquier orden y no necesitás terminar una para intentar la siguiente.",
    meta: "6 desafíos · 600 puntos · INC-030",
  },

  osint: {
    eyebrow: "Pista 03",
    heading: "OSINT / GEOSINT",
    body: "Examiná imágenes panorámicas y pistas del entorno para determinar dónde ocurrió un incidente u observación. Identificá puntos de referencia, infraestructura, idioma, marcas viales y otros indicadores geográficos antes de enviar tu resultado.",
    body2:
      "Funciona en el navegador y es compatible con dispositivos móviles: sin Docker, sin máquina virtual y sin SIEM local. Las instrucciones están disponibles en español e inglés.",
    cta: "Abrir el entorno GEOSINT",
    meta: "8 desafíos · 150 puntos cada uno · 1.200 puntos",
  },

  lineup: {
    eyebrow: "Los 24 desafíos",
    heading: "Listado de desafíos",
    intro:
      "Agrupados por pista y escenario. Un desafío puede aparecer acá antes de estar disponible: el botón permanece deshabilitado hasta que su evidencia y su puntaje pasen la validación.",
    filters: {
      all: "Todos los desafíos",
      malware: "Forense de malware",
      ir: "Respuesta a incidentes",
      osint: "OSINT/GEOSINT",
      beginner: "Principiante",
      intermediate: "Intermedio",
      advanced: "Avanzado",
      available: "Disponibles",
    },
    countOne: "desafío",
    countMany: "desafíos",
    pointsShown: "puntos mostrados",
    empty: "Todavía no hay desafíos que coincidan con este filtro.",
    emptyHint: "Probá con «Todos los desafíos» para ver el listado completo.",
    card: {
      scenario: "Escenario",
      difficulty: "Dificultad",
      points: "Puntos",
      environment: "Entorno",
      launch: "Abrir en SkillBit",
      notYet: "Todavía no disponible",
    },
    availability: {
      available: "Disponible",
      "coming-soon": "Próximamente",
      unavailable: "No disponible temporalmente",
    },
    difficulty: {
      Beginner: "Principiante",
      Intermediate: "Intermedio",
      Advanced: "Avanzado",
      TBA: "A definir",
    },
  },

  participate: {
    eyebrow: "Para empezar",
    heading: "Cómo participar",
    steps: [
      "Registrate o iniciá sesión en SkillBit.",
      "Competí en solitario o sumate a un equipo, o creá uno, de hasta 4 personas.",
      "Elegí una pista de desafíos.",
      "Abrí el contenedor, el paquete de evidencia o el entorno OSINT provisto.",
      "Analizá la evidencia y determiná la respuesta.",
      "Enviá la flag a través de SkillBit.",
      "Preguntá en el Discord de BTV si necesitás ayuda.",
    ],
    notice:
      "La disponibilidad de los desafíos puede cambiar mientras el equipo de BTV completa la validación final y la preparación del evento.",
  },

  tech: {
    eyebrow: "Antes de llegar",
    heading: "Preparación técnica",
    intro:
      "Hacé esto antes de llegar al venue. El wifi del evento no es el lugar para descubrir que necesitás bajar una imagen de 2 GB.",
    allHeading: "Todos los participantes",
    all: [
      "Notebook con un navegador web actualizado",
      "Conexión a internet estable",
      "Una cuenta de SkillBit",
      "Acceso a los dominios de BTV, SkillBit, GitHub Container Registry y GEOSINT",
      "Posibilidad de descargar los artefactos del evento",
    ],
    osintHeading: "Participantes de OSINT",
    osint: [
      "Navegador con JavaScript y WebGL habilitados",
      "No se requiere máquina virtual, SIEM ni Docker en local",
    ],
    malwareHeading: "Participantes de malware y capstone",
    malware: [
      "Docker Desktop o Docker Engine",
      "Mínimo 8 GB de RAM",
      "Se recomiendan 20 GB de almacenamiento libre",
      "Acceso a la línea de comandos",
      "Posibilidad de descargar las imágenes aprobadas desde GitHub Container Registry",
    ],
    appleSilicon:
      "En equipos con Apple Silicon, algunas imágenes pueden requerir emulación AMD64. Cuando corresponda, el desafío te lo indica y te da el flag a utilizar.",
  },

  schedule: {
    eyebrow: "Cuándo pasa cada cosa",
    heading: "Cronograma del evento",
    tz: "Todos los horarios son hora de Argentina (ART, UTC−3).",
    rows: [
      { day: "Miércoles 7 de octubre", what: "Inicio del CTF", time: "09:00" },
      { day: "Viernes 9 de octubre", what: "Se oculta la tabla de posiciones", time: "14:00" },
      { day: "Viernes 9 de octubre", what: "Cierre del CTF", time: "17:00" },
    ],
  },

  rules: {
    eyebrow: "Las reglas básicas",
    heading: "Reglas y elegibilidad",
    items: [
      "Abierto a todas las personas asistentes a EkoParty. Participación presencial en BlueSpace.",
      "Las flags se envían únicamente a través de SkillBit. Los puntajes son definitivos según lo registrado allí.",
      "No ataques la plataforma de puntaje, la red del venue ni a otros participantes.",
      "No compartas flags ni respuestas con otros equipos durante la competencia.",
      "Toda la evidencia está saneada y es segura de analizar. Nada de lo que hay en los desafíos debe ejecutarse fuera de su contenedor.",
      "El Código de Conducta de Blue Team Village rige durante todo el evento.",
    ],
    teamSize: "Tamaño máximo de equipo",
    teamSizeValue: "4",
    prizes: "Elegibilidad para premios",
    prizesValue: "Se requiere presencia en el evento",
  },

  skillbit: {
    eyebrow: "Puntaje y envíos",
    heading: "Acceso a SkillBit",
    body: "La inscripción ya está abierta. El lanzamiento de desafíos, el envío de flags, el puntaje y la tabla de posiciones funcionan a través de SkillBit. Necesitás una cuenta antes de que abra la competencia.",
    cta: "Abrir SkillBit",
  },

  support: {
    eyebrow: "Si te trabás",
    heading: "Soporte",
    body: "El equipo de BTV brinda soporte técnico de forma remota durante todo el evento, con voluntarios de BlueSpace presentes en el Centro de Convenciones. Pedí ayuda en el Discord de BTV.",
    channel: "Sumate al Discord de BTV",
  },

  partners: {
    eyebrow: "Agradecimientos",
    heading: "Socios y agradecimientos",
    body: "Este evento es una colaboración entre Blue Team Village, EkoParty y BlueSpace, con el puntaje provisto por SkillBit. El conjunto de desafíos está adaptado de Project Obsidian en DEF CON 34, construido por voluntarios de BTV.",
  },

  faqEyebrow: "Preguntas frecuentes",
  faqHeading: "Preguntas frecuentes",

  faq: [
    {
      q: "¿Necesito estar presente en EkoParty?",
      a: "Sí: el CTF se desarrolla de forma presencial en BlueSpace, Centro de Convenciones Buenos Aires. BTV brinda soporte técnico de forma remota.",
    },
    {
      q: "¿Necesito un equipo?",
      a: "No. Podés competir en solitario o en un equipo de hasta 4 personas.",
    },
    {
      q: "¿Es apto para principiantes?",
      a: "Sí. Ocho de los dieciséis desafíos de malware y capstone son de nivel principiante o intermedio, y la pista de OSINT no necesita más que un navegador. Los desafíos avanzados están ahí si los querés.",
    },
    {
      q: "¿Necesito saber Linux?",
      a: "Para las pistas de forense de malware y el capstone, manejarse con la línea de comandos ayuda bastante. La pista de OSINT no lo requiere.",
    },
    {
      q: "¿Los desafíos funcionan en una Mac con Apple Silicon?",
      a: "Sí. Cuando una imagen requiere emulación AMD64, las instrucciones te indican exactamente qué parámetro usar.",
    },
    {
      q: "¿El malware es real?",
      a: "No. Todos los desafíos usan capturas forenses saneadas y artefactos inertes. Nada se ejecuta y nada se comunica hacia afuera.",
    },
    {
      q: "¿En qué idioma están los desafíos?",
      a: "Las descripciones e instrucciones están disponibles en español e inglés. Los identificadores técnicos (nombres de archivo, rutas, comandos, hashes) se mantienen sin cambios en ambos idiomas.",
    },
    {
      q: "¿Por qué algunos botones de lanzamiento están deshabilitados?",
      a: "Un desafío aparece en el listado una vez confirmado para el evento, pero su botón se activa recién cuando su evidencia, respuesta, corrector e importación en SkillBit pasaron la validación.",
    },
  ],

  legal: {
    eyebrow: "La letra chica",
    heading: "Código de Conducta, privacidad y términos",
    body: "Participar en el CTF de BTV implica aceptar el Código de Conducta de Blue Team Village y los términos y la política de privacidad de este sitio.",
    coc: "Código de Conducta",
    privacy: "Política de privacidad",
    terms: "Términos del servicio",
  },

  backToChallenges: "Todos los desafíos",
}

export const EKOPARTY_COPY: Record<Lang, EkopartyCopy> = { en, es }
