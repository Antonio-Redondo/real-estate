import { Component, OnInit, Input } from '@angular/core';
import {User} from './../entities/user';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { AlertService } from './../services/alert.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 @Input() firstname: string;
 @Input() lastname: string;
 
 navToTask:string= "/dutieslist/false";
 navToEmployee:string= "/employeelist/false";
 navToProperty:string= "/propertieslist/false";
 navToLogin:string= "/login";
  constructor(private router: ActivatedRoute,private routerNavigate: Router
  , private authenticationService : AuthenticationService, private alertService : AlertService) { 
      
  }

  ngOnInit() {
   
  }

  navigateToTask(){
                  let navigationExtras: NavigationExtras = {
                             queryParams: {
                             "firstname": this.firstname,
                             "lastname": this.lastname
              
                         }
                     };
                 
       console.log("navigateToTask");
       this.routerNavigate.navigate([this.navToTask],navigationExtras);

  }
  navigateToEmployee(){
                  let navigationExtras: NavigationExtras = {
                             queryParams: {
                             "firstname": this.firstname,
                             "lastname": this.lastname
              
                         }
                     };
                 
       console.log("navigateToTask");
       this.routerNavigate.navigate([this.navToEmployee],navigationExtras);

  }

  navigateToProperty(){
                  let navigationExtras: NavigationExtras = {
                             queryParams: {
                             "firstname": this.firstname,
                             "lastname": this.lastname
              
                         }
                     };
                 
       console.log("navigateToTask");
       this.routerNavigate.navigate([this.navToProperty],navigationExtras);

  }

  logout(){
      console.log("logout");
    this.authenticationService.logout(this.firstname, this.lastname)
            .subscribe(
                data => {
                 
                    this.routerNavigate.navigate([this.navToLogin]);
                },
                error => {
                    this.alertService.error(error);
                 
                });
  }

}
