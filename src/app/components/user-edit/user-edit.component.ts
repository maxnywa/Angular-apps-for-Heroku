import {Component, EventEmitter, OnInit} from '@angular/core';
import { UsersService } from "../../services/users.service";
import { ActivatedRoute,Router } from "@angular/router";
import {User} from "../../models/User";
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";


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
    private toastr: ToastrService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.userService.getUser(this.userId).subscribe((user:User) =>{
      this.user = user;
      this.initForm();
    })
  }
  initForm(){
    this.userForm = this.fb.group({
      name: [`${this.user.name}`,[Validators.required, Validators.minLength(8)]],
      username: [`${this.user.username}`,[Validators.required]],
      email: [`${this.user.email}`,[Validators.required, Validators.email]],
      street: [`${this.user.address.street}`,[Validators.required]],
      suite: [`${this.user.address.suite}`,[Validators.required]],
    })

  };

  get name() { return this.userForm.get('name'); }
  get username() { return this.userForm.get('username'); }
  get email() { return this.userForm.get('email'); }
  get street() { return this.userForm.get('street'); }
  get suite() { return this.userForm.get('suite'); }

  onSave(){
    this.isReadOnly = true;
    let updtUser = Object.assign({},this.user);
    updtUser = Object.assign(updtUser, this.userForm.value);

    this.userService.updateUser(updtUser).subscribe((response: User) => {
      this.toastr.success('Data edited!', 'Success!');
      this.router.navigate(['/']);

    },error => {
      this.toastr.error('Something wrong!', 'Error!');
      console.log(error)
    });
  }

}
