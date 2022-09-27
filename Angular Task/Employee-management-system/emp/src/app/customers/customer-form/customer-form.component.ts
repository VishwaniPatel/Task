import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { userClass } from '../user.model';


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  public customerform: FormGroup;
  public isSubmitted: boolean = false;
  public title: string;
  public customerData: userClass[];
  public id: any;

  constructor(
    private formbuilder: FormBuilder,
    private customerservice: CustomerService,
    public route: ActivatedRoute
  ) {
    this.customerform = new FormGroup('');
    this.customerform = this.formbuilder.group({});
    this.title = "Add";
    this.customerData = [];

   this.route.params.subscribe(params=>{
    this.id = params['id']
    console.log(this.id);
    this.getCustomerById();
   })
   console.log(route);
   
  }

  ngOnInit(): void {

    this.getCustomer();
    this.customerform = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      dob: ['', Validators.required],
      salary: ['', [Validators.required, Validators.pattern('[0-9]*')]]
    });
  }


  public onSubmit(): void {
    this.isSubmitted = true;
    if (this.customerform.valid) {
      this.isSubmitted = false;
      if (this.id) {
        this.editCustomer();
        console.log("Edit works");

      }
      else {
        this.customerservice.addCustomer(this.customerform.value).subscribe((Response) => {

          this.getCustomer();
        });
        this.customerform.reset()
      }


    }
  }

  private getCustomer() : void{
    this.customerservice.getCustomer().subscribe((customer: userClass[]) => {
      this.customerData = customer;
    })
  }

  private getCustomerById() : void{
    this.customerservice.getCustomerById(Number(this.id)).subscribe(customer => {
      this.customerform.patchValue(customer)

    })
  }

  private editCustomer(): void {
    this.customerservice.editCustomer(this.customerform.value, this.id).subscribe(Response => {
      this.getCustomer();
    })
  }
}
