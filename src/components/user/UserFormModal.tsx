'use client';

import React, { useState, FormEvent } from 'react';
import { User, Mail, Lock, CheckCircle, Save, UserPlus, X, Loader2 } from 'lucide-react';
import { Usuario } from '@/generated/prisma'; 

// Defina os tipos de usuário disponíveis (Ajuste conforme seu Prisma Enum)
const USER_TYPES = [
    { value: 'ADMIN', label: 'Administrador' },
    { value: 'EDITOR', label: 'Editor de Conteúdo' },
    { value: 'VIEWER', label: 'Apenas Visualização' },
];

interface FormData {
    nome: string;
    email: string;
    tipo: string;
    senha?: string; 
    confirmarSenha?: string;
}

interface UserFormModalProps {
    isOpen: boolean;
    initialUser: Usuario | null; // Usuário para editar ou null para adicionar
    onClose: () => void;
    onSuccess: (user: Usuario) => void;
}

// -----------------------------------------------------------------
// FUNÇÃO DO FORMULÁRIO (Componente interno do Modal)
// -----------------------------------------------------------------
const UserFormContent: React.FC<{ initialUser: Usuario | null, onSuccess: (u: Usuario) => void, onCancel: () => void }> = ({ initialUser, onSuccess, onCancel }) => {
    
    const isEditing = !!initialUser;
    const [formData, setFormData] = useState<FormData>({
        nome: initialUser?.nome || '',
        email: initialUser?.email || '',
        tipo: initialUser?.tipo || USER_TYPES[0].value,
        senha: '',
        confirmarSenha: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = (): boolean => {
        setError(null);
        // [Lógica de Validação - Removida para brevidade, mas idêntica à anterior]
        if (!formData.nome || !formData.email || !formData.tipo) {
            setError('Todos os campos obrigatórios (*) devem ser preenchidos.');
            return false;
        }
        const passwordProvided = formData.senha && formData.senha.length > 0;
        if (!isEditing || passwordProvided) {
            if (!passwordProvided) {
                setError('A senha é obrigatória para criar um novo usuário.');
                return false;
            }
            if (formData.senha !== formData.confirmarSenha) {
                setError('As senhas digitadas não coincidem.');
                return false;
            }
            if (!formData.senha || formData.senha.length < 8) {
                setError('A senha deve ter pelo menos 8 caracteres.');
                return false;
            }
        }
        return true;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        setError(null);

        const apiEndpoint = isEditing ? `/api/usuarios/${initialUser!.id}` : '/api/auth/register';
        const method = isEditing ? 'PUT' : 'POST';

        const dataToSend: Partial<FormData> = { nome: formData.nome, email: formData.email, tipo: formData.tipo };
        if (formData.senha && formData.senha.length > 0) {
            dataToSend.senha = formData.senha;
        }

        try {
            const response = await fetch(apiEndpoint, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSend),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `Erro ao ${isEditing ? 'editar' : 'adicionar'} usuário.`);
            }

            const updatedUser = await response.json();
            onSuccess(updatedUser); 

        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else setError('Ocorreu um erro na requisição.');
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
                <div className="p-3 flex items-center bg-red-900/40 text-red-300 rounded-lg border border-red-700">
                    <X size={20} className="mr-2 flex-shrink-0" />
                    <p className="text-sm font-medium">{error}</p>
                </div>
            )}

            {/* Campos do Formulário */}
            <div className="flex items-center bg-gray-700/50 rounded-lg border border-gray-700 focus-within:border-blue-500 transition-all">
                <User size={20} className="text-gray-400 mx-3 flex-shrink-0" />
                <input type="text" name="nome" placeholder="Nome Completo *" required value={formData.nome} onChange={handleChange} className="w-full p-3 bg-transparent text-white focus:outline-none" disabled={isLoading} />
            </div>

            <div className="flex items-center bg-gray-700/50 rounded-lg border border-gray-700 focus-within:border-blue-500 transition-all">
                <Mail size={20} className="text-gray-400 mx-3 flex-shrink-0" />
                <input type="email" name="email" placeholder="Email *" required value={formData.email} onChange={handleChange} className="w-full p-3 bg-transparent text-white focus:outline-none" disabled={isLoading} />
            </div>
            
            <div className="flex items-center bg-gray-700/50 rounded-lg border border-gray-700 focus-within:border-blue-500 transition-all">
                <CheckCircle size={20} className="text-gray-400 mx-3 flex-shrink-0" />
                <select name="tipo" value={formData.tipo} onChange={handleChange} required className="w-full p-3 bg-transparent text-white focus:outline-none appearance-none cursor-pointer" disabled={isLoading}>
                    {USER_TYPES.map(type => (
                        <option key={type.value} value={type.value} className="bg-gray-800 text-white">
                            {type.label}
                        </option>
                    ))}
                </select>
            </div>

            <p className="text-xs text-gray-500 pt-2">
                {isEditing ? 'Deixe os campos de senha vazios se não quiser alterá-la.' : 'Defina a senha para o novo usuário *'}
            </p>

            <div className="flex items-center bg-gray-700/50 rounded-lg border border-gray-700 focus-within:border-blue-500 transition-all">
                <Lock size={20} className="text-gray-400 mx-3 flex-shrink-0" />
                <input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} className="w-full p-3 bg-transparent text-white focus:outline-none" disabled={isLoading} />
            </div>

            <div className="flex items-center bg-gray-700/50 rounded-lg border border-gray-700 focus-within:border-blue-500 transition-all">
                <Lock size={20} className="text-gray-400 mx-3 flex-shrink-0" />
                <input type="password" name="confirmarSenha" placeholder="Confirmar Senha" value={formData.confirmarSenha} onChange={handleChange} className="w-full p-3 bg-transparent text-white focus:outline-none" disabled={isLoading} />
            </div>
            
            {/* BOTÕES DE AÇÃO */}
            <div className="flex justify-end space-x-4 pt-4">
                <button type="button" onClick={onCancel} className="px-4 py-2 rounded-lg font-semibold text-gray-400 bg-gray-700 hover:bg-gray-600 transition-colors" disabled={isLoading}>
                    Cancelar
                </button>
                <button
                    type="submit"
                    className={`min-w-[150px] flex items-center justify-center px-4 py-2 rounded-lg font-bold text-white transition-all duration-300 ${
                        isLoading ? 'bg-blue-800/60 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-md'
                    }`}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <Loader2 size={20} className="animate-spin mr-2" />
                            Salvando...
                        </>
                    ) : (
                        isEditing ? 'Salvar Alterações' : 'Adicionar Usuário'
                    )}
                </button>
            </div>
        </form>
    );
};


// -----------------------------------------------------------------
// ESTRUTURA DO MODAL (Componente Wrapper)
// -----------------------------------------------------------------
export const UserFormModal: React.FC<UserFormModalProps> = ({ isOpen, initialUser, onClose, onSuccess }) => {
    if (!isOpen) return null;

    const title = initialUser ? 'Editar Usuário' : 'Novo Usuário';
    const Icon = initialUser ? Save : UserPlus;

    return (
        // Overlay escuro
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={onClose}>
            {/* Modal Container */}
            <div 
                className="bg-gray-800 rounded-xl shadow-2xl border border-gray-700 max-w-lg w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()} // Impede que o clique dentro feche o modal
            >
                {/* Cabeçalho do Modal */}
                <div className="sticky top-0 bg-gray-800 p-6 border-b border-gray-700 flex items-center justify-between z-10">
                    <h2 className="text-2xl font-bold text-blue-400 flex items-center">
                        <Icon className="mr-3" size={24} />
                        {title}
                    </h2>
                    <button onClick={onClose} className="p-2 rounded-full text-gray-400 hover:bg-gray-700 transition-colors" aria-label="Fechar">
                        <X size={24} />
                    </button>
                </div>

                {/* Corpo do Formulário */}
                <div className="p-6">
                    <UserFormContent 
                        initialUser={initialUser} 
                        onSuccess={onSuccess} 
                        onCancel={onClose}
                    />
                </div>
            </div>
        </div>
    );
};