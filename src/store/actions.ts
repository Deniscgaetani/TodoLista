import { Action } from '@ngrx/store';
import { Todo } from '../app/todo.model';

// action constants
export const ADD_TODO = '[Todo] Add Todo';
export const LOAD_TODOS = '[Todo] Load Todos';
export const REMOVE_TODO = '[Todo] Remove Todo';

// action creators
export class AddTodo {
  readonly type = ADD_TODO;
  constructor(private payload: Todo) {}
}
export class LoadTodos {
  readonly type = LOAD_TODOS;
  constructor(private payload: Todo) {}
}
export class RemoveTodo {
  readonly type = REMOVE_TODO;
  constructor(private payload: Todo) {}
}

// action types
export type TodosAction = AddTodo | RemoveTodo | LoadTodos;
