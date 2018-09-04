import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { TodoComponent } from "./modules/todo/components/todo/todo.component";
import { AuthGuard } from "./guards/auth.guard";

import { homeRoutes } from "./modules/home-module/home-routing";
import { authRoutes } from "./modules/auth/auth-routing"
import { todoRoutes } from "./modules/todo/todo-routing";
import { userRoutes } from "./modules/user/user-routing";
import {LoginComponent} from "./modules/auth/components/login/login.component";
import {SignUpComponent} from "./modules/auth/components/sign-up/sign-up.component";



const routes:Routes = [
  { path: 'auth', children: [...authRoutes] },
  { path: '', children: [...homeRoutes], canActivate: [AuthGuard] },
  { path:'todo', component: TodoComponent, canActivate: [AuthGuard] },
  { path:'todo/:id',children: [...todoRoutes], canActivate: [AuthGuard] },
  { path:'user/:id',children: [...userRoutes], canActivate: [AuthGuard] },
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
