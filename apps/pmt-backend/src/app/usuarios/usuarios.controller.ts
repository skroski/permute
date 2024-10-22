import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
@ApiTags('usuarios') // Adiciona uma tag ao Swagger
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'Usuário criado.' })
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de usuários.' })
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Usuário encontrado.' })
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Usuário atualizado.' })
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(id, updateUsuarioDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Usuário removido.' })
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(id);
  }
}
