import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CatMotosComponent} from './cat-motos/cat-motos.component';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {CatRacaComponent} from './cat-raca/cat-raca.component';

const routes: Routes = [

  {
    path: 'cadastroMotoForm',
    component: CatMotosComponent
  },
  {
    path: 'cadastroRacaForm',
    component: CatRacaComponent
  },
  {
    path: '',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
