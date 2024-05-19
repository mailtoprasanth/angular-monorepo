import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
import { Store } from '@ngrx/store';
import * as productAction from '../state/products.action';
import { Observable } from 'rxjs';
import { IProduct } from '../model/product.model';
import { productSelector } from '../state/products.selector';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,ProductListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  productList$!: Observable<IProduct[]>;
  constructor(protected store: Store){
   this.store.dispatch(productAction.loadProduct());
   this.productList$ = this.store.select(productSelector)
  }
}
