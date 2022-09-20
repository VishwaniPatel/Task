import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReformsComponent } from './reforms.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReformsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    ReformsComponent
  ]
})
export class ReformsModule { }
