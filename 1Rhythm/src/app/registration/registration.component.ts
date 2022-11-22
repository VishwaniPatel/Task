import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public isSubmitted: boolean
  public registerForm: FormGroup
  constructor(private formBuilder: FormBuilder) {
    this.isSubmitted = false
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(3), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(3), Validators.maxLength(25)]],
      email: [''],
      password: [''],
      phonenumber: [''],
      state: [''],
      city: [''],
      usertype: [''],
      filepath: ['']
    })
  }

  ngOnInit(): void {
  }

  get registerFormControl() {
    return this.registerForm.controls
  }

  registerData() {
    console.log(this.registerForm.value);

  }

}
