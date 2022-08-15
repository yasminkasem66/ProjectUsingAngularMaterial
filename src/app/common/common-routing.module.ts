import { SidenavComponent } from './sidenav/sidenav.component';
import { CommonindexComponent } from './commonindex.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
  {
    path: '', component: CommonindexComponent,
    children: [
      { path: '', component: MainContentComponent},
      { path: ':id', component: MainContentComponent},
      {
        path: '', 
        loadChildren: () => import('../contactmanager/contactmanager.module').then(m => m.ContactmangerModule)
      },
    ]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonLayoutRoutingModule { }
