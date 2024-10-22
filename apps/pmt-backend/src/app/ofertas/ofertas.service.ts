import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOfertaDto } from './dto/create-oferta.dto';
import { UpdateOfertaDto } from './dto/update-oferta.dto';
import { Oferta } from '@prisma/client';

@Injectable()
export class OfertasService {
  constructor(private prisma: PrismaService) { }

  // Criar uma nova oferta
  async create(createOfertaDto: CreateOfertaDto): Promise<Oferta> {
    return this.prisma.oferta.create({
      data: createOfertaDto,
    });
  } x

  // Buscar todas as ofertas
  async findAll(): Promise<Oferta[]> {
    return this.prisma.oferta.findMany();
  }

  // Buscar uma oferta pelo ID
  async findOne(id: string): Promise<Oferta | null> {
    return this.prisma.oferta.findUnique({
      where: { id },
    });
  }

  // Atualizar uma oferta pelo ID
  async update(id: string, updateOfertaDto: UpdateOfertaDto): Promise<Oferta> {
    return this.prisma.oferta.update({
      where: { id },
      data: updateOfertaDto,
    });
  }

  // Remover uma oferta pelo ID
  async remove(id: string): Promise<Oferta> {
    return this.prisma.oferta.delete({
      where: { id },
    });
  }
}
