import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/@AppService/models/user';
import { UserService } from 'src/app/@AppService/services/user.service';

@Component({
  selector: 'app-new-contact-dailog',
  templateUrl: './new-contact-dailog.component.html',
  styleUrls: ['./new-contact-dailog.component.scss'],
})
export class NewContactDailogComponent implements OnInit {
  avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];
  user: User = {} as User;
  name = new FormControl('', [Validators.required]);

  constructor(
    private dialogRef: MatDialogRef<NewContactDailogComponent>,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  onSave() {
    this.user.name = this.name.value;
    this.userService.addUser(this.user).then((user) => {
      this.dialogRef.close(user);
    });
  }

  dismiss() {
    this.dialogRef.close(null);
  }

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name' : '';
  }
}
