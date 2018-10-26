import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlumnosSRVService } from '../services/alumnos-srv.service';
import { Alumno } from '../clases/alumno';

@Component({
  selector: 'app-datos-alumnos',
  templateUrl: './datos-alumnos.component.html',
  styleUrls: ['./datos-alumnos.component.css']
})
export class DatosAlumnosComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private alumnossSrv: AlumnosSRVService) { }
  legajo: number;
  alumno: Alumno;
  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.legajo = params['legajo'];
      console.log(this.legajo);

      this.alumnossSrv.getDatosAlumno(this.legajo).subscribe(
        alumno => this.alumno
      );

    });



  }
}
