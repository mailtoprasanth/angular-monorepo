import { Route } from '@angular/router';
import { ProductsComponent } from './product/product/products.component';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: AppComponent,  },
  { path: 'product', component: ProductsComponent },
  { path: 'productDetails/:id', component: ProductDetailsComponent, },
];
