import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('variavelTemplate', {static: false}) variavelTemplateInput: ElementRef;

  decrementar() {

    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});

  }

  incrementar() {

    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});

  }

  decrementar2() {

    this.variavelTemplateInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});

  }

  incrementar2() {

    this.variavelTemplateInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});

  }

  constructor() { }

  ngOnInit() {
  }

}
