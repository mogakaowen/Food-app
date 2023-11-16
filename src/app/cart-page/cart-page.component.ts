import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!: Cart;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

  addToCart(item: CartItem) {
    this.cartService.addToCart(item.food);
    this.setCart();
  }

  changeQuantity(item: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(item.food.id, quantity);
    this.setCart();
  }

  removeFromCart(item: CartItem) {
    this.cartService.removeFromCart(item.food.id);
    this.setCart();
  }

}
