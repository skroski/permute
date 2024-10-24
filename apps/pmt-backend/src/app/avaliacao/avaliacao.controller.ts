import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('avaliacao')
@Controller('avaliacao')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'Avaliação criada.' })
  create(@Body() createAvaliacaoDto: CreateAvaliacaoDto) {
    return this.avaliacaoService.create(createAvaliacaoDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de avaliações.' })
  findAll() {
    return this.avaliacaoService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Avaliação encontrada.' })
  findOne(@Param('id') id: string) {
    return this.avaliacaoService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Avaliação atualizada.' })
  update(@Param('id') id: string, @Body() updateAvaliacaoDto: UpdateAvaliacaoDto) {
    return this.avaliacaoService.update(id, updateAvaliacaoDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Avaliação removida.' })
  remove(@Param('id') id: string) {
    return this.avaliacaoService.remove(id);
  }
}
