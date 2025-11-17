import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';


// -----------------------------------------------------------------
// GET: Buscar um incidente específico
// Rota: /api/incidentes/[id]
// -----------------------------------------------------------------
export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    
    try {
        const incidente = await prisma.incidente.findUnique({
            where: { id },
            include: { anexos: true },
        });

        if (!incidente) {
            return NextResponse.json({ message: 'Incidente não encontrado.' }, { status: 404 });
        }
        
        return NextResponse.json(incidente, { status: 200 });
    } catch (error) {
        console.error('Erro ao buscar incidente:', error);
        return NextResponse.json({ message: 'Erro interno do servidor ao buscar incidente.' }, { status: 500 });
    }
}


// -----------------------------------------------------------------
// PUT: Atualizar um incidente (Geralmente para alterar Status/Prioridade)
// Rota: /api/incidentes/[id]
// -----------------------------------------------------------------
export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    
    try {
        const body = await request.json();
        // Apenas permite a atualização de status, prioridade, ou título/descrição
        const { titulo, descricao, prioridade, status, localizacao } = body; 

        // Cria o objeto de dados de atualização, ignorando campos undefined
        const updateData: any = {};
        if (titulo) updateData.titulo = titulo;
        if (descricao) updateData.descricao = descricao;
        if (localizacao) updateData.localizacao = localizacao;
        if (prioridade) updateData.prioridade = prioridade;
        if (status) updateData.status = status;

        if (Object.keys(updateData).length === 0) {
             return NextResponse.json({ message: 'Nenhum dado válido para atualização fornecido.' }, { status: 400 });
        }

        const updatedIncidente = await prisma.incidente.update({
            where: { id },
            data: updateData,
        });

        return NextResponse.json(updatedIncidente, { status: 200 });
    } catch (error) {
        console.error('Erro ao atualizar incidente:', error);
        // Lidar com erro de registro não encontrado (P2025)
        /*if (error.code === 'P2025') { 
            return NextResponse.json({ message: 'Incidente não encontrado para atualização.' }, { status: 404 });
        }*/
        return NextResponse.json({ message: 'Erro interno do servidor ao atualizar incidente.' }, { status: 500 });
    }
}


// -----------------------------------------------------------------
// DELETE: Excluir um incidente
// Rota: /api/incidentes/[id]
// -----------------------------------------------------------------
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    
    try {
        await prisma.incidente.delete({
            where: { id },
        });

        // Resposta de sucesso sem conteúdo
        return new NextResponse(null, { status: 204 }); 
    } catch (error) {
        console.error('Erro ao excluir incidente:', error);
        // Lidar com erro de registro não encontrado (P2025)
        /*if (error instanceof Error && error.code === 'P2025') { 
            return NextResponse.json({ message: 'Incidente não encontrado para exclusão.' }, { status: 404 });
        }*/
        return NextResponse.json({ message: 'Erro interno do servidor ao excluir incidente.' }, { status: 500 });
    }
}