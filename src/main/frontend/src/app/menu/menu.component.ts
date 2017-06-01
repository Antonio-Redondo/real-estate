import { Component, OnInit, Input } from '@angular/core';
import {User} from './../entities/user';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';

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
  constructor(private router: ActivatedRoute,private routerNavigate: Router) { 
      
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

}
