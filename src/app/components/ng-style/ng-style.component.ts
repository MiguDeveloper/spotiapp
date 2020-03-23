import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  tamanio = 15;
  tipoAlert = 'alert-danger';
  propiedades = {
    danger: true
  };
  loading = false;

  constructor() {
  }

  ngOnInit() {
  }

  aplicarEstiloAlert(tipoAlerta) {
    this.tipoAlert = tipoAlerta;
  }

  ejecutar() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}
