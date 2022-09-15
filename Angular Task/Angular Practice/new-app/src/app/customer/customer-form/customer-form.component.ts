import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  public customers:any;
  constructor(
    private route:Router
  ) {
    this.customers = [{
      id:1,
      name:"Vishwani"
    },
  {
    id:2,
    name:"Vini"
  }]
   }

  ngOnInit(): void {
  }
  onAdd()
  {
    console.log("Add");
  }
  onClick() {
    this.route.navigate(['customers','list']);
  }
}
