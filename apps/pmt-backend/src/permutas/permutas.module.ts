import { Module } from '@nestjs/common';
import { PermutasService } from './permutas.service';
import { PermutasController } from './permutas.controller';

@Module({
  controllers: [PermutasController],
  providers: [PermutasService],
})
export class PermutasModule {}
