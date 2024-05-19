import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { productsEffect } from './product/state/products.effects';
import { productReducer } from './product/state/products.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { cartReducer } from './product/cart/cart-state/cart.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideHttpClient(),
    provideState({ name: 'products', reducer: productReducer }),
    provideState({name: 'cart', reducer: cartReducer}),
    provideEffects(productsEffect),
    provideRouter(appRoutes,withComponentInputBinding()),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
  ],
};
