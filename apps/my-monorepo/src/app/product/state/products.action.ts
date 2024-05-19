import { createAction, props } from "@ngrx/store";
import { IProduct } from "../model/product.model";

export const loadProduct = createAction('[product Component] load product');

export const loadProductSuccess = createAction('[product Component] load product Success',props<{products: IProduct[]}>());

export const loadProductFail = createAction('[product component] Load Fails',props<{errorMessage: string}>());


