import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  public id: any;

  constructor(
    private formbuilder: FormBuilder,
    private employeeService: EmployeeService,
    public activatedRoute: ActivatedRoute,
    public route: Router

  ) {
    // this.id = '';
    this.employeeform = new FormGroup('');
    this.employeeform = this.formbuilder.group({});
    this.title = "";
    this.employeeList = [];

    console.log(this.activatedRoute);

    // this.activatedRoute.params.subscribe((params:any) => {
 
    //   if (typeof params.empid != undefined ) {
    //     this.id = params['empid'];
    //     console.log("Hello");
    //     if (this.id) {
   
    //     }
    //   }
    // });
  }

  ngOnInit(): void {
    // this.getEmployee();
    this.title = this.id ? "Edit" : "Add";
    this.employeeform = this.formbuilder.group({
      id: [],
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(3)]],
      gender: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      dob: ['', Validators.required],
      salary: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
    // this.activatedRouter.firstChild?.params.subscribe((params => {

    //   console.log(params);
    //   console.log('Active-Param', this.activatedRouter.snapshot.children);
    //   this.id = params['custid'];
    //   console.log(this.id);
    //   // if (this.id) {
    //   this.getEmpById();
    //   // }
    // }))

    // this.activatedRouter.params.subscribe((params) => {
 
    //   console.log('Active-Param', this.activatedRouter.snapshot.children);


    //   this.id = params['custid'];
    //   console.log(this.id);
    //   // if (this.id) {
    //   this.getEmpById();
    //   // }
    // })
  }

  onSubmit() {
    this.isSubmitted = true;
   
  }


  
}
