import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Employee} from './../../entities/employee';
import 'rxjs/add/operator/map'



@Injectable()
export class EmployeeService {
    
    public logged: boolean = false;
     public data;
   
    constructor(private http: Http) {
     

     }



    fetchAllEmployees() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:8080/employee/fetchAll',options)
            .map((response: Response) => {
                 let res = <Employee> response.json().result;
                 return res;
            });
    }

     updateEmployee(employee:Employee) {
        console.log("employee" + employee.id);
      //  var params = {id:employee.id};
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

      return this.http.post('http://localhost:8080/employee/updateEmployee', options)
            .map((response: Response) => {
                 let res = <Employee> response.json().result;
                 return res;
            });
    }

    
}