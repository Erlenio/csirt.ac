import Link from 'next/link';
import { ArrowRight } from "lucide-react";
import { NewsCard } from "./NewsCard";
import { PostWithDeteils } from '@/utils/CustomInterface';

interface NewsSectionProps {
    // Recebe posts para o layout da homepage
    recentNews: PostWithDeteils[];
}

export const NewsSection: React.FC<NewsSectionProps> = ({ 
    recentNews 
}) => {
    return (
        <section className="w-full px-[9%] py-16 mb-20" id="news">
            
            {/* --- CABEÇALHO DA SEÇÃO (Título e Link) --- */}
            <div className="flex justify-between items-center mb-10">
                <h3 className="text-3xl md:text-4xl font-bold text-green-500 border-b-4 border-green-500/50 pb-1">
                    <span className="text-gray-100">Últimas</span> Notícias
                </h3>
                
                {/* Link "Ver Todas" */}
                <Link 
                    href="/noticia" 
                    className="flex items-center gap-2 text-lg font-semibold text-green-500 hover:text-green-400 transition-colors duration-300"
                >
                    Ver Blog Completo <ArrowRight size={20} />
                </Link>
            </div>

            {/* --- GRID DE NOTÍCIAS (4 Colunas) --- */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {recentNews.slice(0, 4).map((article) => (
                    <NewsCard key={article.id} post={article} />
                ))}
            </div>
        </section>
    );
}