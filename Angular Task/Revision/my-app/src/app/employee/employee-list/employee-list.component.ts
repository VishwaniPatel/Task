import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  @Output() employeeToEdit: EventEmitter<number> = new EventEmitter<number>();
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

  onDelete(id: number): void {
    this.employeeService.deleteEmployee(Number(id)).subscribe(employee => {
      this.getEmployee();
    })
  }
  onEdit(employee: employee): void {
    // this.employeeToEdit.emit(employee.id)
    this.router.navigate(['employee/edit', employee.id])
  }
}
