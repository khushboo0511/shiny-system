import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from '../model/todo.type';

@Pipe({
  name: 'filterTodos',
  standalone: true
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: TodoItem[] = [], searchTerm: string): TodoItem[] {
    if (!todos.length || !searchTerm.trim()) {
      return todos;
    }
  
    const text = searchTerm.trim().toLowerCase();
  
    return todos.filter((todo) =>
      todo.title.toLowerCase().includes(text)
    );
  }
  
}
