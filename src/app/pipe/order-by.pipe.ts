import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import {Moto} from "../modelo/moto";


@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {

  arrayOrdenado: any[] = [];

  transform( array: any) {

    console.log('array =>' + array[0]);

    if(!array) {

      console.log('01')

    } else {

      console.log('posição 0: ' + array);
      this.arrayOrdenado = array.sort();

      console.log('02')

    }


    this.arrayOrdenado = array;


      return this.arrayOrdenado;
    }



}
