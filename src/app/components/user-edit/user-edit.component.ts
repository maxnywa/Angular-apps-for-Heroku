import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { ActivatedRoute,Router } from "@angular/router";
import {User} from "../../models/User";
import { ToastrService } from 'ngx-toastr';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userId: string;
  user: User;
  isReadOnly = true;
  userForm: FormGroup;


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

      this.userForm = new FormGroup({
        name: new FormControl(`${user.name}`,[Validators.required, Validators.minLength(8)]),
        username: new FormControl(`${user.username}`,[Validators.required]),
        email: new FormControl(`${user.email}`,[Validators.required, Validators.email]),
        street: new FormControl(`${user.address.street}`,[Validators.required]),
        suite: new FormControl(`${user.address.suite}`,[Validators.required]),
      });
    })



  }
  onBlur(input_name){
    if (this.userForm.get(`${input_name}`).invalid
      && (this.userForm.get(`${input_name}`).dirty || this.userForm.get(`${input_name}`).touched)) return true;
  }
  get name() { return this.userForm.get('name'); }
  get username() { return this.userForm.get('username'); }
  get email() { return this.userForm.get('email'); }
  get street() { return this.userForm.get('street'); }
  get suite() { return this.userForm.get('suite'); }

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
