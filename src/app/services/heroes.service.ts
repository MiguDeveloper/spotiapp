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
    return this.httpClient.post(`${this.uri}/heroes.json`, heroe)
      .pipe(
        map((resp: any) => {
          heroe.id = resp.name;
          return heroe;
        })
      );
  }
}
