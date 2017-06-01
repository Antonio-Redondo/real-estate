import { Component, OnInit, Input } from '@angular/core';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import {Employee} from './../entities/employee';
import {DialogPopupComponent} from './../dialog/dialog.component';

@Component({
  selector: 'app-dialoginformation',
  templateUrl: './dialoginformation.component.html',
  styleUrls: ['./dialoginformation.component.css']
})
export class DialoginformationComponent implements OnInit {

  @Input() item: Employee;
  @Input() disabled: boolean;

  constructor(public dialog: MdDialog) {
    
  }

  

  openDialog(item: Employee) {
    let config = new MdDialogConfig();
    let dialogRef:MdDialogRef<DialogInformationPopupComponent> = this.dialog.open(DialogInformationPopupComponent,{
     height: '600px',
     width: '600px',
    
    });
    dialogRef.componentInstance.item = this.item;
    console.log(dialogRef.componentInstance.item );
   
  }

   ngOnInit() {
     console.log("ngOnInit" +this.disabled);
  }
}


@Component({
  selector: 'dialoginformation-popup',
  templateUrl: './dialoginformation.popup.component.html',
  styles: ['./dialoginformation.popup.component.css']
})
export class DialogInformationPopupComponent implements OnInit{
   item : Employee;
   dateFrom: any;
   dateTo :any;
   remarks : string;
   enableButton= false;
   

  constructor(public dialogRef: MdDialogRef<DialogInformationPopupComponent>){
 
  }
    ngOnInit() {
     this.remarks ="";
    // this.item = this.dialogComponent.item;
  }

}
