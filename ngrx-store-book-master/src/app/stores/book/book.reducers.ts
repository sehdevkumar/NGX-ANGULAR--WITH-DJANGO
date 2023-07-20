import { createReducer, on } from "@ngrx/store";
import { addBook, addBookFailure, addBookSuccess, getAllBooks, getAllBooksFailure, getBooksSuccess, setAllBooks } from "./book.actions";
import { PostBook, GetBook } from "src/app/typings/api.typings";



export interface  BookState {
   postBook:PostBook | null;
   getBooks:GetBook[] | null;
   postBookError: any | null;
   getBooksError: any | null;
}


const initialState:BookState = {
  postBook: null,
  getBooks: [],
  postBookError: undefined,
  getBooksError: undefined
}


export const bookReducer  = createReducer(
initialState,
on(addBook,(state, {book}) =>  ({...state , postBook:book ,postBookError: null})),
on(addBookSuccess,(state)=> ({...state , postBook:null,postBookError:null})),
on(addBookFailure,(state,{error})=> ({...state,postBook:null,error:error})),

on(getAllBooks,(state) =>  ({...state ,postBookError: null})),
on(getBooksSuccess,(state)=> ({...state ,postBookError:null})),
on(getAllBooksFailure,(state,{error})=> ({...state,postBook:null,error:error})),
on(setAllBooks,(state, {books})=> ({...state , getBooks:books , getBooksError: null}))
)
