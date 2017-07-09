import {Component,OnInit,Input } from '@angular/core';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import {Employee} from './../entities/employee';
import {Task} from './../entities/task';
import {Property} from './../entities/property';
import {DropdownpropertiesComponent} from './../dropdownproperties/dropdownproperties.component';
import { Router, ActivatedRoute,NavigationExtras} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {CommonService} from './../services/common/common.service';
import {EmployeeService} from './../services/employee/employee.service';
import { AlertService } from './../services/alert.service';








@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
   styles: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() item: Employee;
  public firstname: string;
  public lastname: string;
  public dateFrom: string;
  public dateTo: string;


  constructor(public dialog: MdDialog,private routerAct: ActivatedRoute) {

  }



  openDialog(item: Employee) {
      console.log(this.item);



        if (this.item.taskDTO.dateFrom != undefined){

             console.log("this.dateFrom" + this.item.taskDTO.dateFrom);
        }
        if (this.item.taskDTO.dateTo != undefined){
              console.log(" this.dateTo" + this.item.taskDTO.dateTo);
        }

      if(this.item.taskDTO ==null){
            console.log("yes");
            var task: Task[] = [];
            task.push(new Task(null, "",new Date, new Date, ""));


      }
    let config = new MdDialogConfig();
    let dialogRef:MdDialogRef<DialogPopupComponent> = this.dialog.open(DialogPopupComponent,{
     height: '650px',
     width: '600px',


    });



    dialogRef.componentInstance.item = this.item;
    console.log(dialogRef.componentInstance.item);
  }

   ngOnInit() {
      console.log("init");
      if(this.item.propertyDTO == null){
        this.item.propertyDTO = new Property;
      }
      if(this.item.taskDTO == null){
        this.item.taskDTO = new Task(null, "", new Date, new Date, "");
      }

    }


  }





@Component({
  selector: 'dialog-popup',
  templateUrl: './dialog.popup.component.html',
  styles: ['./dialog.popup.component.css'],



})
export class DialogPopupComponent implements OnInit{
   employee : Employee;
   task : Task;
   name: String;
   dateFrom: Date;
   dateTo: Date;
   minimumDate :string[];
   minimum : Date;
   remarks : string;
   enableButton= false;
   firstname:string;
   lastname:string;
   item: Employee;
   employeeToSave:Employee;
   year :number;
   month:number;
   day:number;
   idTask:number;
   idProperty:number;
   public datalistProperty;
   public datalistTask;
     private subscription: Subscription;

   returnUrl = '/employeelist/savedTask';




  constructor(public dialogRef: MdDialogRef<DialogPopupComponent>,private router: Router,private routerAct: ActivatedRoute,private commonService: CommonService
  , private employeeService : EmployeeService, private alertService : AlertService){
       this.remarks ="";
      this.routerAct.queryParams.subscribe(params => {
        console.log("firstname"+ params["firstname"]);
         console.log("lastname"+ params["lastname"]);
          this.firstname = params["firstname"];
          this.lastname = params["lastname"];
        });

  }
    ngOnInit() {
      this.subscription = this.commonService.notifyObservable$.subscribe((res) => {
        if(res.idPropertySelected !=null){
          this.idProperty = res.idPropertySelected;
             console.log(this.idProperty);
        }

         if(res.idTaskSelected !=null){
          this.idTask = res.idTaskSelected;
             console.log(this.idTask);
        }



    });




  }
  saveTask(){

      let navigationExtras: NavigationExtras = {
                             queryParams: {
                             "firstname":  this.firstname,
                             "lastname":  this.lastname

                         }
                     };
    console.log("save task");
    this.buildEmployee();
    this.dialogRef.close();
    this.router.navigateByUrl('/propertieslist/false',true);
    this.dialogRef.close();
    
    this.dialogRef.afterClosed().subscribe(result => {
       this.router.navigate([this.returnUrl],navigationExtras);
    });



  }

 

  checkFields(){
    if(this.item.taskDTO.dateFrom != null &&  this.item.taskDTO.dateTo != null 
     &&  this.item.taskDTO.remarks != null){
      this.enableButton = true;

    }
  }

  minDate(){
        /* this.minimumDate = this.item.taskDTO.dateFrom.toString().split('-');
          this.year =+this.minimumDate[0];
          this.month =+this.minimumDate[1];
          this.day=+this.minimumDate[2];

            console.log(this.year);
            console.log(this.month);
            console.log(this.day);

          this.minimum = new Date(this.year,this.month,this.day);

          return this.minimum;*/
  }

  buildEmployee(){
    if(this.idTask == undefined ){
        this.item.taskId =  this.item.taskDTO.id;

    }else{
         this.item.taskId =  this.idTask;
    }

     if(this.idProperty == undefined){
         this.item.propertyId = this.item.propertyDTO.id;

     }else{
          this.item.propertyId = this.idProperty;
     }

    this.employeeService.updateEmployee(this.item).subscribe(
                data => {

                     let navigationExtras: NavigationExtras = {
                             queryParams: {
                             "firstname": this.firstname,
                             "lastname": this.lastname
                        }
                     };
                  this.router.navigate([this.returnUrl],navigationExtras);
                },
                error => {
                    this.alertService.error(error);
                });


    };
  }

