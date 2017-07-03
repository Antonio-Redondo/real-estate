import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';
import {EmployeeService} from './../services/employee/employee.service';
import { AlertService } from './../services/alert.service';
import {Employee} from './../entities/employee';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.css']
})
export class DeleteemployeeComponent implements OnInit {
 
   item: Employee;
  
   @Input() id: number;
   @Input() name: string;

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }


   openDialog(id: number,name:string) {
     console.log("name"+name);
    this.name = name;
    let config = new MdDialogConfig();
    let dialogRef:MdDialogRef<DeleteEmployeePopupComponent> = this.dialog.open(DeleteEmployeePopupComponent,{
     height: '200px',
     width: '880px',
    
    });
    dialogRef.componentInstance.name = this.name;
     dialogRef.componentInstance.id = this.id;
    console.log(dialogRef.componentInstance.name);
   
  }


}

@Component({
  selector: 'app-deleteemployee-popup',
  templateUrl: './deleteemployee.popup.component.html',
  styles: ['./deleteemployee.popup.component.css']
})
export class DeleteEmployeePopupComponent implements OnInit{
   returnUrl = '/employeelist/deleteEmployee';
   item : Employee;
   dateFrom: any;
   dateTo :any;
   remarks : string;
   enableButton= false;
   name : string;
   firstname:string;
   lastname:string;
   id: number
   

  constructor(public dialogRef: MdDialogRef<DeleteEmployeePopupComponent>,private employeeService:EmployeeService,
                                                          private router: Router,private routerAct: ActivatedRoute, private alertService:AlertService){
          this.routerAct.queryParams.subscribe(params => {
          this.firstname = params["firstname"];
          this.lastname = params["lastname"];
        });
 
  }
    ngOnInit() {
     this.remarks ="";
  }

  
  remove(){
    console.log("removeid"+this.id);
    console.log("remove");
     let navigationExtras: NavigationExtras = {
                             queryParams: {
                             "firstname": this.firstname,
                             "lastname": this.lastname
                        }
                     };
             this.employeeService.deleteEmployee(this.id).subscribe(
                data => {
               
               },
                error => {
                    this.alertService.error(error);
                });
     this.router.navigateByUrl('/propertieslist/false',true);
    this.dialogRef.close();
    
    this.dialogRef.afterClosed().subscribe(result => {
       this.router.navigate([this.returnUrl],navigationExtras);
    });
  }


}
