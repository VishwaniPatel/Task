import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  public customerform: FormGroup;
  public isSubmitted: boolean = false;
  public title:string;
  public customerdata: any;

  constructor(
    private formbuilder:FormBuilder
  ) { 
    this.customerform = new FormGroup('');
    this.customerform = this.formbuilder.group({});
    this.title="Add";
    this.customerdata =[];
  }

  ngOnInit(): void {
    this.customerform = this.formbuilder.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      gender: ['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      dob: ['', Validators.required],
      salary: ['', [Validators.required, Validators.pattern('[0-9]*')]]
    });
  }


  onSubmit(){
      
    this.customerdata.push({
      name: this.customerform.controls['name'].value,
      gender: this.customerform.controls['gender'].value,
      dob: this.customerform.controls['dob'].value,
      salary: this.customerform.controls['salary'].value
  }
  );
}

}
