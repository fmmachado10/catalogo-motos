import {Component, OnInit} from '@angular/core';
import {Moto} from '../modelo/moto';
import {CatMotosService} from "./cat-motos.service";

@Component({
  selector: 'app-cat-motos',
  templateUrl: './cat-motos.component.html',
  styleUrls: ['./cat-motos.component.css']
})
export class CatMotosComponent implements OnInit {

  listaMotos: Moto[] = [];
  moto: Moto = {id: 0, modelo: '', ano: '', cor: ''};
  mensagem = '';

  constructor(private api: CatMotosService) { }

  ngOnInit() {
  }

  consultar() {
    this.api.consultar()
      .toPromise()
      .then
      (res => {
        this.listaMotos = res;
      });
  }






}
