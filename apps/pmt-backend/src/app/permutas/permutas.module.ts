import { Module } from '@nestjs/common';
import { PermutasService } from './permutas.service';
import { PermutasController } from './permutas.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PermutasController],
  providers: [PermutasService],
})
export class PermutasModule { }
