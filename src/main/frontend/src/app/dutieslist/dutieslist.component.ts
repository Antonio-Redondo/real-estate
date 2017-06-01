import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dutieslist',
  templateUrl: './dutieslist.component.html',
  styleUrls: ['./dutieslist.component.css']
})
export class DutieslistComponent implements OnInit {

    public newlyCreated : boolean;
    public sub : any;
    firstname :string;
    lastname:string;
    returnUrl = '/dutieslist/savedTask';

  constructor(private router: ActivatedRoute,private routerNavigate: Router) {
     this.router.queryParams.subscribe(params => {
       
            this.firstname = params["firstname"];
            this.lastname = params["lastname"];
         
        });
        
   }
  ngOnInit() {
  
     this.sub = this.router.params.subscribe(params => {
       this.newlyCreated = params['newDuty']; 
       });

       

  }

  refresh(){
  
      this.routerNavigate.navigate([this.returnUrl]);
  
}

}
