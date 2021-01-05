import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  data: Product[] = [
    { id : 0, name: 'Soto', price: 7000, amount : 1 },
    { id : 1, name: 'Bubur Ayam', price: 7000, amount : 1 },
    { id : 2, name: 'Sate Telur', price: 1500, amount : 1 },
    { id : 3, name: 'Sate Bakso', price: 2000, amount : 1 }
  ];
  private booking = [];
  private bookingItemCount = new BehaviorSubject(0);
  
    constructor() { }
    getProduct() {
      return this.data;
    }
    getBooking(){
      return this.booking;
    }
    getBookingItemCount(){
      return this.bookingItemCount;
    }
    addProduct(product) {
      let added = false;
      for (let p of this.booking) {
        if (p.id === product.id){
          p.amount += 1;
          added = true;
          break;
        }
      }
      if (!added){
        this.booking.push(product);
      }
      this.bookingItemCount.next(this.bookingItemCount.value + 1);
    }
    decreaseProduct(product){
      for (let [index, p] of this.booking.entries()){
        if (p.id === product.id){
          p.amount -= 1;
          if (p.amount == 0){
            this.booking.slice(index, 1);
          }
        }
      }
      this.bookingItemCount.next(this.bookingItemCount.value - 1);
    }
  
    
    removeProduct(product){
      for (let [index, p] of this.booking.entries()){
        if (p.id === product.id){
          this.bookingItemCount.next(this.bookingItemCount.value - p.amount);
          this.booking.splice(index, 1);
         } 
      }
    }
  }