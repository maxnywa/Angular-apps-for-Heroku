import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { ActivatedRoute,Router } from "@angular/router";
import {User} from "../../models/User";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userId: string;
  user: User;
  isReadOnly = true;


  constructor(
    public userService: UsersService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.userService.getUser(this.userId).subscribe((user:User) =>{
      this.user = user;
    })
  }

  onEdit(){
    this.isReadOnly = true;
    const updtUser = Object.assign({},this.user);
    this.userService.updateUser(updtUser).subscribe((response: User) => {
      this.router.navigate(['/']);
      console.log(response);
    },error => {
      console.log(error)
    });
  }

}
