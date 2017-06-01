import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {DropdowntaskComponent} from './dropdowntask.component';

@NgModule({
  imports:      [ 
    CommonModule, 
    FormsModule,
    MaterialModule
  ],
  declarations: [ DropdowntaskComponent  ],
  exports: [DropdowntaskComponent]
})
export class DropdowntaskModule { }
