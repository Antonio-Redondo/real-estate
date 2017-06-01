import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DeletetaskComponent} from './deletetask.component';

@NgModule({
  imports: [
    CommonModule,
     FormsModule,
    MaterialModule
  ],
  declarations: [DeletetaskComponent],
  exports : [DeletetaskComponent]
})
export class DeletetaskModule { }
