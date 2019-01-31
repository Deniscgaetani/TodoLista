import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { AppComponent } from './app.component';
import { MaterialModule } from '../shared/material-module';
import { TodoComponent } from './todos/todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/shared/in-memory.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from '../store/effects';
import * as TodoReducer from '../store/reducers';

// this would be done dynamically with webpack for builds
const environment = {
  development: true,
  production: false
};
export const metaReducers: MetaReducer<any>[] = [];
@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    StoreModule.forRoot({ todos: TodoReducer.TodoReducer }),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
