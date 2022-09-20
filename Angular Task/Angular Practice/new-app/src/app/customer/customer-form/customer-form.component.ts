import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customers } from '../customers.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  public title:string;
  custId: number;
  public customers:Customers;

@ViewChild('customerform') customerForm = NgForm;
   
   isSubmitted = true;
  
   constructor(
    public router:Router,
    private activatedRouter: ActivatedRoute  
  )
   {
    console.log(this.activatedRouter);
    this.custId = this.activatedRouter.snapshot.params['custId'];
    
    console.log(this.custId);
    this.title = this.custId ? 'Edit Customer' : 'Add Customer';
    
    this.customers = new Customers('', '', '', '');
   }

  ngOnInit(): void {

  }
  onSave()
  {
    this.router.navigate(['customers','list'])
  }

  onSubmit(customerForm) {
    this.isSubmitted = true;
    console.log(this.customerForm);
    // console.log(customerForm.form.controls.firstname.errors['required']);

    //console.log(customerForm.form.value);
}
}
