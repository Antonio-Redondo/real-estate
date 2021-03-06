import {Component,OnInit,Input } from '@angular/core';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import {Employee} from './../entities/employee';
import {Task} from './../entities/task';
import {Property} from './../entities/property';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';
import {TaskService} from "./../services/task/task.service";
import { AlertService } from './../services/alert.service';




@Component({
  selector: 'dialog-task',
  templateUrl: './dialogtask.component.html',
   styles: ['./dialogtask.component.css']
})
export class DialogTaskComponent implements OnInit {
  @Input() item: Task;
   
 
  constructor(public dialog: MdDialog) {
  }

  

  openDialog(item: Employee) {
      console.log(this.item);

    
    let config = new MdDialogConfig();
    let dialogRef:MdDialogRef<DialogTaskPopupComponent> = this.dialog.open(DialogTaskPopupComponent,{
     height: '300px',
     width: '600px',
    
    });
  

    
  
    
    dialogRef.componentInstance.item = this.item;
   
    console.log(dialogRef.componentInstance.item);
  }

   ngOnInit() {
      console.log("init");
      
      
  }

  private parseDate(date: string) : Date {
       console.log(new Date(date));
     return new Date(date)
 }
}


@Component({
  selector: 'dialog-taskpopup',
  templateUrl: './dialogtask.popup.component.html',
  styles: ['./dialogtask.popup.component.css']
})
export class DialogTaskPopupComponent implements OnInit{
   name: string;
   remarks: string;
   item: Task;
   firstname: string;
   lastname: string;
   enableButton= false;
   returnUrl = '/dutieslist/editTask';
   
   

  constructor(public dialogRef: MdDialogRef<DialogTaskPopupComponent>,private router: Router
  ,private routerAct: ActivatedRoute, private taskService: TaskService, private alertService:AlertService){
    
      this.routerAct.queryParams.subscribe(params => {
       
            this.firstname = params["firstname"];
            this.lastname = params["lastname"];
        });
  }
    ngOnInit() {
        console.log(this.item);
        this.name = this.item.name;
        this.remarks = this.item.remarks;
      
    
         
  }
  saveTask(){
    console.log("saveTask");
       let navigationExtras: NavigationExtras = {
                             queryParams: {
                             "firstname": this.firstname,
                             "lastname": this.lastname
              
                         }
                     };
    this.updateTask();
    this.router.navigateByUrl('/employeelist/false',true);
    this.dialogRef.close();
    
    this.dialogRef.afterClosed().subscribe(result => {
       this.router.navigate([this.returnUrl],navigationExtras);
    });
   
  }
 

  checkFields(){

    if(this.name != null && this.name != '' && this.remarks !=null
    && this.remarks !=''){
       console.log("inside");
      this.enableButton =true;
    }

  }


   updateTask(){
      this.taskService.updateTask(this.item).subscribe(
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


  }



}