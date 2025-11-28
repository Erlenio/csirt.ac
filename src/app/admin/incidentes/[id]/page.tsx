'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { AlertTriangle, MapPin, Clock, MessageSquare, Loader2, Link, FileText, Calendar, Zap, X } from 'lucide-react';
import Image from 'next/image';

// === TIPOS (Podem ser importados de um arquivo comum) ===
type IncidentStatus = 'ABERTO' | 'EM_ANDAMENTO' | 'RESOLVIDO' | 'ARQUIVADO';
type IncidentPriority = 'BAIXA' | 'MEDIA' | 'ALTA' | 'CRITICA';

interface Anexo {
    id: string;
    nome: string;
    caminho: string; // URL pública (usado na tag <img>)
    tipo: string;
}

interface Incidente {
    id: string;
    titulo: string;
    descricao: string;
    localizacao: string;
    prioridade: IncidentPriority;
    status: IncidentStatus;
    criado_em: string;
    atualizado_em: string;
    anexos: Anexo[];
}

// Mapa de estilos e rótulos
const PRIORITY_MAP_DETAIL = {
    'BAIXA': { bg: 'bg-green-600', text: 'Baixa', icon: Zap },
    'MEDIA': { bg: 'bg-yellow-600', text: 'Média', icon: Zap },
    'ALTA': { bg: 'bg-orange-600', text: 'Alta', icon: Zap },
    'CRITICA': { bg: 'bg-red-600', text: 'CRÍTICA', icon: AlertTriangle },
};

const STATUS_MAP_DETAIL = {
    'ABERTO': { bg: 'bg-red-400/20 text-red-400', text: 'Aberto' },
    'EM_ANDAMENTO': { bg: 'bg-yellow-400/20 text-yellow-400', text: 'Em Andamento' },
    'RESOLVIDO': { bg: 'bg-green-400/20 text-green-400', text: 'Resolvido' },
    'ARQUIVADO': { bg: 'bg-gray-400/20 text-gray-400', text: 'Arquivado' },
};


const DetalhesIncidentePage: React.FC = () => {
    const params = useParams(); // Hook do Next.js App Router para parâmetros de rota
    const router = useRouter();
    const id = params.id as string;
    
    const [incidente, setIncidente] = useState<Incidente | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // -----------------------------------------------------------------
    // LÓGICA DE DADOS
    // -----------------------------------------------------------------

    const fetchIncidente = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/incidentes/${id}`);
            if (response.status === 404) {
                throw new Error('Incidente não encontrado.');
            }
            if (!response.ok) {
                throw new Error('Falha ao carregar detalhes do incidente.');
            }
            
            const data: Incidente = await response.json();
            console.log('Detalhes do incidente carregados:', data);
            
            setIncidente(data);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setIsLoading(false);
        }
    }, [id]);

    useEffect(() => {
        if (id) {
            fetchIncidente();
        }
    }, [id, fetchIncidente]);

    // -----------------------------------------------------------------
    // RENDERIZAÇÃO
    // -----------------------------------------------------------------

    if (isLoading) {
        return <div className="min-h-screen bg-gray-900 p-8 text-white flex items-center justify-center"><Loader2 className="animate-spin mr-3" /> A carregar detalhes...</div>;
    }

    if (error) {
        return <div className="min-h-screen bg-gray-900 p-8 text-center"><div className="text-red-400 bg-red-900/20 border border-red-700 rounded-lg p-6 max-w-lg mx-auto">Erro: {error}</div></div>;
    }

    if (!incidente) return null; // Não deve acontecer, mas é uma segurança

    const priorityInfo = PRIORITY_MAP_DETAIL[incidente.prioridade];
    const statusInfo = STATUS_MAP_DETAIL[incidente.status];

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-4xl mx-auto">
                
                {/* Cabeçalho */}
                <header className="mb-8 border-b border-gray-700 pb-4 flex justify-between items-center">
                    <h1 className="text-3xl font-extrabold flex items-center">
                        <AlertTriangle className="mr-3 text-red-400" size={32} />
                        Detalhes do Incidente
                    </h1>
                    <button onClick={() => router.back()} className="text-gray-400 hover:text-white transition-colors flex items-center">
                        <X size={20} className="mr-1" /> Fechar
                    </button>
                </header>

                {/* Status e Prioridade (Badges) */}
                <div className="flex space-x-3 mb-6">
                    <span className={`px-4 py-1 text-sm font-semibold rounded-full ${priorityInfo.bg} flex items-center`}>
                        <priorityInfo.icon size={16} className="mr-2" /> Prioridade: {priorityInfo.text}
                    </span>
                    <span className={`px-4 py-1 text-sm font-semibold rounded-full ${statusInfo.bg} flex items-center border border-current`}>
                         Status: {statusInfo.text}
                    </span>
                </div>

                {/* Card Principal */}
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                    
                    <h2 className="text-2xl font-bold mb-4 text-white">{incidente.titulo}</h2>
                    
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-sm mb-6 border-b border-gray-700 pb-4">
                        <div className="flex items-center">
                            <MapPin size={18} className="mr-2 text-gray-500" />
                            <dt className="text-gray-400 font-medium mr-2">Localização:</dt>
                            <dd className="text-white break-words">{incidente.localizacao}</dd>
                        </div>
                        <div className="flex items-center">
                            <Calendar size={18} className="mr-2 text-gray-500" />
                            <dt className="text-gray-400 font-medium mr-2">Reportado em:</dt>
                            <dd className="text-white">{new Date(incidente.criado_em).toLocaleString('pt-BR')}</dd>
                        </div>
                        <div className="flex items-center">
                            <Clock size={18} className="mr-2 text-gray-500" />
                            <dt className="text-gray-400 font-medium mr-2">Última Atualização:</dt>
                            <dd className="text-white">{new Date(incidente.atualizado_em).toLocaleTimeString('pt-BR')}</dd>
                        </div>
                        {/* Adicionar aqui o 'Reportado Por' se tiver o relacionamento com Usuário */}
                    </dl>

                    {/* Descrição Detalhada */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-300 flex items-center mb-2">
                            <MessageSquare size={20} className="mr-2 text-red-400" />
                            Descrição
                        </h3>
                        <p className="text-gray-300 bg-gray-700/50 p-4 rounded-lg leading-relaxed whitespace-pre-wrap">
                            {incidente.descricao}
                        </p>
                    </div>

                    {/* Anexos */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-300 flex items-center mb-3">
                            <FileText size={20} className="mr-2 text-red-400" />
                            Anexos ({incidente.anexos.length})
                        </h3>
                        
                        {incidente.anexos.length === 0 ? (
                            <p className="text-gray-500">Nenhum anexo foi incluído neste reporte.</p>
                        ) : (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {incidente.anexos.map((anexo) => (
                                    <a key={anexo.id} href={anexo.caminho} target="_blank" rel="noopener noreferrer" className="block group">
                                        <div className="relative overflow-hidden rounded-lg border border-gray-600 shadow-md transition-shadow group-hover:shadow-red-500/50">
                                            {/* Exibição de Imagem */}
                                            {anexo.tipo.startsWith('image/') ? (
                                                <Image 
                                                    src={anexo.caminho} 
                                                    alt={anexo.nome} 
                                                    width={150} 
                                                    height={120}
                                                    className="w-full h-24 object-cover" 
                                                />
                                            ) : (
                                                <div className="w-full h-24 flex flex-col items-center justify-center bg-gray-700/80 text-gray-300 p-2">
                                                    <FileText size={24} />
                                                    <span className="text-xs mt-1 truncate w-full text-center">{anexo.nome}</span>
                                                </div>
                                            )}
                                            
                                            {/* Overlay de Ação */}
                                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Link size={24} className="text-white" />
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetalhesIncidentePage;