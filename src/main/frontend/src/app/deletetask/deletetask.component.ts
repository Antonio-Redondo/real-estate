import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deletetask',
  templateUrl: './deletetask.component.html',
  styleUrls: ['./deletetask.component.css']
})
export class DeletetaskComponent implements OnInit {

  returnUrl = '/dutieslist/deleteTask';

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
