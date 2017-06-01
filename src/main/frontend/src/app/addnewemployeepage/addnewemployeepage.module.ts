import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddnewemployeepageComponent } from './addnewemployeepage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlSelectModule } from '@angular-mdl/select';
import {DropdownpropertiesModule} from './../dropdownproperties/dropdownproperties.module';
import {DropdowntaskModule} from './../dropdowntask/dropdowntask.module';
import {DpDatePickerModule} from 'ng2-date-picker';
import { Router, ActivatedRoute } from '@angular/router';

@NgModule({
imports: [
    CommonModule,
    DropdownpropertiesModule,
    DropdowntaskModule,
    FormsModule,
    MaterialModule,
    DpDatePickerModule,
    Router,
    ActivatedRoute
  ],
  declarations: [AddnewemployeepageComponent],
  exports: [AddnewemployeepageComponent]
})
export class AddnewemployeepageModule { }
