import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AddpropertyComponent} from './addproperty.component';
import {Routes, RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule,
     CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [AddpropertyComponent],
  exports:[AddpropertyComponent]
})
export class AddpropertyModule { }
