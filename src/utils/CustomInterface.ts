import { Post, Arquivo, Usuario, Categoria, Tag, PostTag } from "@/generated/prisma";

export interface PostWithDeteils extends Post {
  imagem_capa: Arquivo,
  autor: Usuario,
  categoria: Categoria
  tags?: PostTagWithTags[]
}

export interface PostTagWithTags extends PostTag{
  tag: Tag
}