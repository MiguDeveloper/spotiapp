import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit() {
  }

  buscar(termino: string) {
    this.spotifyService.getArtista(termino)
      .subscribe(data => {
        this.artistas = data.artists.items;
        console.log(data.artists.items);
      });

    console.log(termino);
  }

}
