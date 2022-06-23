import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productID: string | null = "";
  productColorParam: string | null = "";
  sellerID: string | null = "";

  constructor(route : ActivatedRoute) { 
    // this.productID = route.snapshot.paramMap.get('id'); // one time deal
    route.paramMap.subscribe( (params) => this.productID = params.get('id'));
    route.paramMap.subscribe( (params) => this.sellerID = params.get('sellerID'));
    route.queryParamMap.subscribe( (params) => this.productColorParam = params.get('color'));
  }

  ngOnInit(): void {
  }
}
