import { Component, signal } from '@angular/core';
import { GreetingsComponent } from "../components/greetings/greetings.component";
import { CounterComponent } from "../components/counter/counter.component";
import { TodosComponent } from "../todos/todos.component";

@Component({
  selector: 'app-home',
  imports: [GreetingsComponent, CounterComponent, TodosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})
export class HomeComponent {
  homeMessage = signal('Message in Greeting');
  
  keyUpHandler() {
    console.log('User typed something in the input');

  }

  todoMessage = signal("This is your todo message");
}
