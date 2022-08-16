import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: UserComponent},
  { path: '**', redirectTo: '' },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],

})
export class contactmanagerRoutingModule { }
