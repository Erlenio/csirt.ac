'use client'; 
// Use 'use client' se estiver usando o App Router no Next.js, pois há interação (useState, onSubmit)

import React, { useState } from 'react';
import { LogIn, Mail, Lock } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    // Função de exemplo para simular o login
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        // --- Lógica de Autenticação (Ajuste para sua implementação) ---
        // Exemplo: Usando uma API Route ou Server Action
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, senha: password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Sucesso: Redirecionar para o dashboard ou página principal
                console.log('Login bem-sucedido:', data);
                router.push('/admin'); // Exemplo de redirecionamento
            } else {
                // Falha na autenticação
                setError(data.message || 'Credenciais inválidas. Tente novamente.');
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
                    <LogIn size={48} className="text-green-500 mx-auto mb-4" />
                    <h2 className="text-3xl font-extrabold text-white">
                        Acesso Restrito CSIRT.AC
                    </h2>
                    <p className="text-gray-400 mt-2">
                        Utilize suas credenciais institucionais
                    </p>
                </div>

                {/* Formulário de Login */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    
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
                                placeholder="Sua senha secreta"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                                Acessando...
                            </span>
                        ) : (
                            'Fazer Login'
                        )}
                    </button>
                </form>

                {/* Rodapé do Formulário (Opcional) */}
                <div className="mt-6 text-center text-sm">
                    <Link href="/recuperar-senha" className="text-green-500 hover:text-green-400 transition-colors duration-300">
                        Esqueceu sua senha?
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;