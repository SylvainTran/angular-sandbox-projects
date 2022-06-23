import { Injectable } from '@angular/core';

export class Product {
  constructor(
    public id: number, 
    public title: string,
    public price: number,
    public rating: number,
    public description: string,
    public categories: string[] 
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {}

  getProducts(): Product[] {
    return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
  }
}

const products = [
  {
    'id': 1231230,
    'title': 'First Product',
    'price': 24.99,
    'rating': 4.3,
    'description': 'This is a short description.',
    'categories': ['electronics', 'hardware']
  },   
  {
    'id': 4321,
    'title': 'Network hardware',
    'price': 300,
    'rating': 5.0,
    'description': 'This is a short description.',
    'categories': ['electronics', 'hardware']
  }, 
  {
    'id': 4343412,
    'title': '5G Router',
    'price': 155.99,
    'rating': 3.4,
    'description': 'This is a short description.',
    'categories': ['electronics', 'hardware']
  }
]
