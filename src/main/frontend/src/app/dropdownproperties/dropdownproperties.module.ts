import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropdownpropertiesComponent } from './dropdownproperties.component';


@NgModule({
  imports:      [ 
    CommonModule, 
    FormsModule,
    MaterialModule
  ],
  declarations: [ DropdownpropertiesComponent  ],
  exports: [DropdownpropertiesComponent]
})

export class DropdownpropertiesModule { }

