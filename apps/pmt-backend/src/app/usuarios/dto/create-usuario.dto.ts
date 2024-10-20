import { ApiProperty } from "@nestjs/swagger";

export class CreateUsuarioDto {
  @ApiProperty()
  nome: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ required: false })
  telefone?: string;

  @ApiProperty({ required: false })
  endereco?: string;

  @ApiProperty({ enum: ['empresa', 'individual'] })
  tipo: 'empresa' | 'individual';

  @ApiProperty({ required: false })
  avaliacaoMedia?: number;

  @ApiProperty({ required: false })
  foto?: string;
}
