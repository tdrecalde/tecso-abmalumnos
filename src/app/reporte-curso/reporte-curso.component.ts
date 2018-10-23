import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-reporte-curso',
  templateUrl: './reporte-curso.component.html',
  styleUrls: ['./reporte-curso.component.css']
})
export class ReporteCursoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      let identificador = params['identificador'];
      console.log(identificador);
    });
    
  }

}
