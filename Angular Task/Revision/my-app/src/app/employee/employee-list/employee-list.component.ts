import { Component, OnInit, Input } from '@angular/core';
import { employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
@Input() public employeeData : employee[]; 
  constructor(
    private employeeService : EmployeeService
  ) {
    this.employeeData = [];
   }

  ngOnInit(): void {

    this.getEmployee();
  }

  getEmployee(){
    this.employeeService.getEmployee().subscribe((employee:employee[]) => {
      this.employeeData = employee;
    })   
  }
}
