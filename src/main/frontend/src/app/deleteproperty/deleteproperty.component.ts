import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import {Property} from './../entities/property';
import { AlertService } from './../services/alert.service';
import {PropertyService} from './../services/property/property.service';




@Component({
  selector: 'app-deleteproperty',
  templateUrl: './deleteproperty.component.html',
  styleUrls: ['./deleteproperty.component.css']
})
export class DeletepropertyComponent implements OnInit {
 
    @Input() id: number;
   @Input() name: string;

  constructor(private router: Router,public dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog(id: number,name:string) {
     console.log("name"+name);
    let config = new MdDialogConfig();
    let dialogRef:MdDialogRef<DeletePropertyPopupComponent> = this.dialog.open(DeletePropertyPopupComponent,{
     height: '200px',
     width: '1000px',
    
    });
    dialogRef.componentInstance.name = this.name;
     dialogRef.componentInstance.id = this.id;
    console.log(dialogRef.componentInstance.name);
   
  }





}

@Component({
  selector: 'app-deleteproperty-popup',
  templateUrl: './deleteproperty.popup.component.html',
  styles: ['./deleteproperty.popup.component.css']
})
export class DeletePropertyPopupComponent implements OnInit{
    returnUrl = '/propertieslist/deleteProperty';
   item : Property;
   dateFrom: any;
   dateTo :any;
   remarks : string;
   enableButton= false;
   name : string;
    firstname:string;
   lastname:string;
    id: number
   

  constructor(public dialogRef: MdDialogRef<DeletePropertyPopupComponent>,private propertyService:PropertyService,
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

      this.propertyService.deleteProperty(this.id).subscribe(
                data => {

                },
                error => {
                    this.alertService.error(error);
                });
    this.router.navigateByUrl('/employeelist/false',true);
    this.dialogRef.close();
    
    this.dialogRef.afterClosed().subscribe(result => {
       this.router.navigate([this.returnUrl],navigationExtras);
    });
   
  }


}
