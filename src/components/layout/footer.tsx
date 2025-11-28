"use client";

import Link from "next/link";
import { useState } from "react";
import { Loader, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

// Definição da tipagem para os links
interface LinkItem {
  name: string;
  link: string;
}

// Dados de links e ícones
const QUICK_LINK: LinkItem[] = [
  { name: "Início", link: "/" },
  { name: "Sobre nós", link: "#about" },
  { name: "Serviços", link: "#services" },
  { name: "Blog", link: "/blog" },
];

const LINKS_UTEIS: LinkItem[] = [
  { name: "Reportar Incidente", link: "/report" },
  { name: "FAQ", link: "/faq" },
  { name: "Termos de Serviço", link: "/terms" },
  { name: "Política de Privacidade", link: "/privacy" },
];

/*const CONTACTOS: LinkItem[] = [
  { name: "cert@morenet.ac", link: "mailto:cert@morenet.ac" },
  { name: "+258 21 486 422", link: "tel:+25821486422" },
  { name: "Av. de Moçambique, Maputo", link: "#" },
];*/

const Icons = [
  //{ name: "Facebook", icon: Facebook, link: "https://facebook.com" },
  //{ name: "Twitter", icon: Twitter, link: "https://twitter.com" },
  //{ name: "Instagram", icon: Instagram, link: "https://instagram.com" },
  { name: "Linkedin", icon: Linkedin, link: "https://linkedin.com" },
  { name: "Youtube", icon: Youtube, link: "https://youtube.com" },
];

// Componente para renderizar um item de link
const Item = ({ Links, title }: { Links: LinkItem[]; title: string }) => {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <ul>
        {Links.map((link, index) => (
          <li key={index} className="mb-2 transition-colors duration-300 hover:text-green-500">
            <Link href={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Componente para renderizar os ícones sociais
const SocialIcons = () => {
  return (
    <div className="flex justify-center md:justify-end">
      {Icons.map(icon => (
        <a key={icon.name} href={icon.link} target="_blank" rel="noopener noreferrer" aria-label={icon.name} className="p-2 mx-1.5 text-xl rounded-full transition-all duration-300 bg-gray-700 text-green-500 hover:text-gray-100 hover:bg-green-500">
          <icon.icon size={20} />
        </a>
      ))}
    </div>
  );
};

// Componente principal do rodapé
export const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const validEmail = (email: string) => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexEmail.test(email);
  };

  async function subscribe(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');
    setMessageType('');

    if (!validEmail(email)) {
      setMessageType('error');
      setMessage("O email inserido é inválido.");
      setIsLoading(false);
      return;
    }

    try {
      // Simulação da chamada de API. Substitua com a sua URL real.
      const request = await fetch('/api/inscritos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });

      const response = await request.json();

      switch (response.code) {
        case 200:
          setMessageType('success');
          setMessage("Subscrição realizada com sucesso!");
          setEmail('');
          break;
        case 230:
          setMessageType('error');
          setMessage("Este email já foi registado.");
          setEmail('');
          break;
        case 500:
          setMessageType('error');
          setMessage(response.message || "Ocorreu um erro ao subscrever.");
          break;
        default:
          setMessageType('error');
          setMessage("Ocorreu um erro desconhecido.");
      }
    } catch (error) {
      console.error(error);
      setMessageType('error');
      setMessage('Ocorreu um erro de rede. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Seção de Newsletter */}
      <div className="flex flex-col items-center justify-between px-4 py-12 md:flex-row md:px-12 md:py-8 lg:px-24">
        <h1 className="mb-6 max-w-lg text-center font-bold leading-tight md:mb-0 md:text-left md:text-xl lg:text-3xl">
          Subscreva-se à nossa <span className="text-green-500">newsletter</span>
        </h1>
        <form onSubmit={subscribe} className="flex w-full flex-col items-center sm:flex-row sm:w-auto">
          <input
            type="email"
            placeholder="Seu email"
            className="mb-4 w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-3 text-gray-200 placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 sm:mb-0 sm:mr-4 sm:w-72"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-md bg-green-500 px-6 py-3 font-bold text-gray-900 transition-colors duration-300 hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <Loader className="h-5 w-5 animate-spin" />
                <span>Carregando...</span>
              </div>
            ) : (
              'Subscrever'
            )}
          </button>
        </form>
      </div>

      {/* Mensagem de feedback do formulário */}
      {message && (
        <div className={`mx-auto max-w-lg rounded-md px-4 py-3 text-center ${messageType === 'success' ? 'bg-green-600' : 'bg-red-600'} text-white`}>
          {message}
        </div>
      )}

      {/* Seção de Links e Ícones */}
      <div className="border-t border-gray-700 px-4 py-16 md:px-12 md:py-16 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-left">
            <h2 className="mb-2 text-3xl font-bold text-green-500">CSIRT.AC</h2>
            <p className="text-gray-400 mb-2">Protegendo a comunidade acadêmica e científica.</p>
            <div className="w-[70%] h-20 relative">
              <Image src="/imagens/MoRENet_Logo.png" alt="MoRENet" fill/>
            </div>
          </div>
          <Item Links={QUICK_LINK} title="Links Rápidos" />
          <Item Links={LINKS_UTEIS} title="Links Úteis" />
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="mb-4 text-xl font-bold">Contactos</h2>
            <ul className="text-gray-400">
              <li className="mb-2 flex items-center justify-center md:justify-start gap-2">
                <Mail size={18} className="text-green-500" />
                <Link href="mailto:cert@morenet.ac" className="hover:text-green-500">cert@morenet.ac</Link>
              </li>
              <li className="mb-2 flex items-center justify-center md:justify-start gap-2">
                <Phone size={18} className="text-green-500" />
                <Link href="tel:+25821486422" className="hover:text-green-500">+258 84 548 5927</Link>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <MapPin size={18} className="text-green-500" />
                <span className="hover:text-green-500">Parque de Ciências, Maluana KM 60</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Direitos Autorais e Redes Sociais */}
      <div className="flex flex-col-reverse items-center justify-between gap-4 border-t border-gray-700 px-4 py-6 text-center text-sm text-gray-500 md:flex-row md:px-12 lg:px-24">
        <span className="mt-4 md:mt-0">© {new Date().getFullYear()} | Powered by <span className="font-semibold text-green-500">MoRENet</span></span>
        <SocialIcons />
      </div>
    </footer>
  );
};
