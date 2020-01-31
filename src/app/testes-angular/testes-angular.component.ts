import {Component, OnInit} from '@angular/core';
import {faCamera, faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-testes-angular',
  templateUrl: './testes-angular.component.html',
  styleUrls: ['./testes-angular.component.css']
})
export class TestesAngularComponent implements OnInit {

  favoriteFour: boolean = true;

  nome: string = 'abc';

  pessoa: any = {
    nome: 'XXX',
    idade: 20
  };

  valorInicial = 15;

  item: string = 'zero';

  arrays: string[] = ["elemento1", "elemento2", "elemento3", "elemento4", "elemento5"];


  onMudouValor(evento) {

  console.log(evento.novoValor);

  }

  constructor() { }

  ngOnInit() {

    for (let i = 0; i < this.arrays.length; i++) {
      let array = this.arrays[i];
    }

  }

  favoriteFourF() {

    this.favoriteFour = !this.favoriteFour;


  }

}
