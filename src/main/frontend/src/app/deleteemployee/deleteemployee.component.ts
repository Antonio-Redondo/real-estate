import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.css']
})
export class DeleteemployeeComponent implements OnInit {
   returnUrl = '/employeelist/deleteEmployee';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  remove(){
    console.log("remove");
      this.router.navigate([this.returnUrl]);
      this.refresh();
  }

 refresh(): void {
    window.location.reload();
}

}
