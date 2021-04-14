import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  titulo: string;
  clientes: Array<any>;

  constructor(private ruta: ActivatedRoute,
              private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.ruta.data.subscribe((data: any) => {
      this.titulo = data.titulo;
    })
    this.clientes = this.clientesService.getClientes();
  }

}
