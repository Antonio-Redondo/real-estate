import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  firstname:string;
   lastname:string;
   returnUrl:string = "/addnewptask";
  constructor(private router: Router,private routerAct: ActivatedRoute) { 

      this.routerAct.queryParams.subscribe(params => {
       
            this.firstname = params["firstname"];
            this.lastname = params["lastname"];
        });
  }

  ngOnInit() {
  }
  addEmployee(){

    let navigationExtras: NavigationExtras = {
                             queryParams: {
                             "firstname":  this.firstname,
                             "lastname":  this.lastname
              
                         }
                     };

      this.router.navigate([this.returnUrl],navigationExtras);

  }
}
