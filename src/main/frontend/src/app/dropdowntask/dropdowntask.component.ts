import {Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MdSelectChange} from '@angular/material';
import {Task} from './../entities/task';
import {TaskService} from './../services/task/task.service';
import {CommonService} from './../services/common/common.service';



@Component({
  selector: 'select-dropdowntask',
  templateUrl: './dropdowntask.component.html',
  styleUrls: ['./dropdowntask.component.css']
})
export class DropdowntaskComponent implements OnInit {
  @Input() idTask :number;
  public data;
  public currentTask:number;

  constructor(private taskService:TaskService,private commonService:CommonService) {
   

  }

  ngOnInit() {

     this.taskService.fetchAllTasks()
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data;
                }, 1000);
            });
            this.currentTask = this.idTask;
       
   }

   selectedValue():void{
     console.log("this.currentTask"+this.currentTask);
      this.commonService.notifyOther({idTaskSelected: this.currentTask});
   

   }


  }


