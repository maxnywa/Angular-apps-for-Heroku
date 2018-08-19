import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import {User} from "../../models/User";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[];

  constructor(
    public userService: UsersService,
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data:User[])=>{
      this.users = data;
    });
  }

}
