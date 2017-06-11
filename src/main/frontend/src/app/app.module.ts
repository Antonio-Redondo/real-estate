
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { FeedService } from './feed.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DpDatePickerModule} from 'ng2-date-picker';
import {MdNativeDateModule} from '@angular/material';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UserService } from './user.service';
import { PropertiesComponent } from './properties/properties.component';
import { DutiesComponent } from './duties/duties.component';
import {routing, appRoutingProviders} from './app.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {EmployeesModule} from './employees/employees.module';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { DialogComponent, DialogPopupComponent} from './dialog/dialog.component';
import {DialogInformationPopupComponent} from './dialoginformation/dialoginformation.component';
import {DialogModule} from './dialog/dialog.module';
import {DialoginformationModule} from './dialoginformation/dialoginformation.module';
import { DropdownpropertiesModule } from './dropdownproperties/dropdownproperties.module';
import  {DropdowntaskModule} from './dropdowntask/dropdowntask.module';
import { DropdowntaskComponent } from './dropdowntask/dropdowntask.component';
import { DialoginformationComponent } from './dialoginformation/dialoginformation.component';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import {AddemployeeModule} from './addemployee/addemployee.module';
import { AddnewemployeepageComponent } from './addnewemployeepage/addnewemployeepage.component';
import {PropertiesModule} from './properties/properties.module';
import { PropertylistComponent } from './propertylist/propertylist.component';
import { DialogPropertyComponent } from './dialogproperty/dialogproperty.component';
import {DialogpropertyModule} from './dialogproperty/dialogproperty.module';
import {DialogPropertyPopupComponent} from './dialogproperty/dialogproperty.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import {AddpropertyModule} from './addproperty/addproperty.module';
import { AddpropertypageComponent } from './addpropertypage/addpropertypage.component';
import{AddpropertypageModule} from './addpropertypage/addpropertypage.module';
import {MenuModule} from './menu/menu.module';
import { DeletepropertyComponent } from './deleteproperty/deleteproperty.component';
import {DeletepropertyModule} from './deleteproperty/deleteproperty.module';
import { DutieslistComponent } from './dutieslist/dutieslist.component';
import {DutiesModule} from './duties/duties.module';
import { DeletetaskComponent } from './deletetask/deletetask.component';
import {DeletetaskModule} from './deletetask/deletetask.module';
import { AddtaskComponent } from './addtask/addtask.component';
import {AddtaskModule} from './addtask/addtask.module';
import { AddnewtaskpageComponent } from './addnewtaskpage/addnewtaskpage.component';
import {DialogtaskModule} from './dialogtask/dialogtask.module';
import {DialogTaskPopupComponent} from './dialogtask/dialogtask.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {EmployeeService} from './services/employee/employee.service';
import{PropertyService} from './services/property/property.service';
import {TaskService} from './services/task/task.service';
import {CommonService} from './services/common/common.service';




@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EmployeelistComponent,
    AddnewemployeepageComponent,
    PropertylistComponent,
    DutieslistComponent,
    AddnewtaskpageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    EmployeesModule,
    HttpModule,
    routing,
    MaterialModule,
    DialogModule,
    DialoginformationModule,
    ReactiveFormsModule,
    DropdownpropertiesModule,
    MdNativeDateModule,
    DropdowntaskModule,
    AddemployeeModule,
    PropertiesModule,
    DialogpropertyModule,
    AddpropertyModule,
    MenuModule,
    DeletepropertyModule,
    DutiesModule,
    DeletetaskModule,
    AddtaskModule,
    DialogtaskModule,


  ],
  providers: [
    UserService,
    FeedService,
    appRoutingProviders,
    AuthenticationService,
    EmployeeService,
    PropertyService,
    TaskService,
    CommonService,
    AlertService,LoginComponent],
  bootstrap: [AppComponent,DialogPopupComponent
  , DialogInformationPopupComponent,DialogPropertyPopupComponent, DialogTaskPopupComponent]
})
export class AppModule { }
