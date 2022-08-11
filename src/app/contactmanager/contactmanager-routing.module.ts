import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ContactmanagerindexComponent } from './contactmanagerindex.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';

const routes: Routes = [
  {
    path: '', component: ContactmanagerindexComponent,
    children: [
     { path: '', component: MainContentComponent},
    ]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactmanagerRoutingModule { }
