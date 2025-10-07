import { LogOutIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { useContext, createContext } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"

const SidebarContext = createContext()

export default function Sidebar({ children, name, email, onLogout, expanded, onExpandChange, user = null }) {

  const router = useRouter();

  function onLogoutClicked() {
    onLogout()
  }

  function onExpand() {
    onExpandChange(!expanded);
  }

  return (
    <aside className="h-screen w-fit fixed left-0 top-0 z-50">
      <nav className="h-full flex flex-col bg-background border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <Image
            src="/images/morenet.png"
            className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"
              }`}
            alt="MoRENet"
            width={128}
            height={40}
          />
          <button
            onClick={() => onExpand()}
            className="p-1.5 rounded-lg bg-component text-foreground hover:bg-component/60 hover:text-primary"
          >
            {expanded ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3" onClick={() => router.push('/dashboard/profile')}>
          {/**<Image
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          /> */}
          {user == null && (
            <div className="w-9 h-9 flex items-center justify-center rounded-md bg-slate-200 text-2xl text-green-400 font-semibold">
              {name && name.split(' ', 2).map((it, index) => ( // Adicionando o 'index'
                <small key={`${it}-${index}`}>{it[0].toUpperCase()}</small>
              ))}
            </div>
          )}

          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">{name}</h4>
              <span className="text-xs text-foreground">{email}</span>
            </div>
            <LogOutIcon width={20} height={20} className="text-primary cursor-pointer inline-flex hover:text-red-500" onClick={onLogoutClicked} />
          </div>
        </div>
      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, active, alert, address }) {
  const { expanded } = useContext(SidebarContext)

  return (
    <li
    >
      <Link href={address} className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-green-500"
          : "hover:bg-indigo-50 text-gray-600"
        }
    `}>
        {icon}
        <span
          className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
            }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-green-400 ${expanded ? "" : "top-2"
              }`}
          />
        )}

        {!expanded && (
          <div
            className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-green-500 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
          >
            {text}
          </div>
        )}
      </Link>
    </li>
  )
}