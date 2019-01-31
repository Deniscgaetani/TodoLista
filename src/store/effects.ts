import { TodoState } from '../store/state';
import { Injectable } from '@angular/core';
import {
  Observable,
  Subject,
  asapScheduler,
  pipe,
  of,
  from,
  interval,
  merge,
  fromEvent
} from 'rxjs';
import { switchMap, map, filter, scan, catchError } from 'rxjs/operators';
import { webSocket } from 'rxjs/webSocket';

import { ajax } from 'rxjs/ajax';
import { TestScheduler } from 'rxjs/testing';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as TodoActions from '../store/actions';

import { HttpClient } from '@angular/common/http';
import { TodoService } from 'src/shared/todo.service';

@Injectable()
export class TodoEffects {
  constructor(
    private http: HttpClient,
    private todoService: TodoService,
    private actions$: Actions
  ) {}

  @Effect()
  loadTodos$ = this.actions$.pipe(
    switchMap(() => {
      return this.todoService.getTodos().pipe(
/*         map(todos => new TodoActions.GetTodoSuccess()),
 */      );
    })
  );
}
