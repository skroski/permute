import { ApiProperty } from '@nestjs/swagger';

export class CreatePermutaDto {
  @ApiProperty()
  propostaAceitaId: string; // ID da proposta aceita

  @ApiProperty()
  dataConclusao: Date; // Data de conclusão da permuta

  @ApiProperty()
  status: string; // Status da permuta ('concluida', 'em andamento')
}
