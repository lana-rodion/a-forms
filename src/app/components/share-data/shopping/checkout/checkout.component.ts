import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  constructor(private cartService: CartService) {}
  cartItems: string[] = [];

  viewCart() {
    this.cartService.cartItems$.subscribe((items) => {
      console.log('Cart Items:', items);
      this.cartItems = items;
    });
  }
}
