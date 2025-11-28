'use client';

import React, { useState, FormEvent, useCallback } from 'react';
import { AlertTriangle, MapPin, MessageSquare, Clock, Send, Loader2, ImageIcon, Upload, Trash2 } from 'lucide-react';
import { Header } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';

// Tipos de Prioridade (Mantidos)
const PRIORITIES = [
    { value: 'BAIXA', label: 'Baixa (Melhoria/Sugestão)', color: 'text-green-400' },
    { value: 'MEDIA', label: 'Média (Problema Não Crítico)', color: 'text-yellow-400' },
    { value: 'ALTA', label: 'Alta (Impacto na Operação)', color: 'text-orange-400' },
    { value: 'CRITICA', label: 'Crítica (Serviço Fora do Ar)', color: 'text-red-400' },
];

// Interface para os dados do formulário
interface IncidentFormData {
    titulo: string;
    descricao: string;
    localizacao: string;
    prioridade: string;
}


const ReportarIncidentePage: React.FC = () => {

    // Define o estado inicial do formulário
    const [formData, setFormData] = useState<IncidentFormData>({
        titulo: '',
        descricao: '',
        localizacao: '',
        prioridade: PRIORITIES[1].value,
    });

    // ESTADO: Armazena os arquivos de imagem
    const [images, setImages] = useState<File[]>([]);

    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    // -----------------------------------------------------------------
    // HANDLERS E SUBMISSÃO (Simulação de API)
    // -----------------------------------------------------------------

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files).slice(0, 3);
            setImages(newFiles);
        }
    };

    const removeImage = (indexToRemove: number) => {
        setImages(prev => prev.filter((_, index) => index !== indexToRemove));
    };

    const resetForm = useCallback(() => {
        setFormData({ titulo: '', descricao: '', localizacao: '', prioridade: PRIORITIES[1].value });
        setImages([]);
        setError(null);
        setSuccessMessage(null);
    }, []);


    // No componente ReportarIncidentePage.tsx (ou similar)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccessMessage(null);

        if (!formData.titulo || !formData.descricao || !formData.localizacao) {
            setError('Título, descrição e localização são campos obrigatórios.');
            return;
        }

        setIsLoading(true);

        // 1. Criar o objeto FormData para lidar com arquivos binários
        const dataToSend = new FormData();

        // Adicionar campos de texto
        dataToSend.append('titulo', formData.titulo);
        dataToSend.append('descricao', formData.descricao);
        dataToSend.append('localizacao', formData.localizacao);
        dataToSend.append('prioridade', formData.prioridade);

        // Adicionar as imagens
        images.forEach((file) => {
            // IMPORTANTE: O backend (API) espera o nome do campo 'images'
            dataToSend.append('images', file, file.name);
        });

        try {
            // 2. Realizar a chamada fetch para a API
            const response = await fetch('/api/incidentes', {
                method: 'POST',
                // NÃO inclua o cabeçalho 'Content-Type: application/json'.
                // O navegador definirá automaticamente 'Content-Type: multipart/form-data'
                // que é necessário para FormData com arquivos.
                body: dataToSend,
            });

            // 3. Processar a resposta
            if (response.ok) {
                // Opcional: const newIncident = await response.json();

                setSuccessMessage(`Incidente reportado com sucesso! ${images.length > 0 ? `(${images.length} anexo(s) enviado(s).)` : ''}`);
                // O formulário será limpo pelo 'resetForm' após a mensagem de sucesso (lógica do componente de página)
            } else {
                // Tenta ler o erro do corpo da resposta, se houver
                const errorData = await response.json();
                const errorMessage = errorData.message || 'Falha ao enviar o relatório devido a um erro no servidor.';
                setError(errorMessage);
            }
        } catch (err) {
            console.error('Erro de rede ou processamento:', err);
            setError('Erro de conexão ou erro interno ao processar o relatório.');
        } finally {
            setIsLoading(false);
        }
    };

    // Determina a cor do texto da prioridade selecionada
    const selectedPriorityColor = PRIORITIES.find(p => p.value === formData.prioridade)?.color || 'text-yellow-400';

    // -----------------------------------------------------------------
    // RENDERIZAÇÃO
    // -----------------------------------------------------------------

    return (
        <>
            <Header />
            <div className="bg-gray-900 min-h-screen pb-12">

                {/* Cabeçalho da Página */}
                <header className="w-full bg-gray-800 border-b border-gray-700">
                    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-extrabold text-white flex items-center">
                            <AlertTriangle className="mr-4 text-red-400" size={32} />
                            Reportar Novo Incidente
                        </h1>
                        <p className="mt-1 text-gray-400">
                            Use este formulário para relatar bugs, falhas críticas ou sugerir melhorias.
                        </p>
                    </div>
                </header>

                {/* Conteúdo Principal do Formulário */}
                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                    <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">

                        {/* Mensagens de Feedback */}
                        {error && (
                            <div className="p-4 mb-6 bg-red-900/40 text-red-300 rounded-lg border border-red-700">
                                <p className="font-semibold flex items-center"><AlertTriangle size={20} className="mr-2" /> Erro:</p>
                                <p className="text-sm">{error}</p>
                            </div>
                        )}

                        {successMessage && (
                            <div className="text-center p-8 mb-6 bg-green-900/40 text-green-300 rounded-lg border border-green-700">
                                <Send size={32} className="mx-auto mb-3" />
                                <h3 className="text-xl font-bold mb-3">{successMessage}</h3>
                                <p className="text-sm text-green-400 mb-4">Seu relatório foi recebido e a equipa de desenvolvimento foi notificada.</p>
                                <button
                                    onClick={resetForm}
                                    className="px-6 py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                                >
                                    Reportar Outro Incidente
                                </button>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6" style={{ display: successMessage ? 'none' : 'block' }}>

                            {/* CAMPO TÍTULO */}
                            <div className="flex items-center bg-gray-700/50 rounded-lg border border-gray-700 focus-within:border-red-500 transition-all">
                                <AlertTriangle size={20} className="text-gray-400 mx-3 flex-shrink-0" />
                                <input type="text" name="titulo" placeholder="Título Resumido do Incidente *" required value={formData.titulo} onChange={handleChange} className="w-full p-3 bg-transparent text-white focus:outline-none" disabled={isLoading} />
                            </div>

                            {/* CAMPO LOCALIZAÇÃO (PÁGINA/MÓDULO) */}
                            <div className="flex items-center bg-gray-700/50 rounded-lg border border-gray-700 focus-within:border-red-500 transition-all">
                                <MapPin size={20} className="text-gray-400 mx-3 flex-shrink-0" />
                                <input type="text" name="localizacao" placeholder="Página ou Módulo Afetado (Ex: /admin/posts/edit) *" required value={formData.localizacao} onChange={handleChange} className="w-full p-3 bg-transparent text-white focus:outline-none" disabled={isLoading} />
                            </div>

                            {/* CAMPO PRIORIDADE (SELECT) */}
                            <div className="flex items-center bg-gray-700/50 rounded-lg border border-gray-700 focus-within:border-red-500 transition-all">
                                <Clock size={20} className={`mx-3 flex-shrink-0 ${selectedPriorityColor}`} />
                                <select name="prioridade" value={formData.prioridade} onChange={handleChange} required className={`w-full p-3 bg-transparent text-white focus:outline-none appearance-none cursor-pointer ${selectedPriorityColor}`} disabled={isLoading}>
                                    {PRIORITIES.map(type => (
                                        <option key={type.value} value={type.value} className="bg-gray-800 text-white">
                                            {type.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* CAMPO DESCRIÇÃO */}
                            <div className="bg-gray-700/50 rounded-lg border border-gray-700 focus-within:border-red-500 transition-all">
                                <div className="flex items-start p-3">
                                    <MessageSquare size={20} className="text-gray-400 mr-3 mt-1 flex-shrink-0" />
                                    <textarea name="descricao" placeholder="Descrição detalhada do problema (Passos para reproduzir, comportamento esperado vs. ocorrido) *" required rows={6} value={formData.descricao} onChange={handleChange} className="w-full bg-transparent text-white focus:outline-none resize-none" disabled={isLoading} />
                                </div>
                            </div>

                            {/* CAMPO: UPLOAD DE IMAGEM */}
                            <div className="space-y-3 pt-2">
                                <label className="text-sm font-medium text-gray-300 flex items-center">
                                    <ImageIcon size={16} className="mr-1 text-gray-500" />
                                    Anexar Imagens (Máx. 3) - Opcional
                                </label>
                                <input
                                    id="incident-images"
                                    type="file"
                                    accept="image/jpeg,image/png,image/gif"
                                    multiple
                                    onChange={handleImageChange}
                                    className="hidden" // Esconde o input padrão
                                    disabled={isLoading}
                                />

                                {/* Botão de Upload Customizado */}
                                <label htmlFor="incident-images" className="flex items-center justify-center p-3 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer bg-gray-700/50 hover:bg-gray-700 transition-colors text-gray-400">
                                    <Upload size={18} className="mr-2" />
                                    {images.length === 0 ? 'Clique para selecionar até 3 capturas de tela' : `${images.length} imagem(ns) selecionada(s)`}
                                </label>

                                {/* Pré-visualização das Imagens (mantida do modal) */}
                                {images.length > 0 && (
                                    <div className="flex space-x-3 overflow-x-auto p-1">
                                        {images.map((file, index) => (
                                            <div key={index} className="relative flex-shrink-0 w-24 h-24 border border-gray-600 rounded-md overflow-hidden">
                                                <div className='w-full h-full md:h-96'>
                                                    <Image
                                                    src={URL.createObjectURL(file)}
                                                    alt={`Pré-visualização ${index + 1}`}
                                                    fill
                                                    className="w-full h-full object-cover"
                                                />
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() => removeImage(index)}
                                                    className="absolute top-0 right-0 p-1 bg-red-600/80 rounded-bl text-white hover:bg-red-700 transition-colors"
                                                    title="Remover imagem"
                                                >
                                                    <Trash2 size={12} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* BOTÃO DE AÇÃO */}
                            <div className="flex justify-end pt-4">
                                <button
                                    type="submit"
                                    className={`min-w-[200px] flex items-center justify-center px-8 py-3 rounded-lg font-bold text-white transition-all duration-300 ${isLoading
                                        ? 'bg-red-800/60 cursor-not-allowed'
                                        : 'bg-red-600 hover:bg-red-700 shadow-lg shadow-red-500/30'
                                        }`}
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin mr-2" />
                                            A Enviar...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} className="mr-2" />
                                            Enviar Relatório
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>

                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default ReportarIncidentePage;