import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-buktipembayaran',
  templateUrl: './buktipembayaran.page.html',
  styleUrls: ['./buktipembayaran.page.scss'],
})
export class BuktipembayaranPage implements OnInit {
  cart: Product[] = [];
 
  
  constructor(private cartService: CartService, private modalCtrl: ModalController,private alertCtrl: AlertController) { }
 
  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
 
  
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }
}
