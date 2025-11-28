import { AlertTriangle, Home, ImageIcon, Newspaper, Users } from 'lucide-react';
import { useState } from 'react';
import Sidebar, { SidebarItem } from '@/components/Sidebar'

export default function AdminLayout({ children, currentUser, current }) {
    const [expanded, setExpanded] = useState(false);
    function logout() {
        alert(localStorage.getItem('authToken'));
        localStorage.removeItem('authToken');
        route.refresh();
    }
    return (

        <section className='w-screen relative'>
            <Sidebar name={currentUser?.nome} email={currentUser?.email} onLogout={logout} expanded={expanded} onExpandChange={(it) => setExpanded(it)}>
                {/*<SidebarItem icon={<Home size={20} />} text={"Inicio"} active={current == 1} address={'/admin'} />*/}
                <SidebarItem icon={<AlertTriangle size={20} />} text={"Incidentes"} active={current == 1} address={'/admin/incidentes'} />
                <SidebarItem icon={<Users size={20} />} text={"Usuários"} active={current == 2} address={'/admin/usuarios'} />
                <SidebarItem icon={<Newspaper size={20} />} text={"Blog"} active={current == 3} address={'/admin/post'} />
            </Sidebar>
            <div className={`transition-all ${expanded ? "md:ml-72" : "ml-[69px]"
                } flex-1 relative`}>
                {children}
            </div>
        </section>
    );
}