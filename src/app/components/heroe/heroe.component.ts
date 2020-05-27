import {Component, OnInit} from '@angular/core';
import {HeroeModel} from '../../models/heroe.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: HeroeModel;
  formHeroe: FormGroup;

  constructor(private fb: FormBuilder,
              private heroesService: HeroesService) {
  }

  ngOnInit() {
    this.iniciarFormulario();
  }

  iniciarFormulario() {
    this.formHeroe = this.fb.group({
      id: [{value: '', disabled: true}],
      nombre: ['', Validators.required],
      poder: ['', Validators.required],
      vivo: [null, Validators.required]
    });
  }

  submitFormHeroe() {
    if (this.formHeroe.valid) {
      this.heroe = new HeroeModel();

      if (this.formHeroe.controls.id.value !== '') {
        this.heroe.id = this.formHeroe.controls.id.value;
      }

      this.heroe.nombre = this.formHeroe.controls.nombre.value;
      this.heroe.poder = this.formHeroe.controls.poder.value;
      this.heroe.vivo = this.formHeroe.controls.vivo.value === 'true' ? true : false;

      if (this.heroe.id !== undefined) { // actualizamos
        this.heroesService.actualizarHeroe(this.heroe)
          .subscribe(resp => {
            console.log(resp);
          });
      } else { // creamos
        this.heroesService.crearHeroe(this.heroe)
          .subscribe(resp => {
            this.formHeroe.controls.id.setValue(resp.id);
            console.log(resp);
          });
      }
    }
  }


}
