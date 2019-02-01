import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Observable} from 'rxjs';

import { Todo } from '../app/todo.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class TodoService {

  private todosUrl = 'api/todos';  // URL to web api

  constructor(
    private http: HttpClient,
    ) { }

  /** GET todos from the server */
  getTodos (): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl)
    .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
  //////// Save methods //////////

  /** POST: add a new todo to the server */
  addTodo (payload: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, payload, httpOptions)
    .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  /** DELETE: delete the todo from the server */
  deleteTodo (payload: Todo | number): Observable<Todo> {
    const id = typeof payload === 'number' ? payload : payload.id;
    const url = `${this.todosUrl}/${id}`;
    return this.http.delete<Todo>(url, httpOptions)
    .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
