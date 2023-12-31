import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addBook, addBookFailure, addBookSuccess, deleteBook, getAllBooks, getAllBooksFailure, setAllBooks } from "./book.actions";
import { catchError, map, mergeMap, switchMap, take, takeLast } from "rxjs";
import { BookService } from "src/app/stores-services/book.service";


@Injectable()
export class BookEffects {
     constructor(private actions$: Actions , private bookService:BookService) {}


    addBook$ = createEffect( () => {
      return this.actions$.pipe(
        ofType(addBook),
        mergeMap((action) => {
          return this.bookService.onAddBook(action.book).pipe(
            map(() => getAllBooks()),
            catchError(async (err) => addBookFailure({error:err}))
          )
        })
      );
    })

    getAllBooks$ = createEffect(()=> {
        return this.actions$.pipe(
          ofType(getAllBooks),
          switchMap(() => {
            return this.bookService.onGetAllBooks().pipe(
                map((books)=> setAllBooks({books:books.body})),
                catchError(async (err) => getAllBooksFailure({ error: err }))
            )
          })
        )


    })

        deleteBooks$ = createEffect(()=> {
        return this.actions$.pipe(
          ofType(deleteBook),
          switchMap((action) => {
            return this.bookService.onDeleteBook(action.params).pipe(
                map((books)=> getAllBooks()),
                catchError(async (err) => getAllBooksFailure({ error: err }))
            )
          })
        )


    })



}
