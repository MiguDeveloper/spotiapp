import {Component, OnInit} from '@angular/core';
import {HeroeModel} from '../../models/heroe.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HeroesService} from '../../services/heroes.service';
import Swal from 'sweetalert2';
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: HeroeModel;
  formHeroe: FormGroup;
  estadoHeroe: boolean;

  constructor(private fb: FormBuilder,
              private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.iniciarFormulario();
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id !== 'nuevo'){
      this.heroesService.getHeroe(id).subscribe(
        (resp: HeroeModel) => {
          this.formHeroe.controls.id.setValue(id);
          this.formHeroe.controls.nombre.setValue(resp.nombre);
          this.formHeroe.controls.poder.setValue(resp.poder);
          this.formHeroe.controls.vivo.setValue(resp.vivo ? 'true' : 'false');
          this.formHeroe.controls.vivo.markAsTouched();
          this.formHeroe.controls.vivo.markAsDirty();
          this.estadoHeroe = resp.vivo;
        }
      )
    }
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

      Swal.fire({
        title: 'Espere',
        text: 'Guardando la informacion',
        icon: 'info',
        allowOutsideClick: false
      });

      Swal.showLoading();

      let peticion: Observable<any>;

      this.heroe.nombre = this.formHeroe.controls.nombre.value;
      this.heroe.poder = this.formHeroe.controls.poder.value;
      this.heroe.vivo = this.formHeroe.controls.vivo.value === 'true' ? true : false;

      if (this.heroe.id !== undefined) { // actualizamos
        peticion = this.heroesService.actualizarHeroe(this.heroe);
      } else { // creamos
        peticion = this.heroesService.crearHeroe(this.heroe);
      }

      peticion.subscribe(resp => {
        console.log(resp);

        if (resp.id !== undefined) {
          this.formHeroe.controls.id.setValue(resp.id);
        }

        Swal.fire({
          title: this.heroe.nombre,
          text: 'Se creo con éxito el heroe',
          icon: 'success'
        })
      })

    }
  }


}
