import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DeletepropertyComponent} from "./deleteproperty.component";

@NgModule({
  imports: [
    CommonModule,
     FormsModule,
    MaterialModule
  ],
  declarations: [DeletepropertyComponent],
  exports: [DeletepropertyComponent]
})
export class DeletepropertyModule { }
