'use client';

import AdminLayout from "@/components/AdminLayout";
import { UserFormModal } from "@/components/user/UserFormModal"; // Novo Import
import { Usuario } from "@/generated/prisma";
import { ChevronLeft, ChevronRight, Search, Loader2, XCircle, UserPlus, Edit3 } from "lucide-react";
import React, { ChangeEvent, useEffect, useState, useMemo, useCallback } from "react";

const AdminUsuarios: React.FC = () => {
    
    // ----------------------------------------------------
    // ESTADOS DO MODAL
    // ----------------------------------------------------
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userToEdit, setUserToEdit] = useState<Usuario | null>(null); // Usuário sendo editado

    // ----------------------------------------------------
    // ESTADOS DE DADOS
    // ----------------------------------------------------
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [searchString, setSearchString] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 10; 

    // Função para buscar os usuários
    const fetchUsers = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const request = await fetch('/api/usuarios', { method: 'GET', headers: { 'Content-Type': 'application/json', 'credentials': 'include' } });

            if (!request.ok) {
                const errorData = await request.json();
                throw new Error(errorData.message || `Erro ao carregar usuários: ${request.status}`);
            }
            
            const response: Usuario[] = await request.json();
            setUsuarios(response);
        } catch (err) {
            console.error("Erro ao carregar usuários:", err);
            if (err instanceof Error) {
                setError(err.message);
            } else setError("Não foi possível conectar ao servidor de usuários.");
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    // ----------------------------------------------------
    // LÓGICA DO MODAL
    // ----------------------------------------------------

    const handleOpenModal = (user: Usuario | null = null) => {
        setUserToEdit(user);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setUserToEdit(null);
    };

    const handleSuccess = (updatedUser: Usuario) => {
        // Atualiza a lista de usuários após sucesso (criação/edição)
        setUsuarios(prev => {
            if (userToEdit) {
                // Edição: Substitui o usuário antigo
                return prev.map(u => u.id === updatedUser.id ? updatedUser : u);
            } else {
                // Criação: Adiciona o novo usuário
                return [...prev, updatedUser];
            }
        });
        handleModalClose(); // Fecha o modal
    };


    // ----------------------------------------------------
    // LÓGICA DE BUSCA E PAGINAÇÃO (Mantidas)
    // ----------------------------------------------------
    const filteredUsers = useMemo(() => {
        // ... (Lógica de filtragem idêntica)
        if (!searchString) return usuarios;
        const lowerSearch = searchString.toLowerCase();
        return usuarios.filter(usuario => 
            usuario.nome.toLowerCase().includes(lowerSearch) || 
            usuario.email.toLowerCase().includes(lowerSearch)
        );
    }, [usuarios, searchString]);

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchString(e.target.value);
        setCurrentPage(1);
    };
    
    const totalPages = Math.ceil(filteredUsers.length / itemPerPage);
    const startIndex = (currentPage - 1) * itemPerPage;
    const currentUsers = filteredUsers.slice(startIndex, startIndex + itemPerPage);
    
    const handleNextPage = () => { setCurrentPage(prev => Math.min(prev + 1, totalPages)); };
    const handlePrevPage = () => { setCurrentPage(prev => Math.max(prev - 1, 1)); };

    // ----------------------------------------------------
    // RENDERIZAÇÃO
    // ----------------------------------------------------

    const renderTableContent = () => {
        // ... (Lógica de Loading, Erro e Vazio idêntica, mas com novas cores)
        if (isLoading) return <tr><td colSpan={6} className="py-10 text-center text-blue-500"><Loader2 size={32} className="animate-spin mx-auto mb-3" />A carregar dados...</td></tr>;
        if (error) return <tr><td colSpan={6} className="py-10 text-center text-red-400 bg-red-900/20"><XCircle size={32} className="mx-auto mb-3" /><p className="font-semibold">Erro de Conexão:</p><p className="text-sm">{error}</p></td></tr>;
        if (currentUsers.length === 0) return <tr><td colSpan={6} className="py-10 text-center text-gray-500">Nenhum usuário para exibir.</td></tr>;
        
        // Mapeamento dos usuários: Adicionamos um botão de Edição
        return currentUsers.map((usuario, index) => (
            <tr key={usuario.id || `user-${index}`} className="bg-gray-800 border-b border-gray-700 hover:bg-gray-700/50 transition-colors">
                <td className="p-4 w-12 text-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2" />
                </td>
                <td className="px-6 py-3 font-medium text-white">{usuario.nome}</td>
                <td className="px-6 py-3 hidden sm:table-cell text-gray-400">{usuario.email}</td>
                <td className="px-6 py-3 hidden md:table-cell text-blue-300 font-semibold">{usuario.tipo}</td>
                <td className="px-6 py-3 hidden md:table-cell text-gray-400">Padrão</td> 
                <td className="px-6 py-3 text-right">
                    <button 
                        onClick={() => handleOpenModal(usuario)}
                        className="font-medium text-blue-500 hover:text-blue-400 transition-colors inline-flex items-center"
                        aria-label={`Editar ${usuario.nome}`}
                    >
                        <Edit3 size={16} className="mr-1" /> Editar
                    </button>
                </td>
            </tr>
        ));
    }


    return (
        <AdminLayout currentUser={undefined} current={2}>
            <div className="bg-gray-900 min-h-screen">
                
                {/* CABEÇALHO COM AÇÕES */}
                <header className="w-full sticky top-0 bg-gray-800 border-b border-gray-700 z-10">
                    <nav className="max-w-7xl mx-auto py-6 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
                        <h2 className="font-extrabold text-3xl text-white mb-4 md:mb-0">
                            Gestão de Usuários
                        </h2>

                        <div className="flex flex-col-reverse md:flex-row gap-4 w-full md:w-auto items-center">

                            {/* Campo de Busca */}
                            <div className="relative w-full md:w-80">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <Search className="w-4 h-4 text-gray-500" />
                                </div>
                                <input 
                                    type="text" 
                                    id="table-search-users" 
                                    className="block p-2 ps-10 text-sm text-white border border-gray-700 rounded-lg w-full bg-gray-700/50 placeholder-gray-500 hover:border-blue-500 transition-colors focus:ring-blue-500 focus:border-blue-500" 
                                    placeholder="Pesquisar por nome ou email..." 
                                    value={searchString} 
                                    onChange={onChangeSearch} 
                                />
                            </div>

                            {/* Botão Novo Usuário (Abre Modal) */}
                            <button 
                                onClick={() => handleOpenModal(null)}
                                className="bg-blue-600 text-white rounded-lg px-4 py-2 text-center font-semibold w-full md:w-auto hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center" 
                            >
                                <UserPlus size={20} className="mr-2" /> Novo Usuário
                            </button>

                        </div>
                    </nav>
                </header>

                {/* CONTEÚDO PRINCIPAL (TABELA) */}
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
                    <div className="overflow-x-auto rounded-xl shadow-2xl border border-gray-700">
                        <table className="min-w-full w-full text-sm text-left text-white bg-gray-800">
                            
                            {/* CABEÇALHO DA TABELA */}
                            <thead className="text-xs text-gray-400 uppercase bg-gray-700 border-b border-gray-600">
                                <tr>
                                    <th scope="col" className="p-4 w-12">
                                        {/* Checkbox de seleção total */}
                                    </th>
                                    <th scope="col" className="px-6 py-3">Nome</th>
                                    <th scope="col" className="px-6 py-3 hidden sm:table-cell">Email</th> 
                                    <th scope="col" className="px-6 py-3 hidden md:table-cell">Tipo</th>
                                    <th scope="col" className="px-6 py-3 hidden md:table-cell">Previlégios</th>
                                    <th scope="col" className="px-6 py-3 text-right">Ação</th>
                                </tr>
                            </thead>
                            
                            {/* CORPO DA TABELA */}
                            <tbody>
                                {renderTableContent()}
                            </tbody>
                            
                            {/* RODAPÉ E PAGINAÇÃO */}
                            <tfoot className="text-xs text-gray-400 uppercase bg-gray-700 border-t border-gray-600">
                                <tr>
                                    <th colSpan={6} className="px-6 py-3">
                                        <div className="flex items-center justify-between text-sm">
                                            
                                            <span className="text-gray-400">
                                                Exibindo {currentUsers.length} de {filteredUsers.length} usuários
                                            </span>

                                            <div className="flex items-center gap-3">
                                                <span className="text-gray-300 font-medium">
                                                    Página {currentPage} de {totalPages}
                                                </span>
                                                
                                                <button 
                                                    onClick={handlePrevPage}
                                                    disabled={currentPage === 1}
                                                    className="p-1 rounded-md text-gray-300 transition-colors disabled:text-gray-600 disabled:cursor-not-allowed bg-gray-600 hover:bg-gray-500"
                                                    aria-label="Página anterior"
                                                >
                                                    <ChevronLeft size={20} />
                                                </button>
                                                
                                                <button 
                                                    onClick={handleNextPage}
                                                    disabled={currentPage === totalPages || totalPages === 0}
                                                    className="p-1 rounded-md text-gray-300 transition-colors disabled:text-gray-600 disabled:cursor-not-allowed bg-gray-600 hover:bg-gray-500"
                                                    aria-label="Próxima página"
                                                >
                                                    <ChevronRight size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>

            {/* O MODAL É RENDERIZADO NO FINAL */}
            <UserFormModal 
                isOpen={isModalOpen}
                initialUser={userToEdit}
                onClose={handleModalClose}
                onSuccess={handleSuccess}
            />
        </AdminLayout>
    );
}

export default AdminUsuarios;