import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxJSRoutingModule } from './rx-js-routing.module';
import { RxJSComponent } from './rx-js.component';
import { OperatorsComponent } from './operators/operators.component';


@NgModule({
  declarations: [
    RxJSComponent,
    OperatorsComponent
  ],
  imports: [
    CommonModule,
    RxJSRoutingModule
  ]
})
export class RxJSModule { }
