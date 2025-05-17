import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<string[]>([]);
  public cartItems$ = this.cartItemsSubject.asObservable();

  updateCartItems(items: string[]) {
    this.cartItemsSubject.next(items);
  }
}
