import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HeroeModel} from '../models/heroe.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  uri = 'https://crudmiguel-da764.firebaseio.com';

  constructor(private httpClient: HttpClient) {
  }

  crearHeroe(heroe: HeroeModel) {
    console.log('estamos creando');
    console.log(heroe);
    return this.httpClient.post(`${this.uri}/heroes.json`, heroe)
      .pipe(
        map((resp: any) => {
          heroe.id = resp.name;
          return heroe;
        })
      );
  }

  actualizarHeroe(heroe: HeroeModel) {
    console.log('estamos actualizando');
    console.log(heroe);
    const heroeTemp = {
      ...heroe
    };
    delete heroeTemp.id;
    return this.httpClient.put(`${this.uri}/heroes/${heroe.id}.json`, heroeTemp);
  }

  getHeroes() {
    return this.httpClient.get(`${this.uri}/heroes.json`)
      .pipe(
        map(resp => this.crearArreglo(resp))
      );
  }

  crearArreglo(heroesObj: object) {
    const heroes: HeroeModel[] = [];
    if (heroesObj == null){
      return [];
    }

    Object.keys(heroesObj).forEach(key => {
      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;
      heroes.push(heroe);
    })

    return heroes;
  }

  getHeroe(id: string){
    return this.httpClient.get(`${this.uri}/heroes/${id}.json`);
  }

  deleteHeroe(id: string){
    return this.httpClient.delete(`${this.uri}/heroes/${id}.json`);
  }
}
