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
  obj: Moto = {id: 0, modelo: '', ano: '', cor: ''};
  mensagem = '';

  constructor(private api: CatMotosService) { }

  ngOnInit() {
    this.consultar();
    this.obj = {id: 0, modelo: '', ano: '', cor: ''};
  }

  consultar() {

      console.log("...consultar...")

      this.api.consultar()
        .toPromise()
        .then
        (res => {
          this.listaMotos = res;
        });

  }

  adicionar() {

    console.log("...adicionar...")

    this.api.adicionar(this.obj)
      .toPromise()
      .then(() => {
        this.ngOnInit()
      });

  }

  alterar() {

    console.log("...alterar...")

    this.api.alterar(this.obj.id, this.obj)
      .toPromise()
      .then(() => {
        this.ngOnInit()
      });



  }

  limpar() {

    console.log("...limpar...")

    this.ngOnInit()

  }








}
