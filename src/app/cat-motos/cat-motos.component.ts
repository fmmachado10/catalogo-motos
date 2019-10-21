import { Component, OnInit } from '@angular/core';
import { Moto } from '../moto';

@Component({
  selector: 'app-cat-motos',
  templateUrl: './cat-motos.component.html',
  styleUrls: ['./cat-motos.component.css']
})
export class CatMotosComponent implements OnInit {

  listaMotos = [];
  moto: Moto = new Moto();
  cont = 0;

  adicionar() {
    this.listaMotos.push(
      {
        id: ++this.cont,
        modelo: this.moto.modelo,
        ano: this.moto.ano,
        cor: this.moto.cor
      }
    );
  }

  constructor() { }

  ngOnInit() {
  }

}
