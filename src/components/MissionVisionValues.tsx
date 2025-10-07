// src/components/MissionVisionValues.tsx

import React from 'react';
import { Target, Eye, Handshake } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';

export const MissionVisionValues: React.FC = () => {
    return (
        <section className="px-[9%] py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mx-auto text-center">
                {/* Missão */}
                <Fade direction="up" delay={200} className='w-full'>
                    <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200 w-full">
                        <div className="p-4 rounded-full bg-primary/10 text-primary inline-block mb-4">
                            <Target size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Nossa Missão</h3>
                        <p className="text-gray-600">
                            Fornecer serviços de comunicação de dados e soluções partilhadas de alta qualidade para as instituições de Ensino Superior, Ensino Técnico-Profissional e de Pesquisa, atuando como uma plataforma unificadora para a comunidade acadêmica.
                        </p>
                    </div>
                </Fade>

                {/* Visão */}
                <Fade direction="up" delay={400}>
                    <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200">
                        <div className="p-4 rounded-full bg-primary/10 text-primary inline-block mb-4">
                            <Eye size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Nossa Visão</h3>
                        <p className="text-gray-600">
                            Ser o parceiro fundamental no desenvolvimento da comunidade acadêmica, integrando todas as instituições de ensino e pesquisa de Moçambique em uma rede nacional de alta velocidade, com sustentabilidade tecnológica e institucional.
                        </p>
                    </div>
                </Fade>

                {/* Valores */}
                <Fade direction="up" delay={600}>
                    <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200 h-full">
                        <div className="p-4 rounded-full bg-primary/10 text-primary inline-block mb-4">
                            <Handshake size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Nossos Valores</h3>
                        <p className="text-gray-600">
                            Comprometimento, Inovação, Colaboração e Integridade. Guiamos nossas ações por princípios éticos para construir uma base sólida de confiança.
                        </p>
                    </div>
                </Fade>
            </div>
        </section>
    );
};