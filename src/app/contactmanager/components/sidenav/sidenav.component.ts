import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/@AppService/models/user';
import { UserService } from 'src/app/@AppService/services/user.service';

const Small_Width_Breakpoint = 720;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  public isScreenSmall!: boolean;
  users!: Observable<User[]>;

  constructor(
    private breakPontObserver: BreakpointObserver,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // .observe([Breakpoints.XSmall])
    this.breakPontObserver
      .observe(`(max-width:${Small_Width_Breakpoint}px)`)
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });
    this.users = this.userService.users;
    this.userService.loadAll();

    this.users.subscribe((d) => {
      console.log({d});
      
    });
    // this.router.events.subscribe(() => {
    //   if (this.isScreenSmall) {
    //     this.sidenav.close();
    //   }
    // });
  }
}
