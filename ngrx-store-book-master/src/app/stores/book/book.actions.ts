import { createAction, props } from "@ngrx/store";
import { GetBook, PostBook } from "src/app/typings/api.typings";



export const addBook = createAction('[Book] Add Book',props<{book:PostBook}>())

export const addBookSuccess  = createAction('[Book] Add Book Successfully Done')


export const addBookFailure = createAction('[Book] Add Book Failure' ,props<{error: any}>())

export const getAllBooks = createAction('[Books] Get All Books');

export const getBooksSuccess = createAction('[Books] Get All Books Success');


export const setAllBooks = createAction('[Books] Set All Books',props<{books:GetBook[]}>())



export const getAllBooksFailure = createAction('[Books] Get All Books Failure',props<{error:any}>())


