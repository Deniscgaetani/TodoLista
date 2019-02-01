import * as fromActions from '../store/actions';
import * as fromState from '../store/state';
import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

export function reducer(
  state = fromState.initialState,
  action: fromActions.todosAction
): fromState.TodoState {
  switch (action.type) {
    case fromActions.GET_TODOS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromActions.GET_TODOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }

    case fromActions.GET_TODOS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case fromActions.CREATE_TODO_SUCCESS: {
      const todo = action.payload;
      const data = [...state.data, todo];
      return {
        ...state,
        data
      };
    }
    case fromActions.REMOVE_TODO_SUCCESS: {
      const data = state.data.filter(todo => todo !== action.payload);

      return {
        ...state,
        data
      };
    }
  }

  return state;
}

export const getTodosLoading = (state: fromState.TodoState) => state.loading;
export const getTodosLoaded = (state: fromState.TodoState) => state.loaded;
export const getTodos = (state: fromState.TodoState) => state.data;

export interface ProductsState {
  todos: fromState.TodoState;
}
export const reducers: ActionReducerMap<ProductsState> = {
  todos: reducer
};
