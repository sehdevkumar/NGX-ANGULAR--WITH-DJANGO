import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpclientService } from './services/httpclient.service';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './stores-services/book.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RegisterAuthorsComponent } from './book-views/register-authors/register-authors.component';
import { AddBooksComponent } from './book-views/add-books/add-books.component';
import { ReactiveFormsModule } from '@angular/forms';
import { bookReducer } from './stores/book/book.reducers';
import { BookEffects } from './stores/book/book.effects';
import { authorReducers } from './stores/author/author.reducers';
import { AuthorService } from './stores-services/author.service';
import { AuthorEffects } from './stores/author/author.effects';
import { ViewAuthorsComponent } from './book-views/view-authors/view-authors.component';
import { TabNavbarComponent } from './containers/tab-navbar/tab-navbar.component';
import { tabReducer } from './stores/tabs/tab.reducers';

@NgModule({
  declarations: [
    AppComponent,
    RegisterAuthorsComponent,
    AddBooksComponent,
    ViewAuthorsComponent,
    TabNavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      books: bookReducer,
      authors:authorReducers,
      tabs:tabReducer
    }),
    EffectsModule.forRoot([BookEffects,AuthorEffects]),
    ReactiveFormsModule
  ],
  providers: [HttpclientService,BookService,AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
