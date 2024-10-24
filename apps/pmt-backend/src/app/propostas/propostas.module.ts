import { Module } from '@nestjs/common';
import { PropostasService } from './propostas.service';
import { PropostasController } from './propostas.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PropostasController],
  providers: [PropostasService],
})
export class PropostasModule { }
