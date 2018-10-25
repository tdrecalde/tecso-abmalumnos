import { Component, OnInit } from '@angular/core';
import { Alumno } from '../clases/alumno';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlumnosSRVService } from '../services/alumnos-srv.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-nuevo-alumno',
  templateUrl: './nuevo-alumno.component.html',
  styleUrls: ['./nuevo-alumno.component.css']
})

export class NuevoAlumnoComponent implements OnInit {

alumno:Alumno;

  constructor(private alumnossSrv: AlumnosSRVService, private router: Router) { }

  alumnoForm = new FormGroup({
    legajo: new FormControl('', []),
    persona: new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      tipodoc: new FormControl('',  [Validators.required]),
      documento: new FormControl('',  [Validators.required, Validators.pattern('^[0-9]+$')]),
      fechanac: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
    })
  });

  updateProfile() {
    // this.alumnoForm.patchValue(this.alumnossSrv.getDatosAlumno(1234));
  }

  ngOnInit() {
    // this.updateProfile();
  }

 
  

  onSubmit() {

    console.log("Thanks for submitting! Data: ", this.alumnoForm.value);

    this.alumno = this.alumnoForm.value;

    this.alumnossSrv.altaAlumno(this.alumno);

    this.router.navigateByUrl('/listadoAlumnos');

  }


}
