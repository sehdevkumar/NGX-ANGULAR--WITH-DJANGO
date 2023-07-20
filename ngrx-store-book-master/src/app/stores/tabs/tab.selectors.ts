import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TabsInterface } from "src/app/typings/api.typings";



const featureSelector = createFeatureSelector<TabsInterface>('tabs')

export const tabSelector = createSelector(featureSelector,(state)=> state);
