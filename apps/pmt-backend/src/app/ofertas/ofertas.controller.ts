import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OfertasService } from './ofertas.service';
import { CreateOfertaDto } from './dto/create-oferta.dto';
import { UpdateOfertaDto } from './dto/update-oferta.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('ofertas') // Adiciona uma tag ao Swagger
@Controller('ofertas')
export class OfertasController {
  constructor(private readonly ofertasService: OfertasService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'Oferta criada.' })
  create(@Body() createOfertaDto: CreateOfertaDto) {
    return this.ofertasService.create(createOfertaDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de ofertas.' })
  findAll() {
    return this.ofertasService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Oferta encontrada.' })
  findOne(@Param('id') id: string) {
    return this.ofertasService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Oferta atualizada.' })
  update(@Param('id') id: string, @Body() updateOfertaDto: UpdateOfertaDto) {
    return this.ofertasService.update(id, updateOfertaDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Oferta removida.' })
  remove(@Param('id') id: string) {
    return this.ofertasService.remove(id);
  }
}
