import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Employee} from './../entities/employee';
import 'rxjs/add/operator/map'
import {User} from './../entities/user';


@Injectable()
export class AuthenticationService {
    
    public logged: boolean = false;
     public data;
   
    constructor(private http: Http) {
     

     }



    login( model:  User) {
        let body = JSON.stringify({ username: model.username, password: model.password });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:8080/user/authenticate',body,options)
            .map((response: Response) => {
                console.log(response.json().result);
                 let res = <User> response.json().result;
                 return res;
            });
    }

    register( model:  User) {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:8080/user/register',body,options)
            .map((response: Response) => {
                console.log(response.json().result);
                 let res = <User> response.json().result;
                 return res;
            });
    }
 
   

    logout(): void {
        // clear token remove user from local storage to log user out
      
        localStorage.removeItem('currentUser');
    }
}