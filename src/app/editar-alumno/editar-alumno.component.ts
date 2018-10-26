import { Component, OnInit } from '@angular/core';
import { Alumno } from '../clases/alumno';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlumnosSRVService } from '../services/alumnos-srv.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})

export class EditarAlumnoComponent implements OnInit {

  alumno: Alumno;

  constructor(private activatedRoute: ActivatedRoute, private alumnossSrv: AlumnosSRVService, private router: Router) { }

  legajo: number;
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



  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.legajo = params['legajo'];
      console.log(this.legajo);
      this.alumnossSrv.getDatosAlumno(this.legajo).subscribe(
        alumno => this.alumnoForm.patchValue(alumno)
      )

    });


  }

  onSubmit() {

    this.alumno = this.alumnoForm.value;

    this.alumnossSrv.modAlumno(this.alumno);

    this.router.navigateByUrl('/listadoAlumnos/');

  }


}
