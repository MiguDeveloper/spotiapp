import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css']
})
export class FormularioTemplateComponent implements OnInit {

  usuario = {
    nombre: '',
    apellido: '',
    correo: ''
  };

  constructor() {
  }

  ngOnInit() {
  }

  guardar(formulario: NgForm) {
    console.log(formulario.value);
  }
}
