import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Task} from './../../entities/task';
import 'rxjs/add/operator/map'



@Injectable()
export class TaskService {
    
    public logged: boolean = false;
     public data;
   
    constructor(private http: Http) {
     

     }



    fetchAllTasks() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:8080/task/fetchAll',options)
            .map((response: Response) => {
                 let res = <Task[]> response.json().result;
                 return res;
            });
    }

    
}