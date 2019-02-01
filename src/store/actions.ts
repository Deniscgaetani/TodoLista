import { TodoState } from '../store/state';
import { Todo } from '../app/todo.model';
import { Action } from '@ngrx/store';

export const GET_TODOS = '[Todo] Get All Todos';
export const GET_TODOS_SUCCESS = '[Todo] Get All Todos Sucess';
export const GET_TODOS_FAIL = '[Todo] Get All Todos Fail';

export class GetTodos implements Action {
  readonly type = GET_TODOS;
}

export class GetTodosSuccess implements Action {
  readonly type = GET_TODOS_SUCCESS;
  constructor(public payload: Todo[]) {}
}

export class GetTodosFail implements Action {
  readonly type = GET_TODOS_FAIL;
  constructor(public payload: any) {}
}
// create pizza
export const CREATE_TODO = '[Products] Create Todo';
export const CREATE_TODO_FAIL = '[Products] Create Todo Fail';
export const CREATE_TODO_SUCCESS = '[Products] Create Todo Success';

export class CreateTodo implements Action {
  readonly type = CREATE_TODO;
  constructor(public payload: Todo) {}
}

export class CreateTodoFail implements Action {
  readonly type = CREATE_TODO_FAIL;
  constructor(public payload: any) {}
}

export class CreateTodoSuccess implements Action {
  readonly type = CREATE_TODO_SUCCESS;
  constructor(public payload: Todo) {}
}
// remove pizza
export const REMOVE_TODO = '[Products] Remove Todo';
export const REMOVE_TODO_FAIL = '[Products] Remove Todo Fail';
export const REMOVE_TODO_SUCCESS = '[Products] Remove Todo Success';

export class RemoveTodo implements Action {
  readonly type = REMOVE_TODO;
  constructor(public payload: Todo) {}
}

export class RemoveTodoFail implements Action {
  readonly type = REMOVE_TODO_FAIL;
  constructor(public payload: any) {}
}

export class RemoveTodoSuccess implements Action {
  readonly type = REMOVE_TODO_SUCCESS;
  constructor(public payload: Todo) {}
}

export type todosAction =
  | GetTodos
  | GetTodosSuccess
  | GetTodosFail
  | CreateTodo
  | CreateTodoFail
  | CreateTodoSuccess
  | RemoveTodo
  | RemoveTodoFail
  | RemoveTodoSuccess;
