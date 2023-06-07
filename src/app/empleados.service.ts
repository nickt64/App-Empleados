import { Empleado } from "./empleado.Model";

export class EmpleadosService{



    empleados:Empleado[] = [
        new Empleado("tony", "Tomeo","Administrador",20000),
        new Empleado("Nico", "Tomeo", "Gerente", 100000),
        new Empleado("Sara", "Tomeo", "Vendedora", 10000),
        new Empleado("Nadia", "Ascolani", "vendedora", 10000)
    
      ];

      
    AgregarEmpleadoServicio(empleado:Empleado){
        this.empleados.push(empleado);

    }

}