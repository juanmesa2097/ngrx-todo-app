import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-todo-app';
  todos: { id: number; name: string }[];

  constructor() {
    this.todos = [
      { id: 1, name: 'Take the dog out' },
      { id: 2, name: 'Do homework' },
      { id: 3, name: 'Play some videogames' },
      { id: 4, name: 'Read a book' },
      { id: 5, name: 'Ride my motorcycle' },
      { id: 6, name: 'Fight my cat' },
    ];
  }
}
