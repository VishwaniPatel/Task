import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userClass } from '../user.model';

@Injectable()
export class CustomerService {
  private basUrl: string;

  constructor(
    private http: HttpClient
  ) { 
    this.basUrl = "http://localhost:3000/";
  }

  getCustomer(page:any): Observable<any> {
    const url: string = this.basUrl + 'userList' + '?_page='+page.pageNumber+'&_limit='+page.pageSize;
    return this.http.get(url);
  }

  getCustomerById(id : number) : Observable<any> {
    const url: string = this.basUrl +  'userList/' + id
    return this.http.get(url);
  }

  addCustomer(customer: userClass) : Observable<any> {
    const url: string = this.basUrl + 'userList'
    return this.http.post(url,customer);
  }


deleteCustomer(id: number) : Observable<any> {
  const url: string = this.basUrl +  'userList/' + id
  return this.http.delete(url);
}

editCustomer(id: number, customer: userClass) : Observable<any> {
  const url: string = this.basUrl +  'userList/' + id
  return this.http.put(url, customer );
}


}
