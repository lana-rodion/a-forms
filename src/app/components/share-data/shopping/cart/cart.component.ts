import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { ItemListComponent } from '../item-list/item-list.component';
import { PageTemplateComponent } from '../../../../shared/page-template/page-template.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [
    RouterLink,
    ItemListComponent,
    PageTemplateComponent,
    CheckoutComponent,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  titleHeader: string =
    'Nested child components and sibling components communication with BehaviorSubject of Shared Service';
  constructor(private cartService: CartService) {}
}
