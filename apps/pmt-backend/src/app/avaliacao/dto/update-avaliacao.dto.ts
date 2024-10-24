import { PartialType } from '@nestjs/mapped-types';
import { CreateAvaliacaoDto } from './create-avaliacao.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAvaliacaoDto extends PartialType(CreateAvaliacaoDto) {
  @ApiProperty({ required: false })
  nota?: number;

  @ApiProperty({ required: false })
  comentario?: string;
}
