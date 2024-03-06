import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<any>;
    public user: Observable<any>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject(null);
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }


    login(username: string, password: string) {
        return this.http.post(`${environment.apiUrl}/api/v1/auth/login`, { login:username, password:password })
            .pipe(map((user:any) => {
                localStorage.setItem('token' , user?.result?.accessToken)
                localStorage.setItem('refresh-token',user?.result?.refreshToken)
                this.userSubject.next(user);
                return user;
            }));
    }

    CreateAdminAccount(adminData:any) {
      return this.http.post(`${environment.apiUrl}/admins/register`, adminData)
  }

  resetPassword(passwordData:any) {
    return this.http.put(`${environment.apiUrl}/admins/reset-password`, passwordData)
}
    isLoggedIn(){
      if(localStorage.getItem('token')){
        return true
      }
      return false
    }

    getToken(){
      return localStorage.getItem('token')
    }

    logout() {
      if(localStorage.getItem('refresh-token')){
        let refreshToken = localStorage.getItem('refresh-token')
        this.http.post(`${environment.apiUrl}/api/v1/auth/logout`,{refreshToken:refreshToken}).subscribe({
          next:(res:any)=>{
            localStorage.removeItem('refresh-token');
            localStorage.removeItem('token');
            localStorage.removeItem('pwdChanged');
            this.userSubject.next(null);
            this.router.navigate(['/account/login']);
          },error:(err:any)=>{
            console.log(err);

          }
        })
      }

    }

    getAllAdmins(){
      return this.http.get(`${environment.apiUrl}/admins/all`)
    }

    getAdminRoles(adminId){
      return this.http.post(`${environment.apiUrl}/roles/by-admin-id/`+adminId,'')
    }

}
