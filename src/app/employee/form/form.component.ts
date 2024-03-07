import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  id!: string;
  employeeForm!: FormGroup;
  submitted: boolean = false;
  employees: any = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.employeeForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      gender: ['', Validators.required],
      salary: ['', Validators.required],
      department: ['', Validators.required],
      note: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.employeeForm.invalid) return;
    this.employees.push(this.employeeForm.value);
    localStorage.setItem('employees', JSON.stringify(this.employees));
    this.router.navigate(['/employee']);
  }

  ngOnInit(): void {
    const employees: any = localStorage.getItem('employees');
    this.employees = employees ? JSON.parse(employees) : [];
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.id = params['id'];
        const selectedEmployee = this.employees.find((employee: any) => {
          return employee.id === this.id;
        });
        this.employeeForm = this.fb.group({
          id: [selectedEmployee.id, Validators.required],
          name: [selectedEmployee.name, Validators.required],
          gender: [selectedEmployee.gender, Validators.required],
          salary: [selectedEmployee.salary, Validators.required],
          department: [selectedEmployee.department, Validators.required],
          note: [selectedEmployee.note, Validators.required],
        });
      }
    });
  }
}
