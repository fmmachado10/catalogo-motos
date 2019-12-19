import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CatMotosComponent} from './cat-motos/cat-motos.component';
import {HomeComponent} from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import {ImagemComponent} from './imagem/imagem.component';
import {CatMotosService} from './cat-motos/cat-motos.service';
import {ErrorMsgComponent} from './error-msg/error-msg.component';
import {AlertComponent} from './alert/alert.component';
import {TestesAngularComponent} from './testes-angular/testes-angular.component';
import {OutputPropertyComponent} from './output-property/output-property.component';
import { CamelCasePipe } from './pipe/camel-case.pipe';
import { OrderByPipe } from './pipe/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CatMotosComponent,
    HomeComponent,
    MenuComponent,
    ImagemComponent,
    ErrorMsgComponent,
    AlertComponent,
    TestesAngularComponent,
    OutputPropertyComponent,
    CamelCasePipe,
    OrderByPipe


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CatMotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
