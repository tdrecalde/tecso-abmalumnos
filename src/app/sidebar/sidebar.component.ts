import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuesABM: string[] = ['Lista de alumnos', 'Reporte de cursos'];

  constructor() { }

  ngOnInit() {
  }

}
