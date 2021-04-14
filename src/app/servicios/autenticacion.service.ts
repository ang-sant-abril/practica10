import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  rol: string = 'rrhh';

  constructor() { }

  isRrhhAccess() {
    return this.rol === 'rrhh';
  }

}
