import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
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
import { TodoService } from 'src/shared/todo.service';
import * as fromActions from '../store/actions';
import { map, switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  @Effect()
  getTodos$ = this.actions$.pipe(
    ofType(fromActions.GET_TODOS),
    switchMap(() => {
      return this.todoService.getTodos().pipe(
        map(todos => new fromActions.GetTodosSuccess(todos)),
        catchError(error => of(new fromActions.GetTodosFail(error)))
      );
    })
  );

  @Effect()
  createTodos$ = this.actions$.pipe(
    ofType(fromActions.CREATE_TODO),
    map((action: fromActions.CreateTodo) => action.payload),
    switchMap(todo => {
      return this.todoService.addTodo(todo).pipe(
        map(todos => new fromActions.CreateTodoSuccess(todos)),
        catchError(error => of(new fromActions.CreateTodoFail(error)))
      );
    })
  );

  @Effect()
  removeTodos$ = this.actions$.pipe(
    ofType(fromActions.REMOVE_TODO),
    map((action: fromActions.RemoveTodo) => action.payload),
    switchMap(todo => {
      return this.todoService.deleteTodo(todo).pipe(
        map(() => new fromActions.RemoveTodoSuccess(todo)),
        catchError(error => of(new fromActions.RemoveTodoFail(error)))
      );
    })
  );
}

export const effects: any[] = [TodosEffects];
