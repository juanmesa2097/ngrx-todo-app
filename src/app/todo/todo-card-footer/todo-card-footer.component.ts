import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todo-card-footer',
  templateUrl: './todo-card-footer.component.html',
  styleUrls: ['./todo-card-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoCardFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
