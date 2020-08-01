import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/Todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      console.log(todos);
      this.todos = todos;
    });
    // this.todos = [
    //   {
    //     id: 1,
    //     title: 'Do groceries',
    //     completed: false,
    //   },
    //   {
    //     id: 2,
    //     title: 'Do laundry',
    //     completed: true,
    //   },
    //   {
    //     id: 3,
    //     title: 'Master Angular',
    //     completed: false,
    //   },
    // ];
  }

  deleteTodo(todo: Todo) {
    //console.log('delete me');
    //delete from UI
    this.todos = this.todos.filter((t) => t.id !== todo.id);
    //delete on server
    this.todoService.deleteTodo(todo).subscribe((todo) => {
      console.log(todo); //! {} 빈 객체만 찍힘
    });
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe((todo) => {
      this.todos.push(todo);
    });
  }
}
