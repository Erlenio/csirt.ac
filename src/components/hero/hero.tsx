"use client";

import { Building, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

// Define a tipagem para o objeto de notícia.
interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  link: string;
}

// Simula a busca de notícias de uma API.
// Em um projeto real, você faria uma chamada fetch aqui.
const fetchRecentNews = (): Promise<NewsArticle[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Ataque de Phishing à Universidade de X",
          excerpt: "Equipe CSIRT.AC emite alerta sobre nova campanha de phishing...",
          link: "/blog/ataque-phishing-universidade-x",
        },
        {
          id: 2,
          title: "Seminário sobre Cibersegurança para Estudantes",
          excerpt: "Participe do nosso próximo seminário gratuito sobre proteção de dados...",
          link: "/blog/seminario-ciberseguranca",
        },
        {
          id: 3,
          title: "Novas Ferramentas de Detecção de Malware Disponíveis",
          excerpt: "CSIRT.AC lança conjunto de ferramentas para auxiliar na segurança da rede acadêmica...",
          link: "/blog/novas-ferramentas-malware",
        },
        {
          id: 4,
          title: "Relatório Anual de Incidentes de Segurança 2024",
          excerpt: "Confira as estatísticas e os principais incidentes reportados no último ano...",
          link: "/blog/relatorio-anual-2024",
        },
        {
            id: 5,
            title: "Dicas de segurança para quem trabalha em casa",
            excerpt: "Com o aumento do teletrabalho, saiba como proteger seus dados e sua rede...",
            link: "/blog/dicas-seguranca-teletrabalho",
          },
      ]);
    }, 1500); // Simula um atraso de rede.
  });
};

export const Hero = () => {
  const [recentNews, setRecentNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  // Efeito para buscar as notícias assim que o componente é montado.
  useEffect(() => {
    fetchRecentNews().then((data) => {
      setRecentNews(data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="bg-gray-950 text-white min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16 flex flex-col justify-center">
      {/* Container Principal */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-16">
        {/* Seção "Quem somos?" */}
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-500 mb-4">
            CSIRT.AC
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6">
            Equipe de Resposta a Incidentes de Cibersegurança
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            A MoRENet-CSIRT é a Equipe de Resposta a Incidentes de Segurança Cibernética da MoRENet para a comunidade académica e científica nacional.
          </p>
          <p className="text-lg text-gray-300">
            O objetivo principal desta iniciativa é estabelecer um único ponto de contacto para todos os incidentes de segurança envolvendo os membros da MoRENet e coordenar o tratamento e resposta a incidentes e a troca de informações críticas entre as várias partes interessadas.
          </p>
        </div>
        {/* Ícone ou Ilustração */}
        <Building className="text-green-500 w-48 h-48 md:w-56 md:h-56 shrink-0" />
      </div>

      {/* Seção de Notícias Recentes */}
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-green-500">Notícias Recentes</h3>
          <Link href="/blog" className="flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors duration-300">
            Ver todas
            <ArrowRight size={20} />
          </Link>
        </div>
        
        {loading ? (
          <div className="flex overflow-hidden items-center justify-center h-48 text-gray-500">
            Carregando notícias...
          </div>
        ) : (
          <div className="flex gap-6 overflow-x-auto pb-4 custom-scrollbar snap-x snap-mandatory">
            {recentNews.map((article) => (
              <Link
                href={article.link}
                key={article.id}
                className="flex-none w-80 p-6 rounded-xl bg-gray-800 border border-green-800 hover:bg-gray-700/50 transition-colors duration-300 snap-center"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{article.title}</h4>
                <p className="text-sm text-gray-400">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        )}
        
        {/* Estilo para a barra de rolagem */}
        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            height: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #2d3748; /* gray-800 */
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #10b981; /* green-500 */
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #059669; /* green-600 */
          }
        `}</style>
      </div>
    </section>
  );
};