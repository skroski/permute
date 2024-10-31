import { ApiProperty } from '@nestjs/swagger';

export class CreateOfertaDto {
  @ApiProperty()
  titulo: string | undefined;

  @ApiProperty()
  descricao: string | undefined;

  @ApiProperty()
  tipo: 'produto' | 'servico' | undefined; // Ajuste conforme a sua necessidade

  @ApiProperty({ required: false })
  valorReferencia?: number; // Exemplo de campo opcional

  @ApiProperty({ type: [String] })
  categorias: string[] | undefined;

  @ApiProperty()
  usuarioId: string | undefined;
}
