// Gerar o código de serviço para propostas abaixo, com os métodos create, findAll, findOne, update e remove:

import { Injectable } from '@nestjs/common';
import { CreatePropostaDto } from './dto/create-proposta.dto';
import { UpdatePropostaDto } from './dto/update-proposta.dto';
import { Proposta } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PropostasService {
  constructor(private prisma: PrismaService) { }

  // Criar uma nova proposta
  async create(createPropostaDto: CreatePropostaDto): Promise<Proposta> {
    const { ofertaId, contraOfertaId, proponenteId, ...data } = createPropostaDto;
    return this.prisma.proposta.create({
      data: {
        ...data,
        oferta: { connect: { id: ofertaId } },            // Conectar à oferta
        proponente: { connect: { id: proponenteId } },    // Conectar ao proponente
        ...(contraOfertaId && { contraOferta: { connect: { id: contraOfertaId } } }), // Conectar à contra-oferta se existir
      },
    });
  }

  // Buscar todas as propostas
  async findAll(): Promise<Proposta[]> {
    return this.prisma.proposta.findMany({
      include: {
        oferta: true,           // Incluir a oferta
        contraOferta: true,     // Incluir a contra-oferta (se houver)
        proponente: true,       // Incluir o proponente
        Permuta: true,          // Incluir as permutas associadas
      },
    });
  }

  // Buscar uma proposta pelo ID
  async findOne(id: string): Promise<Proposta | null> {
    return this.prisma.proposta.findUnique({
      where: { id },
      include: {
        oferta: true,
        contraOferta: true,
        proponente: true,
        Permuta: true,
      },
    });
  }

  // Atualizar uma proposta pelo ID
  async update(id: string, updatePropostaDto: UpdatePropostaDto): Promise<Proposta> {
    const { ofertaId, contraOfertaId, proponenteId, ...data } = updatePropostaDto;

    return this.prisma.proposta.update({
      where: { id },
      data: {
        ...data,
        ...(ofertaId && { oferta: { connect: { id: ofertaId } } }),
        ...(contraOfertaId && { contraOferta: { connect: { id: contraOfertaId } } }),
        ...(proponenteId && { proponente: { connect: { id: proponenteId } } }),
      },
    });
  }

  // Remover uma proposta pelo ID
  async remove(id: string): Promise<Proposta> {
    return this.prisma.proposta.delete({
      where: { id },
    });
  }
}
