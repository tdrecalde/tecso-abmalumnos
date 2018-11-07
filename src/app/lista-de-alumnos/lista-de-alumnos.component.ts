import { Component, OnInit } from '@angular/core';
import { AlumnosSRVService } from '../services/alumnos-srv.service';
import { Alumno } from '../clases/alumno';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.css']
})
export class ListaDeAlumnosComponent implements OnInit {

  constructor(private alumnossSrv: AlumnosSRVService) { }

  // dataSource:Array<Alumno>;
  dataSource = new AlumnoDataSource(this.alumnossSrv);

  displayedColumns: string[] = ['legajo', 'documento', 'nombre', 'apellido', 'fechanac', 'acciones'];
  

  ngOnInit() {

    // this.alumnossSrv.getListaAlumnos().subscribe(
    //   alumnos => this.dataSource
    // )
  }

}

export class AlumnoDataSource extends DataSource<any> {
  constructor(private alumnossSrv: AlumnosSRVService) {
    super();
  }
  connect(): Observable<Alumno[]> {
    return this.alumnossSrv.getListaAlumnos();
  }
  disconnect() {}
}
