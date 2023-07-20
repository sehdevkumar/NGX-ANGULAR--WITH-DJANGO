import { GetAuthor, PostAuthor } from 'src/app/typings/api.typings';
import { createAction, props } from "@ngrx/store";



// Post Authors
export const postAuthorAction = createAction(
  'Create Author',
   props<{postAuhtor:PostAuthor}>()
)

export const postAuthorFailure = createAction('Auhor Post Failed',props<{error:any}>())

export const postAuthorSuccess = createAction('Author Successfully Posted')



// Get Authors
export const getAuthors = createAction('Get All Authors')

export const setAllAuthors  = createAction('Set All Authors',props<{getAuhtors:GetAuthor[]}>())

export const getAuthorsFailure = createAction('Auhor Get Failed',props<{error:any}>())


// Delete Authors
export const deleteAuthors = createAction('Delete Author' , props<{postAuthor:GetAuthor}>())



