import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  @Input() public employeeData: employee[];

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService
  ) {
    this.employeeData = [];

  }

  ngOnInit(): void {


  }
  private getEmployee(): void {
    this.employeeService.getEmployee().subscribe((employee: employee[]) => {
      this.employeeData = employee;
    })
  }

  onDelete(id: any): void {
    this.employeeService.deleteEmployee(Number(id)).subscribe(employee => {
      this.getEmployee();
    })
  }
  onEdit(id: any): void {
    this.router.navigate(['employee/edit', id])
  }
}
