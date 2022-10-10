import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/"
  }

  getUser(): Observable<User[]> {
    const url: string = this.baseUrl + "userData";
    return this.http.get<User[]>(url);
  }

  addUser(user:User): Observable<User> {
    const url: string = this.baseUrl + "userData";
    return this.http.post<User>(url, user);
  }

  deleteUser(id:number): Observable<User> {
    const url: string = this.baseUrl + "userData/" + id;
    return this.http.delete<User>(url);
  }

  editUser(user:User, id:number) {
    const url: string = this.baseUrl + "userData/" + id;
    return this.http.put<User>(url,id);
  }

  getUserById(id:number): Observable<User> {
    const url: string = this.baseUrl + "userData/" + id;
    return this.http.get<User>(url);
  }

  
}
