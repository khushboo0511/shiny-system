import { Component, inject, input, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { TodoItem } from '../model/todo.type';
import { catchError } from 'rxjs';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { TodosComponentComponent } from '../components/todos-component/todos-component.component';
import {FormsModule } from '@angular/forms'
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  imports: [NgIf, TodosComponentComponent, FormsModule, FilterTodosPipe, CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  standalone: true
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);

  yourMessage = input('');

  todoItems = signal<Array<TodoItem>>([])

  searchTerm: string = '';
  
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

  updateTodoItem(todoItem: TodoItem) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed, 
          };
        }
        return todo; 
      });
    });
  }
}
