import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  data: Product[] = [
    { id : 0, name: 'Soto', price: 7000, amount : 1 },
    { id : 1, name: 'Bubur Ayam', price: 7000, amount : 1 },
    { id : 2, name: 'Sate Telur', price: 1500, amount : 1 },
    { id : 3, name: 'Sate Bakso', price: 2000, amount : 1 }
  ];
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  
    constructor() { }
    getProduct() {
      return this.data;
    }
    getCart(){
      return this.cart;
    }
    getCartItemCount(){
      return this.cartItemCount;
    }
    addProduct(product) {
      let added = false;
      for (let p of this.cart) {
        if (p.id === product.id){
          p.amount += 1;
          added = true;
          break;
        }
      }
      if (!added){
        this.cart.push(product);
      }
      this.cartItemCount.next(this.cartItemCount.value + 1);
    }
    decreaseProduct(product){
      for (let [index, p] of this.cart.entries()){
        if (p.id === product.id){
          p.amount -= 1;
          if (p.amount == 0){
            this.cart.slice(index, 1);
          }
        }
      }
      this.cartItemCount.next(this.cartItemCount.value - 1);
    }
  
    
    removeProduct(product){
      for (let [index, p] of this.cart.entries()){
        if (p.id === product.id){
          this.cartItemCount.next(this.cartItemCount.value - p.amount);
          this.cart.splice(index, 1);
         } 
      }
    }
  }