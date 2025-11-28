'use client';

import React, { useState, FormEvent} from 'react';
import { AlertTriangle, MapPin, MessageSquare, Clock, X, Send, Loader2, ImageIcon, Trash2, Upload } from 'lucide-react';
import Image from 'next/image';

// Tipos de Prioridade (Mantidos)
const PRIORITIES = [
    { value: 'BAIXA', label: 'Baixa (Melhoria/Sugestão)', color: 'text-green-400' },
    { value: 'MEDIA', label: 'Média (Problema Não Crítico)', color: 'text-yellow-400' },
    { value: 'ALTA', label: 'Alta (Impacto na Operação)', color: 'text-orange-400' },
    { value: 'CRITICA', label: 'Crítica (Serviço Fora do Ar)', color: 'text-red-400' },
];

// Interface para o estado do formulário (Inclui um array de arquivos)
export interface IncidentFormData {
    titulo: string;
    descricao: string;
    localizacao: string;
    prioridade: string;
    // O backend precisará de FormData, mas esta interface representa os dados lógicos
}

interface IncidentReportModalProps {
    isOpen: boolean;
    onClose: () => void;
    // Função agora recebe os dados do formulário E os arquivos para simulação de envio
    onReportSubmit: (data: IncidentFormData, images: File[]) => Promise<boolean>;
}

export const IncidentReportModal: React.FC<IncidentReportModalProps> = ({ isOpen, onClose, onReportSubmit }) => {
    
    const [formData, setFormData] = useState<IncidentFormData>({
        titulo: '',
        descricao: '',
        localizacao: '',
        prioridade: PRIORITIES[1].value, 
    });
    
    // NOVO ESTADO: Armazena os arquivos de imagem
    const [images, setImages] = useState<File[]>([]); 

    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    if (!isOpen) return null;

    // -----------------------------------------------------------------
    // HANDLERS
    // -----------------------------------------------------------------

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            // Converte FileList para Array, e limita a no máximo 3 imagens
            const newFiles = Array.from(e.target.files).slice(0, 3); 
            setImages(newFiles);
        }
    };

    const removeImage = (indexToRemove: number) => {
        setImages(prev => prev.filter((_, index) => index !== indexToRemove));
    };

    const handleClose = () => {
        // Reseta o estado ao fechar
        setFormData({ titulo: '', descricao: '', localizacao: '', prioridade: PRIORITIES[1].value });
        setImages([]); // Limpa as imagens
        setError(null);
        setSuccessMessage(null);
        onClose();
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccessMessage(null);

        if (!formData.titulo || !formData.descricao || !formData.localizacao) {
            setError('Título, descrição e localização são campos obrigatórios.');
            return;
        }

        setIsLoading(true);
        
        try {
            // Chama a função de submissão com os dados e as imagens
            const success = await onReportSubmit(formData, images); 

            if (success) {
                setSuccessMessage(`Incidente reportado com sucesso! ${images.length > 0 ? `(${images.length} imagem(ns) enviada(s).)` : ''}`);
                setFormData({ titulo: '', descricao: '', localizacao: '', prioridade: PRIORITIES[1].value });
                setImages([]);
            } else {
                setError('Falha ao enviar o relatório. Por favor, tente novamente.');
            }
        } catch (err) {
            console.error('Erro ao enviar o relatório:', err);
            setError('Erro interno ao processar o relatório.');
        } finally {
            setIsLoading(false);
        }
    };
    
    const selectedPriorityColor = PRIORITIES.find(p => p.value === formData.prioridade)?.color || 'text-yellow-400';

    // -----------------------------------------------------------------
    // RENDERIZAÇÃO
    // -----------------------------------------------------------------

    return (
        // Overlay
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 backdrop-blur-sm" onClick={handleClose}>
            
            {/* Modal Container */}
            <div 
                className="bg-gray-800 rounded-xl shadow-2xl border border-gray-700 max-w-lg w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300"
                onClick={(e) => e.stopPropagation()} 
            >
                {/* Cabeçalho */}
                <div className="sticky top-0 bg-gray-800 p-6 border-b border-gray-700 flex items-center justify-between z-10">
                    <h2 className="text-2xl font-bold text-red-400 flex items-center">
                        <AlertTriangle className="mr-3" size={24} />
                        Reportar Incidente
                    </h2>
                    <button onClick={handleClose} className="p-2 rounded-full text-gray-400 hover:bg-gray-700 transition-colors" aria-label="Fechar">
                        <X size={24} />
                    </button>
                </div>

                {/* Corpo do Formulário */}
                <div className="p-6">
                    
                    {/* Mensagens de Feedback */}
                    {error && (
                        <div className="p-3 mb-4 flex items-center bg-red-900/40 text-red-300 rounded-lg border border-red-700">
                            <X size={20} className="mr-2 flex-shrink-0" />
                            <p className="text-sm font-medium">{error}</p>
                        </div>
                    )}
                    
                    {successMessage && (
                        <div className="p-3 mb-4 flex items-center bg-green-900/40 text-green-300 rounded-lg border border-green-700">
                            <Send size={20} className="mr-2 flex-shrink-0" />
                            <p className="text-sm font-medium">{successMessage}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5" style={{ display: successMessage ? 'none' : 'block' }}>
                        
                        {/* CAMPOS DE TEXTO */}
                        
                        <div className="flex items-center bg-gray-700/50 rounded-lg border border-gray-700 focus-within:border-red-500 transition-all">
                            <AlertTriangle size={20} className="text-gray-400 mx-3 flex-shrink-0" />
                            <input type="text" name="titulo" placeholder="Título Resumido do Incidente *" required value={formData.titulo} onChange={handleChange} className="w-full p-3 bg-transparent text-white focus:outline-none" disabled={isLoading} />
                        </div>

                        <div className="flex items-center bg-gray-700/50 rounded-lg border border-gray-700 focus-within:border-red-500 transition-all">
                            <MapPin size={20} className="text-gray-400 mx-3 flex-shrink-0" />
                            <input type="text" name="localizacao" placeholder="Página ou Módulo Afetado *" required value={formData.localizacao} onChange={handleChange} className="w-full p-3 bg-transparent text-white focus:outline-none" disabled={isLoading} />
                        </div>
                        
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

                        <div className="bg-gray-700/50 rounded-lg border border-gray-700 focus-within:border-red-500 transition-all">
                            <div className="flex items-start p-3">
                                <MessageSquare size={20} className="text-gray-400 mr-3 mt-1 flex-shrink-0" />
                                <textarea name="descricao" placeholder="Descrição detalhada do problema (Passos para reproduzir) *" required rows={5} value={formData.descricao} onChange={handleChange} className="w-full bg-transparent text-white focus:outline-none resize-none" disabled={isLoading} />
                            </div>
                        </div>

                        {/* NOVO CAMPO: UPLOAD DE IMAGEM */}
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
                                {images.length === 0 ? 'Clique para selecionar imagens' : `${images.length} imagem(ns) selecionada(s)`}
                            </label>

                            {/* Pré-visualização das Imagens */}
                            {images.length > 0 && (
                                <div className="flex space-x-3 overflow-x-auto p-1">
                                    {images.map((file, index) => (
                                        <div key={index} className="relative flex-shrink-0 w-20 h-20 border border-gray-600 rounded-md overflow-hidden">
                                            <Image
                                                width={80}
                                                height={80} 
                                                src={URL.createObjectURL(file)} 
                                                alt={`Pré-visualização ${index + 1}`} 
                                                className="w-full h-full object-cover"
                                                onLoad={() => URL.revokeObjectURL(URL.createObjectURL(file))} // Limpa a URL após o carregamento
                                            />
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
                        <div className="flex justify-end pt-2">
                            <button
                                type="submit"
                                className={`min-w-[150px] flex items-center justify-center px-6 py-3 rounded-lg font-bold text-white transition-all duration-300 ${
                                    isLoading 
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

                    {/* Botão para fechar após sucesso */}
                    {successMessage && (
                        <div className="flex justify-center pt-4">
                            <button
                                onClick={handleClose}
                                className="px-6 py-3 rounded-lg font-semibold text-gray-400 bg-gray-700 hover:bg-gray-600 transition-colors"
                            >
                                Fechar
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};