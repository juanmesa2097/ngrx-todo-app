import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCardFooterComponent } from './todo-card-footer.component';

describe('TodoCardFooterComponent', () => {
  let component: TodoCardFooterComponent;
  let fixture: ComponentFixture<TodoCardFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCardFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
