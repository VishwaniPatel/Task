import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { Pagination, userClass } from '../user.model';


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
  public tableProperty: Pagination;
  distance = 1;
  throttle = 5000;

  constructor(
    private formbuilder: FormBuilder,
    private customerservice: CustomerService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.customerform = new FormGroup('');
    this.customerform = this.formbuilder.group({});
    this.title = "";
    this.customerData = [];

    this.tableProperty = new Pagination();
    this.tableProperty.pageNumber = 1;
    this.tableProperty.pageSize = 12;
    // this.id='';

    this.route.params.subscribe(params => {
      this.id = params['id']
      console.log(this.id);
      if (this.id) {

        this.getCustomerById();
      }
    })
    console.log(route);

  }

  ngOnInit(): void {
    this.title = this.id ? "Edit" : "Add";
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
        this.router.navigateByUrl('customers/add');
        this.customerform.reset();
        this.title = "Edit";
      }
      else {
        this.customerservice.addCustomer(this.customerform.value).subscribe((Response) => {

          this.getCustomer();
        });
        this.customerform.reset();

      }


    }
  }

  private getCustomer(): void {
    this.customerservice.getCustomer(this.tableProperty).subscribe((customer: userClass[]) => {
      this.customerData = this.customerData.concat(customer)
      // this.customerData = customer;
    })
  }

  private getCustomerById(): void {
    this.customerservice.getCustomerById(Number(this.id)).subscribe(customer => {
      this.customerform.patchValue(customer)

    })
  }

  private editCustomer(): void {
    this.customerservice.editCustomer(Number(this.id), this.customerform.value).subscribe(Response => {
      this.getCustomer();
    })
  }
  onScroll() {
    this.tableProperty.pageNumber++;
    this.getCustomer();
  
  }
}
