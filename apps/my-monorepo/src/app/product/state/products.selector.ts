import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productState } from './products.reducer';

export const productsFeatureSelector =
  createFeatureSelector<productState>('products');

export const productSelector = createSelector(
  productsFeatureSelector,
  (state: productState) => state.products
);

export const productErrorSelector = createSelector(
  productsFeatureSelector,
  (state: productState) => state.error
);
