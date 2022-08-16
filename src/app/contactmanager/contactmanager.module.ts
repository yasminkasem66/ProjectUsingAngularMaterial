import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { contactmanagerRoutingModule } from './contactmanager-routing.module';
import { UserComponent } from './user/user.component';
import { NotesComponent } from './notes/notes.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent, NotesComponent],
  imports: [
    CommonModule,
    contactmanagerRoutingModule,
    MaterialModule,
    FormsModule,
  ],
})
export class ContactmangerModule {}
