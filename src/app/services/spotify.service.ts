import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient) {
    console.log('Servicio spotify listo');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBTw0qSUYQHhyamgXg4_DlUWDTSgKPCZltY8jHvyZhCE6EyvkNf4FN4QCEbL3PA9oTI2onlN9_dgyB8KEE'
    });

    return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtista(termino: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBTw0qSUYQHhyamgXg4_DlUWDTSgKPCZltY8jHvyZhCE6EyvkNf4FN4QCEbL3PA9oTI2onlN9_dgyB8KEE'
    });

    return this.httpClient.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers});
  }
}
