import { createReducer, on } from "@ngrx/store";
import { GetAuthor, PostAuthor } from "src/app/typings/api.typings";
import { getAuthors, getAuthorsFailure, postAuthorAction, postAuthorFailure, postAuthorSuccess, setAllAuthors } from "./author.actions";


export interface AuthorsState {
   getAuhtors: GetAuthor[],
   postAuthor:PostAuthor,
   error:any
}


const initialState:AuthorsState = {
  getAuhtors: [],
  postAuthor: undefined,
  error: undefined
}



export const authorReducers = createReducer(
 initialState,
 on(postAuthorAction,(state,{postAuhtor}) => ({...state, postAuthor:postAuhtor,error:null})),
 on(postAuthorFailure,(state,{error}) => ({...state, error:error})),
 on(postAuthorSuccess,(state) => ({...state,error:null})),

 on(getAuthors,(state) => ({...state,error:null})),
 on(getAuthorsFailure,(state,{error}) => ({...state, error:error})),
 on(setAllAuthors,(state,{getAuhtors}) => ({...state,getAuhtors:getAuhtors ,error:null})),

)
