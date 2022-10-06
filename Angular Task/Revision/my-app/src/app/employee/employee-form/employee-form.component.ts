import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public employeeform: FormGroup;
  public isSubmitted: boolean = false;
  public title: string;
  public employeeList: employee[];
  public id:any;
  constructor(
    private formbuilder:FormBuilder,
    private employeeService: EmployeeService,

  ) {
    this.employeeform = new FormGroup('');
    this.employeeform = this.formbuilder.group({});
    this.title = "";
    this.employeeList = [];
   }

  ngOnInit(): void {
    this.title = this.id ? "Edit" : "Add";
    this.employeeform = this.formbuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]$*'),Validators.minLength(3)]],
      gender: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]$*')]],
      dob: ['', Validators.required],
      salary: ['', [Validators.required, Validators.pattern('^[0-9]$*')]]
    });
  }

  onSubmit() {
    this.isSubmitted = true;
  }
}
