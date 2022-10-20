import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentComponent } from './departments/department/department.component';
import { DepartmentlistComponent } from './departments/departmentlist/departmentlist.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeelistComponent } from './employees/employeelist/employeelist.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DepartmentComponent,
    DepartmentlistComponent,
    EmployeeComponent,
    EmployeelistComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
