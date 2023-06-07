import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.Model';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent {
  @Input() empleadoLista:Empleado;

  @Input() indice:number;

  arrayCaracteristicas = [''];

  AgregarCaracteristica(nuevaCaracteristica:string){
    this.arrayCaracteristicas.push(nuevaCaracteristica);
    
  }

}
