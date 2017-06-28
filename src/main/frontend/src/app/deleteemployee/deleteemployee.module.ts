import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DeleteemployeeComponent, DeleteEmployeePopupComponent} from './deleteemployee.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
   
  ],
  declarations: [DeleteemployeeComponent,DeleteEmployeePopupComponent],
    exports: [DeleteemployeeComponent, DeleteEmployeePopupComponent]
})
export class DeleteemployeeModule { }
