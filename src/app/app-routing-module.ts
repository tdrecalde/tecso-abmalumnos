import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaDeAlumnosComponent } from './lista-de-alumnos/lista-de-alumnos.component';
import { ReporteCursoComponent } from './reporte-curso/reporte-curso.component';
import { DatosAlumnosComponent } from './datos-alumnos/datos-alumnos.component';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';

const routes: Routes = [
  { path: '', redirectTo: '/listadoAlumnos', pathMatch: 'full' },
  { path: 'listadoAlumnos',  component: ListaDeAlumnosComponent},
  { path: 'reporteCursos',  component: ReporteCursoComponent},
  { path: 'datosAlumno/:legajo',  component: DatosAlumnosComponent},
  { path: 'editarAlumno/:legajo',  component: EditarAlumnoComponent},
  { path: 'nuevoAlumno',  component: NuevoAlumnoComponent},
  { path: '**', redirectTo: '/listadoAlumnos', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
