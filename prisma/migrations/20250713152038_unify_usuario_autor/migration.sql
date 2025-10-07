/*
  Warnings:

  - Made the column `imagem_capa_id` on table `post` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_imagem_capa_id_fkey`;

-- DropIndex
DROP INDEX `Post_imagem_capa_id_fkey` ON `post`;

-- AlterTable
ALTER TABLE `post` MODIFY `imagem_capa_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_imagem_capa_id_fkey` FOREIGN KEY (`imagem_capa_id`) REFERENCES `Arquivo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
