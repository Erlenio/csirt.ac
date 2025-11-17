'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { AlertTriangle, Clock, MessageSquare, List, Loader2, CheckCircle, Edit } from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';

// === TIPOS (Baseados nos seus Enums do Prisma) ===
type IncidentStatus = 'ABERTO' | 'EM_ANDAMENTO' | 'RESOLVIDO' | 'ARQUIVADO';
type IncidentPriority = 'BAIXA' | 'MEDIA' | 'ALTA' | 'CRITICA';

interface Anexo {
    id: string;
    nome: string;
    caminho: string; // URL pública
}

interface Incidente {
    id: string;
    titulo: string;
    localizacao: string;
    prioridade: IncidentPriority;
    status: IncidentStatus;
    criado_em: string; // DateTime
    anexos: Anexo[];
}

// Mapa de cores e ícones para Status
const STATUS_MAP = {
    'ABERTO': { color: 'bg-red-500', text: 'Aberto', icon: AlertTriangle },
    'EM_ANDAMENTO': { color: 'bg-yellow-500', text: 'Em Andamento', icon: Clock },
    'RESOLVIDO': { color: 'bg-green-500', text: 'Resolvido', icon: CheckCircle },
    'ARQUIVADO': { color: 'bg-gray-500', text: 'Arquivado', icon: List },
};

const PRIORITY_MAP = {
    'BAIXA': { color: 'text-green-400', label: 'Baixa' },
    'MEDIA': { color: 'text-yellow-400', label: 'Média' },
    'ALTA': { color: 'text-orange-400', label: 'Alta' },
    'CRITICA': { color: 'text-red-400 font-bold', label: 'CRÍTICA' },
};


const IncidentesAdminPage: React.FC = () => {
    const [incidentes, setIncidentes] = useState<Incidente[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // -----------------------------------------------------------------
    // LÓGICA DE DADOS
    // -----------------------------------------------------------------

    const fetchIncidentes = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/incidentes');
            if (!response.ok) throw new Error('Falha ao carregar a lista de incidentes.');

            const data: Incidente[] = await response.json();
            setIncidentes(data);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchIncidentes();
    }, [fetchIncidentes]);

    // Lógica para alterar o status de um incidente (PUT)
    const handleUpdateStatus = async (id: string, newStatus: IncidentStatus) => {
        if (!confirm(`Tem certeza que deseja mudar o status do incidente ${id.slice(0, 5)}... para ${newStatus}?`)) return;

        try {
            const response = await fetch(`/api/incidentes/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus }),
            });

            if (!response.ok) throw new Error('Erro ao atualizar status.');

            // Atualiza a lista localmente
            setIncidentes(prev => prev.map(inc =>
                inc.id === id ? { ...inc, status: newStatus } : inc
            ));
        } catch (err) {
            setError(`Falha ao atualizar o status: ${(err as Error).message}`);
        }
    };

    // -----------------------------------------------------------------
    // RENDERIZAÇÃO
    // -----------------------------------------------------------------

    if (isLoading) {
        return <div className="p-8 text-white flex items-center justify-center"><Loader2 className="animate-spin mr-3" /> A carregar incidentes...</div>;
    }

    if (error) {
        return <div className="p-8 text-red-400 bg-red-900/20 border border-red-700 rounded-lg max-w-4xl mx-auto">Erro: {error}</div>;
    }

    return (
        <AdminLayout 
            current={1}
            currentUser={undefined}>
            <div className="min-h-screen bg-gray-900 text-white p-8">
                <header className="max-w-7xl mx-auto mb-8 flex justify-between items-center">
                    <h1 className="text-3xl font-bold flex items-center text-red-400">
                        <AlertTriangle className="mr-3" size={28} />
                        Gestão de Incidentes ({incidentes.length})
                    </h1>
                    <Link href="/admin/incidentes/reportar" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center transition-colors">
                        <MessageSquare className="mr-2" size={18} />
                        Reportar Novo
                    </Link>
                </header>

                <div className="max-w-7xl mx-auto bg-gray-800 rounded-xl shadow-lg overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Título / Localização</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Prioridade</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Anexos</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                            {incidentes.map((incidente) => {
                                const priority = PRIORITY_MAP[incidente.prioridade] || PRIORITY_MAP.MEDIA;
                                const statusInfo = STATUS_MAP[incidente.status] || STATUS_MAP.ABERTO;

                                return (
                                    <tr key={incidente.id} className="hover:bg-gray-700 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <Link href={`/admin/incidentes/${incidente.id}`} className="text-sm font-medium text-white hover:text-red-400 transition-colors block">
                                                {incidente.titulo}
                                            </Link>
                                            <p className="text-xs text-gray-400">{incidente.localizacao}</p>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${priority.color} bg-opacity-10 border border-current`}>
                                                {priority.label}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="relative">
                                                <select
                                                    value={incidente.status}
                                                    onChange={(e) => handleUpdateStatus(incidente.id, e.target.value as IncidentStatus)}
                                                    className={`appearance-none bg-gray-700/50 border border-gray-600 rounded-md py-1 px-3 pr-8 text-sm cursor-pointer focus:ring-red-500 focus:border-red-500 transition-colors ${statusInfo.color}`}
                                                    style={{ color: 'white' }}
                                                >
                                                    {Object.keys(STATUS_MAP).map(key => (
                                                        <option key={key} value={key} className="bg-gray-900 text-white">
                                                            {STATUS_MAP[key as IncidentStatus].text}
                                                        </option>
                                                    ))}
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                                                    <statusInfo.icon size={16} />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                            {incidente.anexos.length > 0 ? `${incidente.anexos.length} anexo(s)` : 'Nenhum'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <Link href={`/admin/incidentes/${incidente.id}`} className="text-indigo-400 hover:text-indigo-300 mr-3">
                                                <Edit size={18} className="inline-block" />
                                            </Link>
                                            {/* Ação de Excluir (Não implementada aqui para simplificar) */}
                                            {/* <button className="text-red-400 hover:text-red-300"><Trash2 size={18} className="inline-block" /></button> */}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    {incidentes.length === 0 && (
                        <div className="p-8 text-center text-gray-500">Nenhum incidente registrado.</div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
};

export default IncidentesAdminPage;