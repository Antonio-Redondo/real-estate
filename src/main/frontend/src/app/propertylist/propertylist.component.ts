import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.component.html',
  styleUrls: ['./propertylist.component.css']
})
export class PropertylistComponent implements OnInit {
    public newlyCreated : boolean;
    public sub : any;
    firstname :string;
    lastname:string;
    returnUrl = '/propertylist/savedProperty';

  constructor(private router: ActivatedRoute,private routerNavigate: Router) { 

      this.router.queryParams.subscribe(params => {
       
            this.firstname = params["firstname"];
            this.lastname = params["lastname"];
          
        });

  }

 ngOnInit() {
  
     this.sub = this.router.params.subscribe(params => {
       this.newlyCreated = params['newproperty']; 
        console.log("newlyCreated" +this.newlyCreated);
    //   this.refresh();
      });
  }

  refresh(){
  
      this.routerNavigate.navigate([this.returnUrl]);
  
}
}
