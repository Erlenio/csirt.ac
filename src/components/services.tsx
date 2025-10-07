import {
  Bug,
  AlertTriangle,
  Radar,
  GraduationCap,
  UserCheck,
} from "lucide-react";

// Definição da tipagem para os serviços
interface Service {
  icon: React.ElementType;
  imageUrl?: string;
  title: string;
  description: string;
  link: string;
  bulets?: string[];
}

// Dados de exemplo para os serviços (Seus dados originais)
const services: Service[] = [
  {
    icon: Bug,
    title: "Gestão de Incidentes de Segurança Cibernética",
    description: "Gerenciamos e resolvemos incidentes cibernéticos, mitigando os danos e prevenindo novos ataques de forma proativa.",
    link: "/services#gestao-de-vulnerabilidade",
    bulets: [
      "Resgisto de Incidentes",
      "Análise de Incidentes",
      "Análise Forense Computacional",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Gestão de Vulnerabilidades",
    description: "Identificamos, avaliamos e mitigamos vulnerabilidades em sistemas e redes para fortalecer a segurança da informação.",
    link: "/services#gestao-de-incidentes",
    bulets: [
      "Pesquisa de Vulnerabilidades",
      "Relatório de Vulnerabilidades",
      "Análise de Vulnerabilidades - PenTest",
      "Coordenação de Vulnerabilidades",
      "Envio de Alertas Sobre Vulnerabilidades",
      "Coordenação de Vulnerabilidades",
    ],
  },
  {
    icon: Radar,
    title: "Sensibilização",
    description: "Promovemos a conscientização sobre segurança cibernética através de campanhas, workshops e treinamentos para a comunidade académica.",
    link: "/services#coleta-e-analise",
    bulets: [
      "Coleta de Sensibilização",
      "Campanhas de Sensibilização, Seminarios e Webinares",
    ],
  },
  {
    icon: GraduationCap,
    title: "Transferência de Conhecimento",
    description: "Oferecemos treinamentos, workshops e materiais educativos para capacitar a comunidade académica em práticas de segurança cibernética.",
    link: "/services#treinamento-e-capacitacao",
    bulets: [
      "Apoio no Estabelecimento de CSIRTs institucionais",
      "Capacitação e Formação",
      "Exercicios de Segurança Cibernética",
      "Assessoria na Elaboracao de Políticas e Procedimentos de Segurança",
    ],
  },
  {
    icon: UserCheck,
    title: "Gestão de Eventos de Segurança",
    description: "Monitoramos e analisamos eventos de segurança para detectar e responder a ameaças de forma eficaz.",
    link: "/services#conscientizacao",
    bulets: [
      "Monitoria da Segurança Cibernética",
      "Análise de Eventos",
    ]
  },
];

export const Services = () => {
  return (
    <section id="services" className="px-[9%] py-16">
      <h3 className="text-3xl md:text-4xl font-bold text-center text-green-500 mb-12">
        Nossos Serviços
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            // O contêiner principal é o 'group' para o hover
            className="group relative overflow-hidden rounded-xl border border-green-800 bg-gray-800 p-8 text-center transition-all duration-500 hover:border-green-500 hover:bg-gray-700/50 flex flex-col items-center shadow-lg hover:shadow-green-500/30"
          >
            {/* 1. Conteúdo Visível (Icon e Título) */}
            <div className="transition-all duration-500 group-hover:-translate-y-20 group-hover:opacity-0 w-full flex flex-col items-center">
              <div className="rounded-full bg-green-500/20 p-4 transition-all duration-300 group-hover:bg-green-500 group-hover:text-gray-900">
                {/* Aqui você pode usar service.imageUrl se precisar de uma imagem */}
                <service.icon size={48} className="text-green-500 transition-colors duration-300 group-hover:text-gray-900" />
              </div>
              <h4 className="mt-4 text-xl font-bold text-white mb-2">{service.title}</h4>
              {/* Deixei a description oculta/removida no estado inicial para um visual mais limpo */}
              {/* <p className="text-gray-400">{service.description}</p> */}
            </div>

            {/* 2. Conteúdo Oculto (Bulets) */}
            <div
              className={`absolute inset-0 p-8 flex items-center justify-center transition-all duration-500 
                ${service.bulets ? 'opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0' : 'hidden'}
              `}
            >
              {service.bulets && (
                <div className="w-full text-left">
                  <h4 className="text-xl font-bold text-green-400 mb-3">{service.title}</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {service.bulets.map((bulet, buletIndex) => (
                      <li key={buletIndex} className="text-sm">
                        {bulet}
                      </li>
                    ))}
                  </ul>
                  {/* Opcional: Adicionar um link de "Saiba Mais" que aparece no hover */}
                  <a href={service.link} className="mt-4 inline-block text-green-400 hover:text-green-300 text-sm font-semibold">
                    Saiba Mais &rarr;
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};