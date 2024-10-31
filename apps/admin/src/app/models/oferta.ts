import { Proposta } from "./proposta";
import { Usuario } from "./usuario";

export interface Oferta {
  id: string;
  titulo: string;
  descricao: string;
  tipo: string; // 'produto' ou 'servico'
  valorReferencia?: number;
  categorias: string[];
  usuarioId?: string;
  usuario?: Usuario;
  oferta?: Proposta[];
  contraOferta?: Proposta[];
}
