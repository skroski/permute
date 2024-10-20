import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from '@prisma/client';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) { }

  // Criar um novo usuário
  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return this.prisma.usuario.create({
      data: createUsuarioDto,
    });
  }

  // Buscar todos os usuários
  async findAll(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany();
  }

  // Buscar um usuário pelo ID
  async findOne(id: string): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({
      where: { id },
    });
  }

  // Atualizar um usuário pelo ID
  async update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    return this.prisma.usuario.update({
      where: { id },
      data: updateUsuarioDto,
    });
  }

  // Remover um usuário pelo ID
  async remove(id: string): Promise<Usuario> {
    return this.prisma.usuario.delete({
      where: { id },
    });
  }
}
