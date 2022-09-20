import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  public customers:any;
  

  constructor(
    private route:Router
    
  ) { 
    this.customers = [{
      id:1,
      name:"Vishwani",
      gender:"female"
    },
  {
    id:2,
    name:"Nilu",
    gender:"male"
  }];
 
  }

  ngOnInit(): void {
  }
  
  onAdd() {
    this.route.navigate(['customers','add']);

  }
  // onEdit(){
  //   this.route.navigate(['customers','edit']);
    
  // }
}
