-- AlterTable
ALTER TABLE `arquivo` ADD COLUMN `incidenteId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Incidente` (
    `id` VARCHAR(191) NOT NULL,
    `titulo` VARCHAR(191) NOT NULL,
    `descricao` TEXT NOT NULL,
    `localizacao` VARCHAR(191) NOT NULL,
    `prioridade` ENUM('BAIXA', 'MEDIA', 'ALTA', 'CRITICA') NOT NULL DEFAULT 'MEDIA',
    `status` ENUM('ABERTO', 'EM_ANDAMENTO', 'RESOLVIDO', 'ARQUIVADO') NOT NULL DEFAULT 'ABERTO',
    `criado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizado_em` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Arquivo` ADD CONSTRAINT `Arquivo_incidenteId_fkey` FOREIGN KEY (`incidenteId`) REFERENCES `Incidente`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
