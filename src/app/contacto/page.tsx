'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { Header } from '../../components/layout/navbar';
import { Footer } from '../../components/layout/footer';

const ContactPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('idle');
        setStatusMessage('');
        setIsLoading(true);

        // --- Lógica de Envio de Formulário (Ajuste para sua implementação) ---
        // Geralmente, isso envia um e-mail através de uma API Route (ex: /api/contact)
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, subject, message }),
            });

            if (response.ok) {
                setStatus('success');
                setStatusMessage('A sua mensagem foi enviada com sucesso! Responderemos em breve.');
                // Limpar o formulário
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                setStatus('error');
                const data = await response.json();
                setStatusMessage(data.message || 'Falha no envio. Tente novamente mais tarde.');
            }
        } catch (err) {
            console.log(err);
            setStatus('error');
            setStatusMessage('Ocorreu um erro de rede. Por favor, verifique sua conexão.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">

                    {/* Título da Página */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                            Entre em Contato
                        </h1>
                        <p className="text-xl text-gray-400">
                            Estamos aqui para ajudar a comunidade académica a manter-se segura.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* 1. INFORMAÇÕES DE CONTATO E EMERGÊNCIA */}
                        <div className="lg:col-span-1 space-y-8">

                            {/* Box de Contato Geral */}
                            <div className="bg-gray-800 p-6 rounded-xl border border-green-800/50 shadow-lg">
                                <h3 className="text-2xl font-bold text-green-500 mb-4 flex items-center">
                                    <Mail size={24} className="mr-2" /> Contato Geral
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    Para questões administrativas, parcerias ou pedidos de informação.
                                </p>
                                <div className="space-y-3">
                                    <p className="flex items-center text-white">
                                        <Mail size={18} className="mr-3 text-green-400" />
                                        info@csirt-ac.mz
                                    </p>
                                    <p className="flex items-center text-white">
                                        <Phone size={18} className="mr-3 text-green-400" />
                                        +258 84 000 0000
                                    </p>
                                    <p className="flex items-start text-white">
                                        <MapPin size={18} className="mt-1 mr-3 text-green-400 flex-shrink-0" />
                                        Av. das Acácias, Maputo, Moçambique
                                    </p>
                                </div>
                            </div>

                            {/* Box de EMERGÊNCIA (Destaque CSIRT) */}
                            <div className="bg-red-900/20 p-6 rounded-xl border border-red-700 shadow-lg">
                                <h3 className="text-2xl font-bold text-red-400 mb-4 flex items-center">
                                    <AlertTriangle size={24} className="mr-2" /> Reportar Incidente
                                </h3>
                                <p className="text-red-300 mb-4">
                                    **USE ESTE CANAL SOMENTE PARA INCIDENTES DE SEGURANÇA ATIVOS.**
                                </p>
                                <Link
                                    href="mailto:incident@csirt-ac.mz"
                                    className="w-full inline-flex justify-center items-center py-3 px-4 rounded-lg text-lg font-bold bg-red-600 text-white hover:bg-red-700 transition-colors duration-300"
                                >
                                    <Mail size={20} className="mr-2" /> incident@csirt-ac.mz
                                </Link>
                                <p className="mt-3 text-sm text-red-400">
                                    Por favor, inclua o máximo de detalhes possível.
                                </p>
                            </div>
                        </div>

                        {/* 2. FORMULÁRIO DE CONTATO */}
                        <div className="lg:col-span-2 bg-gray-800 p-8 md:p-10 rounded-xl border border-green-800/50 shadow-2xl">
                            <h3 className="text-3xl font-bold text-white mb-6">Envie-nos uma Mensagem</h3>

                            {/* Mensagens de Status */}
                            {status !== 'idle' && (
                                <div className={`p-4 mb-6 text-sm rounded-lg ${status === 'success' ? 'bg-green-900/30 border border-green-800 text-green-400' :
                                        status === 'error' ? 'bg-red-900/30 border border-red-800 text-red-400' : ''
                                    }`}>
                                    {statusMessage}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Campo Nome */}
                                    <input
                                        type="text"
                                        placeholder="Seu Nome Completo"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500"
                                        disabled={isLoading}
                                    />
                                    {/* Campo E-mail */}
                                    <input
                                        type="email"
                                        placeholder="Seu E-mail"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500"
                                        disabled={isLoading}
                                    />
                                </div>

                                {/* Campo Assunto */}
                                <input
                                    type="text"
                                    placeholder="Assunto da Mensagem"
                                    required
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500"
                                    disabled={isLoading}
                                />

                                {/* Campo Mensagem */}
                                <textarea
                                    placeholder="Sua Mensagem..."
                                    rows={5}
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500 resize-none"
                                    disabled={isLoading}
                                />

                                {/* Botão de Envio */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full py-3 rounded-lg text-lg font-bold transition-all duration-300 flex items-center justify-center 
                                    ${isLoading
                                            ? 'bg-green-700/50 cursor-not-allowed'
                                            : 'bg-green-500 text-gray-900 hover:bg-green-400 shadow-md hover:shadow-green-500/50'
                                        }`}
                                >
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 mr-3 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            A Enviar...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} className="mr-2" /> Enviar Mensagem
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;