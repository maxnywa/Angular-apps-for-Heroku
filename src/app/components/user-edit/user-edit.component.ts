import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { ActivatedRoute,Router } from "@angular/router";
import {User} from "../../models/User";
import { ToastrService } from 'ngx-toastr';

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
    public router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.userService.getUser(this.userId).subscribe((user:User) =>{
      this.user = user;
    })
  }

  onSave(){
    this.isReadOnly = true;
    const updtUser = Object.assign({},this.user);
    this.userService.updateUser(updtUser).subscribe((response: User) => {
      this.toastr.success('Data edited!', 'Success!');
      this.router.navigate(['/']);
      console.log(response);
    },error => {
      this.toastr.success('Something wrong!', 'Error!');
      console.log(error)
    });
  }

}
