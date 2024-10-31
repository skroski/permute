import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Criar usuários
  // ajustar codigo abaixo para criar usuários
  const usuario1 = await prisma.usuario.create({
    data: {
      nome: 'Usuario 1',
      email: 'dd@dd.com',
      telefone: '123456',
      endereco: 'Rua 1',
      tipo: 'fisica',

    },
  });

  const usuario2 = await prisma.usuario.create({
    data: {
      nome: 'Usuario 2',
      email: 'dd@dd.com',
      telefone: '123456',
      endereco: 'Rua 1',
      tipo: 'fisica',
    },
  });

  // Criar ofertas
  const oferta1 = await prisma.oferta.create({
    data: {
      titulo: 'Oferta 1',
      descricao: 'Descrição da Oferta 1',
      tipo: 'produto',
      valorReferencia: 100.0,
      categorias: ['categoria1', 'categoria2'],
      usuarioId: usuario1.id,
    },
  });

  const oferta2 = await prisma.oferta.create({
    data: {
      titulo: 'Oferta 2',
      descricao: 'Descrição da Oferta 2',
      tipo: 'servico',
      valorReferencia: 200.0,
      categorias: ['categoria3', 'categoria4'],
      usuarioId: usuario2.id,
    },
  });

  // Criar propostas
  const proposta1 = await prisma.proposta.create({
    data: {
      status: 'pendente',
      ofertaId: oferta1.id,
      contraOfertaId: oferta1.id,
      proponenteId: usuario1.id,

    },
  });

  const proposta2 = await prisma.proposta.create({
    data: {
      status: 'pendente',
      ofertaId: oferta2.id,
      contraOfertaId: oferta2.id,
      proponenteId: usuario2.id,
    },
  });

  // Criar permutas
  const permuta1 = await prisma.permuta.create({
    data: {
      propostaAceitaId: proposta1.id,
      dataConclusao: new Date(),
      status: 'concluida',
    },
  });

  const permuta2 = await prisma.permuta.create({
    data: {
      propostaAceitaId: proposta2.id,
      dataConclusao: new Date(),
      status: 'em andamento',
    },
  });

  // Criar avaliações
  const avaliacao1 = await prisma.avaliacao.create({
    data: {
      // Adicione os campos necessários para a avaliação conforme o prisma.schema
      comentario: 'Muito bom!',
      nota: 5,
      avaliadorId: usuario1.id,
      avaliadoId: usuario2.id,
      permutaId: permuta1.id,

    },
  });
  const avaliacao2 = await prisma.avaliacao.create({
    data: {
      // Adicione os campos necessários para a avaliação conforme o prisma.schema
      comentario: 'Muito bom2!',
      nota: 10,
      avaliadorId: usuario2.id,
      avaliadoId: usuario1.id,
      permutaId: permuta2.id,

    },
  });

  console.log('Dados inseridos com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
