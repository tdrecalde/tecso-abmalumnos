import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuesABM: object[] = [
    { titulo: "Lista de alumnos", link: "/listadoAlumnos" },
    { titulo: "Nuevo alumno", link: "/nuevoAlumno" },
    { titulo: "Reporte de cursos", link: "/reporteCurso" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
