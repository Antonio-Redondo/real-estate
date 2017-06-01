import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddpropertypageComponent} from './addpropertypage.component';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Routes, RouterModule} from '@angular/router';
import {MenuModule} from './../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
   RouterModule,
   MenuModule
  ],
  declarations: [AddpropertypageComponent],
  exports: [AddpropertypageComponent]
})
export class AddpropertypageModule { }
