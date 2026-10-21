const imageUrl = (filename) => `${import.meta.env.BASE_URL}images/${filename}`;

export const images = {
  craft: imageUrl("craft.jpg"),
  hero: imageUrl("hero.jpg"),
  kitchen: imageUrl("kitchen.jpg"),
  bedroom: imageUrl("bedroom.jpg"),
  closet: imageUrl("closet.jpg"),
  living: imageUrl("living.jpg"),
  office: imageUrl("office.jpg"),
  bathroom: imageUrl("bathroom.jpg"),
  commercial: imageUrl("commercial.jpg"),
  detail: imageUrl("detail.jpg"),
  kitchen2: imageUrl("kitchen2.jpg"),
};
export const projects = [
  {
    id: "horizonte",
    name: "Cozinha Horizonte",
    category: "Cozinhas",
    image: images.hero,
    extra: images.kitchen,
    description:
      "Linhas limpas, madeira natural e bancadas para compartilhar a rotina. Um ambiente pensado para cozinhar e estar junto.",
    material: "Amadeirado natural · tons areia",
    concept: "Integração e convivência",
  },
  {
    id: "aurora",
    name: "Apartamento Aurora",
    category: "Salas",
    image: images.living,
    extra: images.detail,
    description:
      "Uma composição acolhedora que conecta os ambientes. Tons neutros e mobiliário de linhas leves trazem equilíbrio à rotina.",
    material: "Madeira clara · acabamento fosco",
    concept: "Leveza e continuidade",
  },
  {
    id: "essencial",
    name: "Closet Essencial",
    category: "Quartos",
    image: images.closet,
    extra: images.bedroom,
    description:
      "Cada peça no seu lugar. Uma proposta de organização que combina compartimentos práticos e acabamentos suaves.",
    material: "Amadeirado · detalhes metálicos",
    concept: "Organização personalizada",
  },
  {
    id: "nogueira",
    name: "Sala Nogueira",
    category: "Salas",
    image: images.detail,
    extra: images.living,
    description:
      "Texturas naturais e volumes equilibrados fazem do espaço um convite para desacelerar e receber.",
    material: "Amadeirado · tons neutros",
    concept: "Conforto e personalidade",
  },
  {
    id: "axis",
    name: "Home Office Axis",
    category: "Home offices",
    image: images.office,
    extra: images.detail,
    description:
      "Uma área de trabalho que integra concentração, armazenamento e espaço para boas ideias.",
    material: "Madeira clara · metais",
    concept: "Foco e funcionalidade",
  },
  {
    id: "serena",
    name: "Suíte Serena",
    category: "Quartos",
    image: images.bedroom,
    extra: images.closet,
    description:
      "Um refúgio de tons suaves, com soluções que valorizam o descanso e deixam a rotina mais simples.",
    material: "Tons claros · texturas naturais",
    concept: "Tranquilidade e acolhimento",
  },
  {
    id: "forma",
    name: "Espaço Comercial Forma",
    category: "Comerciais",
    image: images.commercial,
    extra: images.office,
    description:
      "Uma proposta que traduz a identidade do negócio em um espaço funcional, organizado e convidativo.",
    material: "Amadeirado · detalhes escuros",
    concept: "Identidade e experiência",
  },
  {
    id: "terracota",
    name: "Cozinha Terracota",
    category: "Cozinhas",
    image: images.kitchen2,
    extra: images.kitchen,
    description:
      "A praticidade encontra a beleza dos materiais. Armazenamento e superfícies de trabalho em uma composição atemporal.",
    material: "Madeira · tons terrosos",
    concept: "Praticidade e aconchego",
  },
];
