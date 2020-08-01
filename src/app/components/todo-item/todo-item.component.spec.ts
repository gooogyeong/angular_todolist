import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoITemComponent } from './todo-item.component';

describe('TodoITemComponent', () => {
  let component: TodoITemComponent;
  let fixture: ComponentFixture<TodoITemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoITemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoITemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
