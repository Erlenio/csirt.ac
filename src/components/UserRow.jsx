import { Edit, KeyRound, LucideTrash2, MoreVertical } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importação do componente Image

export function UserRow({ usuario, onSelect }) {
  
  function onSelectChange() {
    // Função para selecionar o usuário
    if (onSelect) {
      onSelect(usuario.id);
    }
  }

  function openPassWordChange(userId) {
    console.log(`Repor senha para o usuário com ID: ${userId}`);
    // Lógica para abrir o modal de alteração de senha
  }

  return (
    <tr className="bg-component border-b hover:bg-primary/50">
      <td className="w-4 p-4 border border-background">
        <div className="flex items-center">
          <input
            id={`checkbox-${usuario.id}`}
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            onChange={onSelectChange}
            value={usuario.id}
          />
          <label htmlFor={`checkbox-${usuario.id}`} className="sr-only">
            checkbox
          </label>
        </div>
      </td>

      <td scope="row" className="flex items-center px-6 py-1 text-foreground whitespace-nowrap border border-background">
        <Link href={`/admin/profile/${usuario.id}`} className="flex items-center px-6 py-1 text-foreground whitespace-nowrap">
          {usuario.imageID ? (
            <Image
              className="w-10 h-10 rounded-full"
              src="/docs/images/people/profile-picture-1.jpg"
              alt={`${usuario.nome} profile`}
              width={40}
              height={40}
            />
          ) : (
            <div className="bg-green-500 rounded-full p-3 text-white w-12 h-12 flex items-center justify-center text-xl font-semibold">
              {usuario.nome &&
                usuario.nome
                    .split(' ', 2)
                    .map((it, index) => (
                        <small key={index}>{it[0].toUpperCase()}</small>
                    ))}

            </div>
          )}

          <div className="ps-3">
            <div className="text-base font-semibold">{usuario.nome}</div>
            <div className="font-normal text-foreground/80">{usuario.email}</div>
          </div>
        </Link>
      </td>

      <td className="px-6 py-1 border border-background">
        {usuario.tipo}
      </td>

      <td className="px-6 py-1 border border-background">
        <span className="block">{usuario.tipoUsuario}</span>
        <span>{usuario.previlegio}</span>
      </td>

      <td className="px-6 py-1 relative border border-background">
        <div className="group relative">
          <MoreVertical className="cursor-pointer" aria-label="Menu de ações" />

          <ul className="group-hover:block hidden absolute w-44 bg-white shadow-md rounded-md right-0 z-[5]">
            <li className="px-3 py-1 hover:bg-slate-100 hover:text-blue-700 flex items-center justify-between rounded-t-md">
              <span>Editar</span>
              <Edit title="Editar" width={20} height={20} />
            </li>

            <li
              className="px-3 py-1 hover:bg-slate-100 hover:text-blue-700 flex items-center justify-between"
              onClick={() => openPassWordChange(usuario.id)}
            >
              <span>Repor senha</span>
              <KeyRound title="Alterar senha" width={20} height={20} />
            </li>

            <li className="px-3 py-1 hover:bg-slate-100 hover:text-red-400 flex items-center justify-between rounded-b-md">
              <span>Apagar</span>
              <LucideTrash2 width={20} height={20} className="text-red-400" />
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
}
