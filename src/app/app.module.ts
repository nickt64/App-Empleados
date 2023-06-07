import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServicioEmpleadosService,
              EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
