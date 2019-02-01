import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo.model';
import { TODOS } from '../../mock-todo';
import { TodoService } from 'src/shared/todo.service';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';
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
import * as TodoAction from '../../../store/actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  Todos = TODOS;
  todos: Todo[];
  selectedTodo: Todo;
  constructor(
    private todoService: TodoService,
    private store: Store<fromStore.ProductsState>
  ) {}
  todos$: Observable<Todo[]>;

  ngOnInit() {
    this.todos$ = this.store.select(fromStore.getAllTodos);
    this.store.dispatch(new fromStore.GetTodos());
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.store.dispatch(new fromStore.CreateTodo({ name } as Todo));
  }

  delete(todo: Todo): void {
    this.store.dispatch(new fromStore.RemoveTodo(todo));
  }
  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }
}
