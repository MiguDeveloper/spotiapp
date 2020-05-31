import {Component, OnInit} from '@angular/core';
import {HeroesService} from "../../services/heroes.service";
import {HeroeModel} from "../../models/heroe.model";
import Swal from "sweetalert";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];
  loading = true;

  constructor(private heroesService: HeroesService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesService.getHeroes().subscribe(
      resp => {
        this.heroes = resp;
        this.loading = false;
      }
    );
  }

  deleteHeroe(heroe: HeroeModel, i: number) {
    Swal({
      title: "¿esta seguro?",
      text: `Esta seguro que desea borrar a ${heroe.nombre}`,
      icon: 'warning',
      buttons: {
        cancel: true,
        confirm: true
      }
    }).then(
      resp => {
        if (resp) {
          this.heroes.splice(i, 1);
          this.heroesService.deleteHeroe(heroe.id).subscribe();
        }
      }
    )
  }
}
