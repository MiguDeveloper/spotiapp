import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

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
    this.cargarDataEnFormulario();
  }

  get pasatiempos() {
    return this.formReactive.get('pasatiempos') as FormArray;
  }

  formControlNoValido(control: string): boolean {
    return this.formReactive.get(control).invalid && this.formReactive.get(control).touched;
  }

  formControlValido(control: string): boolean {
    return this.formReactive.get(control).valid && this.formReactive.get(control).touched;
  }

  formGroupNoValido(objeto: string): boolean {
    return this.formReactive.get(objeto).invalid && this.formReactive.get(objeto).touched;
  }

  formGroupValido(objeto: string): boolean {
    return this.formReactive.get(objeto).valid && this.formReactive.get(objeto).touched;
  }

  iniciarFormulario() {
    this.formReactive = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]],
      direccion: this.fb.group({
        distrito: ['', Validators.required],
        ciudad: ['', Validators.required]
      }),
      pasatiempos: this.fb.array([])
    });
  }

  /*
   * Recordar que cuando hacemos el setValue({}) no puede faltar ningun campo con respecto al formulario
   * sino marcara error. Para evitar ese error es mejor usar el reset para setear el formulario a la
   * hora de cargar o iniciar el formulario
   */
  cargarDataEnFormulario() {
    // this.formReactive.setValue({
    this.formReactive.reset({
      nombre: 'Miguel',
      apellido: 'Chinchay',
      correo: 'miguel.peru@gmail.com',
      direccion: {
        distrito: 'Otawa',
        ciudad: 'Ontario'
      }
    });

    ['Desarrollar', 'Futbol'].forEach(pasatiempo => this.pasatiempos.push(this.fb.control(pasatiempo)));
  }

  agregarPasatiempo() {
    this.pasatiempos.push(this.fb.control('', Validators.required));
  }

  borrarPasatiempo(i: number) {
    this.pasatiempos.removeAt(i);
  }

  submitForm() {
    console.log(this.formReactive);
    if (this.formReactive.invalid) {
      Object.values(this.formReactive.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(subControl => {
            subControl.markAsTouched();
          });
        } else {
          control.markAsTouched();
        }
      });
    }
    /* resteamos el formulario
    this.formReactive.reset({
      nombre: 'sin nombre'
    });*/
  }

}
