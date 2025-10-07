'use client'; 

import React, { useState } from 'react';
import { Lock, CheckCheck } from 'lucide-react';
import Link from 'next/link';

// Nota: Em um ambiente real Next.js, você precisaria importar e usar:
// import { useSearchParams, useRouter } from 'next/navigation'; 


const ResetPasswordPage: React.FC = () => {
    // Exemplo simplificado: usar um token de placeholder se não for passado
    const [token, setToken] = useState('TOKEN_DE_SEGURANCA_AQUI'); 
    
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        setToken('TOKEN_DE_SEGURANCA_AQUI'); // Atualizar com o token real
        
        if (newPassword !== confirmNewPassword) {
            setError('As novas senhas não coincidem. Por favor, verifique.');
            return;
        }
        if (newPassword.length < 8) {
            setError('A senha deve ter pelo menos 8 caracteres.');
            return;
        }

        setIsLoading(true);

        // --- Lógica de Redefinição (Ajuste para sua implementação) ---
        try {
            const response = await fetch('/api/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, newPassword }),
            });

            const data = await response.json();

            if (response.ok) {
                // Sucesso: Redirecionar para o login ou mostrar mensagem de sucesso
                setIsSuccess(true);
            } else {
                // Falha (Token inválido, expirado, etc.)
                setError(data.message || 'O link de redefinição é inválido ou expirou.');
            }
        } catch (err) {
            console.log(err);
            
            setError('Ocorreu um erro na conexão. Tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
                 <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-2xl p-10 text-center border border-green-800/50">
                    <CheckCheck size={48} className="text-green-500 mx-auto mb-4" />
                    <h2 className="text-3xl font-extrabold text-white mb-4">
                        Senha Redefinida!
                    </h2>
                    <p className="text-gray-400 mb-6">
                        A sua senha foi alterada com sucesso. Já pode fazer login com as novas credenciais.
                    </p>
                    <Link href="/login" className="inline-flex items-center px-8 py-3 rounded-full font-bold text-gray-950 bg-green-500 hover:bg-green-400 transition-colors duration-300">
                        Ir para o Login
                    </Link>
                </div>
            </div>
        );
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
            <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-2xl p-8 md:p-10 border border-green-800/50">
                
                {/* Cabeçalho */}
                <div className="text-center mb-8">
                    <Lock size={48} className="text-green-500 mx-auto mb-4" />
                    <h2 className="text-3xl font-extrabold text-white">
                        Definir Nova Senha
                    </h2>
                    <p className="text-gray-400 mt-2">
                        Utilize uma senha forte para proteger o seu acesso.
                    </p>
                </div>

                {/* Exibição de Erro */}
                {error && (
                    <div className="p-3 mb-6 text-sm text-red-400 bg-red-900/30 border border-red-800 rounded-lg">
                        {error}
                    </div>
                )}

                {/* Formulário de Redefinição */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Campo Nova Senha */}
                    <div>
                        <label htmlFor="new-password" className="block text-sm font-medium text-gray-300 mb-1">
                            Nova Senha
                        </label>
                        <div className="relative">
                            <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                id="new-password"
                                name="new-password"
                                type="password"
                                required
                                placeholder="Mínimo 8 caracteres"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500 transition duration-150"
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    {/* Campo Confirmação da Nova Senha */}
                    <div>
                        <label htmlFor="confirm-new-password" className="block text-sm font-medium text-gray-300 mb-1">
                            Confirmar Nova Senha
                        </label>
                        <div className="relative">
                            <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                id="confirm-new-password"
                                name="confirm-new-password"
                                type="password"
                                required
                                placeholder="Repita a nova senha"
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
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
                        {isLoading ? 'A Redefinir...' : 'Redefinir Senha'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPasswordPage;