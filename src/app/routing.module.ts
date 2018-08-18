import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import  { AboutComponent } from "./components/about/about.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import {UserEditComponent} from "./components/user-edit/user-edit.component";
import {TodoComponent} from "./components/todo/todo.component";
import {TodoItemEditComponent} from "./components/todo-item-edit/todo-item-edit.component";

const routes:Routes = [
  { path:'', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'todo', component: TodoComponent },
  { path:'user/:id',component: UserEditComponent },
  { path:'todo/:id',component: TodoItemEditComponent },
  { path:'**', component: NotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]

})
export class RoutingModule { }
