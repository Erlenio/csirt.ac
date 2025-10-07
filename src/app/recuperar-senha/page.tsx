'use client'; 

import React, { useState } from 'react';
import { Mail, Send, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const ForgotPasswordPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccessMessage(null);
        setIsLoading(true);

        // --- Lógica de Envio do Link (Ajuste para sua implementação) ---
        try {
            const response = await fetch('/api/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                // Sucesso: Informar ao usuário que o e-mail foi enviado
                setSuccessMessage('Se o e-mail estiver registado, você receberá um link de redefinição em instantes.');
            } else {
                // Falha (E-mail não encontrado, erro do servidor, etc.)
                const data = await response.json();
                setError(data.message || 'Não foi possível processar a sua solicitação. Tente novamente.');
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
                    <Send size={48} className="text-green-500 mx-auto mb-4" />
                    <h2 className="text-3xl font-extrabold text-white">
                        Recuperar Acesso
                    </h2>
                    <p className="text-gray-400 mt-2">
                        Insira o seu e-mail institucional para receber um link de redefinição de senha.
                    </p>
                </div>

                {/* Mensagens de Status */}
                {successMessage ? (
                    <div className="p-4 text-sm text-green-400 bg-green-900/30 border border-green-800 rounded-lg text-center">
                        <p className="font-semibold mb-2">E-mail Enviado!</p>
                        <p>{successMessage}</p>
                        <Link href="/login" className="mt-3 inline-flex items-center text-sm text-green-400 hover:text-green-300 transition-colors">
                            <ArrowLeft size={16} className="mr-1" /> Voltar ao Login
                        </Link>
                    </div>
                ) : (
                    <>
                        {/* Exibição de Erro */}
                        {error && (
                            <div className="p-3 mb-6 text-sm text-red-400 bg-red-900/30 border border-red-800 rounded-lg">
                                {error}
                            </div>
                        )}

                        {/* Formulário de Recuperação */}
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
                                {isLoading ? 'A Enviar...' : 'Enviar Link de Redefinição'}
                            </button>
                        </form>
                    </>
                )}

                {/* Rodapé do Formulário */}
                <div className="mt-6 text-center text-sm">
                    <Link href="/login" className="text-green-500 hover:text-green-400 transition-colors duration-300 font-semibold">
                        <ArrowLeft size={16} className="inline-block mr-1" /> Lembrei-me da senha
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;