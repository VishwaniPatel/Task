import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeComponent } from './attribute/attribute.component';
import { BindingComponent } from './binding/binding.component';
import { CustomPipeComponent } from './pipe/custom-pipe/custom-pipe.component';
import { CustomerComponent } from './customer/customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { InbuiltPipeComponent } from './pipe/inbuilt-pipe/inbuilt-pipe.component';
import { ReformsComponent } from './reforms/reforms.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"Binding"
  },
  {
    path:"Binding",
    component:BindingComponent
  },
  {
    path:"Structural",
    component:StructuralDirectivesComponent
  },
  {
    path:"Attribute",
    component:AttributeComponent
  },
  {
    path:"Pipe",
    component:InbuiltPipeComponent
  },
  {
    path:"customePipe",
    component:CustomPipeComponent
  },
  { 
    path: 'customers', 
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule),
  },
  {
    path:'reactiveform',
    component: ReformsComponent
  },
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
