import {Component, OnInit} from '@angular/core';
import {HeroesService} from "../../services/heroes.service";
import {HeroeModel} from "../../models/heroe.model";

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
}
