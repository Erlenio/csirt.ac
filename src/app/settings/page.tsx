'use client';

import React, { useState } from 'react';
import { User, Lock, Settings, Mail, Key } from 'lucide-react';

// Dados MOCK para simular o usuário logado
const MOCK_USER = {
    name: 'Nome do Usuário',
    email: 'usuario@academia.edu.mz',
    // Outros dados como role, institution, etc.
};

type ActiveTab = 'profile' | 'security';

const ProfileSettingsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<ActiveTab>('profile');
    
    // Estado para o formulário de Perfil
    const [userName, setUserName] = useState(MOCK_USER.name);
    const [isProfileSaving, setIsProfileSaving] = useState(false);
    
    // Estado para o formulário de Senha
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [isPasswordSaving, setIsPasswordSaving] = useState(false);
    const [passwordError, setPasswordError] = useState<string | null>(null);

    // --- Handlers de Formulário ---

    const handleProfileSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProfileSaving(true);
        // Lógica de API: Salvar nome/email (o email institucional raramente muda)
        setTimeout(() => {
            console.log('Perfil atualizado:', userName);
            setIsProfileSaving(false);
            alert('Perfil atualizado com sucesso!');
        }, 1500);
    };

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setPasswordError(null);

        if (newPassword.length < 8) {
            setPasswordError('A nova senha deve ter pelo menos 8 caracteres.');
            return;
        }
        if (newPassword !== confirmNewPassword) {
            setPasswordError('A nova senha e a confirmação não coincidem.');
            return;
        }
        if (!currentPassword) {
            setPasswordError('Por favor, insira sua senha atual.');
            return;
        }
        
        setIsPasswordSaving(true);
        // Lógica de API: Alterar senha
        setTimeout(() => {
            // No backend: Verificar currentPassword, hash newPassword e salvar
            console.log('Senha alterada.');
            setIsPasswordSaving(false);
            setPasswordError(null);
            alert('Senha alterada com sucesso!');
            // Limpar campos
            setCurrentPassword('');
            setNewPassword('');
            setConfirmNewPassword('');
        }, 1500);
    };

    // --- Componentes das Abas ---
    
    const ProfileTab: React.FC = () => (
        <form onSubmit={handleProfileSubmit} className="space-y-6">
            {/* Campo Nome */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nome Completo
                </label>
                <div className="relative">
                    <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                        id="name"
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500 transition duration-150"
                        disabled={isProfileSaving}
                    />
                </div>
            </div>

            {/* Campo E-mail (Normalmente desabilitado em sistemas institucionais) */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    E-mail Institucional
                </label>
                <div className="relative">
                    <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                        id="email"
                        type="email"
                        value={MOCK_USER.email}
                        readOnly
                        className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-600/50 text-gray-400 cursor-not-allowed"
                    />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                    O seu e-mail institucional não pode ser alterado por esta página.
                </p>
            </div>

            {/* Botão de Salvar */}
            <button
                type="submit"
                disabled={isProfileSaving}
                className={`w-full py-3 rounded-lg text-lg font-bold transition-all duration-300 
                    ${isProfileSaving 
                        ? 'bg-green-700/50 cursor-not-allowed' 
                        : 'bg-green-500 text-gray-900 hover:bg-green-400 shadow-md'
                    }`}
            >
                {isProfileSaving ? 'A Guardar...' : 'Guardar Alterações'}
            </button>
        </form>
    );

    const SecurityTab: React.FC = () => (
        <form onSubmit={handlePasswordSubmit} className="space-y-6">
            
            {/* Exibição de Erro */}
            {passwordError && (
                <div className="p-3 text-sm text-red-400 bg-red-900/30 border border-red-800 rounded-lg">
                    {passwordError}
                </div>
            )}

            {/* Campo Senha Atual */}
            <div>
                <label htmlFor="current-password" className="block text-sm font-medium text-gray-300 mb-1">
                    Senha Atual
                </label>
                <div className="relative">
                    <Key size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                        id="current-password"
                        type="password"
                        required
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:ring-green-500 focus:border-green-500 transition duration-150"
                        disabled={isPasswordSaving}
                    />
                </div>
            </div>

            {/* Campo Nova Senha */}
            <div>
                <label htmlFor="new-password" className="block text-sm font-medium text-gray-300 mb-1">
                    Nova Senha
                </label>
                <div className="relative">
                    <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                        id="new-password"
                        type="password"
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:ring-green-500 focus:border-green-500 transition duration-150"
                        disabled={isPasswordSaving}
                    />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                    Use pelo menos 8 caracteres.
                </p>
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
                        type="password"
                        required
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:ring-green-500 focus:border-green-500 transition duration-150"
                        disabled={isPasswordSaving}
                    />
                </div>
            </div>

            {/* Botão de Salvar Senha */}
            <button
                type="submit"
                disabled={isPasswordSaving}
                className={`w-full py-3 rounded-lg text-lg font-bold transition-all duration-300 
                    ${isPasswordSaving 
                        ? 'bg-green-700/50 cursor-not-allowed' 
                        : 'bg-green-500 text-gray-900 hover:bg-green-400 shadow-md'
                    }`}
            >
                {isPasswordSaving ? 'A Alterar Senha...' : 'Alterar Senha'}
            </button>
        </form>
    );

    return (
        <div className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                
                {/* Título da Página */}
                <div className="text-center mb-10">
                    <Settings size={48} className="text-green-500 mx-auto mb-4" />
                    <h1 className="text-4xl font-extrabold text-white">
                        Configurações da Conta
                    </h1>
                    <p className="text-gray-400 mt-2">
                        Gerencie suas informações pessoais e credenciais de segurança.
                    </p>
                </div>

                {/* Área de Conteúdo (Tabs) */}
                <div className="bg-gray-800 rounded-xl shadow-2xl border border-green-800/50">
                    
                    {/* Navegação das Abas */}
                    <div className="border-b border-gray-700 p-4">
                        <nav className="flex space-x-4 justify-center">
                            <button
                                onClick={() => setActiveTab('profile')}
                                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200
                                    ${activeTab === 'profile' 
                                        ? 'bg-green-500 text-gray-900' 
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                            >
                                <User size={20} className="mr-2" /> Perfil
                            </button>
                            <button
                                onClick={() => setActiveTab('security')}
                                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200
                                    ${activeTab === 'security' 
                                        ? 'bg-green-500 text-gray-900' 
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                            >
                                <Lock size={20} className="mr-2" /> Segurança
                            </button>
                        </nav>
                    </div>
                    
                    {/* Conteúdo da Aba */}
                    <div className="p-8">
                        {activeTab === 'profile' && <ProfileTab />}
                        {activeTab === 'security' && <SecurityTab />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSettingsPage;