import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AppRoutingModule } from './app-routing.module';

import { AgGridAngular } from 'ag-grid-angular';
import { FormComponent } from './employee/form/form.component'; // AG Grid Component
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, EmployeeComponent, FormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridAngular,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
