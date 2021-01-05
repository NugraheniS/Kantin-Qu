import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-transaksiadmin',
  templateUrl: './transaksiadmin.page.html',
  styleUrls: ['./transaksiadmin.page.scss'],
})
export class TransaksiadminPage implements OnInit {
  cart: Product[] = [];
  constructor(private cartService: CartService, private modalCtrl: ModalController,private alertCtrl: AlertController) { }
 
  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
 
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }
 
}