import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contactmanager', 
    loadChildren: () => import('./contactmanager/contactmanager.module').then(m => m.ContactmanagerModule)
  },
  {
    path: 'x', 
    loadChildren: () => import('./x/x.module').then(m => m.XModule)
  },
  {
    path: 'demo', 
    loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  },
  {
    path:'**',
    redirectTo:'contactmanager'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
