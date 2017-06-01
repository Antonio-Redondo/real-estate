import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {User} from './../entities/user';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {


    public newlyCreated : boolean;
    public user :User;
    public firstname: string;
    public lastname: string;
    public sub : any;
     returnUrl = '/employeelist/savedTask';

  constructor(private router: ActivatedRoute,private routerNavigate: Router) { 

     this.router.queryParams.subscribe(params => {
       
            this.firstname = params["firstname"];
            this.lastname = params["lastname"];
        });
  }
    


  ngOnInit() {
    
     this.sub = this.router.params.subscribe(params => {
       this.newlyCreated = params['new']; 
       });

  }

  
  
}
