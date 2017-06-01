import { MaterialModule } from '@angular/material';
import { DialogModule } from './../dialog/dialog.module';
import { AppModule } from './../app.module';
import { EmployeesComponent } from './employees.component';
import { NgModule }      from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";
import { DataFilterPipe }   from './data-filter.pipe';
import { DialogComponent, DialogPopupComponent } from './../dialog/dialog.component';
import {DialoginformationModule} from './../dialoginformation/dialoginformation.module';
import {DeleteemployeeModule} from './../deleteemployee/deleteemployee.module';
import {AddemployeeModule} from './../addemployee/addemployee.module';

@NgModule({
  imports:      [ 
    CommonModule, 
    DataTableModule, 
    FormsModule,
    HttpModule,
    DialogModule,
    DialoginformationModule,
    MaterialModule,
    DeleteemployeeModule,
    AddemployeeModule
  ],
  declarations: [ EmployeesComponent, DataFilterPipe  ],
  exports: [EmployeesComponent]
})

export class EmployeesModule { }


