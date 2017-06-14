import { Component, OnInit } from '@angular/core';
import {Task} from './../entities/task';
import {FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';
import {TaskService} from './../services/task/task.service';
import { AlertService } from './../services/alert.service';

@Component({
  selector: 'app-addnewtaskpage',
  templateUrl: './addnewtaskpage.component.html',
  styleUrls: ['./addnewtaskpage.component.css']
})
export class AddnewtaskpageComponent implements OnInit {
   userFirstname:string;
   userLastname:string;

constructor(private router: Router,private routerAct: ActivatedRoute, private taskService: TaskService, private alertService:AlertService) { 

   this.routerAct.queryParams.subscribe(params => {
       
            this.userFirstname = params["firstname"];
            this.userLastname = params["lastname"];
        });
        
}

  ngOnInit() {
  }

 

  task = new Task(null, null, null, null, null);
  requiredField: boolean;
  hideRequiredMarker: boolean;
  disabled = true;
  cancelUrl: string = "/dutieslist/false";
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
  returnUrl = '/dutieslist/true';

  checkFiledsRequired(){
    if(this.task.name !=null && this.task.name != '' && this.task.remarks !=null && this.task.remarks != ''){
         this.disabled =false;
     
    }else{
        this.disabled =true;
    }
  }
  saveTask(){
    console.log(this.task);
     let navigationExtras: NavigationExtras = {
                             queryParams: {
                             "firstname":  this.userFirstname,
                             "lastname":  this.userLastname
              
                         }
                     };

     this.router.navigate([this.returnUrl],navigationExtras);

       this.taskService.saveTask(this.task).subscribe(
                data => {

                     let navigationExtras: NavigationExtras = {
                             queryParams: {
                             "firstname": this.userFirstname,
                             "lastname": this.userLastname
                        }
                     };
                  this.router.navigate([this.returnUrl],navigationExtras);
                },
                error => {
                    this.alertService.error(error);
                });

    
   
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
