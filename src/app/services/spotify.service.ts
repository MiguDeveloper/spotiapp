import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient) {
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCSX8dQE-9YhwpopwFMUkerdz1dAlTPzXZ94WC-8TJ_8KIbIeqegojOeKBPnCZJR7p1uihv-AF5dcVhPlc'
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

  getArtistas(termino: string) {

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

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    //.pipe(map(data => data['artists'].items));
  }

  getTopTrack(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map(data => data['tracks']));
  }
}
