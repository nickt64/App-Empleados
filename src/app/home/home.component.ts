import { Component } from '@angular/core';
import { Empleado } from '../empleado.Model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  titulo = 'Listado de Empleados';

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){


    this.empleados = this.empleadosService.empleados;
  }

  empleados:Empleado[] = [];


  

}
