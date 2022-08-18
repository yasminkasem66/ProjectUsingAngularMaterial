import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewContactDailogComponent } from 'src/app/contactmanager/new-contact-dailog/new-contact-dailog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSideNav=new EventEmitter();
  constructor( private dialog:MatDialog) {}

  ngOnInit(): void {}
  openAddContactDailog(){
    let dailogRef=  this.dialog.open(NewContactDailogComponent , {
        width:'450px',
        height:'500px',
      });

      dailogRef.afterClosed().subscribe((result)=>{
        console.log({result});
        
      })
  }
}
