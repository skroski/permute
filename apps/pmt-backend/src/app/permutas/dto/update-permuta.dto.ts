// Gerar o código de DTO para atualização de permutas abaixo, conforme está em ofertas por exemplo:

import { PartialType } from '@nestjs/swagger';
import { CreatePermutaDto } from './create-permuta.dto';

export class UpdatePermutaDto extends PartialType(CreatePermutaDto) { }
