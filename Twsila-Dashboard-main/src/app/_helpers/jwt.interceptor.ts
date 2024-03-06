import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { AccountService } from '@app/_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const isLoggedIn = this.accountService.isLoggedIn()
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${this.accountService.getToken()}`,
                  'User-Type':'ADMIN',
                  'Accept-Language' : 'en'
                }
            });
        return next.handle(request);

        }else{
           const authReq = request.clone({
            headers:  request.headers.set('User-Type', 'ADMIN').set('Accept-Language' , 'en')
        });
        return next.handle(authReq);

        }

    }
}
