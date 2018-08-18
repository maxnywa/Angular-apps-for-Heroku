import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TodoItem } from "../models/TodoItem";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs/index";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl:string = environment.api_url;

  constructor(
    private http: HttpClient
  ) { }


  getTodos():Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(`${this.apiUrl}/todos`);
  }
  getTodo(id:string):Observable<TodoItem> {
    return this.http.get<TodoItem>(`${this.apiUrl}/todos/${id}`);
  }
  updateTodo(todo:TodoItem):Observable<TodoItem> {
    return this.http.put<TodoItem>(`${this.apiUrl}/todos/${todo.id}`,todo);
  }


}
