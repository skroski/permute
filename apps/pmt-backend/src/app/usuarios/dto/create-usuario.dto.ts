export class CreateUsuarioDto {
  nome: string;
  email: string;
  telefone?: string;
  endereco?: string;
  tipo: 'empresa' | 'individual';
  avaliacaoMedia?: number;
  foto?: string;
}
