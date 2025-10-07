'use client';

import React, { useEffect, useState } from 'react';
import { Search, List, ChevronLeft, ChevronRight, Hash } from 'lucide-react';
import { Header } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { NewsCard } from '@/components/noticia/NewsCard';
import { PostWithDeteils } from '@/utils/CustomInterface';

// Dados MOCK de categorias e tags
const MOCK_CATEGORIES = [
    { name: 'Todos', slug: 'all', count: 12 },
    { name: 'Alertas', slug: 'alerts', count: 4 },
    { name: 'Capacitação', slug: 'training', count: 3 },
    { name: 'Vulnerabilidades', slug: 'vulnerabilities', count: 5 },
];



const NewsArchivePage: React.FC = () => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [posts, setPosts] = useState<PostWithDeteils[]>([]);
    const [activeCategory, setActiveCategory] = useState('all');
    const [totalPages, setTotalPages] = useState(posts.length > 0 ? Math.ceil(posts.length / 6) : 1);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            // Opcional: Voltar ao topo da página ao mudar de página
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    useEffect(() => {
    const getPost = async () => {
      try {

        const request = await fetch(`/api/posts`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            credentials: 'include'
          },
        });

        if (!request.ok) {
          throw new Error('Erro ao criar conta');
        }

        const response = await request.json();
        setPosts(response.data)
        setTotalPages(response.total || 1);
        console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        //setLoading(false)
      }
    }
    getPost();
  }, []);

    const Pagination: React.FC = () => (
        <div className="flex justify-center items-center space-x-2 mt-12">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-full text-gray-400 disabled:opacity-50 hover:bg-gray-700 transition-colors"
            >
                <ChevronLeft size={20} />
            </button>
            
            {/* Exibe os números de página (simplificado) */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors
                        ${currentPage === page 
                            ? 'bg-green-500 text-gray-900 shadow-md' 
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full text-gray-400 disabled:opacity-50 hover:bg-gray-700 transition-colors"
            >
                <ChevronRight size={20} />
            </button>
        </div>
    );

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-full mx-auto px-[8%]">
                
                {/* Título do Arquivo */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                        Blog de Notícias e Alertas
                    </h1>
                    <p className="text-xl text-gray-400">
                        Mantenha-se atualizado com as últimas informações de segurança e publicações.
                    </p>
                </div>

                {/* Layout Principal: Grid e Sidebar */}
                <div className="grid lg:grid-cols-12 gap-12">
                    
                    {/* 1. SIDEBAR (Filtros e Categorias) */}
                    <aside className="lg:col-span-3">
                        <div className="bg-gray-800 p-6 rounded-xl border border-green-800/50 shadow-lg sticky top-8">
                            
                            {/* Busca */}
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                <Search size={20} className="mr-2 text-green-500" /> Pesquisar
                            </h3>
                            <div className="relative mb-8">
                                <input
                                    type="text"
                                    placeholder="Buscar posts..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-2 pl-10 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500"
                                />
                                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            </div>

                            {/* Categorias */}
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center border-t border-gray-700 pt-6">
                                <List size={20} className="mr-2 text-green-500" /> Categorias
                            </h3>
                            <nav className="space-y-2">
                                {MOCK_CATEGORIES.map((cat) => (
                                    <button
                                        key={cat.slug}
                                        onClick={() => setActiveCategory(cat.slug)}
                                        className={`w-full text-left flex justify-between items-center px-3 py-2 rounded-lg transition-colors
                                            ${activeCategory === cat.slug 
                                                ? 'bg-green-500 text-gray-900 font-bold' 
                                                : 'text-gray-300 hover:bg-gray-700'
                                            }`}
                                    >
                                        <span>{cat.name}</span>
                                        <span className={`text-xs px-2 py-0.5 rounded-full ${activeCategory === cat.slug ? 'bg-gray-900 text-green-500' : 'bg-gray-600 text-gray-300'}`}>
                                            {cat.count}
                                        </span>
                                    </button>
                                ))}
                            </nav>

                        </div>
                    </aside>

                    {/* 2. ARQUIVO DE POSTS (Grid) */}
                    <main className="lg:col-span-9">
                        
                        {posts.length > 0 ? (
                            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
                                {posts.map((post) => (
                                    <NewsCard key={post.id} post={post} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center p-12 bg-gray-800 rounded-xl border border-gray-700">
                                <Hash size={48} className="mx-auto text-gray-500 mb-4" />
                                <p className="text-xl text-gray-400">
                                    Nenhuma notícia encontrada com os critérios atuais.
                                </p>
                            </div>
                        )}

                        {/* Paginação */}
                        <Pagination />
                    </main>
                </div>
            </div>
        </div>
            <Footer />
        </>
    );
};

export default NewsArchivePage;