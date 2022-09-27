import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { userClass } from './user.model';
import { CustomerService } from './service/customer.service';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomerFormComponent,
    CustomerListComponent,
    CustomerDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers:[
    CustomerService
  ]
})

export class CustomersModule { }
