// src/app/model/usuario.model.ts

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  senha: string;
  // Adicione os campos que faltam conforme o prisma.schema do seu projeto
  tipo: string;
  endereco?: string;
  telefone?: string;
  avaliacaoMedia?: number;
  foto?: string;

}
