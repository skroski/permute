// Gerar código do controller de propostas

import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PropostasService } from './propostas.service';
import { CreatePropostaDto } from './dto/create-proposta.dto';
import { UpdatePropostaDto } from './dto/update-proposta.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('propostas')
@Controller('propostas')
export class PropostasController {
  constructor(private readonly propostasService: PropostasService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'Proposta criada.' })
  create(@Body() createPropostaDto: CreatePropostaDto) {
    return this.propostasService.create(createPropostaDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de propostas.' })
  findAll() {
    return this.propostasService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Proposta encontrada.' })
  findOne(@Param('id') id: string) {
    return this.propostasService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Proposta atualizada.' })
  update(@Param('id') id: string, @Body() updatePropostaDto: UpdatePropostaDto) {
    return this.propostasService.update(id, updatePropostaDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Proposta removida.' })
  remove(@Param('id') id: string) {
    return this.propostasService.remove(id);
  }
}
