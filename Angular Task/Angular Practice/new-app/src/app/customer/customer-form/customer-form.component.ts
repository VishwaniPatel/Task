import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  public title:string;
  custId: number;
  constructor(
    public router:Router,
    private activatedRouter: ActivatedRoute
    
  ) {
   
    this.custId = this.activatedRouter.snapshot.params['custId'];
    
    console.log(this.custId);
    this.title = this.custId ? 'Edit Customer' : 'Add Customer';
   }

  ngOnInit(): void {

  }
  onSave()
  {
    this.router.navigate(['customers','list'])
  }
}
