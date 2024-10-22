import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PermutasService } from './permutas.service';
import { CreatePermutaDto } from './dto/create-permuta.dto';
import { UpdatePermutaDto } from './dto/update-permuta.dto';

@Controller('permutas')
export class PermutasController {
  constructor(private readonly permutasService: PermutasService) {}

  @Post()
  create(@Body() createPermutaDto: CreatePermutaDto) {
    return this.permutasService.create(createPermutaDto);
  }

  @Get()
  findAll() {
    return this.permutasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.permutasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePermutaDto: UpdatePermutaDto) {
    return this.permutasService.update(+id, updatePermutaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.permutasService.remove(+id);
  }
}
