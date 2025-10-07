import { Link, ArrowRight } from "lucide-react"

export const CAT: React.FC = () => {
    return (
        <section className="px-[9%] py-16">
            <div id="contact" className="bg-gray-800 rounded-2xl text-center border border-green-800 p-8 md:p-12">
                <h3 className="text-3xl font-bold text-green-500 mb-4">Tem um Incidente?</h3>
                <p className="text-lg text-gray-300 mb-8">
                    Nossa equipe de resposta está pronta para ajudar a comunidade acadêmica. Não hesite em nos contatar em caso de qualquer problema de segurança cibernética.
                </p>
                <Link href="/contact" className="inline-flex items-center px-10 py-4 rounded-full font-bold text-gray-950 bg-green-500 hover:bg-green-400 transition-colors duration-300">
                    Fale Conosco <ArrowRight size={20} className="ml-2" />
                </Link>
            </div>
        </section>
    )
}