import { Component, input, output } from '@angular/core';
import { TodoItem } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';

@Component({
  selector: 'app-todos-component',
  imports: [HighlightCompletedTodoDirective],
  templateUrl: './todos-component.component.html',
  styleUrl: './todos-component.component.css',
  standalone: true
})
export class TodosComponentComponent {
  todo = input.required<TodoItem>();
  todoToggled = output<TodoItem> ();

  todoClicked() {
    this.todoToggled.emit(this.todo())
  }
}
