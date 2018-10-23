import { Injectable } from '@angular/core';
import { Cursos } from '../clases/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getDatosCurso(): Cursos{
    return {identificador: 1, legajo:5556, nombre: 'María', apellido: 'Del Piero',tipodoc:"DNI",documento:"33333333",fechanac:"20/03/1991"}
  }

  constructor() { }
}
