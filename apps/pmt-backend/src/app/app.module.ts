import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { OfertasModule } from './ofertas/ofertas.module';
import { PermutasModule } from './permutas/permutas.module';
import { PropostasModule } from './propostas/propostas.module';

@Module({
  imports: [UsuariosModule, AvaliacaoModule, OfertasModule, PermutasModule, PropostasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
