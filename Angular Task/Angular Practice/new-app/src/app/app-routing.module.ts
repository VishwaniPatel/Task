import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';

const routes: Routes = [
  {
    path:"Binding",
    component:BindingComponent
  },
  {
    path:"Structural",
    component:StructuralDirectivesComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"Binding"
  },
  { path: 'customers', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  {
    path:"**",
    component:PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
