import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/app.material.module';
import { RouterModule, Routes } from '@angular/router';
import { ListaDeAlumnosComponent } from './lista-de-alumnos/lista-de-alumnos.component';
import { AppRoutingModule } from '../app/app-routing-module';
import { DatosAlumnosComponent } from './datos-alumnos/datos-alumnos.component';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';
import { ReporteCursoComponent } from './reporte-curso/reporte-curso.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {FormsModule, ReactiveFormsModule, FormControl, Validators} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    ListaDeAlumnosComponent,
    DatosAlumnosComponent,
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
    ReactiveFormsModule
  ],
  providers: [MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
