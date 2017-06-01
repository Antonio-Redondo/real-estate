import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Employee} from './../entities/employee';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';


let max = 10;

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PHONE_REGEX = '\\d+';
const AGE_REGEX = '\\d+';

@Component({
  selector: 'app-addnewemployeepage',
  templateUrl: './addnewemployeepage.component.html',
  styleUrls: ['./addnewemployeepage.component.css']
})
export class AddnewemployeepageComponent implements OnInit {
   userFirstname:string;
   userLastname:string;
 constructor(private router: Router,private routerAct: ActivatedRoute){
  this.routerAct.queryParams.subscribe(params => {
       
            this.userFirstname = params["firstname"];
            this.userLastname = params["lastname"];
        });
 }
 

 ngOnInit() {
  
 }

  employee = new Employee;
  requiredField: boolean;
  hideRequiredMarker: boolean;
  disabled = true;
  cancelUrl : string="/employeelist/false";
  firstName : string;
  lastName: string;
  email:string;
  telephone:number;
  age:number;
  address:string;
  remarks:string;
  employeeCreated : boolean;
  formControl = new FormControl('', Validators.required);
  emailFormControl = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]);
  telephoneFormControl = new FormControl('', [Validators.required, Validators.pattern(PHONE_REGEX)]);
  ageFormControl = new FormControl('', [Validators.required,Validators.pattern(AGE_REGEX)]);
  model = '';
  returnUrl = '/employeelist/true';

  checkFiledsRequired(){
    if(this.firstName !=null && this.firstName != '' && this.lastName !=null && this.lastName != ''
          && this.email !=null && this.email != '' && this.telephone !=null && this.age !=null
           && this.emailFormControl.status != "INVALID" && this.telephoneFormControl.status != "INVALID"
          && this.ageFormControl.status != "INVALID"){
         this.disabled =false;
     
    }else{
        this.disabled =true;
    }
  }
  saveEmployee(){
       let navigationExtras: NavigationExtras = {
                             queryParams: {
                             "firstname":  this.userFirstname,
                             "lastname":  this.userLastname
              
                         }
                     };

    this.employee.name = this.firstName + " " + this.lastName ;
    this.employee.email = this.email;
    this.employee.age = this.age;
    this.employee.telephone = this.telephone;
    this.employee.address = this.address;
    this.employee.remarks = this.remarks;
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
