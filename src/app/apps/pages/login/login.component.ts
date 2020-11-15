import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
//import {HttpClient} from '@angular/common/http';
import {ApiHcmUrl} from '../../core/config/api-hcm-url';
import {HttpService} from '../../core/services/http/http.service';
import {MUser} from './m-user';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {UiAlert} from '../../ui-comp/ui-alert';
import {Md5} from 'ts-md5';
import {UiAlertService} from '../../core/services/ui/ui-alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    url: any = ApiHcmUrl.url;
    user: MUser;
    //alert: UiAlert;
    ngOnInit(): void {
    }

    constructor(private router: Router,
                private route: ActivatedRoute,
                private httpCall: HttpService,
                private http: HttpClient,
                public alert:UiAlertService) {

        // noinspection JSAnnotator
        this.user = new MUser("","")

        //this.alert = new UiAlert();
    }

    // On submit button click
    onSubmit() {

        let params = new HttpParams();
        //let headers = new HttpHeaders();
        let md5 = new Md5();

        let options = {
            params: params.set('username', this.user.username).
                    set('password',  String(md5.appendStr(this.user.password).end()))
            ///headers: headers.set('Authorization',localStorage.getItem('token'))
        };

        this.alert.alert_loading();
        this.http.get(this.url+'/apps/login', options).subscribe(data=> {

            localStorage.setItem('token',data["token"]);
            localStorage.setItem('datetimeInteract',new Date().toString());
            this.router.navigateByUrl('/');

        },error => {

            this.alert.close_all_loading_and_message();

            this.alert.alert_failed("Username & Password Salah!");
            console.log(error);
        });

        //console.log("ssd");
        let token ="sdfsdf";
        let dateTime = new Date();
        //localStorage.setItem('rappstoken',token);
        //localStorage.setItem('rappstime',dateTime);
        // this.loginForm.reset();
    }
    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    }
    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }



}
