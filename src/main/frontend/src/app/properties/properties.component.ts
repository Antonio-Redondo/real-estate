import { Component, OnInit,Input } from '@angular/core';
import {Http} from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';
import {Property} from './../entities/property';

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
    public sortBy = "address";
    public sortOrder = "asc";

  
   

    constructor(private http: Http) {
    }

  

    ngOnInit(): void {
       this.checkSuccessMessages();
        this.http.get("assets/dataProperty.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json() as Property[];
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
        if (this.newproperty.toString()=='savedEmployee'){
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