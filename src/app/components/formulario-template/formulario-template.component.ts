import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CountriesService} from '../../services/countries.service';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css']
})
export class FormularioTemplateComponent implements OnInit {

  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    pais: '',
    genero: ''
  };

  paises: any[] = [];

  constructor(private countriesService: CountriesService) {
  }

  ngOnInit() {
    this.cargarPaises();
  }

  guardar(formulario: NgForm) {
    console.log(formulario.value);
    if (formulario.invalid) {
      Object.values(formulario.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  cargarPaises() {
    this.countriesService.getPaises()
      .subscribe((response: any) => {
        this.paises = response;
        this.paises.unshift({name: '[Seleccione Pais]', cioc: ''});
      });
  }
}

