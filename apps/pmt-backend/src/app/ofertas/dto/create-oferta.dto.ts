import { ApiProperty } from '@nestjs/swagger';

export class CreateOfertaDto {
  @ApiProperty()
  titulo: string;

  @ApiProperty()
  descricao: string;

  @ApiProperty()
  tipo: 'produto' | 'servico'; // Ajuste conforme a sua necessidade

  @ApiProperty({ required: false })
  valorReferencia?: number; // Exemplo de campo opcional

  @ApiProperty({ type: [String] })
  categorias: string[];

  @ApiProperty()
  usuarioId: string; // O ID do usuário que criou a oferta

  @ApiProperty({ required: false })
  ofertaOriginalId?: string; // Se for uma contraoferta, o ID da oferta original
}
