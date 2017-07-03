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


     updateTask(task:Task) {
        console.log("property" + task.id);
        var params = JSON.stringify(task);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

      return this.http.post('http://localhost:8080/task/updateTask',params, options)
            .map((response: Response) => {
                 let res = <Task> response.json().result;
                 return res;
            });
    }


    saveTask(task:Task) {
        console.log("property" + task.id);
        var params = JSON.stringify(task);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

      return this.http.post('http://localhost:8080/task/saveTask',params, options)
            .map((response: Response) => {
                 let res = <Task> response.json().result;
                 return res;
            });
    }

     deleteTask(id:number) {
        console.log("task" +id);
        var params = JSON.stringify(id);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

      return this.http.post('http://localhost:8080/task/deleteTask',params, options)
            .map((response: Response) => {
                 let res = <Task> response.json().result;
                 return res;
            });
    }



    
}