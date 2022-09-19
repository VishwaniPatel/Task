import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenderPipe } from './pipes/gender-pipe/gender.pipe';
import { CurrencyPipe } from './pipes/currency-pipe/currency.pipe';



@NgModule({
  declarations: [
              GenderPipe,
              CurrencyPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GenderPipe,
    CurrencyPipe
  ]
})
export class SharedModule { }
