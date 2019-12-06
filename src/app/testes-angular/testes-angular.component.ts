import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-testes-angular',
  templateUrl: './testes-angular.component.html',
  styleUrls: ['./testes-angular.component.css']
})
export class TestesAngularComponent implements OnInit {


  nome: string = 'abc';

  pessoa: any = {
    nome: 'XXX',
    idade: 20
  }

  valorInicial = 15;

  onMudouValor(evento){

  console.log(evento.novoValor);

  }

  constructor() { }

  ngOnInit() {
  }

}
