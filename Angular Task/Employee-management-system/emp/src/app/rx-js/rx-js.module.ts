import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxJSRoutingModule } from './rx-js-routing.module';
import { RxJSComponent } from './rx-js.component';
import { OperatorsComponent } from './operators/operators.component';
import { SubjectComponent } from './subject/subject.component';
import { ObservableComponent } from './observable/observable.component';


@NgModule({
  declarations: [
    RxJSComponent,
    OperatorsComponent,
    SubjectComponent,
    ObservableComponent
  ],
  imports: [
    CommonModule,
    RxJSRoutingModule
  ]
})
export class RxJSModule { }
