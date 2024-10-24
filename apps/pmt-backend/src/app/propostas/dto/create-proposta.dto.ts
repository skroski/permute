//Gerar o código de DTO para criação de propostas abaixo, com os campos, status, ofertaId, contraOfertaId, proponenteId, oferta, proponente, contraOferta e Permuta:

import { ApiProperty } from '@nestjs/swagger';

export class CreatePropostaDto {
  @ApiProperty()
  status: string; // Status da proposta ('pendente', 'aceita', 'recusada')

  @ApiProperty()
  ofertaId: string; // ID da oferta

  @ApiProperty()
  contraOfertaId?: string; // ID da contra-oferta (opcional)

  @ApiProperty()
  proponenteId: string; // ID do usuário proponente
}
