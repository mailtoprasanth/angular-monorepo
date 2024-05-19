import { createFeatureSelector, createSelector } from "@ngrx/store";
import { cartStore } from "./cart.reducer";

export const cartFeatureSelector = createFeatureSelector<cartStore>('products');

export const cartSelector = createSelector(cartFeatureSelector, (state)=> state.product)