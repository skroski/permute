
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OfertasService } from './ofertas.service';
import { Oferta } from '../models/oferta';
import { Usuario } from '../models/usuario';
import { UsuariosService } from '../usuarios/usuarios.service';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss']
})
export class OfertasComponent implements OnInit {
  ofertas: Oferta[] = [];
  usuarios: Usuario[] = [];
  ofertaForm: FormGroup;
  ofertasService = inject(OfertasService);
  usuariosService = inject(UsuariosService);

  constructor(private fb: FormBuilder) {
    this.ofertaForm = this.fb.group({
      id: [''],
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      tipo: ['', Validators.required],
      valorReferencia: ['', [Validators.required, Validators.min(0)]],
      categorias: ['', Validators.required],
      usuarioId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.carregarOfertas();
    this.carregarUsuarios();
  }

  carregarOfertas(): void {
    this.ofertasService.listarOfertas().subscribe((ofertas) => {
      this.ofertas = ofertas;
    });
  }

  adicionarOferta(): void {
    if (this.ofertaForm.valid) {
      const novaOferta: Oferta = {
        ...this.ofertaForm.value,
        categorias: this.ofertaForm.value.categorias.split(',').map((cat: string) => cat.trim())
      };
      this.ofertasService.adicionarOferta(novaOferta).subscribe(() => {
        this.carregarOfertas();
        this.ofertaForm.reset();
      });
    }
  }

  atualizarOferta(oferta: Oferta): void {
    this.ofertasService.atualizarOferta(oferta.id, oferta).subscribe(() => {
      this.carregarOfertas();
    });
  }
  carregarUsuarios(): void {
    this.usuariosService.listarUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }
  deletarOferta(id: string): void {
    this.ofertasService.deletarOferta(id).subscribe(() => {
      this.carregarOfertas();
    });
  }
}
