import { Component, OnInit } from '@angular/core';
import { TodoService } from "../../services/todo.service";
import { ActivatedRoute,Router } from "@angular/router";
import { TodoItem } from "../../models/TodoItem";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  todos:TodoItem[];
  newTodo:TodoItem = {
    userId: 1,
    title: '',
    completed: false
  };

  constructor(
    public todoService: TodoService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos:TodoItem[])=>{
      this.todos = todos;
    })
  }
  onAdd(form){
    if(form.invalid)return;
    const todo:TodoItem = {
      userId: 1,
      title: this.newTodo.title ,
      completed: this.newTodo.completed,
    };
    //Отправляем на сервер, получаем todo с id и выводим в разметку
    this.todos.unshift(todo);
    this.toastr.success('New todo was edded', 'Success!');
    form.resetForm();
  }
}
