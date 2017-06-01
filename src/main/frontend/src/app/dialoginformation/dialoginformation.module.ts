import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialoginformationComponent,DialogInformationPopupComponent } from './dialoginformation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlSelectModule } from '@angular-mdl/select';
import {DropdownpropertiesModule} from './../dropdownproperties/dropdownproperties.module';
import {DropdowntaskModule} from './../dropdowntask/dropdowntask.module';
import {DpDatePickerModule} from 'ng2-date-picker';

@NgModule({
  imports: [
    CommonModule,
    DropdownpropertiesModule,
    DropdowntaskModule,
    FormsModule,
    MaterialModule,
    DpDatePickerModule
  ],
  declarations: [DialoginformationComponent,DialogInformationPopupComponent],
  exports: [DialoginformationComponent,DialogInformationPopupComponent]
})
export class DialoginformationModule { }
