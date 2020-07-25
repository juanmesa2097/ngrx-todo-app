import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [
    TodoAddComponent,
    TodoContainerComponent,
    TodoFooterComponent,
    TodoItemComponent,
  ],
  imports: [CommonModule],
  exports: [TodoContainerComponent],
})
export class TodoModule {}
