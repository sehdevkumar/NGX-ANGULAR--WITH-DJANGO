import { createAction, props } from "@ngrx/store";
import { TabsInterface } from "src/app/typings/api.typings";


export const tabAction = createAction('Tab Clicked' ,props<{tab:TabsInterface}>())
