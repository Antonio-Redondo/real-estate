import { DropdownpropertiesComponent } from './dropdownproperties/dropdownproperties.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeesComponent } from './employees/employees.component';
import { RegisterComponent } from './register/register.component';
import {AddnewemployeepageComponent} from './addnewemployeepage/addnewemployeepage.component';
import {AddpropertypageComponent} from './addpropertypage/addpropertypage.component';
import {DutieslistComponent} from './dutieslist/dutieslist.component';
import {AddnewtaskpageComponent} from './addnewtaskpage/addnewtaskpage.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { DutiesComponent } from './duties/duties.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertylistComponent } from './propertylist/propertylist.component';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Authguard} from './authguard';




const appRoutes: Routes =  [
    {path: '', redirectTo:'/login', pathMatch: 'full'},
    {path: 'addnewemployee', component: AddnewemployeepageComponent},
     {path: 'addnewproperty', component: AddpropertypageComponent},
     {path: 'addnewptask', component: AddnewtaskpageComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'employees', component: EmployeesComponent},
    {path: 'employeelist/:new', component: EmployeelistComponent, canActivate:[Authguard]},
    {path: 'properties', component: PropertiesComponent},
    {path: 'propertieslist/:newproperty', component: PropertylistComponent},
    {path: 'dutieslist/:newDuty', component: DutieslistComponent},
    {path: 'duties', component:DutiesComponent}
]

export const appRoutingProviders: any[] = [Authguard

];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
