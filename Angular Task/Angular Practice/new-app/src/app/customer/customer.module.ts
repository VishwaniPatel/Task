import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ]
})
export class CustomerModule { }
