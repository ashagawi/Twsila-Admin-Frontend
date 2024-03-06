import { Component, OnInit } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  MenuItem: MenuItem[] = [];

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.MenuItem = [
      {
        items: [
          {
            label: 'Create Account', "routerLink": ['/create-account']
          },
          {
            label: 'logout', command: () => this.logout()
          }
        ]
      }]
  }

  logout() {
    this.accountService.logout();
  }
}
