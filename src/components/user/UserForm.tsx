'use client';

import React, { useState, FormEvent } from 'react';
import { User, Mail, Lock, CheckCircle, Save, UserPlus, XCircle, Loader2 } from 'lucide-react';
import { Usuario } from '@/generated/prisma'; // Assumindo que este é o tipo do seu usuário

// Defina os tipos de usuário disponíveis (você deve usar o Enum do seu Prisma)
const USER_TYPES = [
    { value: 'ADMIN', label: 'Administrador' },
    { value: 'EDITOR', label: 'Editor de Conteúdo' },
    { value: 'VIEWER', label: 'Apenas Visualização' },
];

interface UserFormProps {
    // Se for undefined, está no modo "Adicionar". Se for um objeto, está no modo "Editar".
    initialUser?: Usuario | null; 
    onSuccess: (user: Usuario) => void;
    onCancel: () => void;
}

// Tipo simplificado para o estado do formulário
interface FormData {
    nome: string;
    email: string;
    tipo: string;
    // Senha é obrigatória na criação, opcional na edição
    senha?: string; 
    confirmarSenha?: string;
}

export const UserForm: React.FC<UserFormProps> = ({ initialUser, onSuccess, onCancel }) => {
    
    const isEditing = !!initialUser;
    const [formData, setFormData] = useState<FormData>({
        nome: initialUser?.nome || '',
        email: initialUser?.email || '',
        tipo: initialUser?.tipo || USER_TYPES[0].value, // Define o primeiro tipo como padrão
        senha: '',
        confirmarSenha: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // -----------------------------------------------------------------
    // HANDLERS
    // -----------------------------------------------------------------

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = (): boolean => {
        setError(null);
        if (!formData.nome || !formData.email || !formData.tipo) {
            setError('Todos os campos obrigatórios (*) devem ser preenchidos.');
            return false;
        }
        
        // Validação de Senha (apenas se estiver criando ou se a senha foi alterada)
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

        const apiEndpoint = isEditing ? `/api/usuarios/${initialUser!.id}` : '/api/usuarios';
        const method = isEditing ? 'PUT' : 'POST';

        // Prepara os dados: remove campos vazios e de confirmação
        const dataToSend: Partial<FormData> = {
            nome: formData.nome,
            email: formData.email,
            tipo: formData.tipo,
        };

        // Inclui a senha apenas se ela foi fornecida
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
            onSuccess(updatedUser); // Chama a função de sucesso no componente pai

        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else setError('Ocorreu um erro na requisição.');
        } finally {
            setIsLoading(false);
        }
    };

    // -----------------------------------------------------------------
    // RENDERIZAÇÃO
    // -----------------------------------------------------------------

    return (
        <div className="max-w-xl mx-auto p-6 bg-gray-800 rounded-xl shadow-2xl border border-gray-700">
            <h2 className="text-3xl font-bold text-green-400 mb-6 border-b border-gray-700 pb-3 flex items-center">
                {isEditing ? <Save className="mr-3" size={28} /> : <UserPlus className="mr-3" size={28} />}
                {isEditing ? `Editar Usuário: ${initialUser?.nome}` : 'Adicionar Novo Usuário'}
            </h2>

            {error && (
                <div className="p-3 mb-4 flex items-center bg-red-900/40 text-red-300 rounded-lg border border-red-700">
                    <XCircle size={20} className="mr-2 flex-shrink-0" />
                    <p className="text-sm font-medium">{error}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* CAMPO NOME */}
                <div className="flex items-center bg-gray-900 rounded-lg border border-gray-700 focus-within:border-green-500 transition-all">
                    <User size={20} className="text-gray-500 mx-3 flex-shrink-0" />
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome Completo *"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full p-3 bg-transparent text-white focus:outline-none"
                        disabled={isLoading}
                    />
                </div>

                {/* CAMPO EMAIL */}
                <div className="flex items-center bg-gray-900 rounded-lg border border-gray-700 focus-within:border-green-500 transition-all">
                    <Mail size={20} className="text-gray-500 mx-3 flex-shrink-0" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email *"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 bg-transparent text-white focus:outline-none"
                        disabled={isLoading}
                    />
                </div>
                
                {/* CAMPO TIPO DE USUÁRIO (Select) */}
                <div className="flex items-center bg-gray-900 rounded-lg border border-gray-700 focus-within:border-green-500 transition-all">
                    <CheckCircle size={20} className="text-gray-500 mx-3 flex-shrink-0" />
                    <select
                        name="tipo"
                        value={formData.tipo}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-transparent text-white focus:outline-none appearance-none cursor-pointer"
                        disabled={isLoading}
                    >
                        {USER_TYPES.map(type => (
                            <option key={type.value} value={type.value} className="bg-gray-800 text-white">
                                {type.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* TÍTULO DE SENHA */}
                <p className="text-sm text-gray-400 pt-2 border-t border-gray-700/50">
                    {isEditing 
                        ? 'Deixe os campos de senha vazios se não quiser alterá-la.'
                        : 'Defina a senha para o novo usuário *'
                    }
                </p>

                {/* CAMPO SENHA */}
                <div className="flex items-center bg-gray-900 rounded-lg border border-gray-700 focus-within:border-green-500 transition-all">
                    <Lock size={20} className="text-gray-500 mx-3 flex-shrink-0" />
                    <input
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        value={formData.senha}
                        onChange={handleChange}
                        className="w-full p-3 bg-transparent text-white focus:outline-none"
                        disabled={isLoading}
                    />
                </div>

                {/* CAMPO CONFIRMAR SENHA */}
                <div className="flex items-center bg-gray-900 rounded-lg border border-gray-700 focus-within:border-green-500 transition-all">
                    <Lock size={20} className="text-gray-500 mx-3 flex-shrink-0" />
                    <input
                        type="password"
                        name="confirmarSenha"
                        placeholder="Confirmar Senha"
                        value={formData.confirmarSenha}
                        onChange={handleChange}
                        className="w-full p-3 bg-transparent text-white focus:outline-none"
                        disabled={isLoading}
                    />
                </div>
                
                {/* BOTÕES DE AÇÃO */}
                <div className="flex justify-between space-x-4 pt-4">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="flex-1 px-4 py-3 rounded-lg font-semibold text-gray-300 bg-gray-700 hover:bg-gray-600 transition-colors"
                        disabled={isLoading}
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className={`flex-1 flex items-center justify-center px-4 py-3 rounded-lg font-bold text-gray-900 transition-all duration-300 ${
                            isLoading 
                                ? 'bg-green-700/60 cursor-not-allowed' 
                                : 'bg-green-500 hover:bg-green-400 shadow-md'
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
        </div>
    );
};