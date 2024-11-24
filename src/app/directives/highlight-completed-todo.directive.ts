import { Directive, input, signal, effect } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
  standalone: true
})
export class HighlightCompletedTodoDirective {

  isCompleted = input(false)

  constructor() { }

  stylesEffect = effect(() => {
    
  })
}
