import { Component, OnInit } from '@angular/core';
import { Todo} from '../../todo.model';
import { TODOS} from '../../mock-todo';
import { TodoService } from 'src/shared/todo.service';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  Todos = TODOS;
  todos: Todo[];
  selectedTodo: Todo;
  constructor(private todoService: TodoService,
              ) { }

  ngOnInit() {
    this.getTodos();
  }
  getTodos(): void {
    console.log('aqui');
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }
  add(name: string): void {
    console.log('evento:::', name);
    name = name.trim();
    if (!name) { return; }
    this.todoService.addTodo({ name } as Todo)
      .subscribe(todo => {
        this.todos.push(todo);
      });
  }

  delete(todo: Todo): void {
    this.todos = this.todos.filter(h => h !== todo);
    this.todoService.deleteTodo(todo).subscribe();
  }
  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }
}
