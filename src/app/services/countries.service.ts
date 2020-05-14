import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  apiUrl = 'https://restcountries.eu/rest/v2/lang/es';

  constructor(private httpClient: HttpClient) {
  }

  getPaises() {
    return this.httpClient.get(this.apiUrl)
      .pipe(map((pais: any) => {
        return pais;
      }));
  }
}
