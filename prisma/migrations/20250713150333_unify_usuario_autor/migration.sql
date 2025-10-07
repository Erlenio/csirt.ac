/*
  Warnings:

  - You are about to drop the `autor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `autor` DROP FOREIGN KEY `Autor_foto_id_fkey`;

-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_autor_id_fkey`;

-- DropIndex
DROP INDEX `Post_autor_id_fkey` ON `post`;

-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `bio` VARCHAR(191) NULL,
    ADD COLUMN `criado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `foto_id` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `autor`;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_autor_id_fkey` FOREIGN KEY (`autor_id`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_foto_id_fkey` FOREIGN KEY (`foto_id`) REFERENCES `Arquivo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
