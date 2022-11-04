import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() userList: User[];
  @Output() userId: EventEmitter<number> = new EventEmitter<number>();
  @Output() editUser: EventEmitter<User> = new EventEmitter<User>();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onDelete(id:number){
    this.userId.emit(id);
  }

  onEdit(user:User){
    this.editUser.emit(user);
    this.router.navigate(['user','edit',user.id])
  }
}
