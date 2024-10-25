import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { Usuario } from './model/usuario';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <!-- Adicionar o template HTML utilizar classes com Tailwind e DaisyUI -->
    <div class="p-4">
      <h1 class="text-2xl font-bold">Usuários</h1>
      <ul>
    <li *ngFor="let usuario of usuarios">
      {{ usuario.nome }} - {{ usuario.email }}
      <button (click)="removerUsuario(usuario.id)">Remover</button>
      <!-- Adicione mais campos e botões conforme necessário -->
    </li>
  </ul>
    </div>
   <!-- Adicionar um formulário para adicionar um novo usuário -->

    <div class="p-4">
    <form [formGroup]="usuarioForm" (ngSubmit)="adicionarUsuario()">
        <div class="mb-4">
          <label for="nome" class="block text-sm font-medium text-gray-700">Nome</label>
          <input id="nome" formControlName="nome" required  type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm">
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input id="email"  formControlName="email" required type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm">
        </div>
        <div class="mb-4">
          <label for="telefone" class="block text-sm font-medium text-gray-700">telefone</label>
          <input id="telefone" formControlName="telefone" required type="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm">
        </div>
        <div class="mb-4">
          <label for="tipo" class="block text-sm font-medium text-gray-700">Tipo</label>
          <select id="tipo" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm">
            <option value="admin">Administrador</option>
            <option value="user">Usuário</option>
          </select>
        </div>
        <div class="mb-4">
          <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Adicionar usuário</button>
        </div>
      </form>
  `,
  styleUrl: './usuarios.component.scss',
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuarioForm: FormGroup;

  constructor(private usuariosService: UsuariosService, private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  adicionarUsuario(): void {
    if (this.usuarioForm.valid) {
      this.usuariosService.adicionarUsuario(this.usuarioForm.value).subscribe(() => {
        this.listarUsuarios();
        this.usuarioForm.reset();
      });
    }
  }

  listarUsuarios(): void {
    this.usuariosService.listarUsuarios().subscribe((data: Usuario[]) => {
      this.usuarios = data;
    });
  }

  removerUsuario(id: string): void {
    this.usuariosService.removerUsuario(id).subscribe(() => {
      this.listarUsuarios();
    });
  }

  atualizarUsuario(id: string): void {
    if (this.usuarioForm.valid) {
      this.usuariosService.atualizarUsuario(id, this.usuarioForm.value).subscribe(() => {
        this.listarUsuarios();
      });
    }
  }
}
