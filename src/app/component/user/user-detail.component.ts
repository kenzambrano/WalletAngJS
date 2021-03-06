import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';


import { User }         from './user';
import { UserService }  from '../../service/user.service';

@Component({
    selector: 'user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: [ './user-detail.component.css' ]
  
})

export class UserDetailComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}  

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
      .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }
}