import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deleteproperty',
  templateUrl: './deleteproperty.component.html',
  styleUrls: ['./deleteproperty.component.css']
})
export class DeletepropertyComponent implements OnInit {
 returnUrl = '/propertieslist/deleteProperty';

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
