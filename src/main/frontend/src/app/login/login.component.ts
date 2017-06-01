import { AlertService } from './../services/alert.service';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';
import {User} from './../entities/user';
import 'rxjs/add/operator/catch';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
     styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    model:  User;
    loading = false;
    firstname : string;
    lastname : string;
    showInvalidUser: boolean= false;
    returnUrl: string;
    logged : boolean =false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService : AuthenticationService,
        private alertService : AlertService

        ) { }

    ngOnInit() {
        this.model = new User();
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = '/employeelist/false';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model)
            .subscribe(
                data => {
                 
                    this.firstname = data.firstname;
                    this.lastname = data.lastname;
                
                     let navigationExtras: NavigationExtras = {
                             queryParams: {
                             "firstname": this.firstname,
                             "lastname": this.lastname
                        }
                     };
                    this.router.navigate([this.returnUrl],navigationExtras);
                },
                error => {
                    this.showInvalidUser=true;
                    this.alertService.error(error);
                    this.loading = false;
                });
       
       
    }
   
     
}
