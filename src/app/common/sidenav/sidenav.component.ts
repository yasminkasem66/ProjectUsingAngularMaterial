import { Direction } from '@angular/cdk/bidi';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
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
  isScreenSmall!: boolean;
  users!: Observable<User[]>;
  isDarkTheme: boolean = false;
  dir: Direction = 'ltr';
  @ViewChild('drawer') sidenav!: MatSidenav;

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

    this.router.events.subscribe(() => {
      if (this.isScreenSmall) {
        this.sidenav.close();
      }
    });
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDir() {
    this.dir = this.dir == 'ltr' ? 'rtl' : 'ltr';
  }
}
