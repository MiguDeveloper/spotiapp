import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() artistas: any[] = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  verArtista(item: any) {
    let artisId;
    if (item.type === 'artist') {
      artisId = item.id;
    } else {
      artisId = item.artists[0].id;
    }
    this.router.navigate(['/artist', artisId]);
  }

}
