import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import  { AboutComponent } from "./components/about/about.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import {UserEditComponent} from "./components/user-edit/user-edit.component";
import {TodoComponent} from "./components/todo/todo.component";
import {TodoItemEditComponent} from "./components/todo-item-edit/todo-item-edit.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { SignUpComponent } from "./components/sign-up/sign-up.component";

const routes:Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path:'', component: HomeComponent, canActivate: [AuthGuard] },
  { path:'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path:'todo', component: TodoComponent, canActivate: [AuthGuard] },
  { path:'user/:id',component: UserEditComponent, canActivate: [AuthGuard] },
  { path:'todo/:id',component: TodoItemEditComponent, canActivate: [AuthGuard] },
  { path:'**', component: NotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  providers: [AuthGuard]

})
export class RoutingModule { }
