import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [{ path: '', component: CustomersComponent,
  children : [
    {
      path:'',
      pathMatch: 'full',
      redirectTo: 'add'
    },
    {
      path:'add',
      component: CustomerFormComponent
    },
    
    {
      path:"edit/:id",
      component: CustomerFormComponent
    },
    {
      path:"details/:id",
      component: CustomerDetailsComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
