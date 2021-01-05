import { Component, OnInit} from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailpesanan',
  templateUrl: './detailpesanan.page.html',
  styleUrls: ['./detailpesanan.page.scss'],
})
export class DetailpesananPage implements OnInit {
  cart: Product[] = [];
 
  
  constructor(private cartService: CartService, 
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private router: Router ) { }
 
  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
 
  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }
 
  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }
 
  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }
 
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }
  async checkout() {
 
    let alert = await this.alertCtrl.create({
      header: 'Pembayaran Berhasil!',
      message: 'We will deliver your food as soon as possible',
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.router.navigate(['/buktipembayaran']);
    });
  }
}