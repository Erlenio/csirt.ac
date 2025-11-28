"use client";

import { useState, useEffect } from "react";
import { Footer } from "../components/layout/footer";
import { Services } from "../components/services";
import { Partners } from "../components/partners/partners";
import { Header } from "../components/layout/navbar";
import { MissionVisionValues } from "../components/MissionVisionValues";
import { Hero } from "../components/Hero";
import { CAT } from "../components/CAT";
import { NewsSection } from "../components/noticia/NewsSection";
import { PostWithDeteils } from "@/utils/CustomInterface";

export default function Home() {
  //const [isMenuOpen, setIsMenuOpen] = useState(false);
  //const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Controla o scroll do body quando o menu mobile está aberto

  const [posts, setPosts] = useState<PostWithDeteils[]>([]);

  /*useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);*/

  useEffect(() => {
    // Buscar posts ao carregar o componente
    getPost();
  }, []);

  const getPost = async () => {
    try {

      const request = await fetch(`/api/posts?limit=4`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          credentials: 'include'
        },
      });

      if (!request.ok) {
        throw new Error('Erro ao criar conta');
      }

      const response = await request.json();
      const posts_ = response.data;

      setPosts(posts_);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {

    }
  }

  // Funções para lidar com o menu e a pesquisa.
  //const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  //const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">

      <Header />
      <Hero />
      <MissionVisionValues />
      <Services />
      {/* Seção de Notícias Recentes */}
      <NewsSection recentNews={posts} />
      <Partners />
      {/*<SolutionsSection />*/}
      <CAT />
      <Footer />
    </div>
  );
}
