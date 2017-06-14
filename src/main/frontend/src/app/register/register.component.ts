import { Component, OnInit } from '@angular/core';
import {User} from './../entities/user';
import { AlertService } from './../services/alert.service';
import { AuthenticationService } from './../services/authentication.service';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    model: User;
    loading = false;
    returnUrl: string = "/login";
    showUserIstaken :boolean = false;
    
  constructor( private route: ActivatedRoute,
        private router: Router,
        private authenticationService : AuthenticationService,
        private alertService : AlertService) { }

  ngOnInit() {
     this.model = new User();
  }

  register() {
        this.loading = true;
        this.authenticationService.register(this.model)
            .subscribe(
                data => {
                   let navigationExtras: NavigationExtras = {
                             queryParams: {
                             "fromRegister": "yes"
                        }
                     };
                    this.router.navigate([this.returnUrl],navigationExtras);
                },
                error => {
                    this.showUserIstaken=true;
                    console.log("Error");
                    this.alertService.error(error);
                    this.loading = false;
                });
       
       
    }

}
