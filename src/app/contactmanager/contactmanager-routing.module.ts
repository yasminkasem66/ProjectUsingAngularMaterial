import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', component: DdddComponent},
  { path: '**', redirectTo: '' },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],

})
export class contactmanagerRoutingModule { }
