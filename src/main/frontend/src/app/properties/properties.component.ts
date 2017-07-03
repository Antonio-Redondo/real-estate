import { Component, OnInit,Input } from '@angular/core';
import {Http} from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';
import {Property} from './../entities/property';
import {PropertyService} from './../services/property/property.service';

@Component({
    selector: 'app-properties',
    templateUrl: './properties.component.html',
    
    
})
export class PropertiesComponent implements OnInit {
    @Input() newproperty: boolean;
    show:boolean=false ;
    showproperty:boolean=false ;
    showdeletedmessage:boolean=false ;
    public data;
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "createdAt";
    public sortOrder = "asc";

  
   

    constructor(private http: Http,private propertyService : PropertyService) {
    }

  

    ngOnInit(): void {
       this.checkSuccessMessages();
             this.propertyService.fetchAllProperties()
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data;
                }, 1000);
            });
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }


  checkSuccessMessages(){
      console.log("newproperty"+ this.newproperty);
        if (this.newproperty.toString()=='savedProperty'){
              this.show =true;
        } 
        if (this.newproperty.toString()=='true'){
              this.showproperty =true;
        } 
        if (this.newproperty.toString()=='deleteProperty'){
              this.showdeletedmessage =true;
        } 
      

    }
    
    

    
   
}