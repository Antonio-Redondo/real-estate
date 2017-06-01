import { Component, OnInit,Input } from '@angular/core';
import {Http} from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';
import {Employee} from './../entities/employee';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    
    
})
export class EmployeesComponent implements OnInit {
    @Input() new: boolean;
    show:boolean=false ;
    showSavedTask:boolean=false ;
    showRemovedEmployee:boolean=false ;
    public data;
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";

  
   

    constructor(private http: Http) {
    }

  

    ngOnInit(): void {
       this.checkSuccessMessages();
        this.http.get("assets/data.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json() as Employee[];
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
        if (this.new.toString()=='true'){
              this.show =true;
        } 
        if (this.new.toString()=='savedTask'){
             this.show =false;
              this.showSavedTask =true;
        } 
        if(this.new.toString()=='deleteEmployee'){
              this.show =false;
              this.showSavedTask =false;
               this.showRemovedEmployee =true;
        }

    }
    

    
   
}