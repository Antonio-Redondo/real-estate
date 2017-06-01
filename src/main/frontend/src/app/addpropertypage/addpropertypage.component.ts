import { Component, OnInit } from '@angular/core';
import {Property} from './../entities/property';
import {FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-addpropertypage',
  templateUrl: './addpropertypage.component.html',
  styleUrls: ['./addpropertypage.component.css']
})
export class AddpropertypageComponent implements OnInit {
  userFirstname:string;
   userLastname:string;

  constructor(private router: Router,private routerAct: ActivatedRoute) { 
      this.routerAct.queryParams.subscribe(params => {
       
            this.userFirstname = params["firstname"];
            this.userLastname = params["lastname"];
        });

  }

  ngOnInit() {
  }

 

  property = new Property;
  requiredField: boolean;
  hideRequiredMarker: boolean;
  disabled = true;
  cancelUrl:string="/propertieslist/false";
  firstName : string;
  lastName: string;
  email:string;
  telephone:number;
  age:number;
  address:string;
  remarks:string;
  employeeCreated : boolean;
  formControl = new FormControl('', Validators.required);
  model = '';
  returnUrl = '/propertieslist/true';

  checkFiledsRequired(){
    if(this.property.name !=null && this.property.name != '' && this.property.address !=null && this.property.address != ''
          && this.property.city !=null && this.property.city != ''){
         this.disabled =false;
     
    }else{
        this.disabled =true;
    }
  }
  saveProperty(){
    let navigationExtras: NavigationExtras = {
                             queryParams: {
                             "firstname":  this.userFirstname,
                             "lastname":  this.userLastname
              
                         }
                     };

     this.router.navigate([this.returnUrl],navigationExtras);
   
  }

   cancelNavigation(){
     let navigationExtras: NavigationExtras = {
                             queryParams: {
                             "firstname":  this.userFirstname,
                             "lastname":  this.userLastname
              
                         }
                     };
                     
      this.router.navigate([this.cancelUrl],navigationExtras);
  }

 

}
