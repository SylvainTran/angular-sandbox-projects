import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';

const routes: Routes = [
  {
    path: 'products/:productID',
    component: ProductDetailComponent,
    children: [
      {
        path: 'productDescription',
        component: ProductDescriptionComponent
      },
      {
        path: 'seller/:sellerID',
        component: SellerInfoComponent
      }
    ]
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

export const routing = RouterModule.forRoot(routes, {enableTracing: true});

@NgModule({
  imports: [routing],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { 

}
