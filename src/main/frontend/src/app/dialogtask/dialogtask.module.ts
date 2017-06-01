import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DialogTaskComponent, DialogTaskPopupComponent} from './dialogtask.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [DialogTaskComponent,DialogTaskPopupComponent],
  exports:[DialogTaskComponent,DialogTaskPopupComponent]
})
export class DialogtaskModule { }
