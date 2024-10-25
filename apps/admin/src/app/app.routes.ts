import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'usuarios',
    loadComponent: () => import('./usuarios/usuarios.component').then(m => m.UsuariosComponent)
  },
  {
    path: '**',
    redirectTo: 'usuarios'
  }
];
