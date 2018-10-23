import { Component, OnInit } from '@angular/core';
import { Alumno } from '../clases/alumno';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlumnosSRVService } from '../services/alumnos-srv.service';


@Component({
  selector: 'app-nuevo-alumno',
  templateUrl: './nuevo-alumno.component.html',
  styleUrls: ['./nuevo-alumno.component.css']
})

export class NuevoAlumnoComponent implements OnInit {

alumno:Alumno;

  constructor(private alumnossSrv: AlumnosSRVService) { }

  alumnoForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    tipodoc: new FormControl('', [Validators.required]),
    documento: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    fechanac: new FormControl('', [Validators.required]),
  });

  updateProfile() {
    this.alumnoForm.patchValue({
      nombre: 'Nancy',
      apellido: 'rojas'
    });
  }

  ngOnInit() {
    // this.updateProfile();
  }

 
  

  onSubmit() {

    console.log("Thanks for submitting! Data: ", this.alumnoForm.value);

    this.alumno = this.alumnoForm.value;

    this.alumnossSrv.altaAlumno(this.alumno);

  }


}
