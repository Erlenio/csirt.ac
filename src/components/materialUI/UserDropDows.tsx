"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { UsuarioTipo } from "@/generated/prisma";

type UserDropdownProps = {
  currentUser: {
    nome: string;
    email: string;
    profilePicture?: string;
    tipoUsuario?: string;
  };
  arrowIndicator? : boolean;
  onLogout?: () => void;
};

export const UserDropdown = ({ currentUser, arrowIndicator=false, onLogout}: UserDropdownProps) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const onLogoutClicked = () => {
    if(onLogout) {
      onLogout();
    }
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }



    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Botão de avatar */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center gap-2 hover:bg-primary/10 rounded-full transition-colors  border border-primary/10 ${arrowIndicator && "pr-2"}`}
      >
        <div className="grid place-items-center bg-primary/10 rounded-full w-12 h-12">
          {currentUser.profilePicture ? (
            <Image
              src={currentUser.profilePicture}
              alt={currentUser.nome}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
              priority
            />
          ) : (
            <span className="text-primary font-bold text-xl">
              {currentUser.nome.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        {arrowIndicator && <ChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />}
      </button>

      {/* Menu suspenso */}
      {open && (
        <div className="absolute right-0 mt-3 w-64 bg-background rounded-md shadow-lg p-4 z-50">
          <p className="text-primary font-semibold">{currentUser.nome}</p>
          <p className="text-secondary text-sm truncate">
            {currentUser.email}
          </p>

          <hr className="my-3 border-secondary/20" />

          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="/perfil"
                className="block px-2 py-1 rounded hover:bg-primary/10"
              >
                Perfil
              </a>
            </li>
            {currentUser.tipoUsuario === UsuarioTipo.ADMIN && <li>
              <a
                href="/admin"
                className="block px-2 py-1 rounded hover:bg-primary/10"
              >
                Dashboard
              </a>
            </li>}
            <li>
              <button
                onClick={onLogoutClicked}
                className="block px-2 py-1 rounded hover:bg-red-50 text-red-600 w-full text-start"
              >
                Sair
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
