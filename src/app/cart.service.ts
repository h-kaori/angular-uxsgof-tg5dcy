import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carItems: Product[] = [];
  constructor() {}
  addToCart(product: Product) {
    this.carItems.push(product);
  }

  getItems() {
    return this.carItems;
  }

  clearCart() {
    this.carItems = [];
    return this.carItems;
  }
}
