import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';



@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss']
 })
export class LoginComponent implements OnInit {
    form!: FormGroup;
    loading = false;
    submitted = false;
    error:any
    showReset:boolean=false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService
    ) {
        // redirect to home if already logged in
        if (this.accountService.userValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            login: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alert on submit
        this.error = '';

        this.loading = true;

        this.accountService.login(this.f['login'].value, this.f['password'].value)
            .pipe(first())
            .subscribe({
                next: (res:any) => {
                  if(res?.result?.user?.admin?.shouldRedirectToResetPasswordPage){
                    // this.router.navigateByUrl('/account/change-password');
                    // this.accountService.logout(false)
                    localStorage.setItem("pwdChanged",'false')
                    this.showReset=true
                  }else{
                       // get return url from query parameters or default to home page
                    localStorage.setItem("pwdChanged",'true')
                    const returnUrl = '/';
                    this.router.navigateByUrl(returnUrl);
                  }
                },
                error: (error: any) => {
                    this.error = error?.error?.message || error?.message;
                    this.loading = false;
                }
            });
    }


}
