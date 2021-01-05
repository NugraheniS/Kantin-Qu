import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { BookingService } from '../services/booking.service';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailmenubooking',
  templateUrl: './detailmenubooking.page.html',
  styleUrls: ['./detailmenubooking.page.scss'],
})
export class DetailmenubookingPage implements OnInit {
  booking = [];
  products = [];
  bookingItemCount: BehaviorSubject<number>;

  
  constructor(
    private bookingService: BookingService,
    private modalCtrl: ModalController,
    private router: Router
    ) { }

  ngOnInit() {
    this.products = this.bookingService.getProduct();
    this.booking = this.bookingService.getBooking();
    this.bookingItemCount = this.bookingService.getBookingItemCount();
  }

  addToBooking(product){
    this.bookingService.addProduct(product);
  }
 openBooking(){
 
    this.router.navigate(['/booking-detail']);
  }
 
  getTotal() {
    return this.booking.reduce((i, j) => i + j.price * j.amount, 0);
  }
  decreaseBookingItem(product) {
    this.bookingService.decreaseProduct(product);
  }
}