import { inject, Injectable } from '@angular/core';
import { TodoItem } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  http = inject(HttpClient);
  
    getTodosFromAPI() {
      const url = 'https://jsonplaceholder.typicode.com/todos';
      return this.http.get<Array<TodoItem>>(url)
    }
}