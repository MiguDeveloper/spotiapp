import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario-data-reactive',
  templateUrl: './formulario-data-reactive.component.html',
  styleUrls: ['./formulario-data-reactive.component.css']
})
export class FormularioDataReactiveComponent implements OnInit {

  formReactive: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.iniciarFormulario();
  }

  get nombreNoValido() {
    return this.formReactive.get('nombre').invalid && this.formReactive.get('nombre').touched;
  }

  get nombreValido() {
    return this.formReactive.get('nombre').valid && this.formReactive.get('nombre').touched;
  }

  get apellidoNoValido() {
    return this.formReactive.get('apellido').invalid && this.formReactive.get('apellido').touched;
  }

  get apellidoValido() {
    return this.formReactive.get('apellido').valid && this.formReactive.get('apellido').touched;
  }

  get correoNoValido() {
    return this.formReactive.get('correo').invalid && this.formReactive.get('correo').touched;
  }

  get correoValido() {
    return this.formReactive.get('correo').valid && this.formReactive.get('correo').touched;
  }

  iniciarFormulario() {
    this.formReactive = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]]
    });
  }

  submitForm() {
    console.log(this.formReactive);
    if (this.formReactive.invalid) {
      Object.values(this.formReactive.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
