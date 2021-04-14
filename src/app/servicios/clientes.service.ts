import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes: Array<any> = [
    {id: '6768687', nombre: 'Iberdrola', cif: 'A123456778'},
    {id: 'd65s645', nombre: 'Vodafone', cif: 'A87654321'},
    {id: 'scfsdfc', nombre: 'Gas Natural', cif: 'A10010000'},
  ];

  constructor() { }

  getClientes(): Array<any> {
    return this.clientes;
  }

  getCliente(id: string): any {
    const clienteSelec = this.clientes.find( cliente => {
      return cliente.id === id;
    })
    return clienteSelec;
  }



}
