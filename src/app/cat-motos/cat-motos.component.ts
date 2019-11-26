import {Component, OnInit} from '@angular/core';
import {Moto} from '../modelo/moto';
import {CatMotosService} from './cat-motos.service';

@Component({
  selector: 'app-cat-motos',
  templateUrl: './cat-motos.component.html',
  styleUrls: ['./cat-motos.component.css']
})
export class CatMotosComponent implements OnInit {

  listaMotos: Moto[] = [];
  obj: Moto = {id: 0, modelo: '', ano: '', cor: ''};
  mensagem = '';
  selecionado = false;

  constructor(private api: CatMotosService) { }

  ngOnInit() {
    this.consultar();
    this.obj = {id: 0, modelo: '', ano: '', cor: ''};
    this.selecionado = false;
  }

  consultar() {

      console.log('...consultar...');

      this.api.consultar()
        .toPromise()
        .then
        (res => {
          this.listaMotos = res;
        });

  }

  adicionar() {

    console.log('...adicionar...');

    this.api.adicionar(this.obj)
      .toPromise()
      .then(() => {
        this.ngOnInit();
      });

  }

  alterar() {

    console.log('...alterar...');

    this.api.alterar(this.obj.id, this.obj)
      .toPromise()
      .then(() => {
        this.ngOnInit();
      });

  }

  excluir() {

    console.log('...excluir...');

    this.api.excluir(this.obj.id)
      .toPromise()
      .then(() => {
        this.ngOnInit();
      });

  }

  selecionar(f: Moto) {

    console.log('...limpar...');

    this.obj.id = f.id;
    this.obj.modelo = f.modelo;
    this.obj.ano = f.ano;
    this.obj.cor = f.cor;

    this.selecionado = true;

  }

  limpar() {

    console.log('...limpar...');

    this.ngOnInit();

  }






}
