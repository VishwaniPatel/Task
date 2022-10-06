import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public baseUrl : string;
  constructor(private http : HttpClient) {
    this.baseUrl = "https://localhost:3000/"
   }

   getEmployee() : Observable<any> {
    const url : string = this.baseUrl + 'employeeData';
    return this.http.get(url);
   }
}
