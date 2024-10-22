import { Module } from '@nestjs/common';
import { PropostasService } from './propostas.service';
import { PropostasController } from './propostas.controller';

@Module({
  controllers: [PropostasController],
  providers: [PropostasService],
})
export class PropostasModule {}
