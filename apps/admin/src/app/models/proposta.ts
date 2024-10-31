import { Oferta } from './oferta';
import { Usuario } from './usuario';

export interface Proposta {
  id: string;
  descricao: string;
  valor: number;
  dataCriacao: Date;
  ofertaId: string;
  oferta: Oferta;
  usuarioId: string;
  usuario: Usuario;
}
