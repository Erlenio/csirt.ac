/*
  Warnings:

  - Made the column `email` on table `comentario` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `comentario` MODIFY `email` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `usuario` MODIFY `tipo` ENUM('ADMIN', 'AUTOR', 'EDITOR', 'LEITOR') NOT NULL DEFAULT 'LEITOR';
