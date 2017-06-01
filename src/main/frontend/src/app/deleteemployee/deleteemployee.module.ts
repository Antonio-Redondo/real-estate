import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DeleteemployeeComponent} from './deleteemployee.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
   
  ],
  declarations: [DeleteemployeeComponent],
    exports: [DeleteemployeeComponent]
})
export class DeleteemployeeModule { }
