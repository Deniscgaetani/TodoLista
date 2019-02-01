import { Todo } from '../app/todo.model';

export interface TodoState {
  data: Todo[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: TodoState = {
  data: [
    { id: 1, name: 'Mr. Redux' },
    { id: 2, name: 'Mr. Redux 2' },
    { id: 3, name: 'Mr. Redux 3' }
  ],
  loaded: false,
  loading: false
};
