'use client';

import React, { useEffect, useState } from 'react';
import { Calendar, User, Tag, ArrowLeft, Heart, Facebook, Twitter, Linkedin, AlertTriangle, Loader2, XCircle } from 'lucide-react';
import Link from 'next/link';
import { PostWithDeteils } from '@/utils/CustomInterface';
import { Comentario } from '@/generated/prisma';
import { useParams } from 'next/navigation';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/navbar';


const PostDetailPage: React.FC = () => {

    const [post, setPost] = useState<PostWithDeteils | null>(null);
    const [comments, setComments] = useState<Comentario[]>([]);
    const [commentAuthor, setCommentAuthor] = useState('');
    const [commentText, setCommentText] = useState('');
    const [isPosting, setIsPosting] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null); // NOVO ESTADO PARA ERRO
    const [latestPosts, setLatestPosts] = useState<PostWithDeteils[]>([]);

    const searchParams = useParams();
    const slug = searchParams.slug;

    const postUrl = `https://seusite.mz/blog/${post?.slug}`;
    const shareText = `Leia o novo alerta de segurança do CSIRT.AC: ${post?.titulo}`;

    const handleCommentSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!commentAuthor || !commentText) return;
        setIsPosting(true);

        try {
            const response = await fetch('/api/comentarios', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                /**
                 * model Comen+tario {
  id        String   @id @default(uuid())
  post_id   String
  nome      String
  email     String
  mensagem  String
  criado_em DateTime @default(now())
  aprovado  Boolean  @default(false)

  post      Post     @relation(fields: [post_id], references: [id])
}
                 */
                body: JSON.stringify({
                    post_id: post?.id,
                    nome: commentAuthor,
                    email: 'user@mail.com', // Email fictício, pois não há campo no formulário
                    mensagem: commentText,
                }),
            });
            if (!response.ok) {
                throw new Error('Erro ao enviar comentário. Tente novamente mais tarde.');
            }
            const newComment = await response.json();
            console.log(newComment);

            setComments([...comments, newComment]);
            setCommentAuthor('');
            setCommentText('');
        }
        catch (error) {
            console.error('Failed to post comment:', error);
            alert(error instanceof Error ? error.message : 'Ocorreu um erro desconhecido ao enviar seu comentário.');
        } finally {
            setIsPosting(false);
        }

    };

    // Funções de formatação de data
    const formattedDate = new Intl.DateTimeFormat('pt-MZ', {
        year: 'numeric', month: 'long', day: 'numeric'
    }).format(post?.publicado_em ? new Date(post?.publicado_em) : new Date());

    const formatDateComment = (date: Date) =>
        new Intl.DateTimeFormat('pt-MZ', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }).format(date);


    useEffect(() => {
        const getPost = async () => {
            setLoading(true);
            setError(null); // Limpa erros anteriores
            try {
                const request = await fetch(`/api/posts/noticia`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', credentials: 'include' },
                    body: JSON.stringify({ slug })
                });

                if (!request.ok) {
                    throw new Error('Erro 404: Notícia não encontrada ou indisponível.');
                }

                const response = await request.json();

                setPost(response.data);
                setLatestPosts(response.ultimos);
                setComments(response.data.comentarios || []);
            } catch (error) {
                console.error("Failed to fetch post:", error);
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('Ocorreu um erro desconhecido ao carregar o post.');
                }
                setPost(null); // Garante que o post não será exibido em caso de erro
            } finally {
                setLoading(false);
            }
        };
        if (slug) {
            getPost();
        }
    }, [slug]);


    // ----------------------------------------------------
    // COMPONENTES DE ESTADO (LOADING E ERROR)
    // ----------------------------------------------------

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-900 py-16 flex items-center justify-center">
                <div className="text-center text-green-500">
                    <Loader2 size={48} className="animate-spin mx-auto mb-4" />
                    <p className="text-xl">A carregar conteúdo...</p>
                    <p className="text-gray-500 text-sm mt-1">Aguarde um momento.</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center bg-gray-800 p-10 rounded-xl border-2 border-red-600 shadow-xl">
                    <XCircle size={64} className="text-red-500 mx-auto mb-4" />
                    <h1 className="text-3xl font-bold text-white mb-3">Erro ao Carregar Notícia</h1>
                    <p className="text-xl text-red-300 mb-6">{error}</p>
                    <Link href="/blog" className="inline-flex items-center px-6 py-3 rounded-lg font-bold bg-green-500 text-gray-900 hover:bg-green-400 transition-colors">
                        <ArrowLeft size={20} className="mr-2" /> Voltar ao Blog
                    </Link>
                </div>
            </div>
        );
    }

    // Se não está carregando e não tem post (mas também não houve erro explícito),
    // é um cenário de 404/Not Found, mas já capturado pelo 'error' acima.
    // Se o post for null aqui, podemos forçar o erro 404 caso o backend falhe em dar o erro
    if (!post) {
        return (
            <div className="min-h-screen bg-gray-900 py-16 flex items-center justify-center text-center">
                <div className="text-red-500">
                    <XCircle size={64} className="mx-auto mb-4" />
                    <h1 className="text-3xl font-bold text-white mb-3">Notícia Indisponível</h1>
                    <p className="text-red-300">A notícia que você procura não pôde ser encontrada.</p>
                </div>
            </div>
        );
    }


    // ----------------------------------------------------
    // CONTEÚDO PRINCIPAL (EXIBIDO APENAS SE post NÃO É NULL)
    // ----------------------------------------------------

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">

                    {/* Botão de Voltar */}
                    <Link href="/noticia" className="inline-flex items-center text-green-500 hover:text-green-400 transition-colors mb-6">
                        <ArrowLeft size={20} className="mr-2" /> Voltar para o Blog
                    </Link>

                    {/* Layout Principal: Conteúdo e Sidebar */}
                    <div className="grid lg:grid-cols-12 gap-12">

                        {/* 1. CONTEÚDO PRINCIPAL (8/12 colunas) */}
                        <main className="lg:col-span-8">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                                {post.titulo}
                            </h1>

                            {/* Metadados e Partilha */}
                            <div className="flex flex-wrap items-center justify-between text-sm text-gray-500 mb-8 pb-4 border-b border-gray-700">
                                <div className="flex items-center space-x-4">
                                    <span className="flex items-center"><User size={16} className="mr-2" /> Por {post.autor.nome}</span>
                                    <span className="flex items-center"><Calendar size={16} className="mr-2" /> {formattedDate}</span>
                                    <span className="flex items-center"><Tag size={16} className="mr-2" /> {post.categoria.nome}</span>
                                </div>

                                {/* LINKS DE PARTILHA */}
                                <div className="flex items-center space-x-3 mt-4 lg:mt-0 text-gray-400">
                                    <span className="font-semibold text-white text-base">Partilhar:</span>
                                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="Partilhar no Facebook" className="hover:text-green-500"><Facebook size={20} /></a>
                                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(postUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="Partilhar no X (Twitter)" className="hover:text-green-500"><Twitter size={20} /></a>
                                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(post.titulo ?? '')}`} target="_blank" rel="noopener noreferrer" aria-label="Partilhar no LinkedIn" className="hover:text-green-500"><Linkedin size={20} /></a>
                                </div>
                            </div>

                            {/* Imagem de Capa */}
                            <img src={post.imagem_capa.caminho} alt={post.titulo} className="w-full h-auto rounded-xl shadow-lg mb-8" />

                            {/* CONTEÚDO HTML DO TINYMCE */}
                            <div
                                className="prose prose-invert max-w-none text-lg leading-relaxed text-gray-300 post-content"
                                dangerouslySetInnerHTML={{ __html: post.conteudo ?? '' }}
                            />

                            {/* ----------------------------------- */}
                            {/* SEÇÃO DE COMENTÁRIOS */}
                            {/* ----------------------------------- */}
                            <div className="mt-16 pt-8 border-t border-gray-700">
                                <h2 className="text-3xl font-bold text-white mb-6">Comentários ({comments.length})</h2>

                                {/* Formulário de Comentário */}
                                <form onSubmit={handleCommentSubmit} className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-8 space-y-4">
                                    <h3 className="text-xl font-semibold text-green-500">Deixe seu Comentário</h3>
                                    <input
                                        type="text"
                                        placeholder="Seu Nome (Obrigatório)"
                                        required
                                        value={commentAuthor}
                                        onChange={(e) => setCommentAuthor(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500"
                                        disabled={isPosting}
                                    />
                                    <textarea
                                        placeholder="Escreva seu comentário aqui..."
                                        rows={4}
                                        required
                                        value={commentText}
                                        onChange={(e) => setCommentText(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500 resize-none"
                                        disabled={isPosting}
                                    />
                                    <button
                                        type="submit"
                                        disabled={isPosting}
                                        className={`inline-flex items-center px-6 py-2 rounded-lg font-bold transition-all duration-300 
                                        ${isPosting
                                                ? 'bg-green-700/50 cursor-not-allowed'
                                                : 'bg-green-500 text-gray-900 hover:bg-green-400'
                                            }`}
                                    >
                                        {isPosting ? 'A Enviar...' : 'Publicar Comentário'}
                                    </button>
                                    <p className="text-xs text-gray-500 mt-2">Os comentários são sujeitos a moderação antes de serem publicados.</p>
                                </form>

                                {/* Lista de Comentários */}
                                <div className="space-y-6">
                                    {comments.map((comment) => (
                                        <div key={comment.id} className="bg-gray-800 p-5 rounded-lg border border-gray-700/50">
                                            <div className="flex justify-between items-center mb-2">
                                                <p className="font-semibold text-green-400">{comment.nome}</p>
                                                <p className="text-xs text-gray-500">{formatDateComment(comment.criado_em instanceof Date ? comment.criado_em : new Date(comment.criado_em))}</p>
                                            </div>
                                            <p className="text-gray-300">{comment.mensagem}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </main>

                        {/* 2. SIDEBAR (4/12 colunas) - Sem Alterações Estruturais */}
                        <aside className="lg:col-span-4">
                            <div className="space-y-8 sticky top-25">

                                {/* Box de Contato Rápido */}
                                <div className="bg-gray-800 p-6 rounded-xl border border-green-800/50 shadow-lg">
                                    <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
                                        Reporte Rápido
                                    </h3>
                                    <p className="text-gray-400 mb-4">
                                        Precisa reportar um incidente relacionado a este alerta?
                                    </p>
                                    <Link
                                        href="/reportar-incident"
                                        className="w-full inline-flex justify-center items-center py-3 px-4 rounded-lg text-lg font-bold bg-red-600 text-white hover:bg-red-700 transition-colors duration-300"
                                    >
                                        <AlertTriangle size={20} className="mr-2" /> Reportar Incidente
                                    </Link>
                                </div>

                                {/* POSTS RELACIONADOS */}
                                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
                                    <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2 flex items-center">
                                        <Heart size={20} className="mr-2 text-green-500" /> Posts Relacionados
                                    </h3>
                                    <div className="space-y-4">
                                        {latestPosts.map(relatedPost => (
                                            <Link
                                                key={relatedPost.id}
                                                href={`/noticia/${relatedPost.slug}`}
                                                className="block hover:bg-gray-700 p-3 rounded-lg transition-colors group"
                                            >
                                                <p className="text-sm font-semibold text-white group-hover:text-green-400 transition-colors">{relatedPost.titulo}</p>
                                                <p className="text-xs text-gray-500 mt-1">{relatedPost.categoria.nome}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>

                {/* Estilos para o conteúdo HTML formatado (mantidos) */}
                <style jsx global>{`
                .prose ol > li::before, .prose ul > li::before { color: #10b981; }
            `}</style>

                <Footer />

            </div>
        </>
    );
};

export default PostDetailPage;