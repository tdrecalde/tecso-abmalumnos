import { Component, OnInit } from '@angular/core';
import { AlumnosSRVService } from '../services/alumnos-srv.service';
import { Alumno } from '../clases/alumno';



@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.css']
})
export class ListaDeAlumnosComponent implements OnInit {


  constructor(private alumnossSrv: AlumnosSRVService) { }

  alumnos:Array<Alumno>;
  dataSource:Array<Alumno>;

  displayedColumns: string[] = ['legajo', 'documento', 'nombre', 'apellido', 'fechanac', 'acciones'];
  

  ngOnInit() {

    this.alumnos = this.alumnossSrv.getListaAlumnos();
    this.dataSource = this.alumnos;
    
  }

}
