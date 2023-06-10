import {Injectable} from "@angular/core";
import { Empleado } from "./empleado.Model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable() 
export class EmpleadosService{

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService){

    }


    empleados:Empleado[] = [
        new Empleado("tony", "Tomeo","Administrador",20000),
        new Empleado("Nico", "Tomeo", "Gerente", 100000),
        new Empleado("Sara", "Tomeo", "Vendedora", 10000),
        new Empleado("Nadia", "Ascolani", "vendedora", 10000)
    
    ];

      
    AgregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Persona a agregar: " + "\n" +
        empleado.nombre + "\n" + "Salario: " + empleado.salario);

        this.empleados.push(empleado);

    }

}