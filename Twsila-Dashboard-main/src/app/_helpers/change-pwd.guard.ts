import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AccountService } from '@app/_services';

@Injectable({
  providedIn: 'root'
})

export class ChangePwdGuard implements CanActivate {
  constructor(
    private router: Router,
    private accountService: AccountService
) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isChangedPwd =localStorage.getItem('pwdChanged')
    if(isChangedPwd == 'true'){
      return true
    }
  
      this.accountService.logout();
  
    this.router.navigate(['/account/login']);
    return false;
  }

}
