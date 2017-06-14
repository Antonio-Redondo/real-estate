import {Component,OnInit,Input } from '@angular/core';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import {Employee} from './../entities/employee';
import {Task} from './../entities/task';
import {Property} from './../entities/property';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';
import {PropertyService} from './../services/property/property.service';
import { AlertService } from './../services/alert.service';



@Component({
  selector: 'dialog-property',
  templateUrl: './dialogproperty.component.html',
   styles: ['./dialogproperty.component.css']
})
export class DialogPropertyComponent implements OnInit {
  @Input() item: Property;
   
 
  constructor(public dialog: MdDialog) {
  }

  

  openDialog(item: Employee) {
      console.log(this.item);

    
    let config = new MdDialogConfig();
    let dialogRef:MdDialogRef<DialogPropertyPopupComponent> = this.dialog.open(DialogPropertyPopupComponent,{
     height: '340px',
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
  selector: 'dialog-propertypopup',
  templateUrl: './dialogproperty.popup.component.html',
  styles: ['./dialogproperty.popup.component.css']
})
export class DialogPropertyPopupComponent implements OnInit{
   name: string;
   city: string;
   address: string;
   firstname:string;
   lastname:string;
   item: Property;
   enableButton= false;
   returnUrl = '/propertieslist/savedProperty';
   
   

  constructor(public dialogRef: MdDialogRef<DialogPropertyPopupComponent>,private router: Router, private routerAct: ActivatedRoute
  , private propertyService:PropertyService, private alertService:AlertService){
      this.routerAct.queryParams.subscribe(params => {
        console.log("firstname"+ params["firstname"]);
         console.log("lastname"+ params["lastname"]);
          this.firstname = params["firstname"];
          this.lastname = params["lastname"];
        });

  }
    ngOnInit() {
        console.log(this.item);
        this.name = this.item.name;
        this.city = this.item.city;
        this.address = this.item.address;
    
         
  }
  saveProperty(){

  let navigationExtras: NavigationExtras = {
                             queryParams: {
                             "firstname":  this.firstname,
                             "lastname":  this.lastname

                         }
                     };
    

    console.log("saveProperty");
    this.updateProperty();
    this.dialogRef.close();
    this.router.navigate([this.returnUrl],navigationExtras);
    this.refresh();
 

   
  }
 

 refresh(): void {
    window.location.reload();
  }
  checkFields(){

    if(this.name != null && this.name != '' && this.city !=null
    && this.city !='' && this.address != null && this.address !=''){
       console.log("inside");
      this.enableButton =true;
    }

  }
  updateProperty(){
      this.propertyService.updateProperty(this.item).subscribe(
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