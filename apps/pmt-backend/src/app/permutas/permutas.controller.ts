//Gerar código do controller de permutas
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PermutasService } from './permutas.service';
import { CreatePermutaDto } from './dto/create-permuta.dto';
import { UpdatePermutaDto } from './dto/update-permuta.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('permutas')
@Controller('permutas')
export class PermutasController {
  constructor(private readonly permutasService: PermutasService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'Permuta criada.' })
  create(@Body() createPermutaDto: CreatePermutaDto) {
    return this.permutasService.create(createPermutaDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de permutas.' })
  findAll() {
    return this.permutasService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Permuta encontrada.' })
  findOne(@Param('id') id: string) {
    return this.permutasService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Permuta atualizada.' })
  update(@Param('id') id: string, @Body() updatePermutaDto: UpdatePermutaDto) {
    return this.permutasService.update(id, updatePermutaDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Permuta removida.' })
  remove(@Param('id') id: string) {
    return this.permutasService.remove(id);
  }
}
