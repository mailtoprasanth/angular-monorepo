import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../../model/product.model';
import * as cartActions from './cart.action';

export interface cartStore {
  product: IProduct[];
}

export const initialCartState: cartStore = {
  product: [],
};
export const cartReducer = createReducer(
  initialCartState,
  on(cartActions.addToCart, (state, { product }) => {
    const updateCart = [...state.product, product];
    return { ...state, product: updateCart };
  })
);
