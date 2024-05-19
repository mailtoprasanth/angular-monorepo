import { createAction, props } from "@ngrx/store";
import { IProduct } from "../../model/product.model";

export const addToCart = createAction('[cart Component] add to cart', props<{product: IProduct}>());