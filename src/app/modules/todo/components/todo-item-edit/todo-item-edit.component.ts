import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { TodoService } from "../../../../services/todo.service";
import { TodoItem } from "../../../../models/TodoItem";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-item-edit',
  templateUrl: './todo-item-edit.component.html',
  styleUrls: ['./todo-item-edit.component.css']
})
export class TodoItemEditComponent implements OnInit {
  todoId:string;
  todo:TodoItem;
  isReadOnly = true;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public todoService: TodoService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.todoId = this.activatedRoute.snapshot.params['id'];
    console.log(this.todoId);
    this.todoService.getTodo(this.todoId).subscribe((todo:TodoItem) =>{
      this.todo = todo;
    })
  }
  onSave(){
    this.isReadOnly = true;

    const updtTodo = Object.assign({},this.todo);
    this.todoService.updateTodo(updtTodo).subscribe((response: TodoItem) => {
      this.toastr.success('Todo edited!', 'Success!');
      this.router.navigate(['/']);
      console.log(response);
    },error => {
      this.toastr.success('Something wrong!', 'Error!');
      console.log(error)
    });
  }
}
