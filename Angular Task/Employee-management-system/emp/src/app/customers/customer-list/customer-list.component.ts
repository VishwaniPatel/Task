import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { userClass } from '../user.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  @Input() public userList: userClass[];

  constructor(
    private customerservice : CustomerService,
    private router: Router
  ) {

    this.userList = [];
   }

  ngOnInit(): void {

  }
  private getCustomer(): void {
    this.customerservice.getCustomer().subscribe((customer: userClass[]) => {
      this.userList = customer;
      console.log(this.userList);
      
    })
}

onDelete(id: number) {
  this.customerservice.deleteCustomer(Number(id)).subscribe( x => {
    this.getCustomer();
  })
}

onEdit(customer: userClass) {
  this.router.navigate(['customers/edit',customer.id])
  
}

onDetails(customer: userClass){
  this.router.navigate(['customers/details',customer.id])
}
}