import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  isRrhh: boolean;

  constructor(private autenticacionService: AutenticacionService) { }

  ngOnInit(): void {
    this.isRrhh = this.autenticacionService.isRrhhAccess();
  }

}
