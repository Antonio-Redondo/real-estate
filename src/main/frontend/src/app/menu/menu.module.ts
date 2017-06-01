import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from './menu.component';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';

@NgModule({
  imports: [
     CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [MenuComponent],
  exports:[MenuComponent]
})
export class MenuModule { }
