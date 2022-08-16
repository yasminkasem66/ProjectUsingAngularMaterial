import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/@AppService/models/user';
import { UserService } from 'src/app/@AppService/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: User | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let id = params['id'];
      this.user = undefined;
      if (!id) id = 1;
      // to implement the get user when reloading the page
      //to load the first user when entering to this module
      this.userService.users.subscribe((users) => {
        if (users.length == 0) return;
        setTimeout(() => {
          this.user = this.userService.userById(+id);
        }, 500);
      });
    });
  }
}
