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
    this.baseUrl = "http://localhost:3000/"
  }

  getEmployee(): Observable<employee[]> {
    const url: string = this.baseUrl + 'employeeData';
    return this.http.get<employee[]>(url);
  }

  addEmployee(employee: employee): Observable<any> {
    const url: string = this.baseUrl + 'employeeData';
    return this.http.post(url, employee);
  }

  getEmployeeById(id: number): Observable<any> {
 
    const url: string = this.baseUrl + 'employeeData/' + id;
    return this.http.get(url);
  }

  deleteEmployee(id: number): Observable<any> {
    const url: string = this.baseUrl + 'employeeData/' + id;
    return this.http.delete(url);
  }

  editEmployee(employee: employee, id: number): Observable<any> {
    const url: string = this.baseUrl + 'employeeData/' + id;
    return this.http.put(url,employee);
  }
}
