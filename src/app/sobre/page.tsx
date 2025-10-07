'use client';
import React from 'react';
import { Shield, Target, Eye, Users, Zap } from 'lucide-react';
import { Header } from '../../components/layout/navbar';
import { Footer } from '../../components/layout/footer';

const AboutUsPage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">

                    {/* 1. CABEÇALHO E INTRODUÇÃO */}
                    <div className="text-center mb-16">
                        <Shield size={60} className="text-green-500 mx-auto mb-4" />
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
                            Quem Somos
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            O **CSIRT.AC** é a sua primeira linha de defesa contra ameaças cibernéticas na comunidade académica de Moçambique.
                        </p>
                    </div>

                    {/* 2. MISSÃO E VISÃO */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Missão */}
                        <div className="bg-gray-800 p-8 rounded-xl border border-green-800/50 shadow-2xl">
                            <Target size={36} className="text-green-500 mb-4" />
                            <h2 className="text-3xl font-bold text-white mb-4">Nossa Missão</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Proteger a infraestrutura crítica da rede académica e de pesquisa nacional, provendo serviços proativos e reativos de resposta a incidentes de segurança cibernética e promovendo a conscientização contínua na comunidade.
                            </p>
                        </div>

                        {/* Visão */}
                        <div className="bg-gray-800 p-8 rounded-xl border border-green-800/50 shadow-2xl">
                            <Eye size={36} className="text-green-500 mb-4" />
                            <h2 className="text-3xl font-bold text-white mb-4">Nossa Visão</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Ser reconhecido como o centro de excelência em segurança cibernética do ecossistema académico moçambicano, garantindo um ambiente digital seguro e confiável para a inovação, pesquisa e ensino.
                            </p>
                        </div>
                    </div>

                    <hr className="border-gray-700 mb-16" />

                    {/* 3. NOSSOS VALORES */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-extrabold text-white text-center mb-10">
                            Valores Fundamentais
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">

                            <div className="text-center p-6 rounded-xl border border-gray-700">
                                <Zap size={32} className="text-green-500 mx-auto mb-3" />
                                <h3 className="text-xl font-semibold text-white mb-2">Prontidão</h3>
                                <p className="text-gray-400 text-sm">
                                    Resposta rápida e eficaz a qualquer incidente, minimizando o tempo de inatividade e os danos.
                                </p>
                            </div>

                            <div className="text-center p-6 rounded-xl border border-gray-700">
                                <Shield size={32} className="text-green-500 mx-auto mb-3" />
                                <h3 className="text-xl font-semibold text-white mb-2">Confidencialidade</h3>
                                <p className="text-gray-400 text-sm">
                                    Máxima discrição na gestão de informações de incidentes sensíveis e dados dos usuários.
                                </p>
                            </div>

                            <div className="text-center p-6 rounded-xl border border-gray-700">
                                <Users size={32} className="text-green-500 mx-auto mb-3" />
                                <h3 className="text-xl font-semibold text-white mb-2">Colaboração</h3>
                                <p className="text-gray-400 text-sm">
                                    Trabalhar em conjunto com instituições parceiras e a comunidade para fortalecer a segurança coletiva.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 4. CHAME A NOSSA EQUIPE (Call to Action) */}
                    <div className="text-center bg-gray-800 p-10 rounded-xl border border-green-500/50 shadow-2xl">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Precisa Reportar um Incidente?
                        </h2>
                        <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
                            Se você suspeita de uma violação de segurança ou precisa de assistência imediata, não hesite em nos contatar pelo canal de emergência.
                        </p>
                        <a
                            href="/contato"
                            className="inline-flex items-center px-10 py-4 text-xl font-bold rounded-full bg-green-500 text-gray-900 hover:bg-green-400 transition-colors duration-300 shadow-lg"
                        >
                            <Zap size={24} className="mr-3" /> Falar com o CSIRT.AC
                        </a>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutUsPage