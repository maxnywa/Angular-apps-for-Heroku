import { Component, OnInit } from '@angular/core';
import { TodoService } from "../../services/todo.service";
import { ActivatedRoute,Router } from "@angular/router";
import { TodoItem } from "../../models/TodoItem";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  todos:TodoItem[];

  constructor(
    public todoService: TodoService,
  ) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos:TodoItem[])=>{
      console.log(todos);
      this.todos = todos;
    })
  }


}
