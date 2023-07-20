import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState } from './book.reducers';


// Create a feature selector to select the book state
const selectBookState = createFeatureSelector<BookState>('books');

// Retrieve the postBook data
export const selectPostBook = createSelector(
  selectBookState,
  (state: BookState) => state.postBook
);

// Retrieve the getBooks data
export const selectGetBooks = createSelector(
  selectBookState,
  (state: BookState) => state.getBooks
);


