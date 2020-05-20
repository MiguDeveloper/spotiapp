import { Component, OnInit } from '@angular/core';
import {HeroeModel} from '../../models/heroe.model';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();
  formHeroe: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  submitFormHeroe(){

  }

}
