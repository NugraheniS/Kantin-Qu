import { Component, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailmenu',
  templateUrl: './detailmenu.page.html',
  styleUrls: ['./detailmenu.page.scss'],
})
export class DetailmenuPage implements OnInit {
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController,
    private router: Router
    ) { }

  ngOnInit() {
    this.products = this.cartService.getProduct();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(product){
    this.cartService.addProduct(product);
  }
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }
  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }
}
