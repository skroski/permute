import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
import { Avaliacao } from '@prisma/client';

@Injectable()
export class AvaliacaoService {
  constructor(private prisma: PrismaService) { }

  // Criar uma nova avaliação
  async create(createAvaliacaoDto: CreateAvaliacaoDto): Promise<Avaliacao> {
    const { avaliadorId, avaliadoId, permutaId, ...data } = createAvaliacaoDto;

    return this.prisma.avaliacao.create({
      data: {
        ...data,
        avaliador: { connect: { id: avaliadorId } }, // Conectar o avaliador
        avaliado: { connect: { id: avaliadoId } },   // Conectar o avaliado
        permuta: { connect: { id: permutaId } },     // Conectar a permuta
      },
    });
  }

  // Buscar todas as avaliações
  async findAll(): Promise<Avaliacao[]> {
    return this.prisma.avaliacao.findMany({
      include: {
        avaliador: true,  // Incluir o avaliador
        avaliado: true,   // Incluir o avaliado
        permuta: true,    // Incluir a permuta associada
      },
    });
  }

  // Buscar uma avaliação pelo ID
  async findOne(id: string): Promise<Avaliacao | null> {
    return this.prisma.avaliacao.findUnique({
      where: { id },
      include: {
        avaliador: true,
        avaliado: true,
        permuta: true,
      },
    });
  }

  // Atualizar uma avaliação pelo ID
  async update(id: string, updateAvaliacaoDto: UpdateAvaliacaoDto): Promise<Avaliacao> {
    return this.prisma.avaliacao.update({
      where: { id },
      data: updateAvaliacaoDto,
    });
  }

  // Remover uma avaliação pelo ID
  async remove(id: string): Promise<Avaliacao> {
    return this.prisma.avaliacao.delete({
      where: { id },
    });
  }
}
