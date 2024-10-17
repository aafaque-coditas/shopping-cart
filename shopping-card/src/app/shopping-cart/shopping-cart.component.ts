import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { ShoppingCartService } from './services/shopping-cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  items: Product[] = [
    { id: 1, name: 'Apple', price: 100 },
    { id: 2, name: 'Almond', price: 200 },
    { id: 3, name: 'Coconut', price: 300 },
  ];

  constructor(private shoppingCartService: ShoppingCartService) { }

  addToCart(item: Product): void {
    this.shoppingCartService.addItem(item);
  }

  removeFromCart(itemId: number): void {
    this.shoppingCartService.removeItem(itemId);
  }

  getTotalPrice(): number {
    return this.shoppingCartService.getTotalPrice();
  }

  getCartItems() {
    return this.shoppingCartService.getItems();
  }
}



