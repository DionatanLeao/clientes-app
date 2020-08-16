import { Injectable } from '@angular/core';
import { Cliente } from './clientes/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getClientes() : Cliente {
    let cliente : Cliente = new Cliente();
    cliente.nome = 'Dionatan Leão'
    cliente.cpf = '12345678900'
    return cliente;
  }
}
