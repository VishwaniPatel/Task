import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reforms',
  templateUrl: './reforms.component.html',
  styleUrls: ['./reforms.component.scss']
})
export class ReformsComponent implements OnInit {
  public isSubmitted: boolean = false;
  public userform: FormGroup;
  public profileData: any;


  constructor(
    private formbuilder:FormBuilder
  ) {
    this.profileData = {
      firstname: 'Vishwani',
      lastname: 'Patel',
      age: 26,
      address: {
        city: 'Dungri',
        state: 'Gujarat',
        zipcode: '396375'
      }},
    //using formbuilder
    this.userform = this.formbuilder.group ({
      firstname: ['', [Validators.required, Validators.minLength(5)]],
      lastname: ['', [Validators.required, Validators.maxLength(10)]],
      username: ['', [Validators.required, Validators.pattern('^[a-z0-9]*$')]],
      email: ['',[Validators.required, Validators.pattern('([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')]],
      mobilenumber: ['', [Validators.required,Validators.pattern('^[0-9]*$')]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(60)]],
      address: this.formbuilder.group({
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zipcode: ['', [Validators.required]]
      }),
      terms: [null, [Validators.required]]
    })


    //Using formGroup
    // this.userform = new FormGroup({
    //   firstname: new FormControl ("",Validators.required),
    //   lastname: new FormControl("",Validators.maxLength(7)),
    //   email: new FormControl("",Validators.required),
    //   mobilenumber: new FormControl("",Validators.required)
    // });
   }

  ngOnInit(): void {
    this.userform.patchValue(this.profileData);
  }
  onSubmit() {
    this.isSubmitted = true;
    console.log(this.userform);
}

public reset(): void {
  this.userform.reset();
}
}