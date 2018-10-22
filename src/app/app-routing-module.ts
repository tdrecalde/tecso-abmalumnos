import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaDeAlumnosComponent } from './lista-de-alumnos/lista-de-alumnos.component';

const routes: Routes = [
  { path: '', redirectTo: '/listadoAlumnos', pathMatch: 'full' },
  { path: 'listadoAlumnos',  component: ListaDeAlumnosComponent},
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
