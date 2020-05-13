import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  loadingArtista: boolean;
  topTracks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private spotifyService: SpotifyService) {
    activatedRoute.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit() {
  }

  getArtista(id: string) {
    this.loadingArtista = true;
    this.spotifyService.getArtista(id)
      .subscribe(artista => {
        // console.log(artista);
        this.artista = artista;
        this.loadingArtista = false;
      });
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTrack(id)
      .subscribe(topTracks => {
        this.topTracks = topTracks;
        // console.log(topTracks);
      });
  }
}
