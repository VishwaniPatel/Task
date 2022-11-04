import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user.component';

const routes: Routes = [{ path: '', component: UserComponent,
children: [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'add'
},
{
  path: 'add',
  component: UserFormComponent
},
{
  path: 'edit/:id',
  component: UserFormComponent
}]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
