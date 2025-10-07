import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Editor } from "@tinymce/tinymce-react";
import { PostWithDeteils } from "@/utils/CustomInterface";
import { ArrowLeft, ImagePlus, Trash2, Loader2 } from "lucide-react";

interface PostFormProps {
    post?: PostWithDeteils
}

export const PostForm: React.FC<PostFormProps> = ({ post }) => {
    const [titulo, setTitulo] = useState<string>(post?.titulo || "");
    const [resumo, setResumo] = useState(post?.resumo || "");
    const [conteudo, setConteudo] = useState(post?.conteudo || "");
    const [categoria, setCategoria] = useState(post?.categoria.nome || "");
    const [tags, setTags] = useState<string[]>([]);
    const [imagem, setImagem] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(post?.imagem_capa.caminho || null);
    const [submetendo, setSubmetendo] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

    const removeImage = () => {
        setImagem(null);
        setPreview(null);
    };

    useEffect(() => {
        if (post) {
            setTitulo(post.titulo || "");
            setResumo(post.resumo || "");
            setConteudo(post.conteudo || "");
            setCategoria(post.categoria?.nome || "");
            setPreview(post.imagem_capa?.caminho || null);
            
            // Você pode adicionar setTags também, se necessário.
        }
    }, [post]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImagem(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTags(value.split(",").map((tag) => tag.trim()));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!titulo || !conteudo || !categoria) {
            setStatusMessage("Por favor, preencha o Título, Categoria e Conteúdo.");
            return;
        }

        try {
            setSubmetendo(true);
            setStatusMessage(post ? "A atualizar post..." : "A criar novo post...");

            const formData = new FormData();
            formData.append("titulo", titulo);
            formData.append("resumo", resumo);
            formData.append("conteudo", conteudo);
            formData.append("categoria", categoria);
            formData.append("tags", JSON.stringify(tags));
            if (imagem) formData.append("imagem", imagem);

            const res = await fetch("/api/posts", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                const error = await res.text();
                throw new Error(error || "Erro desconhecido ao criar o post.");
            }

            setStatusMessage(`Post ${post ? 'atualizado' : 'criado'} com sucesso!`);

        } catch (err) {
            console.error("Erro ao submeter post:", err);
            const errorMessage = typeof err === "object" && err !== null && "message" in err
                ? (err as { message: string }).message
                : String(err);
            setStatusMessage("Erro ao submeter post: " + errorMessage);
        } finally {
            setSubmetendo(false);
        }
    };

    return (
        <section className="min-h-screen bg-gray-900 py-10 px-[9%]">
            <Link 
                href="/admin/post" 
                className="inline-flex items-center text-green-500 hover:text-green-400 transition-colors mb-6"
            >
                <ArrowLeft size={20} className="mr-2" /> Voltar à Gestão
            </Link>

            <h1 className="text-3xl font-bold text-white mb-8 border-b border-gray-700 pb-3">
                {post ? "Editar Publicação" : "Criar Nova Notícia / Alerta"}
            </h1>
            
            {/* Mensagem de Status */}
            {statusMessage && (
                <div className={`p-4 mb-6 rounded-lg text-sm font-semibold ${
                    statusMessage.includes("sucesso") 
                        ? 'bg-green-900/50 text-green-300' 
                        : statusMessage.includes("Erro") || statusMessage.includes("preencha") 
                        ? 'bg-red-900/50 text-red-300' 
                        : 'bg-blue-900/50 text-blue-300'
                }`}>
                    {statusMessage}
                </div>
            )}


            <div className="grid lg:grid-cols-3 gap-8">
                
                {/* 1. FORMULÁRIO DE CRIAÇÃO (2/3 da largura) */}
                <div className="lg:col-span-2 bg-gray-800 p-8 rounded-xl shadow-2xl border border-green-800/50">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        
                        {/* TÍTULO */}
                        <input
                            type="text"
                            placeholder="Título do Post (Ex: Alerta Urgente de Phishing)"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500 text-xl font-semibold"
                            required
                            disabled={submetendo}
                        />
                        
                        {/* RESUMO */}
                        <textarea
                            placeholder="Resumo/Breve descrição para a listagem (máx 200 caracteres)"
                            value={resumo}
                            onChange={(e) => setResumo(e.target.value)}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500 resize-none"
                            disabled={submetendo}
                        />

                        {/* CATEGORIA E TAGS */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Categoria (Ex: Alertas, Capacitação)"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500"
                                required
                                disabled={submetendo}
                            />
                            <input
                                type="text"
                                placeholder="Tags (separadas por vírgula)"
                                onChange={handleTagsChange}
                                className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500"
                                disabled={submetendo}
                            />
                        </div>
                        
                        {/* IMAGEM DE CAPA */}
                        <div className="border border-gray-700 p-4 rounded-lg bg-gray-900">
                            <label className="block text-sm font-medium text-gray-400 mb-2">Imagem de Capa (Recomendado 16:9)</label>
                            <input 
                                id="image-upload"
                                type="file" 
                                accept="image/*" 
                                onChange={handleImageChange} 
                                className="hidden" 
                                disabled={submetendo}
                            />
                            
                            <div className="flex items-center space-x-4">
                                <label 
                                    htmlFor="image-upload"
                                    className="cursor-pointer inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"
                                >
                                    <ImagePlus size={20} className="mr-2" /> 
                                    {preview ? "Alterar Imagem" : "Selecionar Imagem"}
                                </label>
                                {preview && (
                                    <button 
                                        type="button" 
                                        onClick={removeImage} 
                                        className="inline-flex items-center px-3 py-2 text-sm text-red-400 border border-red-700 rounded-md hover:bg-red-700/30 transition-colors"
                                        disabled={submetendo}
                                    >
                                        <Trash2 size={16} className="mr-1" /> Remover
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* TINYMCE EDITOR */}
                        <label className="block text-sm font-medium text-gray-400 mb-1">Conteúdo Principal</label>
                        <Editor 
                            apiKey='10a027j2ocu278mqvpjlz2wn615asjx29ip2fuob7pg1n7rk'
                            value={conteudo}
                            onEditorChange={(newValue) => setConteudo(newValue)}
                            disabled={submetendo}
                            init={{
                                height: 500,
                                menubar: false,
                                skin: 'oxide-dark', // Tema escuro para o editor
                                content_css: 'dark', // Tema escuro para o conteúdo
                                content_style: 'body { background: #333; color: #f5f5f5; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6; } img { max-width: 100%; height: auto; }',
                                plugins: 'link image code table lists fullscreen preview',
                                toolbar:
                                    'undo redo | formatselect | bold italic underline | forecolor backcolor | alignleft aligncenter alignright | bullist numlist | link image | code | fullscreen preview',
                            }}
                        />

                        {/* BOTÃO SUBMETER */}
                        <button 
                            type="submit" 
                            className={`w-full py-3 rounded-lg text-lg font-bold transition-all duration-300 flex items-center justify-center mt-4
                                ${submetendo 
                                    ? 'bg-green-700/50 cursor-not-allowed' 
                                    : 'bg-green-500 text-gray-900 hover:bg-green-400 shadow-md'
                                }`}
                            disabled={submetendo}
                        >
                            {submetendo ? (
                                <>
                                    <Loader2 className="animate-spin h-5 w-5 mr-3" />
                                    A Submeter...
                                </>
                            ) : (
                                post ? "Atualizar Publicação" : "Guardar e Publicar"
                            )}
                        </button>
                    </form>
                </div>

                {/* 2. PRÉ-VISUALIZAÇÃO (1/3 da largura) */}
                <aside className="lg:col-span-1">
                    <div className="sticky top-8 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                        <h2 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
                            Pré-visualização do Post
                        </h2>
                        
                        {/* Estrutura da Pré-visualização idêntica à PostDetailPage */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-extrabold text-white leading-snug">
                                {titulo || "Título do Post (Placeholder)"}
                            </h3>
                            
                            <div className="flex items-center space-x-3 text-xs text-gray-500">
                                <span>Autor: Admin</span>
                                <span>Categoria: {categoria || 'Sem Categoria'}</span>
                                {/* Adicionar Tags se houver */}
                            </div>

                            {/* Pré-visualização da Imagem de Capa */}
                            {preview && (
                                <div className="relative h-40 w-full rounded-lg overflow-hidden border border-gray-700">
                                    <Image src={preview} alt="Pré-visualização da Imagem" fill className="object-cover" />
                                </div>
                            )}

                            {/* Resumo e Conteúdo (Renderizando HTML) */}
                            {resumo && <p className="text-base text-gray-400 italic">{resumo}</p>}
                            
                            <div className="pt-4 border-t border-gray-700">
                                <h4 className="text-lg font-semibold text-green-400 mb-2">Conteúdo:</h4>
                                <div 
                                    className="prose prose-sm prose-invert max-w-none text-sm text-gray-300 overflow-hidden max-h-[300px] relative" // Altura máxima para não sobrecarregar
                                    dangerouslySetInnerHTML={{ __html: conteudo || "<p class='text-gray-500'>O conteúdo do TinyMCE aparecerá aqui...</p>" }}
                                />
                                {/* Adicionamos um fade out sutil se o conteúdo for longo */}
                                <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-gray-800 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
            
            {/* Estilos globais para a pré-visualização (IMPORTANTE para TinyMCE) */}
            <style jsx global>{`
                /* Garantir que o conteúdo renderizado na pré-visualização tenha o tema escuro */
                .prose-invert h1, .prose-invert h2, .prose-invert h3 { color: #fff; }
                .prose-invert a { color: #10b981; }
                .prose-invert ul, .prose-invert ol { padding-left: 1.5rem; }
            `}</style>
        </section>
    );

}