export const company = {
  name: "Linea Casa Planejados",
  phone: "5511999999999",
  phoneLabel: "(11) 99999-9999",
  email: "projetos@lineacasa.com.br",
  address: "Rua das Palmeiras, 380 — São Paulo — SP",
  hours: "Segunda a sexta, das 8h às 18h",
  instagram: "https://www.instagram.com/lineacasa.planejados/",
  instagramLabel: "@lineacasa.planejados",
  message:
    "Olá! Conheci a Linea Casa pelo site e gostaria de solicitar um orçamento para móveis planejados.",
  demo: true,
};
export const whatsappUrl = (message = company.message) =>
  `https://wa.me/${company.phone}?text=${encodeURIComponent(message)}`;
export const navigation = [
  ["Início", "inicio"],
  ["Ambientes", "ambientes"],
  ["Projetos", "projetos"],
  ["Processo", "processo"],
  ["Sobre", "sobre"],
  ["Contato", "contato"],
];
