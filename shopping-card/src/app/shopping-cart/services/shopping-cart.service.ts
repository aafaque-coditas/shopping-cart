import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private cartItems: CartItem[] = [];

  constructor() { }

  // Add an item to the cart
  addItem(item: Product, quantity: number = 1): void {
    const existingItem = this.cartItems.find(cartItem => cartItem.item.id === item.id);
    if (existingItem) {
      existingItem.quantity += quantity; // Increment quantity if the item already exists
    } else {
      this.cartItems.push(new CartItem(item, quantity)); // Add new item
    }
  }

  // Remove an item from the cart
  removeItem(itemId: number): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.item.id !== itemId);
  }

  // Calculate total price of the cart
  getTotalPrice(): number {
    return this.cartItems.reduce((total, cartItem) => total + (cartItem.item.price * cartItem.quantity), 0);
  }

  // Get items in the cart
  getItems(): CartItem[] {
    return this.cartItems;
  }
}
