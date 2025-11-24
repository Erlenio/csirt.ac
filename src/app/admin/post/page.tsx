'use client'
import AdminLayout from "@/components/AdminLayout";
import { PostWithDeteils } from "@/utils/CustomInterface";
import { Search, Plus, Edit, Trash2, Eye, Clock } from "lucide-react"; // Importamos novos ícones de ação
import Link from "next/link";
import React, { useEffect, useState } from "react";

// MOCK DATA para simular o resultado da API e auxiliar no desenvolvimento


const AdminPost: React.FC = () => {

    // Simulação do carregamento e manipulação de dados
    const [noticias, setNoticias] = useState<PostWithDeteils[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchString, setSearchString] = useState("");

    // Hook para carregar/filtrar dados
    useEffect(() => {
        const getNoticias = async () => {
            setIsLoading(true);
            try {
                // Em um ambiente real, você faria o fetch da API aqui
                const request = await fetch('/api/posts', {
                    method: 'GET', headers: {
                        'Content-Type': 'application/json',
                        credentials: 'include',
                    },
                });
                const response = await request.json();

                if (!request.ok) {
                    throw new Error(response.error || 'Falha ao carregar posts.');
                }

                // Filtra os dados localmente com base na searchString (pode ser feito no backend)
                const filteredData = response.data.filter((post: PostWithDeteils) =>
                    post.titulo.toLowerCase().includes(searchString.toLowerCase()) ||
                    post.autor.nome.toLowerCase().includes(searchString.toLowerCase())
                );

                setNoticias(filteredData);
            } catch (error) {
                console.error("Erro ao carregar notícias:", error);
                // Manter MOCK_ADMIN_POSTS caso o fetch real falhe
                // setNoticias(MOCK_ADMIN_POSTS); 
            } finally {
                setIsLoading(false);
            }
        };

        // Simulação do fetch, descomente para usar o fetch real:
        getNoticias(); 

        // Simulação de filtro local para o exemplo:
        const filtered = noticias.filter(post =>
            post.titulo.toLowerCase().includes(searchString.toLowerCase()) ||
            post.autor.nome.toLowerCase().includes(searchString.toLowerCase())
        );
        setNoticias(filtered);

    }, [searchString]); // Dispara o efeito sempre que a string de pesquisa mudar

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchString(e.target.value);
    }

    // Função de Exclusão (Simulada)
    const handleDelete = (postId: string) => {
        if (confirm(`Tem certeza que deseja EXCLUIR o post ID ${postId}?`)) {
            // Lógica para chamar /api/posts/[id] com método DELETE
            console.log(`Deletando post ID ${postId}...`);
            setNoticias(noticias.filter(p => p.id !== postId)); // Remove do estado local
        }
    };

    // Componente auxiliar para exibir o status
    const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
        let color = 'bg-gray-500';
        if (status === 'Publicado') color = 'bg-green-600';
        if (status === 'Rascunho') color = 'bg-yellow-600';
        if (status === 'Pendente') color = 'bg-blue-600';

        return (
            <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full text-white ${color}`}>
                {status}
            </span>
        );
    };

    // Componente da Tabela de Notícias
    const PostTable: React.FC = () => (
        <div className="bg-gray-800 rounded-xl shadow-lg border border-green-800/50 overflow-hidden">
            <table className="w-full text-sm text-left text-gray-400">
                <thead className="text-xs text-gray-200 uppercase bg-gray-700">
                    <tr>
                        <th scope="col" className="px-6 py-3">Título</th>
                        <th scope="col" className="px-6 py-3">Categoria</th>
                        <th scope="col" className="px-6 py-3">Autor</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                        <th scope="col" className="px-6 py-3">Data</th>
                        <th scope="col" className="px-6 py-3 text-center">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {noticias.length > 0 ? (
                        noticias.map((item) => (
                            <tr key={item.id} className="bg-gray-800 border-b border-gray-700 hover:bg-gray-700 transition-colors">
                                <th scope="row" className="px-6 py-2 font-medium text-white max-w-sm truncate">
                                    {item.titulo}
                                </th>
                                <td className="px-6 py-2 text-gray-300">
                                    {item.categoria.nome}
                                </td>
                                <td className="px-6 py-2">
                                    {item.autor.nome}
                                </td>
                                <td className="px-6 py-2">
                                    <StatusBadge status={item.status} />
                                </td>
                                <td className="px-6 py-2 flex items-center">
                                    <Clock size={14} className="mr-1 text-gray-500" />
                                    {item.publicado_em?.toLocaleDateString('pt-MZ') }
                                </td>
                                <td className="px-6 py-2 text-center space-x-2 flex">
                                    {/* Botões de Ação */}
                                    <Link href={`/admin/post/edit/${item.id}`} className="p-1.5 rounded-full text-blue-400 hover:bg-gray-600 transition-colors" title="Editar">
                                        <Edit size={18} />
                                    </Link>
                                    <Link href={`/noticia/${item.slug}`} target="_blank" className="p-1.5 rounded-full text-green-400 hover:bg-gray-600 transition-colors" title="Ver Publicamente">
                                        <Eye size={18} />
                                    </Link>
                                    <button onClick={() => handleDelete(item.id)} className="p-1.5 rounded-full text-red-400 hover:bg-gray-600 transition-colors" title="Excluir">
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                                {isLoading ? "A carregar notícias..." : "Nenhuma notícia encontrada."}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
    // Fim do Componente da Tabela

    return (
        <AdminLayout
            // Note: Não consigo inferir AdminLayout e CustomInterface, mantendo a estrutura original
            currentUser={undefined}
            current={3}
        >
            <header className="w-full sticky top-0 left-0 z-40 backdrop-blur-sm bg-gray-900/80">
                <nav className="w-full py-6 px-[9%] shadow-lg flex flex-col md:flex-row items-center justify-between border-b border-gray-700">
                    <h2 className="font-bold text-3xl text-green-500">
                        Gestão de Notícias
                    </h2>

                    <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-6 items-center justify-center mt-4 md:mt-0">

                        {/* Campo de Busca */}
                        <div className="relative w-full md:w-fit">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <Search className="w-5 h-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                id="table-search-posts"
                                className="block p-2.5 ps-10 text-sm text-white border border-gray-700 rounded-lg md:w-80 bg-gray-800 focus:ring-green-500 focus:border-green-500 w-full placeholder-gray-500"
                                placeholder="Pesquisar por título ou autor..."
                                value={searchString}
                                onChange={onChange}
                                disabled={isLoading}
                            />
                        </div>

                        {/* Botão Nova Publicação */}
                        <Link
                            href='/admin/post/new'
                            className="bg-green-500 text-gray-900 rounded-lg px-4 py-2.5 text-center flex items-center justify-center font-bold w-full md:w-fit hover:bg-green-400 transition-colors shadow-md"
                        >
                            <Plus size={20} className="mr-1" /> Nova Publicação
                        </Link>
                    </div>
                </nav>
            </header>

            <div className="px-[9%] py-10 max-w-screen">

                {isLoading && noticias.length === 0 ? (
                    <div className="text-center py-10 text-gray-400">A carregar dados...</div>
                ) : (
                    <PostTable />
                )}

            </div>

        </AdminLayout>
    );
}

export default AdminPost;