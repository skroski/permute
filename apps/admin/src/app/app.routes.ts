import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'usuarios',
    loadComponent: () => import('./usuarios/usuarios.component').then(m => m.UsuariosComponent)
  },
  {
    path: 'ofertas',
    loadComponent: () => import('./ofertas/ofertas.component').then(m => m.OfertasComponent)
  },
  {
    path: '**',
    redirectTo: 'usuarios'
  }
];
