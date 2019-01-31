import * as fromActions from './actions';
import { Todo } from '../app/todo.model';

export interface TodoState {
 data: Todo[];
}
export const initialState = {
  data: [],
};

export function reducer(
  state = initialState,
  action: fromActions.TodosAction
) {
  switch (action.type) {
    case fromActions.LOAD_TODOS: {
      const todo = action;
      const data = [...state.data, todo];
      return {
        ...state,
        data,
      };
    }
    case fromActions.ADD_TODO: {
      const todo = action;
      const data = [...state.data, todo];
      return {
        ...state,
        data,
      };
    }

    case fromActions.REMOVE_TODO: {
      const data = state.data.filter(
        todo => todo.id !== action
      );

      return {
        ...state,
        data,
      };
    }
  }

  return state;
}
