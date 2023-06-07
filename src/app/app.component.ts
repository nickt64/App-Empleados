import { Component } from '@angular/core';
import { Empleado } from './empleado.Model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){


    this.empleados = this.empleadosService.empleados;
  }

  empleados:Empleado[] = [];


  AgregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo, this.cuadroSalario);

    this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);

    this.empleadosService.AgregarEmpleadoServicio(miEmpleado);
    this.cuadroNombre = "";
    this.cuadroApellido = "";
    this.cuadroCargo = "";
    this.cuadroSalario = 0;
  }

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;



}
