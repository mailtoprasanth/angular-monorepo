import { Injectable, inject } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as productAction from './products.action';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class productsEffect {
  private productAPICall = inject(ProductServiceService);
  action$ = inject(Actions);

  loadProducts$ = createEffect(() =>
    this.action$.pipe(
      ofType(productAction.loadProduct),
      switchMap(() =>
        this.productAPICall.getProducts().pipe(
          map((res) => productAction.loadProductSuccess({ products: res })),
          catchError(() =>
            of(
              productAction.loadProductFail({
                errorMessage: 'product load fail',
              })
            )
          )
        )
      )
    )
  );
}
