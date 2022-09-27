import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { userClass } from '../user.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  public customer: userClass;
  public id : string;

  constructor(
    private customerservice: CustomerService,
    private route : ActivatedRoute
  ) { 
    this.customer = new userClass();
    this.id = '',
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getCustomer();
    });
  }

  ngOnInit(): void {
  }
  public getCustomer() {
    this.customerservice.getCustomerById(Number(this.id)).subscribe((customer: userClass) => {
      this.customer = customer;
    })
  }
}
