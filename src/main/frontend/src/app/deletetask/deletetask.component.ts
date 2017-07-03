import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import { AlertService } from './../services/alert.service';
import { TaskService } from './../services/task/task.service';
import {Task} from './../entities/task';

@Component({
  selector: 'app-deletetask',
  templateUrl: './deletetask.component.html',
  styleUrls: ['./deletetask.component.css']
})
export class DeletetaskComponent implements OnInit {

  returnUrl = '/dutieslist/deleteTask';
      @Input() id: number;
   @Input() name: string;

  constructor(private router: Router,public dialog: MdDialog) { }

  ngOnInit() {
  }

   openDialog(id: number,name:string) {
     console.log("name"+name);
    let config = new MdDialogConfig();
    let dialogRef:MdDialogRef<DeleteTaskPopupComponent> = this.dialog.open(DeleteTaskPopupComponent,{
     height: '200px',
     width: '1000px',
    
    });
    dialogRef.componentInstance.name = this.name;
     dialogRef.componentInstance.id = this.id;
    console.log(dialogRef.componentInstance.name);
    


   
  }

}


@Component({
  selector: 'app-deletetask-popup',
  templateUrl: './deletetask.popup.component.html',
  styles: ['./deletetask.popup.component.css']
})
export class DeleteTaskPopupComponent implements OnInit{
   returnUrl = '/dutieslist/deleteTask';
   item : Task;
   dateFrom: any;
   dateTo :any;
   remarks : string;
   enableButton= false;
   name : string;
   firstname:string;
   lastname:string;
   id: number;
   

  constructor(public dialogRef: MdDialogRef<DeleteTaskPopupComponent>,private taskService:TaskService,
                                                          private router: Router,private routerAct: ActivatedRoute, private alertService:AlertService){
        this.routerAct.queryParams.subscribe(params => {
          this.firstname = params["firstname"];
          this.lastname = params["lastname"];
        });
  }
    ngOnInit() {
       let navigationExtras: NavigationExtras = {
                             queryParams: {
                             "firstname": this.firstname,
                             "lastname": this.lastname
                        }
                     };
     this.remarks ="";
  }

  
  remove(){
    

      this.taskService.deleteTask(this.id).subscribe(
                data => {

                },
                error => {
                    this.alertService.error(error);
                });
      this.router.navigateByUrl('/employeelist/false',true);
      
      this.dialogRef.close();

    let navigationExtras: NavigationExtras = {
                             queryParams: {
                             "firstname": this.firstname,
                             "lastname": this.lastname
                        }
                     };
    this.dialogRef.afterClosed().subscribe(result => {
       this.router.navigate([this.returnUrl],navigationExtras);
    });
  

         
  }


}