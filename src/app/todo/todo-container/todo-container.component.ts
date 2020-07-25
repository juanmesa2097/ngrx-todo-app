import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoContainerComponent implements OnInit {
  @Input() todos: { id: number; name: string }[];

  constructor() {}

  ngOnInit(): void {}

  trackByTodo(index, todo): number {
    return todo.id;
  }
}
