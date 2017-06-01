
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogPropertyComponent, DialogPropertyPopupComponent } from './dialogproperty.component';
import { NgModule } from '@angular/core';

@NgModule({
 imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [DialogPropertyComponent,DialogPropertyPopupComponent],
  exports: [DialogPropertyComponent,DialogPropertyPopupComponent]
})
export class DialogpropertyModule { }
