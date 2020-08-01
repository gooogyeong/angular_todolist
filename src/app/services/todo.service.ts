import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

//allows us to inject it into a constructor,  into a component
@Injectable({
  providedIn: 'root',
})

//other than that, it's just another class.
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    //asynchronous operation; 아마도 promise를 반환!?
    console.log(this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`));
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
    // return [
    //   {
    //     id: 1,
    //     title: 'Do groceries',
    //     completed: false,
    //   },
    //   {
    //     id: 2,
    //     title: 'Do laundry',
    //     completed: false,
    //   },
    //   {
    //     id: 3,
    //     title: 'Master Angular',
    //     completed: false,
    //   },
    // ];
  }

  //! Observable<any> because it "not gonna be formatted as an exact Todo, since it has user_id"?!
  //! 아니 그럼 위에건?

  //데이터를 보낼거기떄문에 header에 content-type을 담은 httpOptions가 필요
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }
}
