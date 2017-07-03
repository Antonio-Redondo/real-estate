import { Component, OnInit,Input } from '@angular/core';
import {Http} from "@angular/http";
import { Router, ActivatedRoute,NavigationStart } from '@angular/router';
import {Task} from './../entities/task';
import {TaskService} from './../services/task/task.service';

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
    public sortBy = "createdAt";
    public sortOrder = "asc";

  
   

    constructor(private http: Http, private taskService :TaskService, private router:Router) {
              var currentUrl = this.router.url;
              console.log("currentUrl"+currentUrl);
   // var refreshUrl = currentUrl.indexOf('dutieslist/:newDuty') > -1 ? '/dutieslist/:newDuty' : '/someRoute';
   this.router.navigateByUrl(currentUrl);
     
    }


  

    ngOnInit(): void {
       this.checkSuccessMessages();
          this.taskService.fetchAllTasks()
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
