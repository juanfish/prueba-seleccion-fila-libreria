import { Component, OnInit } from '@angular/core';

import { filaSeleccionada } from '@laranda/lib-sysutil';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit {
  filaSel = filaSeleccionada;
  arrSeleccion = [];

  usuarios = [
    {
      id: 1,
      nombre: 'juan',
      apellido: 'figuera'
    },
    {
      id: 2,
      nombre: 'vanessa',
      apellido: 'anton'
    },
    {
      id: 3,
      nombre: 'carlos',
      apellido: 'salinas'
    },
  ];

  IconTabla: DataTables.FunctionColumnRender = (data, type, row, meta) => {
    if (type === 'display') {
      return `<i class="fa fa-lightbulb-o LA-size LA-status-S"></i> ${data.id} `;
    }

    return data;
  };

  
  dtColumnas: DataTables.ColumnSettings[] = [
    {
      title: 'id', data: null, render: this.IconTabla,
      className: 'details-control', width: '20%'
    },
    { title: 'idd', data: 'id' },
    { title: 'nombre', data: 'nombre' },
    { title: 'apellid', data: 'apellido' }
  ];





  dameBombillo() {
    // return '<i class = "LA-status-D"></i>'
    // return `<i class="fa fa-lightbulb-o LA-size LA-status-D></i>
  }
  constructor() { }

  ngOnInit(): void {
  }

  onClickFila() {
    this.arrSeleccion = [];
    this.arrSeleccion = this.filaSel('lvUsuarios');
    console.table(this.arrSeleccion);


  }

}
