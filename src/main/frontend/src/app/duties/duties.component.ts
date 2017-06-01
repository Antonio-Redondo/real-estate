import { Component, OnInit,Input } from '@angular/core';
import {Http} from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';
import {Task} from './../entities/task';

@Component({
  selector: 'app-duties',
  templateUrl: './duties.component.html',
  styleUrls: ['./duties.component.css']
})
export class DutiesComponent implements OnInit {

   @Input() newDuty: boolean;
    showRemovedTask:boolean=false ;
    showNewTask:boolean=false ;
    showEditTask:boolean =false;
   
    public data;
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "name";
    public sortOrder = "asc";

  
   

    constructor(private http: Http) {
        console.log("constructor");
    }

  

    ngOnInit(): void {
      console.log("ngOnInit");
       this.checkSuccessMessages();
        this.http.get("assets/dataTask.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json() as Task[];
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
      console.log(this.newDuty);
      if(this.newDuty != null){
        if (this.newDuty.toString()=='deleteTask'){
              this.showRemovedTask =true;
        } 

        if (this.newDuty.toString()=='true'){
              this.showNewTask =true;
        } 

        if(this.newDuty.toString()=='editTask'){
              this.showEditTask =true;
        }

        
      }
     

    }
    

}
