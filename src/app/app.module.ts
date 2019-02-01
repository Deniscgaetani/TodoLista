import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from '../shared/material-module';
import { TodoComponent } from './todos/todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/shared/in-memory.service';
import { TodosEffects } from '../store/effects';
import * as TodoReducer from '../store/reducers';

// ngrx stuff
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from '../store/reducers';
import { reducers } from '../store/reducers';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

// this would be done dynamically with webpack for builds
const environment = {
  development: true,
  production: false
};

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];
@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    StoreModule.forRoot({}, { metaReducers }),
    StoreModule.forFeature('todos', reducers),
    EffectsModule.forRoot([TodosEffects]),
    environment.development ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
