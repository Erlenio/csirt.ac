// app/api/incidentes/route.ts

import { NextResponse } from 'next/server';
import { processAndUploadImages, UploadResult } from '@/lib/upload'; 
import prisma from '@/lib/prisma';

// Configuração para Next.js App Router para lidar com FormData (arquivos)
export const config = {
    api: {
        bodyParser: false,
    },
};

// -----------------------------------------------------------------
// GET: Buscar todos os incidentes
// Rota: /api/incidentes
// -----------------------------------------------------------------
export async function GET(request: Request) {
    if (!request) {
        return NextResponse.json({ message: 'Requisição inválida.' }, { status: 400 });
    }
    try {
        const incidentes = await prisma.incidente.findMany({
            orderBy: {
                criado_em: 'desc',
            },
            // Inclui metadados dos anexos para exibição na lista
            include: {
                anexos: {
                    select: {
                        id: true,
                        nome: true,
                        caminho: true,
                        tipo: true,
                    }
                }
            }
        });
        
        return NextResponse.json(incidentes, { status: 200 });
    } catch (error) {
        console.error('[API INCIDENTES] Erro ao buscar incidentes:', error);
        return NextResponse.json({ message: 'Erro interno ao buscar incidentes.' }, { status: 500 });
    }
}


// -----------------------------------------------------------------
// POST: Criar um novo incidente
// Rota: /api/incidentes
// -----------------------------------------------------------------
export async function POST(request: Request) {
    try {
        // 1. EXTRAÇÃO E VALIDAÇÃO DOS DADOS DO FORM
        const formData = await request.formData();

        const titulo = formData.get('titulo') as string;
        const descricao = formData.get('descricao') as string;
        const localizacao = formData.get('localizacao') as string;
        const prioridade = formData.get('prioridade') as string;
        
        const requiredFields = { titulo, descricao, localizacao, prioridade };

        if (Object.values(requiredFields).some(value => !value)) {
             return NextResponse.json({ message: 'Título, descrição, localização e prioridade são obrigatórios.' }, { status: 400 });
        }


        // 2. PROCESSAMENTO E UPLOAD DE ARQUIVOS
        const files: File[] = [];
        let fileUploadResults: UploadResult[] = [];
        
        // Itera sobre as entradas do FormData para extrair os arquivos com o nome 'images'
        for (const [key, value] of formData.entries()) {
            if (key.startsWith('images') && value instanceof File) {
                files.push(value);
            }
        }
        
        if (files.length > 0) {
            // Chama o serviço de upload. Se houver falha, ele lançará um erro
            fileUploadResults = await processAndUploadImages(files); 
        }

        // 3. CRIAÇÃO DO REGISTRO NO BANCO DE DADOS
        const newIncidente = await prisma.incidente.create({
            data: {
                titulo,
                descricao,
                localizacao,
                // Cast para garantir que corresponde ao ENUM do Prisma
                prioridade: prioridade as 'BAIXA' | 'MEDIA' | 'ALTA' | 'CRITICA', 
                status: 'ABERTO',
                
                // Cria os registros na tabela Arquivo e os anexa ao Incidente
                anexos: {
                    create: fileUploadResults.map(result => ({
                        nome: result.nome,
                        tipo: result.tipo,
                        caminho: result.caminho,
                        tamanho: result.tamanho,
                        tipo_logico: 'OUTRO', // Ajuste este valor para o seu ENUM TipoLogicoArquivo
                    })),
                },
            },
            include: {
                anexos: true, // Retorna os anexos criados na resposta
            },
        });

        // 4. RESPOSTA DE SUCESSO
        return NextResponse.json(newIncidente, { status: 201 });
        
    } catch (error) {
        console.error('[API INCIDENTES] Erro ao registrar incidente:', error);
        // Em caso de erro de upload ou banco de dados, retorna 500
        return NextResponse.json({ message: 'Erro interno do servidor ao registrar incidente.' }, { status: 500 });
    }
}