import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromState from '../store/state';
import * as fromReducers from '../store/reducers';

export const getProductsState = createFeatureSelector<fromReducers.ProductsState>('todos');


// pizzas state
export const getTodoState = createSelector(
  getProductsState,
  (state: fromReducers.ProductsState) => state.todos
);

export const getAllTodos = createSelector(
  getTodoState,
  fromReducers.getTodos
);

export const getAllTodosLoaded = createSelector(
  getTodoState,
  fromReducers.getTodosLoaded
);

export const getAllTodosLoading = createSelector(
  getTodoState,
  fromReducers.getTodosLoading
);
