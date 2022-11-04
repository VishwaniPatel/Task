import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() public set updatedUser(value: User) {
    if (value) {
      this.updateUser = value;
      this.patchFormValues(value);
      // this.userform.patchValue(this.updatedUser);
    }
  }
  @Output() userFormDetails: EventEmitter<User> = new EventEmitter<User>();
  public userform: FormGroup;
  public isSubmitted: boolean = false;
  public title: string;
  private updateUser = User;

  constructor(private formbuilder: FormBuilder) { 
    this.userform = new FormGroup('');
    this.userform = this.formbuilder.group({});
    this.title = "Add";
  }

  ngOnInit(): void {    
    this.userform = this.formbuilder.group({
      id: [],
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(3)]],
      gender: ['', [Validators.required]],
      dob: ['', Validators.required],
      salary: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }
  patchFormValues(values: User) {
    this.userform.patchValue(values);
  }

 
  submitUserData(){
    this.isSubmitted = true;
    if(this.userform.valid){
      this.isSubmitted = false;
      this.userFormDetails.emit(this.userform.value);
      this.userform.reset();
    }
    
  }

}
