import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/Todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoITemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  //deleted: boolean = false;
  ngOnInit(): void {}

  // set dynamic classes;
  // completed이 true일 경우에만 .is-complete class를 적용시키고 싶음
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed, // 이때 this.todo는 Input으로 전달되는 todo를 지시함
      //deleted: this.deleted,
    };
    return classes;
  }

  onToggle(todo) {
    //Toggle in UI
    todo.completed = !todo.completed;
    //Toggle on server
    this.todoService.toggleCompleted(todo).subscribe((todo) => {
      console.log(todo.completed);
    });
  }

  onDelete(todo) {
    //console.log('delete');
    this.deleteTodo.emit(todo);
    // this.todoService.deleteTodo(todo).subscribe((todo) => {
    //   this.deleted = true;
    // });
  }
}
