import { Component, inject, input, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { TodoItem } from '../model/todo.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [NgIf],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  standalone: true
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);

  yourMessage = input('');

  todoItems = signal<Array<TodoItem>>([])
  
  ngOnInit(): void {
    this.todoService
    .getTodosFromAPI().pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    ).subscribe((todos) => {
      this.todoItems.set(todos);
    })
  }
}
