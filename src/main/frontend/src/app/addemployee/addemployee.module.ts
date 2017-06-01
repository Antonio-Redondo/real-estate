import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AddemployeeComponent} from './addemployee.component';
import {Routes, RouterModule} from '@angular/router';

@NgModule({
    imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule
   
  ],
  declarations: [AddemployeeComponent],
    exports: [AddemployeeComponent]
})
export class AddemployeeModule { }
