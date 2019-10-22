import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcaTextoDirective } from './marca-texto.directive';

@NgModule({

  declarations: [MarcaTextoDirective],

  imports: [CommonModule],

  exports: [MarcaTextoDirective]

})
export class DirectivesModule { }
