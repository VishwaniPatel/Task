import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { OperatorsComponent } from './operators/operators.component';
import { RxJSComponent } from './rx-js.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [{ path: '', component: RxJSComponent ,
  children:[{
    path:'',
    pathMatch:'full',
    redirectTo: 'operators'
  },
{
  path:'operators',
  component: OperatorsComponent
},
{
  path:'subject',
  component: SubjectComponent
},
{
  path:'observable',
  component: ObservableComponent
}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxJSRoutingModule { }
