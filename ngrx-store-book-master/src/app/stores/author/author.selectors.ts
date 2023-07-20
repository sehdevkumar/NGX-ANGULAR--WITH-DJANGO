import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthorsState } from "./author.reducers";




const createAuthorFeatireSelector = createFeatureSelector<AuthorsState>('authors')



// Retrieve the postBook data
export const selectPostAuthor = createSelector(
  createAuthorFeatireSelector,
  (state: AuthorsState) => state.postAuthor
);

export const selectPostAuthorSuccess = createSelector(createAuthorFeatireSelector,(state)=>state);

export const selectGetAuhtors = createSelector(
  createAuthorFeatireSelector,
  (state: AuthorsState) => state.getAuhtors
);


export const selectGetAuthorFailure = createSelector(
  createAuthorFeatireSelector,
  (state: AuthorsState) => state.error
);



