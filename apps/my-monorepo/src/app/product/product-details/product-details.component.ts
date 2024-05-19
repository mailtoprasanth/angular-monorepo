import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../service/product-service.service';
import { Observable } from 'rxjs';
import { IProduct } from '../model/product.model';
import { Store } from '@ngrx/store';
import * as cartActions from '../cart/cart-state/cart.action';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  id = '';
  private route = inject(ActivatedRoute);
  protected store = inject(Store);
  protected productService = inject(ProductServiceService);
  productDetails$?: Observable<IProduct>;

  constructor() {
    this.id = this.route.snapshot.paramMap.get('id') || '';

    this.productDetails$ = this.productService.getProductDetails(this.id);
  }

  addToCart(datas: IProduct) {
    this.store.dispatch(cartActions.addToCart({ product: datas }));
  }
}
