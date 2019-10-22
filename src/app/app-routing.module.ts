import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CatMotosComponent} from './cat-motos/cat-motos.component'
import {HomeComponent} from './home/home.component'


const routes: Routes = [

  {
    path: 'cadastroMotoForm',
    component: CatMotosComponent
  },
  {
    path: '',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
