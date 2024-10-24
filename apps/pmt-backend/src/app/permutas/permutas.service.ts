//Gerar código dos services de permutas
import { Injectable } from '@nestjs/common';
import { CreatePermutaDto } from './dto/create-permuta.dto';
import { UpdatePermutaDto } from './dto/update-permuta.dto';
import { Permuta } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PermutasService {
  constructor(private prisma: PrismaService) { }

  // Criar uma nova permuta
  async create(createPermutaDto: CreatePermutaDto): Promise<Permuta> {
    return this.prisma.permuta.create({
      data: createPermutaDto,
    });
  }

  // Buscar todas as permutas
  async findAll(): Promise<Permuta[]> {
    return this.prisma.permuta.findMany();
  }

  // Buscar uma permuta pelo ID
  async findOne(id: string): Promise<Permuta | null> {
    return this.prisma.permuta.findUnique({
      where: { id },
    });
  }

  // Atualizar uma permuta pelo ID
  async update(id: string, updatePermutaDto: UpdatePermutaDto): Promise<Permuta> {
    return this.prisma.permuta.update({
      where: { id },
      data: updatePermutaDto,
    });
  }

  // Remover uma permuta pelo ID
  async remove(id: string): Promise<Permuta> {
    return this.prisma.permuta.delete({
      where: { id },
    });
  }
}
