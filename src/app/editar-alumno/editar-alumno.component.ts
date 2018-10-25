import { Component, OnInit } from '@angular/core';
import { Alumno } from '../clases/alumno';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlumnosSRVService } from '../services/alumnos-srv.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})

export class EditarAlumnoComponent implements OnInit {

  alumno: Alumno;

  constructor(private alumnossSrv: AlumnosSRVService, private router: Router) { }

  alumnoForm = new FormGroup({
    legajo: new FormControl({ disabled: true }, [Validators.required]),
    persona: new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl([Validators.required]),
      tipodoc: new FormControl({ disabled: true }, [Validators.required]),
      documento: new FormControl({ disabled: true }, [Validators.required]),
      fechanac: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
    })
  });

  updateProfile() {



    this.alumnoForm.patchValue(this.alumnossSrv.getDatosAlumno(1234));
  }

  ngOnInit() {
    this.updateProfile();
  }




  onSubmit() {

    console.log("Thanks for submitting! Data: ", this.alumnoForm.value);

    this.alumno = this.alumnoForm.value;

    console.log("SEEE", this.alumno);

    // this.alumnossSrv.altaAlumno(this.alumno);



    // this.router.navigateByUrl('/listadoAlumnos/:');

  }


}
