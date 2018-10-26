import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/app.material.module';
import { RouterModule } from '@angular/router';
import { ListaDeAlumnosComponent } from './lista-de-alumnos/lista-de-alumnos.component';
import { AppRoutingModule } from '../app/app-routing-module';
import { DatosAlumnosComponent } from './datos-alumnos/datos-alumnos.component';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';
import { ReporteCursoComponent } from './reporte-curso/reporte-curso.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';
import { HttpClientModule } from '@angular/common/http'; 



@NgModule({
  declarations: [
    AppComponent,
    ListaDeAlumnosComponent,
    DatosAlumnosComponent,
    EditarAlumnoComponent,
    NuevoAlumnoComponent,
    ReporteCursoComponent,
    SidebarComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
