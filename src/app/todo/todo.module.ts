import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoCardFooterComponent } from './todo-card-footer/todo-card-footer.component';

@NgModule({
  declarations: [TodoAddComponent, TodoCardComponent, TodoContainerComponent, TodoCardFooterComponent],
  imports: [CommonModule],
  exports: [TodoContainerComponent],
})
export class TodoModule {}
