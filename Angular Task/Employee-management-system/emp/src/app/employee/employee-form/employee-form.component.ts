import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  public userform: FormGroup;
  public isSubmitted: boolean = false;
  public userdata: any;
  public fetchdata: any;

  public title:string;

  constructor(
    private formbuilder:FormBuilder
  ) { 
    this.fetchdata = {};
    this.userdata =[];
    this.userform = new FormGroup('');
    this.title="Add";
    }

    ngOnInit(): void {
      this.userform = this.formbuilder.group({
        name: ['',[Validators.required, Validators.minLength(3)]],
        gender: ['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        dob: ['', Validators.required],
        salary: ['', [Validators.required, Validators.pattern('[0-9]*')]]
      });
    }

    onSubmit(){
      
    this.userdata.push({
      name: this.userform.controls['name'].value,
      gender: this.userform.controls['gender'].value,
      dob: this.userform.controls['dob'].value,
      salary: this.userform.controls['salary'].value
  }
  );
      console.log(this.userdata);
      
    }

    onReset(){
      this.userform.reset();
    }

    displayempdata(i: any)
    {
      this.title = "Edit"
      this.fetchdata = i;
      console.log("Fetch",this.fetchdata);
      this.userform.patchValue(this.fetchdata);

    }


  }
