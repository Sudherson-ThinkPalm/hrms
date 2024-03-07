import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { ViewButton } from './view-button.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  rowData: any;

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: 'id' },
    { field: 'name' },
    { field: 'gender' },
    { field: 'salary' },
    { field: 'department' },
    { field: 'note' },
    { cellRenderer: ViewButton },
  ];

  addNew() {
    this.router.navigate(['/employee/create']);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    const employees = localStorage.getItem('employees');
    this.rowData = employees ? JSON.parse(employees) : [];
  }
}
