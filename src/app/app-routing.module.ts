import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {

    path: 'users',
    loadChildren: './usuarios/usuarios.module#UsuariosModule',
  },
  {
    path: '**', redirectTo: 'users/show'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
