import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados/empleados.component';
import { NominasComponent } from './nominas/nominas.component';
import { RrhhRoutingModule } from './rrhh-routing.module';
import { CompartidoModule } from '../compartido/compartido.module';



@NgModule({
  declarations: [
    EmpleadosComponent,
    NominasComponent
  ],
  imports: [
    CommonModule,
    RrhhRoutingModule,
    CompartidoModule
  ]
})
export class RrhhModule { }
