/**
 * config.ts — Fonte única de dados do site da Dra. Larissa Coelho.
 * Para adaptar o site, edite APENAS este arquivo.
 */

const whatsappNumber = "5527992939667"; // formato internacional, sem símbolos
const whatsappMessage =
  "Olá! Vim pelo site e gostaria de agendar uma avaliação com a Dra. Larissa.";

export const config = {
  clinic: {
    name: "Dra. Larissa Coelho",
    tagline: "Odontologia Especializada",
    cro: "CRO 5421-ES",
    professional: "Dra. Larissa Coelho",
  },

  contact: {
    whatsappNumber,
    whatsappDisplay: "(27) 99293-9667",
    whatsappLink: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`,
    instagram: "https://www.instagram.com/dra.larissa_coelho_muniz?igsh=b2MwOGN3aTc5c28z",
    instagramHandle: "@dra.larissa_coelho_muniz",
    address: "Avenida São Paulo, 195, Praia da Costa, Vila Velha — ES",
    addressShort: "Praia da Costa, Vila Velha — ES",
    city: "Vila Velha — ES",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=Avenida+São+Paulo+195+Praia+da+Costa+Vila+Velha+ES",
    mapsEmbed:
      "https://www.google.com/maps?q=Avenida+São+Paulo+195+Praia+da+Costa+Vila+Velha+ES&output=embed",
  },

  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Tratamentos", href: "#tratamentos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Ambiente", href: "#ambiente" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Dúvidas", href: "#faq" },
  ],

  hero: {
    eyebrow: "Odontologia Especializada · Vila Velha — ES",
    title: "Seu sorriso, cuidado com delicadeza",
    subtitle:
      "Atendimento humanizado e especializado em odontopediatria, ortodontia e estética. Cada detalhe pensado para o seu conforto e o do seu filho.",
    cta: "Agendar avaliação",
    secondaryCta: "Conhecer tratamentos",
    photo: "/images/4.jpg",
    badge: {
      stat: "+4",
      label: "especialidades\nem um só lugar",
    },
  },

  about: {
    eyebrow: "Sobre mim",
    title: "Dra. Larissa Coelho",
    photo: "/images/1.jpeg",
    credentialLabel: "Registro profissional",
    paragraphs: [
      "Cirurgiã-dentista apaixonada por cuidar de sorrisos de todas as idades, com formação especializada e olhar atento para cada paciente.",
      "Meu compromisso é oferecer uma experiência acolhedora, segura e sofisticada — do primeiro contato ao resultado final. Acredito que um bom atendimento começa pela escuta e pela confiança.",
    ],
    credentials: [
      "Especialista em Odontopediatria",
      "Especialista em Ortodontia",
      "Invisalign Doctor",
      "Clínica Geral e Clareamento",
    ],
  },

  treatments: {
    eyebrow: "Tratamentos",
    title: "Cuidado especializado para cada sorriso",
    subtitle:
      "Tratamentos personalizados com tecnologia e técnica de ponta, sempre com foco no seu bem-estar.",
    items: [
      {
        icon: "Baby",
        title: "Odontopediatria",
        description:
          "Atendimento gentil e lúdico para os pequenos, criando uma relação positiva com o dentista desde cedo.",
      },
      {
        icon: "Smile",
        title: "Ortodontia",
        description:
          "Aparelhos fixos e alinhamento dental para harmonizar o sorriso com acompanhamento próximo.",
      },
      {
        icon: "Sparkles",
        title: "Invisalign",
        description:
          "Alinhadores transparentes e praticamente invisíveis para corrigir o sorriso com discrição e conforto.",
      },
      {
        icon: "Stars",
        title: "Clínica Geral e Clareamento",
        description:
          "Cuidados gerais e clareamento dental para um sorriso saudável, natural e luminoso.",
      },
    ],
  },

  differentials: {
    eyebrow: "Por que escolher",
    title: "Uma experiência pensada em cada detalhe",
    items: [
      {
        icon: "HeartHandshake",
        title: "Atendimento humanizado",
        description:
          "Escuta atenta e acolhimento em cada etapa, para você se sentir seguro e cuidado.",
      },
      {
        icon: "Award",
        title: "Especialização real",
        description:
          "Formação especializada em diferentes áreas, com tratamentos baseados em técnica e evidência.",
      },
      {
        icon: "Gem",
        title: "Ambiente premium",
        description:
          "Espaço sofisticado, calmo e impecável, planejado para o seu conforto.",
      },
      {
        icon: "Clock",
        title: "Pontualidade e organização",
        description:
          "Agenda respeitada e atendimento sem correria, no seu tempo.",
      },
    ],
  },

  ambiente: {
    eyebrow: "O ambiente",
    title: "Um espaço acolhedor e impecável",
    subtitle:
      "Cada ambiente foi pensado para transmitir calma, segurança e bem-estar desde o momento em que você chega.",
    images: [
      {
        src: "/images/clinica1.jpg",
        alt: "Recepção da clínica odontológica Dra. Larissa Coelho em Vila Velha",
      },
      {
        src: "/images/clinica2.jpg",
        alt: "Consultório odontológico da Dra. Larissa Coelho",
      },
      {
        src: "/images/clinica3.jpg",
        alt: "Sala de odontopediatria da clínica Dra. Larissa Coelho",
      },
      {
        src: "/images/clinica4.jpg",
        alt: "Ambiente acolhedor da clínica odontológica em Praia da Costa",
      },
    ],
  },

  testimonials: {
    eyebrow: "Depoimentos",
    title: "Quem confia o sorriso à Dra. Larissa",
    // Substitua por depoimentos reais com nomes e papéis dos pacientes
    items: [
      {
        quote:
          "Atendimento impecável e muito acolhedor. Minha filha adora ir ao dentista agora!",
        author: "Paciente",
        role: "Mãe de paciente",
      },
      {
        quote:
          "Profissional excelente, cuidadosa e atenciosa. O ambiente é lindo e me senti muito à vontade.",
        author: "Paciente",
        role: "Tratamento ortodôntico",
      },
      {
        quote:
          "Fiz o clareamento e o resultado superou as expectativas. Recomendo de olhos fechados.",
        author: "Paciente",
        role: "Clareamento",
      },
    ],
  },

  faq: {
    eyebrow: "Dúvidas frequentes",
    title: "Perguntas que talvez você tenha",
    items: [
      {
        question: "Como faço para agendar uma consulta?",
        answer:
          "É simples: clique em qualquer botão de WhatsApp aqui no site e fale diretamente com nossa equipe para escolher o melhor horário.",
      },
      {
        question: "A clínica atende crianças?",
        answer:
          "Sim! A Dra. Larissa é especialista em Odontopediatria e oferece um atendimento gentil e lúdico, pensado especialmente para os pequenos.",
      },
      {
        question: "Vocês trabalham com Invisalign?",
        answer:
          "Sim. A Dra. Larissa é Invisalign Doctor e oferece o tratamento com alinhadores transparentes, ideais para quem busca discrição e conforto.",
      },
      {
        question: "Onde fica a clínica?",
        answer:
          "Estamos na Avenida São Paulo, 195, Praia da Costa, Vila Velha — ES. Você encontra o mapa no rodapé do site.",
      },
      {
        question: "Quais formas de tratamento estão disponíveis?",
        answer:
          "Oferecemos Odontopediatria, Ortodontia, Invisalign, Clínica Geral e Clareamento. Na avaliação, indicamos o melhor plano para o seu caso.",
      },
    ],
  },

  ctaFinal: {
    title: "Pronto para cuidar do seu sorriso?",
    subtitle:
      "Agende sua avaliação e descubra um atendimento odontológico acolhedor, especializado e feito sob medida para você.",
    cta: "Agendar pelo WhatsApp",
  },

  footer: {
    description:
      "Odontologia especializada e humanizada em Vila Velha — ES. Cuidando de sorrisos de todas as idades.",
    navLabel: "Navegação",
    locationLabel: "Como chegar",
    rightsText: "Todos os direitos reservados.",
    developer: {
      name: "Urlan Dipré",
      url: "https://www.urlandipre.com.br",
    },
  },
} as const;

export type SiteConfig = typeof config;
