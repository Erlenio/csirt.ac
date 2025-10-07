// src/components/seo/ArticleSeo.tsx

import React from 'react';
import Head from 'next/head';
import { PostWithDeteils } from "@/utils/CustomInterface";

interface ArticleSeoProps {
  post: PostWithDeteils;
}

export const ArticleSeo: React.FC<ArticleSeoProps> = ({ post }) => {
  const pageTitle = `${post.titulo} | MoRENet Notícias`;
  const pageDescription = post.conteudo.slice(0, 150) + '...'; // Pega os primeiros 150 caracteres
  const pageUrl = `https://seusite.com/noticias/${post.slug}`; // SUBSTITUA PELO SEU DOMÍNIO REAL
  const imageUrl = post.imagem_capa?.caminho;

  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": post.titulo,
    "image": [imageUrl],
    "datePublished": post.publicado_em,
    "dateModified": post.atualizado_em,
    "author": {
      "@type": "Person",
      "name": post.autor.nome
    },
    "publisher": {
      "@type": "Organization",
      "name": "MoRENet",
      "logo": {
        "@type": "ImageObject",
        "url": "https://seusite.com/morenet-logo.png" // SUBSTITUA PELO SEU DOMÍNIO REAL E CAMINHO DO LOGO
      }
    },
  };

  return (
    <Head>
      {/* Título da página */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      {/* Tags para SEO e redes sociais (Open Graph) */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="article" />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      
      {/* Tags para o Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {/* Schema Markup (Structured Data) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};