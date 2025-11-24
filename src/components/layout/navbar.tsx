import { Menu, Search, XIcon } from "lucide-react"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { UserDropdown } from "../materialUI/UserDropDows";
import { Usuario } from "@/generated/prisma";

export const Header: React.FC = () => {

    const menuList = [
        {
            title: "Inicio",
            url: "/",
        },
        {
            title: "Sobre Nós",
            url: "/sobre"
        },
        {
            title: "Sobre Nós",
            url: "/sobre"
        },
        {
            title: "Noticias",
            url: "/noticia"
        },
        {
            title: "contacto",
            url: "/contacto"
        }
    ]

    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [user, setUser] = useState<Usuario | null>(null);
    const menuRef = useRef<HTMLDivElement>(null)

    const toogleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const handleLogout = async () => {
        alert('logout')
        try {
            const request = await fetch('/api/auth/logout', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!request.ok) {
                throw new Error('Erro ao fazer logout');
            }
            setUser(null);
            window.location.href = '/';
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setSearchOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        

        const getMe = async () => {
            try {
                const request = await fetch('/api/auth/me');
                const response = await request.json();
                if (!request.ok) {
                    throw new Error(response.message || 'Erro ao obter o usuário');
                }
                setUser(response.user);
            } catch (error) {
                console.log(error);
            }
        }
        getMe();

    }, [])

    return (
        <header className="backdrop-blur-2xl bg-background/5 sticky top-0 left-0 z-50 lg:py-0 py-7 border-green-800/5 border-b shadow-md">

            <nav className="relative flex items-center justify-between px-[6%] ">
                <Fade delay={200}
                    duration={1000}
                    fraction={0.5}
                >
                    <div className="text-3xl font-bold text-green-500 hover:text-green-400 transition-colors duration-300">
                        CSIRT.AC
                    </div>
                </Fade>

                <div className="flex items-center gap-4">
                    <Slide>
                        <ul className={`lg:relative lg:flex items-center justify-center lg:gap-4 gap-0 bg-background lg:bg-transparent lg:backdrop-blur-none backdrop-blur-lg w-full lg:w-fit ${menuOpen ? 'fixed top-full left-0 overflow-y-auto' : 'hidden'}`}>
                            {
                                menuList.map((item, index) => (
                                    <li key={index} className="relative group py-7">
                                        <Link href={item.url} className="menu-link">
                                            {item.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </Slide>

                    {user && <div className="">
                        <UserDropdown 
                            currentUser={{ nome: user.nome, email: user.email, tipoUsuario: user.tipo }}
                            onLogout={handleLogout}
                        />
                    </div>}

                    <div className="shadow-md border border-foreground/20 rounded-lg p-2 w-fit text-primary" onClick={() => setSearchOpen(!searchOpen)} ref={menuRef}>
                        <Search />
                    </div>

                    <div className="block lg:hidden shadow-md border border-foreground/20 rounded-lg p-2 w-fit text-primary" onClick={toogleMenu}>
                        <Menu />
                    </div>
                </div>
                <form action="#" className={`fixed top-0 left-0 w-full h-full bg-background/90 backdrop-blur-lg flex items-center justify-end z-50 px-[6%] ${searchOpen ? 'flex' : 'hidden'}`}>
                    <div className="relative w-full max-w-md">
                        <input type="text" placeholder="Pesquisar..." value={searchText} onChange={(e) => setSearchText(e.target.value)} className="w-full p-3 rounded-lg bg-background/80 text-primary border-b border-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary" />
                        <button type="button" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary" onClick={() => setSearchOpen(false)}>
                            <XIcon className="w-5 h-5" />
                        </button>
                    </div>
                </form>
            </nav>
        </header>
    )
}