import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from "./components/todo/todo.component";
import { TodoItemEditComponent } from "./components/todo-item-edit/todo-item-edit.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TodoComponent,
    TodoItemEditComponent,
  ]
})
export class TodoModule { }
