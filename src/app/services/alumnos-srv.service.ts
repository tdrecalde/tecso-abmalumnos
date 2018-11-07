import { Injectable } from '@angular/core';
import { Alumno } from '../clases/alumno';
import { Constantes } from '../clases/constantes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})

export class AlumnosSRVService {

  constructor(private http: HttpClient, ) { }

  getListaAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(Constantes.G_TODOS_ALUMNOS)
  }


  // getDatosAlumno(legajo: number): Alumno {
  //   // return { identificador: 1, legajo: legajo, persona: { identificador: 1, direccion: "calle1", nombre: 'Mar�a', apellido: 'Del Piero', tipodoc: "DNI", documento: "33333333", fechanac: new Date(1990, 1, 1) } }
  // }

  getDatosAlumno(legajo: number): Observable<Alumno> {
    return this.http.get<Alumno>(Constantes.GDP_ALUMNO + legajo)
  }

  altaAlumno(alumno: Alumno): void {
    this.http.put<Alumno>(Constantes.GDP_ALUMNO, alumno)
    // console.log(alumno);
  }

  modAlumno(alumno: Alumno): void {

     this.http.post<Alumno>(Constantes.GDP_ALUMNO, alumno)
    //return { identificador: 1, legajo: legajo, persona: { identificador: 1, direccion: "calle1", nombre: 'Mar�a', apellido: 'Del Piero', tipodoc: "DNI", documento: "33333333", fechanac: new Date(1990, 1, 1) } }
  }

  delAlumno(legajo: number): Alumno {
    return { identificador: 1, legajo: legajo, persona: { identificador: 1, direccion: "calle1", nombre: 'Mar�a', apellido: 'Del Piero', tipodoc: "DNI", documento: "33333333", fechanac: new Date(1990, 1, 1) } }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


}
