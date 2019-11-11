import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatMotosComponent } from './cat-motos/cat-motos.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ImagemComponent } from './imagem/imagem.component';
import {CatMotosService} from "./cat-motos/cat-motos.service";

@NgModule({
  declarations: [
    AppComponent,
    CatMotosComponent,
    HomeComponent,
    MenuComponent,
    ImagemComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CatMotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
