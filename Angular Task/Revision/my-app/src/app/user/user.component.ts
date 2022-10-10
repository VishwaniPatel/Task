import { Component, OnInit} from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  dbuserList:User[];
  updateUSER : User;


  constructor(private userServcie:UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userServcie.getUser().subscribe((users:User[])=>{
      this.dbuserList = users;

    })
  }

  addNewUser(user:User){
    this.userServcie.addUser(user).subscribe((Response) => {
      this.getAllUsers();

    })
  }

  editUser(user:User){
    if(user.id){
      this.userServcie.editUser(user,user.id).subscribe((response) => {
          this.getAllUsers();
      })
    }
    this.addNewUser(user);

  }

  deleteUser(id:number){
    this.userServcie.deleteUser(id).subscribe((Response) => {
      this.getAllUsers();
    })
  }

  editUserDetails(user: User){
    this.updateUSER = user;
  }
}
