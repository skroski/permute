import { ApiProperty } from '@nestjs/swagger';

export class CreateAvaliacaoDto {
  @ApiProperty()
  nota: number;

  @ApiProperty({ required: false })
  comentario?: string;

  @ApiProperty()
  avaliadorId: string; // ID do usuário que está fazendo a avaliação

  @ApiProperty()
  avaliadoId: string; // ID do usuário que está sendo avaliado

  @ApiProperty()
  permutaId: string; // ID da permuta associada à avaliação
}
