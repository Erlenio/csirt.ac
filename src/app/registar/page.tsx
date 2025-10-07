'use client'; 
// Necessário para usar hooks como useState e para interações de formulário

import React, { useState } from 'react';
import { UserPlus, Mail, Lock, User } from 'lucide-react';
import Link from 'next/link';

const SignupPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Função de exemplo para simular o registo
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        
        if (password !== confirmPassword) {
            setError('As senhas não coincidem. Por favor, verifique.');
            return;
        }

        setIsLoading(true);

        // --- Lógica de Registo e Validação (Ajuste para sua implementação) ---
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome: name, email, senha: password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Sucesso: Redirecionar para a página de confirmação de e-mail (ou login)
                console.log('Registo bem-sucedido. Verifique seu e-mail para ativar a conta.', data);
                // router.push('/verificacao-pendente'); // Exemplo de redirecionamento
            } else {
                // Falha no registo (e-mail já existe, etc.)
                setError(data.message || 'Falha ao criar conta. Tente um e-mail diferente.');
            }
        } catch (err) {
            console.log(err);
            
            setError('Ocorreu um erro na conexão. Verifique sua rede.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
            <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-2xl p-8 md:p-10 border border-green-800/50">
                
                {/* Cabeçalho */}
                <div className="text-center mb-8">
                    <UserPlus size={48} className="text-green-500 mx-auto mb-4" />
                    <h2 className="text-3xl font-extrabold text-white">
                        Criar Conta CSIRT.AC
                    </h2>
                    <p className="text-gray-400 mt-2">
                        Registo exclusivo para a comunidade académica
                    </p>
                </div>

                {/* Formulário de Registo */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Campo Nome Completo */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                            Nome Completo
                        </label>
                        <div className="relative">
                            <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="Seu nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500 transition duration-150"
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    {/* Campo E-mail */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                            E-mail Institucional
                        </label>
                        <div className="relative">
                            <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="nome@academia.edu.mz"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500 transition duration-150"
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    {/* Campo Senha */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                            Senha
                        </label>
                        <div className="relative">
                            <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="Mínimo 8 caracteres"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500 transition duration-150"
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    {/* Campo Confirmação de Senha */}
                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300 mb-1">
                            Confirmar Senha
                        </label>
                        <div className="relative">
                            <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                id="confirm-password"
                                name="confirm-password"
                                type="password"
                                required
                                placeholder="Repita a senha"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500 transition duration-150"
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    {/* Exibição de Erro */}
                    {error && (
                        <div className="p-3 text-sm text-red-400 bg-red-900/30 border border-red-800 rounded-lg">
                            {error}
                        </div>
                    )}
                    
                    {/* Botão de Submissão */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-3 rounded-lg text-lg font-bold transition-all duration-300 
                            ${isLoading 
                                ? 'bg-green-700/50 cursor-not-allowed' 
                                : 'bg-green-500 text-gray-900 hover:bg-green-400 shadow-md hover:shadow-green-500/50'
                            }`}
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Criando Conta...
                            </span>
                        ) : (
                            'Registar'
                        )}
                    </button>
                </form>

                {/* Rodapé do Formulário */}
                <div className="mt-6 text-center text-sm">
                    Já tem uma conta?{' '}
                    <Link href="/login" className="text-green-500 hover:text-green-400 transition-colors duration-300 font-semibold">
                        Fazer Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;