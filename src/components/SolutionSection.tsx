import React from 'react';
import { ShieldAlert, Zap, BookOpen, Lock, Activity } from 'lucide-react';

// Estrutura dos Serviços
const SOLUTIONS_DATA = [
    {
        icon: Zap,
        title: "Resposta a Incidentes",
        description: "Ações imediatas para conter, erradicar e recuperar sistemas após um ataque cibernético, minimizando perdas e tempo de inatividade.",
        details: [
            "Análise Forense Digital",
            "Contenção de Malware",
            "Apoio à Remediação",
        ],
        color: "text-red-400", // Destaque para emergência
    },
    {
        icon: ShieldAlert,
        title: "Monitoramento e Alerta",
        description: "Serviços proativos para identificar vulnerabilidades e ameaças antes que se tornem incidentes, mantendo a comunidade informada.",
        details: [
            "Monitoramento de Rede (24/7)",
            "Gestão de Vulnerabilidades",
            "Emissão de Alertas e Boletins",
        ],
        color: "text-yellow-400", // Destaque para prevenção
    },
    {
        icon: BookOpen,
        title: "Conscientização e Capacitação",
        description: "Programas de treino e formação contínua para elevar o nível de conhecimento em segurança cibernética de toda a comunidade.",
        details: [
            "Treinamento Anti-Phishing",
            "Workshops de Segurança (Especializados)",
            "Boas Práticas de Navegação Segura",
        ],
        color: "text-green-500", // Destaque para educação
    },
];

export const SolutionsSection: React.FC = () => {
    return (
        <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 mb-20" id="solutions">
            <div className="max-w-7xl mx-auto">
                
                {/* CABEÇALHO */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-extrabold text-white mb-3">
                        Nossas <span className="text-green-500">Soluções</span> de Segurança
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Oferecemos um portfólio completo de serviços cibernéticos, focado nas necessidades exclusivas do setor académico.
                    </p>
                </div>

                {/* GRID DE SERVIÇOS */}
                <div className="grid md:grid-cols-3 gap-8">
                    {SOLUTIONS_DATA.map((service, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 shadow-xl flex flex-col h-full"
                        >
                            <service.icon size={48} className={`${service.color} mb-4`} />
                            
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {service.title}
                            </h3>
                            
                            <p className="text-gray-400 mb-6 flex-grow">
                                {service.description}
                            </p>

                            {/* Detalhes/Diferenciais */}
                            <div className="mt-auto">
                                <h4 className="font-semibold text-green-500 mb-2">Inclui:</h4>
                                <ul className="space-y-1 text-sm text-gray-300">
                                    {service.details.map((detail, i) => (
                                        <li key={i} className="flex items-center">
                                            <Lock size={16} className="mr-2 text-green-600 flex-shrink-0" /> {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CALL TO ACTION (CTA) */}
                <div className="mt-16 text-center">
                    <p className="text-xl text-white mb-4">
                        Deseja saber mais sobre como implementamos estas soluções?
                    </p>
                    <a 
                        href="/contato" 
                        className="inline-flex items-center px-8 py-3 text-lg font-bold rounded-full bg-green-500 text-gray-900 hover:bg-green-400 transition-colors duration-300 shadow-lg"
                    >
                        <Activity size={20} className="mr-2" /> Fale com um Especialista
                    </a>
                </div>
            </div>
        </section>
    );
};