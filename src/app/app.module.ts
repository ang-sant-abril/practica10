import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearClienteComponent } from './ventas/crear-cliente/crear-cliente.component';
import { VisualizarClienteComponent } from './ventas/visualizar-cliente/visualizar-cliente.component';
import { ListadoClientesComponent } from './ventas/listado-clientes/listado-clientes.component';
import { NavComponent } from './nav/nav.component';
import { Pagina404Component } from './pagina404/pagina404.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CrearClienteComponent,
    VisualizarClienteComponent,
    ListadoClientesComponent,
    NavComponent,
    Pagina404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
