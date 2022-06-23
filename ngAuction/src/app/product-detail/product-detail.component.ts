import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from '../shared/product.service';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  // productID: string | null = "";
  // productColorParam: string | null = "";
  // sellerID: string | null = "";

  constructor(private route : ActivatedRoute, private productService: ProductService) { 
    // this.productID = route.snapshot.paramMap.get('id'); // one time deal
    // route.paramMap.subscribe( (params) => this.productID = params.get('id'));
    // route.paramMap.subscribe( (params) => this.sellerID = params.get('sellerID'));
    // route.queryParamMap.subscribe( (params) => this.productColorParam = params.get('color'));

    const productID: number = parseInt(this.route.snapshot.params['productID']);
    this.product = this.productService.getProductByID(productID) || new Product(999, "Default Product", 0, 5, "Default Product", []);
  }

  ngOnInit(): void {
  }
}
