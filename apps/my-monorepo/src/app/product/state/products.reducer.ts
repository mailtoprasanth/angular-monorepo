import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../model/product.model';
import * as productAction from './products.action';

export interface productState {
  products: IProduct[];
  error: string | null;
}

export const initialState: productState = {
  products: [],
  error: null,
};

export const productReducer = createReducer(
  initialState,
  on(productAction.loadProductSuccess, (state, { products }) => ({
    ...state,
    products,
    error: null,
  })),
  on(productAction.loadProductFail, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage,
  }))
);
