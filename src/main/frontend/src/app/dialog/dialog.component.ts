import {Component,OnInit,Input } from '@angular/core';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import {Employee} from './../entities/employee';
import {Task} from './../entities/task';
import {Property} from './../entities/property';
import { Router, ActivatedRoute,NavigationExtras} from '@angular/router';





@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
   styles: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() item: Employee;
  public firstname: string;
  public lastname: string;
 
  constructor(public dialog: MdDialog,private routerAct: ActivatedRoute) {
      
  }

 

  openDialog(item: Employee) {
      console.log(this.item);

      if(this.item.task[0] ==null){
            console.log("yes");
            var task: Task[] = []; 
            task.push(new Task(null, "", "", "", ""));
         
            this.item.task[0] = task;
      }
    let config = new MdDialogConfig();
    let dialogRef:MdDialogRef<DialogPopupComponent> = this.dialog.open(DialogPopupComponent,{
     height: '600px',
     width: '600px',
     
    
    });
    if(this.item.task.dateFrom != null && this.item.task.dateTo !=null){
       this.parseDate(this.item.task.dateFrom);
    }

    
  
    
    dialogRef.componentInstance.item = this.item;
    console.log(dialogRef.componentInstance.item);
  }

   ngOnInit() {
      console.log("init");
      if(this.item.property == null){
        this.item.property = new Property;
      }
      if(this.item.task == null){
        this.item.task = new Task(null, "", "", "", "");
      }
     
  }

  private parseDate(date: string) : Date {
       console.log(new Date(date));
     return new Date(date)
 }
}


@Component({
  selector: 'dialog-popup',
  templateUrl: './dialog.popup.component.html',
  styles: ['./dialog.popup.component.css'],
  
})
export class DialogPopupComponent implements OnInit{
   name: String;
   dateFrom: Date;
   dateTo: Date;
   remarks : string;
   enableButton= false;
   firstname:string;
   lastname:string;
   item: Employee;
  
   returnUrl = '/employeelist/savedTask';

   
   

  constructor(public dialogRef: MdDialogRef<DialogPopupComponent>,private router: Router,private routerAct: ActivatedRoute){
       this.remarks ="";
      this.routerAct.queryParams.subscribe(params => {
        console.log("firstname"+ params["firstname"]);
         console.log("lastname"+ params["lastname"]);
          this.firstname = params["firstname"];
          this.lastname = params["lastname"];
        });

  }
    ngOnInit() {
  }
  saveTask(){
    
      let navigationExtras: NavigationExtras = {
                             queryParams: {
                             "firstname":  this.firstname,
                             "lastname":  this.lastname
              
                         }
                     };
    console.log("save task");
    this.dialogRef.close();
    this.router.navigate([this.returnUrl],navigationExtras);
   this.refresh();


   
  }

  refresh(): void {
   window.location.reload();
  }


  checkFields(){
   console.log(this.item.task[0].remarks);
    if(this.item.task.dateFrom != null &&  this.item.task.dateTo != null  &&  this.item.task[0].remarks != null){
      this.enableButton = true;
      
    }
  }



}