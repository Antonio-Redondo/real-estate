import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css']
})
export class AddpropertyComponent implements OnInit {
  firstname:string;
   lastname:string;
   returnUrl:string ="/addnewproperty";
  constructor(private router: Router,private routerAct: ActivatedRoute) {
      this.routerAct.queryParams.subscribe(params => {
       
            this.firstname = params["firstname"];
            this.lastname = params["lastname"];
        });

   }

  ngOnInit() {
  }

  addProperty(){

    let navigationExtras: NavigationExtras = {
                             queryParams: {
                             "firstname":  this.firstname,
                             "lastname":  this.lastname
              
                         }
                     };

      this.router.navigate([this.returnUrl],navigationExtras);

  }

}
