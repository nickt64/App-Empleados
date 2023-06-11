import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.Model';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {

constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){
  this.empleados = this.empleadosService.empleados;
}

empleados:Empleado[] = [];

cuadroNombre:string = "";
cuadroApellido:string = "";
cuadroCargo:string = "";
cuadroSalario:number = 0;

VolverHome(){
  this.router.navigate(['']);
}


AgregarEmpleado(){
  let miEmpleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo, this.cuadroSalario);

  //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);

  this.empleadosService.AgregarEmpleadoServicio(miEmpleado);

  this.router.navigate(['']);


  this.cuadroNombre = "";
  this.cuadroApellido = "";
  this.cuadroCargo = "";
  this.cuadroSalario = 0;
}



}
