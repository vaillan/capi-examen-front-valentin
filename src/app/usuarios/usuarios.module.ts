import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { UsuariosComponent } from './usuarios.component';
import { UsersService } from '../services/users.service';


@NgModule({
  declarations: [UsuariosComponent, TablaUsuariosComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ],
  providers: [UsersService]
})
export class UsuariosModule { }
