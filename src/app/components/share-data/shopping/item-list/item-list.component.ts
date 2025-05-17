import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-item-list',
  imports: [CommonModule, CartItemComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
})
export class ItemListComponent {
  items: string[] = [];

  constructor(private cartService: CartService) {}

  addToCart(item: string) {
    this.items.push(item);
    this.cartService.updateCartItems(this.items);
  }
}
