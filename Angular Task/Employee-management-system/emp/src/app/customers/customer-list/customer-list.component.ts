import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { Pagination, userClass } from '../user.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  @Input() public userList: userClass[];
  public tableProperty: Pagination;
  distance = 2;
  throttle = 0;

  constructor(
    private customerservice : CustomerService,
    private router: Router
  ) {
    this.tableProperty = new Pagination();
    this.tableProperty.pageNumber = 1;
    this.tableProperty.pageSize = 20;
    this.userList = [];
   }

  ngOnInit(): void {

  }
  private getCustomer(): void {
    this.customerservice.getCustomer(this.tableProperty).subscribe((customer: userClass[]) => {
      // this.userList = customer;
      this.userList = this.userList.concat(customer)
      console.log(this.userList);
      
    })
}

onDelete(id: any) {
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

// onScroll() {
//   this.tableProperty.pageNumber++;
//   this.customerservice.getCustomer(this.tableProperty).subscribe(()=>{

//   })

// }
}