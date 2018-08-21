import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      username: new FormControl('', [Validators.required,Validators.minLength(3)]),
      password: new FormControl('', [Validators.minLength(8), Validators.required]),
    })
  }

  get email() { return this.signUpForm.get('email'); }
  get username() { return this.signUpForm.get('username'); }
  get password() { return this.signUpForm.get('password'); }

  onSubmit(){
    this.auth.signUp(this.signUpForm.value.email,this.signUpForm.value.username, this.signUpForm.value.password,).subscribe((res:boolean)=>{
      if(res) this.router.navigate(['login']);
      this.toastr.success('New user added! Please login ','Success')
      this.signUpForm.reset();
    }, ({error, status}) => {
      this.toastr.error(`${status}:${error}`,'Error')
    });
  }

}
