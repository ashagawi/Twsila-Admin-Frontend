import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {


  user: boolean = false;
  MenuItem: MenuItem[] = [];
  constructor(private accountService: AccountService,
    private primengConfig: PrimeNGConfig) {
  }
  ngOnInit() {
    this.primengConfig.ripple = true;

    this.MenuItem = [
      {

        items: [
          // {
          //   label: 'Reset', "routerLink": ['register']
          // },
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
