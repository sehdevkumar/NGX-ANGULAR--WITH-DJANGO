import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap, throwError } from "rxjs";
import { AuthorService } from "src/app/stores-services/author.service";
import { deleteAuthors, postAuthorAction, postAuthorFailure, postAuthorSuccess } from "./author.actions";
import { getAuthors } from "./author.actions";
import { setAllAuthors } from "./author.actions";
import { getAuthorsFailure } from "./author.actions";


@Injectable()
export class AuthorEffects {

  constructor(private actions$:Actions , private authorService:AuthorService) {}


   postAuthors$ = createEffect(():any=> {
   return this.actions$.pipe(
      ofType(postAuthorAction),
      switchMap(action => this.authorService?.onPostAuthor(action.postAuhtor)
        .pipe(
          map(() =>  postAuthorSuccess()),
          catchError((error): any => {
           return of(postAuthorFailure({ error: error }));
          }),
        ))
    )
   })



   getAuthors$ = createEffect(():any=> {
    return this.actions$?.pipe(
      ofType(getAuthors),
      switchMap(() => {
       return this.authorService?.onGetAllAuthors()
        .pipe(
          map((data)=> {
            return  setAllAuthors({getAuhtors:data?.body})
          }),
          catchError((error):any => {
             return of(getAuthorsFailure({error:error}))
          })
        )
      })
    )
   })


    deleteAuthors$ = createEffect(():any=> {
    return this.actions$?.pipe(
      ofType(deleteAuthors),
      switchMap((action) => {
       return this.authorService?.onDeleteAuthor(action.postAuthor)
        .pipe(
          map((data)=> {
            return  getAuthors()
          }),
          catchError((error):any => {
             return of(getAuthorsFailure({error:error}))
          })
        )
      })
    )
   })


}


