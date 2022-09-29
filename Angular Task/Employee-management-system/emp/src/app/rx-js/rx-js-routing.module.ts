import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './operators/operators.component';
import { RxJSComponent } from './rx-js.component';

const routes: Routes = [{ path: '', component: RxJSComponent ,
  children:[{
    path:'',
    pathMatch:'full',
    redirectTo: 'operators'
  },
{
  path:'operators',
  component: OperatorsComponent
}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxJSRoutingModule { }
