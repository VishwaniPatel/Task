import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employee } from './employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/employeeData/"
  }

  getEmployee(): Observable<employee[]> {
    // const url: string = this.baseUrl;
    return this.http.get<employee[]>(this.baseUrl);
  }

  addEmployee(employee: employee): Observable<any> {
    // const url: string = this.baseUrl + 'employeeData';
    return this.http.post(this.baseUrl, employee);
  }

  getEmployeeById(id: number): Observable<any> {
    debugger
    // const url: string = this.baseUrl + 'employeeData/' + id;
    return this.http.get(this.baseUrl+id);
  }

  deleteEmployee(id: number): Observable<any> {
    // const url: string = this.baseUrl + 'employeeData/' + id;
    return this.http.delete(this.baseUrl + id);
  }

  editEmployee(employee: employee, id: number): Observable<any> {
    // const url: string = this.baseUrl + 'employeeData/' + id;
    return this.http.put(this.baseUrl + id, employee);
  }
}
