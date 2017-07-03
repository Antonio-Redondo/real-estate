import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Property} from './../../entities/property';
import 'rxjs/add/operator/map'



@Injectable()
export class PropertyService {
    
    public logged: boolean = false;
     public data;
   
    constructor(private http: Http) {
     

     }



    fetchAllProperties() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:8080/property/fetchAll',options)
            .map((response: Response) => {
                 let res = <Property[]> response.json().result;
                 return res;
            });
    }

  updateProperty(property:Property) {
        console.log("property" + property.id);
        var params = JSON.stringify(property);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

      return this.http.post('http://localhost:8080/property/updateProperty',params, options)
            .map((response: Response) => {
                 let res = <Property> response.json().result;
                 return res;
            });
    }


    saveProperty(property:Property) {
        console.log("property" + property.id);
        var params = JSON.stringify(property);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

      return this.http.post('http://localhost:8080/property/saveProperty',params, options)
            .map((response: Response) => {
                 let res = <Property> response.json().result;
                 return res;
            });
    }

      deleteProperty(id:number) {
        console.log("property" +id);
        var params = JSON.stringify(id);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

      return this.http.post('http://localhost:8080/property/deleteProperty',params, options)
            .map((response: Response) => {
                 let res = <Property> response.json().result;
                 return res;
            });
    }


    
}