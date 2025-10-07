
// Tipagem do post baseada no seu modelo Prisma
export interface Post {
  id: string;
  titulo: string;
  slug: string;
  resumo?: string;
  publicado_em: Date; // Usaremos Date para formatar
  imagem_capa: { url: string }; // Simplificado para a URL da imagem
  autor: { nome: string }; // Simplificado para o nome do autor
  categoria: { nome: string }; // Simplificado para o nome da categoria
}

// Dados de exemplo (simulando a estrutura do Prisma)
export const MOCK_POSTS: Post[] = [
  {
    id: "p1",
    titulo: "Alerta de Phishing: Nova Campanha Visa Credenciais Acadêmicas",
    slug: "alerta-phishing-credenciais",
    resumo: "Detalhes sobre a última onda de ataques de phishing direcionados à comunidade universitária...",
    publicado_em: new Date(2025, 9, 25),
    imagem_capa: { url: "/blog/phishing.jpeg" },
    autor: { nome: "MoRENet CSIRT" },
    categoria: { nome: "Alertas" },
  },
  {
    id: "p2",
    titulo: "Workshop de Resposta a Incidentes com a Reitoria",
    slug: "workshop-resposta-reitoria",
    resumo: "Capacitação focada em líderes para garantir a coordenação eficaz em momentos críticos de segurança.",
    publicado_em: new Date(2025, 9, 20),
    imagem_capa: { url: "/blog/resposta-a-incidents.png" },
    autor: { nome: "João Silva" },
    categoria: { nome: "Capacitação" },
  },
  {
    id: "p3",
    titulo: "Nova Política de Senhas Reforça a Segurança da Rede",
    slug: "nova-politica-senhas",
    resumo: "Implementação de novas diretrizes para senhas, visando mitigar ataques de força bruta.",
    publicado_em: new Date(2025, 9, 15),
    imagem_capa: { url: "/blog/politica.jpeg" },
    autor: { nome: "Ana Sofia" },
    categoria: { nome: "Comunicação" },
  },
  {
    id: "p4",
    titulo: "Nova Política de Senhas Reforça a Segurança da Rede",
    slug: "nova-politica-senhas",
    resumo: "Implementação de novas diretrizes para senhas, visando mitigar ataques de força bruta.",
    publicado_em: new Date(2025, 9, 15),
    imagem_capa: { url: "/blog/senhas-poli.jpeg" },
    autor: { nome: "Ana Sofia" },
    categoria: { nome: "Comunicação" },
  },
];