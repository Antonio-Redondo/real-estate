import { MaterialModule } from '@angular/material';
import { DialogModule } from './../dialog/dialog.module';
import { AppModule } from './../app.module';
import { NgModule }      from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";
import { DataFilterPipe }   from './data-filter.pipe';
import {DutiesComponent} from './duties.component';
import {DeletetaskModule} from './../deletetask/deletetask.module';
import {AddemployeeModule} from './../addemployee/addemployee.module';
import {AddtaskModule} from './../addtask/addtask.module';
import {DialogtaskModule} from './../dialogtask/dialogtask.module';

@NgModule({
  imports: [
    CommonModule, 
    DataTableModule, 
    FormsModule,
    HttpModule,
    DialogModule,
    MaterialModule,
    DeletetaskModule,
    AddemployeeModule,
    AddtaskModule,
    DialogtaskModule

  ],
  declarations: [DutiesComponent,DataFilterPipe],
  exports: [DutiesComponent]
})
export class DutiesModule { }
