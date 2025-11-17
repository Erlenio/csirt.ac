import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

// Importações de CSS do Swiper
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";

// Tipagem permanece a mesma
/*interface HeroProps {
    slides?: Slide[];
}*/

interface Slide {
    title: string;
    description: string;
    imageUrl: string;
    ctaText: string;
    ctaLink: string;
}

const defaultSlides: Slide[] = [
    // ... [Seus slides dinâmicos originais] ...
    {
        title: "Gestão Proativa de Vulnerabilidades",
        description: "Identificamos e mitigamos riscos antes que se tornem ameaças reais.",
        imageUrl: "/eventos/gestao.jpeg", 
        ctaText: "Ver Serviços",
        ctaLink: "/servicos"
    },
    {
        title: "Capacitação em Segurança Cibernética",
        description: "Elevando o nível de consciência e competência em toda a comunidade académica.",
        imageUrl: "/eventos/capacitacao.jpeg", 
        ctaText: "Nossos Treinamentos",
        ctaLink: "/treinamentos"
    },
];

export const Hero: React.FC = () => {
    // Para simplificar, vamos usar os slides de exemplo (excluindo o primeiro dinâmico que era similar ao estático)
    const dynamicSlides = defaultSlides.slice(0); // Pega todos os slides dinâmicos

    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
                delay: 7000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            loop={true} // Manter o loop garante uma transição suave entre o último slide e o primeiro
            modules={[Autoplay, Pagination]}
            className="mySwiper w-full h-[550px] lg:h-[480px] relative shadow-2xl"
        >
            {/* ============================================== */}
            {/* 1. SLIDE ESTÁTICO (Conteúdo fornecido pelo usuário) */}
            {/* Removemos o overlay de imagem/gradiente para usar o layout customizado */}
            <SwiperSlide className="relative bg-gray-900">
                <HeroItemStatic />
            </SwiperSlide>
            {/* ============================================== */}


            {/* 2. SLIDES DINÂMICOS (O restante dos banners) */}
            {dynamicSlides.map((slide, index) => (
                <SwiperSlide key={index} className="relative">
                    {/* Conteúdo do slide dinâmico (mantido do componente modernizado) */}
                    <Image
                        src={slide.imageUrl}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        fill
                    />
                    <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-gray-900/60 to-transparent"></div>

                    <div className="absolute inset-0 flex items-center px-4 md:px-16 text-white">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
                                {slide.title}
                            </h1>
                            <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
                                {slide.description}
                            </p>
                            <a 
                                href={slide.ctaLink}
                                className="inline-block px-10 py-3 bg-green-500 text-gray-900 font-bold uppercase rounded-full shadow-lg transition-all duration-300 hover:bg-green-400 hover:shadow-green-500/50 transform hover:scale-[1.03]"
                            >
                                {slide.ctaText}
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}




// O componente para o slide estático (Hero Section principal)
export const HeroItemStatic: React.FC = () => {
    return (
        <section className="relative w-full h-full flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left py-16 px-4 md:px-16">
            {/* Efeito de grade no fundo (Grid Pattern) */}
            {/* Nota: Você precisará definir a classe 'bg-grid-green-500/10' no seu arquivo CSS global ou em um plugin Tailwind, 
               ou substituí-la por um design que você já tem. Vou usar um degradê simples para garantir a funcionalidade. */}
            <div className="absolute inset-0 bg-green-900/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
            
            <div className="relative z-10 max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-extrabold text-green-500 mb-4 tracking-tight leading-tight">
                    CSIRT.AC
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6 leading-snug">
                    Protegendo o Futuro Digital da Academia
                </h2>
                <p className="text-lg text-gray-400 mb-8">
                    A <strong>MoRENet-CSIRT</strong> é a Equipe de Resposta a Incidentes de Segurança Cibernética para a comunidade académica e científica, dedicada a garantir um ambiente online seguro e confiável.
                </p>
                <Link href="reportar-incident" className="inline-flex items-center px-8 py-3 rounded-full font-bold text-gray-950 bg-green-500 hover:bg-green-400 transition-colors duration-300">
                    Reportar um Incidente <ArrowRight size={20} className="ml-2" />
                </Link>
            </div>
            <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 items-center justify-center mt-8 md:mt-0 lg:block hidded">
                <ShieldCheck className="text-green-500 w-full h-full animate-pulse" />
            </div>
        </section>
    );
}