// src/lib/upload.ts

import { mkdir, writeFile } from "fs/promises";
import { join } from "path/posix";
import { v4 as uuidv4 } from "uuid"; // Instale: npm install uuid @types/uuid
// import { uploadToCloudStorage } from './cloud-storage'; // Você deve criar este arquivo para S3/Cloudinary

// -----------------------------------------------------------------
// TIPOS E CONSTANTES DE VALIDAÇÃO
// -----------------------------------------------------------------

export interface UploadResult {
  nome: string;
  tipo: string;
  caminho: string; // A URL final pública do arquivo
  tamanho: number;
}

// Máximo de 5MB por anexo
const MAX_FILE_SIZE_MB = 5;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/gif"];

// -----------------------------------------------------------------
// FUNÇÃO PRINCIPAL DE UPLOAD
// -----------------------------------------------------------------

/**
 * Processa os arquivos de incidente: valida, converte para Buffer e envia para o armazenamento em nuvem.
 */
export async function processAndUploadImages(
  files: File[]
): Promise<UploadResult[]> {
  if (files.length === 0) {
    return [];
  }

  const uploadPromises = files.map(async (file) => {
    // 1. VALIDAÇÃO
    if (file.size > MAX_FILE_SIZE_BYTES) {
      throw new Error(
        `O arquivo '${file.name}' excede o tamanho máximo de ${MAX_FILE_SIZE_MB}MB.`
      );
    }
    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      throw new Error(
        `O arquivo '${file.name}' tem um tipo não permitido: ${file.type}.`
      );
    }

    // 3. GERAÇÃO DE METADADOS
    // Gera um nome único para o arquivo (ex: a-g3h4j-k5l6m.png)

    const uploadDir = join(process.cwd(), "public", "uploads", "incidentes");
    await mkdir(uploadDir, { recursive: true });
    const fileExtension = file.name.split(".").pop();
    const uniqueFileName = `${uuidv4()}.${fileExtension}`;
    const filePath = join(uploadDir, uniqueFileName); // Caminho dentro do seu bucket/diretório

    // 4. INTEGRAÇÃO COM SERVIÇO DE CLOUD (A sua lógica AQUI)

    // --- SUBSTITUA ESTE TRECHO PELA SUA FUNÇÃO REAL DE UPLOAD ---
    let finalPublicUrl = "";
    try {
      // Exemplo conceitual:
      // finalPublicUrl = await uploadToCloudStorage(fileBuffer, filePath, file.type);

      // Para testar sem cloud (AINDA assim, remova antes de ir para PROD real)
      finalPublicUrl = `/${filePath}`;
      console.log(finalPublicUrl);
      

      const buffer = Buffer.from(await file.arrayBuffer());
      await writeFile(filePath, buffer);

      console.log(
        `[Upload Cloud] Arquivo ${file.name} salvo como ${finalPublicUrl}`
      );
    } catch (error) {
      console.error(`Falha no upload do arquivo '${file.name}':`, error);
      // É crucial que uma falha de upload gere um erro para que a transação Prisma falhe.
      throw new Error(
        `Falha no serviço de armazenamento para o arquivo ${file.name}.`
      );
    }
    // -------------------------------------------------------------

    // 5. RETORNO DOS METADADOS PARA O PRISMA
    return {
      nome: file.name, // Nome original do arquivo (para referência)
      tipo: file.type,
      caminho: finalPublicUrl, // A URL/Caminho que será salvo na BD
      tamanho: file.size,
    } as UploadResult;
  });

  // Promise.all garante que todos os uploads ocorrem em paralelo.
  // Se algum falhar, a Promise.all lançará o erro.
  const results = await Promise.all(uploadPromises);

  return results;
}
