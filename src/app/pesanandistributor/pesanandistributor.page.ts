import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pesanandistributor',
  templateUrl: './pesanandistributor.page.html',
  styleUrls: ['./pesanandistributor.page.scss'],
})
export class PesanandistributorPage implements OnInit {
  cart: Product[] = [];
  LikeValue: number;
  toggled: boolean;
  buttonColor: string;
  
  constructor(private cartService: CartService, private modalCtrl: ModalController,private alertCtrl: AlertController) { }
 
  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.LikeValue = 0;
  }
  addaksi(){
    this.LikeValue++;
    if(this.toggled){
      this.buttonColor = '#345465';
      this.toggled = false;
   }
 else{
      this.buttonColor = 'rgba(2, 153, 255, 0.94)'; 
      this.toggled = true;
  }  
  }
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }
  
}