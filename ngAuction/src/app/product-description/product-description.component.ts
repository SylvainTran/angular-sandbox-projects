import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nga-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  productDescription: string | null = "This is a product description loved by many.";

  constructor() { }

  ngOnInit(): void {
  }

}
