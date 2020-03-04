import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient) {
    console.log('Servicio spotify listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQABKdNnnBSTSF_W4btYxAi-flUr2rJp7T9kn996EG09d4M8ECZ2aRd37iraXX_LCCPmPCucsrlTRm3hJnE'
    });

    return this.httpClient.get(url, {headers});

  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => {
        return data['albums'].items;
      }));
    /*
    this.httpClient.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .pipe(map(data => {
        return data['albums'].items
      }));*/
  }

  getArtista(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => {
        return data['artists'].items;
      }));
    /*
    this.httpClient.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
      .pipe(map(data => {
        return data['artists'].items
      }));*/
  }
}
