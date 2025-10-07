import {
  Code,
  ShieldCheck,
  Zap,
  Network,
  Cloud,
  Server,
  Database,
  Link,
  Users,
  Briefcase,
  Globe,
  Lightbulb,
} from "lucide-react";

// Definição da tipagem para os parceiros
interface Partner {
  name: string;
  icon: React.ElementType;
}

// Dados de exemplo para os parceiros
const partners: Partner[] = [
  { name: "Africa Connect", icon: Network },
  { name: "Afrinic", icon: Cloud },
  { name: "CHP", icon: Server },
  { name: "Huawei", icon: Code },
  { name: "Internet Society", icon: Globe },
  { name: "Movitel", icon: Zap },
  { name: "Astria Learning", icon: Lightbulb },
  { name: "NSRC", icon: ShieldCheck },
  { name: "Maluana", icon: Link },
  { name: "RNP", icon: Database },
  { name: "Tmcel", icon: Users },
  { name: "UbuntuNet", icon: Briefcase },
  // Duplicando os parceiros para a animação infinita
  { name: "Africa Connect", icon: Network },
  { name: "Afrinic", icon: Cloud },
  { name: "CHP", icon: Server },
  { name: "Huawei", icon: Code },
  { name: "Internet Society", icon: Globe },
  { name: "Movitel", icon: Zap },
  { name: "Astria Learning", icon: Lightbulb },
  { name: "NSRC", icon: ShieldCheck },
  { name: "Maluana", icon: Link },
  { name: "RNP", icon: Database },
  { name: "Tmcel", icon: Users },
  { name: "UbuntuNet", icon: Briefcase },
];

export const Partners = () => {
  return (
    <section id="partners" className="mb-20 overflow-hidden py-12">
      <h3 className="mb-4 text-center text-3xl font-bold text-green-500">Nossos Parceiros</h3>
      <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
        Trabalhamos em estreita colaboração com as principais organizações nacionais e internacionais para fortalecer a segurança digital.
      </p>
      <div className="relative h-24 w-full">
        <div className="absolute flex will-change-transform animate-partners">
          {partners.map((partner, index) => (
            <div key={index} className="flex-none px-6">
              <div className="flex flex-col items-center justify-center space-y-2">
                <partner.icon size={64} className="text-gray-400 transition-colors duration-300 hover:text-green-500" />
                <p className="text-sm text-gray-400">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes partners {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-partners {
          animation: partners 60s linear infinite;
        }
      `}</style>
    </section>
  );
};
