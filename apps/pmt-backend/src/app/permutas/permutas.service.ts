import { Injectable } from '@nestjs/common';
import { CreatePermutaDto } from './dto/create-permuta.dto';
import { UpdatePermutaDto } from './dto/update-permuta.dto';

@Injectable()
export class PermutasService {
  create(createPermutaDto: CreatePermutaDto) {
    return 'This action adds a new permuta';
  }

  findAll() {
    return `This action returns all permutas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} permuta`;
  }

  update(id: number, updatePermutaDto: UpdatePermutaDto) {
    return `This action updates a #${id} permuta`;
  }

  remove(id: number) {
    return `This action removes a #${id} permuta`;
  }
}
