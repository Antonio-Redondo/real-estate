
import {Property} from './property';
import {Task} from './task';

export class Employee {
    id:number;
    propertyId:number;
    taskId:number;
    name: string;
    email: string;
    telephone: number;
    address:string;
    remarks:string;
    regDate: string;
    city: string;
    age: number;
    image:string;
    propertyDTO:Property;
    taskDTO:Task;
}
   