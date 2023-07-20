import { createReducer, on } from "@ngrx/store";
import { TabsInterface } from "src/app/typings/api.typings";
import { tabAction } from "./tab.actions";


export interface tabState {
   tab:TabsInterface;
}

const initialState:tabState = {
  tab: undefined
}

export const tabReducer = createReducer(
 initialState,
 on(tabAction,(state,{tab})=> ({...state ,tab:tab}))

)
