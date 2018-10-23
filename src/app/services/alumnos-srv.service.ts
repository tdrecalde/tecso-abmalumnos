import { Injectable } from '@angular/core';
import { Alumno } from '../clases/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosSRVService {


  // getSitiosXML(): Promise<Sitio[]> {
  //   this.headers = new Headers({'Content-Type': 'application/xml'});
  //   this.urlXMLSitios = './assets/sitios.xml';
  //   return this.http.get(this.urlXMLSitios, {headers: this.headers})
  //             .toPromise()
  //             .then(response => (this.parseXML2Json(response.text())))
  //             .catch(this.handleError);
  // }

  getListaAlumnos(): Alumno[] {
    return [
      {identificador: 1, legajo:5556, nombre: 'María', apellido: 'Del Piero',tipodoc:"DNI",documento:"33333333",fechanac:"20/03/1991"}
    , {identificador: 2, legajo:5557, nombre: 'Pedro', apellido: 'Mendieta', tipodoc:"DNI",documento:"33444444",fechanac:"21/03/1990"}
  ];
  }

  getDatosAlumno(legajo:number): Alumno{
    return {identificador: 1, legajo:legajo, nombre: 'María', apellido: 'Del Piero',tipodoc:"DNI",documento:"33333333",fechanac:"20/03/1991"}
  }

  altaAlumno(alumno:Alumno): void{
    console.log(alumno);
  }

  modAlumno(legajo:number): Alumno{
    return {identificador: 1, legajo:legajo, nombre: 'María', apellido: 'Del Piero',tipodoc:"DNI",documento:"33333333",fechanac:"20/03/1991"}
  }

  delAlumno(legajo:number): Alumno{
    return {identificador: 1, legajo:legajo, nombre: 'María', apellido: 'Del Piero',tipodoc:"DNI",documento:"33333333",fechanac:"20/03/1991"}
  }

  private handleError(error: any): Promise<any> {
    console.error('Se produjo un error: ', error);
    return null;
    // Promise.reject(error.message || error);
  }

  constructor() { }
}
