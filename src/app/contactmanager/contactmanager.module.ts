import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { contactmanagerRoutingModule } from './contactmanager-routing.module';
import { UserComponent } from './user/user.component';
import { NotesComponent } from './notes/notes.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { NewContactDailogComponent } from './new-contact-dailog/new-contact-dailog.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [UserComponent, NotesComponent, NewContactDailogComponent],
  imports: [
    CommonModule,
    contactmanagerRoutingModule,
    MaterialModule,
    FormsModule,
    DragDropModule,
    
  ],
})
export class ContactmangerModule {}
