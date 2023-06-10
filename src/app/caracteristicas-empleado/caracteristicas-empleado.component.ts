import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent {

  @Output() CaracteristicasEmpleado = new EventEmitter<string>();
  
  //constructor(private miServicio:ServicioEmpleadosService){}

  ngOnInit(): void {};

  AgregarCaracteristicas(value:string){

    //this.miServicio.muestraMensaje("Nueva Caracteristica: " + value);
    this.CaracteristicasEmpleado.emit(value);
  }
}
