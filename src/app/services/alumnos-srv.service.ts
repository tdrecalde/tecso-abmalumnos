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
      {identificador: 1, legajo:1, persona:{identificador:1,direccion:"calle1", nombre: 'María', apellido: 'Del Piero',tipodoc:"DNI",documento:"33333333",fechanac: new Date(1990,1,1)}}
    , {identificador: 2, legajo:2, persona:{identificador:21,direccion:"calle1", nombre: 'Pedro', apellido: 'MArcico',tipodoc:"DNI",documento:"33333333",fechanac: new Date(1990,1,1)}}
  ];
  }

  getDatosAlumno(legajo:number): Alumno{
    return {identificador: 1, legajo:legajo, persona:{identificador:1,direccion:"calle1", nombre: 'María', apellido: 'Del Piero',tipodoc:"DNI",documento:"33333333",fechanac: new Date(1990,1,1)}}
  }

  altaAlumno(alumno:Alumno): void{
    console.log(alumno);
  }

  modAlumno(legajo:number): Alumno{
    return {identificador: 1, legajo:legajo, persona:{identificador:1,direccion:"calle1", nombre: 'María', apellido: 'Del Piero',tipodoc:"DNI",documento:"33333333",fechanac: new Date(1990,1,1)}}
  }

  delAlumno(legajo:number): Alumno{
    return {identificador: 1, legajo:legajo, persona:{identificador:1,direccion:"calle1", nombre: 'María', apellido: 'Del Piero',tipodoc:"DNI",documento:"33333333",fechanac: new Date(1990,1,1)}}
  }

  private handleError(error: any): Promise<any> {
    console.error('Se produjo un error: ', error);
    return null;
    // Promise.reject(error.message || error);
  }

  constructor() { }
}
