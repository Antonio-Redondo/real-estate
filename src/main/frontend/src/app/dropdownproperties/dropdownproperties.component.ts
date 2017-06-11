import {Component,OnInit,Output,Input,EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MdSelectChange} from '@angular/material';
import {PropertyService} from './../services/property/property.service';
import {Property} from './../entities/property';
import {CommonService} from './../services/common/common.service';

@Component({
    moduleId: module.id,
    selector: 'select-dropdown',
  templateUrl: './dropdownproperties.component.html',
  styleUrls: ['./dropdownproperties.component.css']
})
export class DropdownpropertiesComponent implements OnInit {
  @Input() idProperty :number;
  public data;
  public currentProperty:number;

  constructor(private propertyService : PropertyService,private commonService:CommonService) { 
 
  }

 ngOnInit(): void {
   this.propertyService.fetchAllProperties()
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data;
                }, 1000);
            });
       this.currentProperty = this.idProperty;
    
 }

    selectedValue():void{
     console.log("this.properlySelected"+this.currentProperty);
     this.commonService.notifyOther({idPropertySelected: this.currentProperty});

   }
 
}