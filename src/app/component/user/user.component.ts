import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'my-users',
  templateUrl: './user.component.html',
  styleUrls: [ './user.component.css' ]
})

export class UsersComponent implements OnInit  {
  users: User[];
  selectedUser: User;

  constructor(
    private router: Router,
    private userService: UserService) { }

  getUsers(): void{
    this.userService.getUsers().then(users => this.users = users);
  }

  ngOnInit(): void {
    //this.userService.getUsers();
    this.getUsers();
  }
    
  onSelect(user: User): void {
    this.selectedUser = user;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedUser.id]);
  }
}