import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CatMotosComponent} from './cat-motos/cat-motos.component';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {TestesAngularComponent} from './testes-angular/testes-angular.component';

const routes: Routes = [

  {
    path: 'cadastroMotoForm',
    component: CatMotosComponent
  },

  {
    path: 'testesAngular',
    component: TestesAngularComponent

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
