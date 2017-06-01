import { MaterialModule } from '@angular/material';
import { DialogModule } from './../dialog/dialog.module';
import { AppModule } from './../app.module';
import { PropertiesComponent } from './properties.component';
import { NgModule }      from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";
import { DataFilterPipe }   from './data-filter.pipe';
import {DeleteemployeeModule} from './../deleteemployee/deleteemployee.module';
import {MenuComponent} from './../menu/menu.component';
import {DialogpropertyModule} from './../dialogproperty/dialogproperty.module';
import {AddpropertyModule} from './../addproperty/addproperty.module';
import {AddpropertypageModule} from './../addpropertypage/addpropertypage.module';
import {DeletepropertyModule} from './../deleteproperty/deleteproperty.module';


@NgModule({
  imports:      [ 
    CommonModule, 
    DataTableModule, 
    FormsModule,
    HttpModule,
    MaterialModule,
    DeleteemployeeModule,
    DialogpropertyModule,
    AddpropertyModule,
    AddpropertypageModule,
    DeletepropertyModule
  ],
  declarations: [ PropertiesComponent, DataFilterPipe  ],
  exports: [PropertiesComponent]
})

export class PropertiesModule { }


