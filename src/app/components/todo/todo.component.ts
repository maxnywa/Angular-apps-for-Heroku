import { Component, OnInit } from '@angular/core';
import { TodoService } from "../../services/todo.service";
import { ActivatedRoute,Router } from "@angular/router";
import { FormGroup, FormControl,Validators } from "@angular/forms";
import { TodoItem } from "../../models/TodoItem";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  todoForm: FormGroup;

  todos:TodoItem[];

  constructor(
    public todoService: TodoService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.todoForm = new FormGroup({
      title: new FormControl('',[Validators.required, Validators.minLength(8)]),
      completed: new FormControl('')
    });

    this.todoService.getTodos().subscribe((todos:TodoItem[])=>{
      this.todos = todos;
    })
  }
  get title() { return this.todoForm.get('title'); }


  onSubmit(){
    console.log(this.todoForm);
    if(this.todoForm.invalid)return;
    const todo:TodoItem = {
      userId: 1,
      title: this.todoForm.value.title ,
      completed: this.todoForm.value.completed || false,
    };
    //Отправляем на сервер, получаем todo с id и выводим в разметку
    this.todos.unshift(todo);
    this.toastr.success('New todo was edded', 'Success!');

    this.todoForm.reset();

  }

}
