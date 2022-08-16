import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/@AppService/models/user';
import { UserService } from 'src/app/@AppService/services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  user: User | undefined;
  constructor() {}

  ngOnInit(): void {}
}
