'use client';

import { PostWithDeteils } from '@/utils/CustomInterface';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


interface NewsCardProps {
    post: PostWithDeteils;
}

// --------------------------------------------------------
// FUNÇÃO UTILITÁRIA PARA TRUNCAR TEXTO
// --------------------------------------------------------
const truncateText = (text: string | undefined, maxLength: number): string => {
    if (!text) return 'Conteúdo indisponível.';
    if (text.length <= maxLength) return text;
    
    // Trunca e adiciona reticências
    return text.substring(0, maxLength).trim() + '...';
};


// Componente de Cartão de Notícia Modernizado
export const NewsCard: React.FC<NewsCardProps> = ({ post }) => {
    
    // Limites de caracteres definidos para padronização
    const TITLE_MAX_LENGTH = 70; // Títulos longos causam desalinhamento
    const RESUMO_MAX_LENGTH = 150; // Um limite para o resumo, além do line-clamp

    // Aplica a formatação e a truncagem
    const formattedDate = new Intl.DateTimeFormat('pt-MZ', { 
        year: 'numeric', month: 'long', day: 'numeric' 
    }).format(post.publicado_em ? new Date(post.publicado_em) : new Date());

    const truncatedTitle = truncateText(post.titulo ?? undefined, TITLE_MAX_LENGTH);
    const truncatedResumo = truncateText(post.resumo ?? undefined, RESUMO_MAX_LENGTH);


    return (
        <Link 
            href={`/noticia/${post.slug}`} 
            className="flex flex-col h-full flex-none w-80 lg:w-96 rounded-xl overflow-hidden bg-gray-800 border border-green-900/50 hover:border-green-500/80 transition-all duration-300 shadow-xl hover:shadow-green-500/20 group snap-center"
        >
            {/* Imagem de Capa com Efeito de Hover */}
            <div className="relative h-48 overflow-hidden flex-shrink-0">
                <Image 
                    src={post.imagem_capa?.caminho || '/placeholder-image.png'} 
                    alt={post.titulo} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    fill
                    sizes="(max-width: 1024px) 320px, 384px"
                    loading="lazy"
                />
                {/* Metadados na Imagem */}
                <span className="absolute top-3 right-3 bg-green-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {post.categoria.nome}
                </span>
            </div>

            {/* Corpo do Cartão - flex-grow para ocupar espaço restante */}
            <div className="p-5 flex flex-col flex-grow">
                
                {/* Título e Resumo (Conteúdo principal) */}
                <div className="flex-grow">
                    <h4 
                        className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300 min-h-[56px]"
                        title={post.titulo} // Adiciona tooltip com o título completo
                    >
                        {truncatedTitle}
                    </h4>
                    {/* O line-clamp-3 garante que a descrição tenha no máximo 3 linhas */}
                    <p className="text-sm text-gray-400 mb-4 line-clamp-3 min-h-[60px]"> 
                        {/* Usamos truncatedResumo aqui como backup para garantir um tamanho razoável */}
                        {truncatedResumo}
                    </p>
                </div>
                
                {/* Rodapé Fixo na Parte Inferior */}
                <div className="mt-4 pt-3 border-t border-gray-700">
                    <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>{formattedDate}</span>
                        <span className="font-medium text-gray-300">Por {post.autor.nome}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};