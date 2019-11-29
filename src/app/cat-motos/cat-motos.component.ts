import {Component, OnInit} from '@angular/core';
import {Moto} from '../modelo/moto';
import {CatMotosService} from "./cat-motos.service";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AlertType} from "../alert/alert";

@Component({
  selector: 'app-cat-motos',
  templateUrl: './cat-motos.component.html',
  styleUrls: ['./cat-motos.component.css']
})
export class CatMotosComponent implements OnInit {

  listaMotos: Moto[] = [];
  obj: Moto = {id: 0, modelo: '', ano: '', cor: ''};
  mensagem: string = '';
  ehVisivel: boolean = false;
  alertType: AlertType =  AlertType.INFO;
  selecionado: boolean = false;

  formMotos: FormGroup;

  constructor(private api: CatMotosService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formMotos = new FormGroup({
      'modelo': new FormControl (this.obj.modelo, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
      'ano': new FormControl (this.obj.ano, [Validators.required, Validators.minLength(2)]),
      'cor': new FormControl (this.obj.cor, [Validators.required, Validators.minLength(2)])
    });

    this.consultar();
    this.obj = {id: 0, modelo: '', ano: '', cor: ''};
    this.selecionado = false;
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

  verificaValidacoesForm(formGroup: FormGroup | FormArray) {

    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      controle.markAsTouched();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.verificaValidacoesForm(controle);
      }
    });

  }

  adicionar() {

    console.log("...adicionar...")

    if (!this.formMotos.valid) {

      console.log('Formulario invalido');
      this.verificaValidacoesForm(this.formMotos)
      this.ehVisivel = false;


    } else {

      this.api.adicionar(this.obj)
        .toPromise()
        .then(() => {
          this.ngOnInit()
        });

      console.log("Moto adicionada com sucesso.")
      this.mensagem = "Moto adicionada com sucesso"
      this.ehVisivel = true;
      this.alertType = AlertType.SUCCESS

    }

  }

  alterar() {

    console.log("...alterar...")

    if (!this.selecionado) {

      console.log("É necessário selecionar um item para alterar.")
      this.mensagem = "É necessário selecionar um item para alterar."
      this.ehVisivel = true;
      this.alertType = AlertType.DANGER;

    } else {

      this.api.alterar(this.obj.id, this.obj)
        .toPromise()
        .then(() => {
          this.ngOnInit()
        });

    }

  }

  excluir() {

    console.log("...excluir...")

    if (!this.selecionado) {

      console.log("É necessário selecionar um item para excluir.")
      this.mensagem = "É necessário selecionar um item para excluir."
      this.ehVisivel = true;
      this.alertType = AlertType.DANGER;


    } else {

      this.api.excluir(this.obj.id)
        .toPromise()
        .then(() => {
          this.ngOnInit()
        });

    }

  }

  selecionar(f: Moto) {

    console.log("...selecionar...")

    this.obj.id = f.id
    this.obj.modelo = f.modelo
    this.obj.ano = f.ano
    this.obj.cor = f.cor

    this.selecionado = true;

  }

  limpar() {

    console.log("...limpar...")

    this.mensagem = ''
    this.ehVisivel = false

    this.ngOnInit()

  }






}
