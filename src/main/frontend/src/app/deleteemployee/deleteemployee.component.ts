import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';
import {EmployeeService} from './../services/employee/employee.service';
import { AlertService } from './../services/alert.service';
import {Employee} from './../entities/employee';

@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.css']
})
export class DeleteemployeeComponent implements OnInit {
   returnUrl = '/employeelist/deleteEmployee';
   item: Employee;
   firstname:string;
   lastname:string;

  constructor(private router: Router, private alertService:AlertService, private employeeService:EmployeeService) { }

  ngOnInit() {
  }

  remove(){
    console.log("remove");
      this.employeeService.deleteEmployee(this.item).subscribe(
                data => {

                     let navigationExtras: NavigationExtras = {
                             queryParams: {
                             "firstname": this.firstname,
                             "lastname": this.lastname
                        }
                     };
                  this.router.navigate([this.returnUrl],navigationExtras);
                },
                error => {
                    this.alertService.error(error);
                });
      this.router.navigate([this.returnUrl]);
      this.refresh();
  }

 refresh(): void {
    window.location.reload();
}

}
