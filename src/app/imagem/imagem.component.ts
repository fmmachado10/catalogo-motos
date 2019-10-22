import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent implements OnInit {

  @Input() caminho : string = ''

  constructor() { }

  ngOnInit() {
  }

}
