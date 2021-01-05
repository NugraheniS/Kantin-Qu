import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { AlertController, ModalController } from '@ionic/angular';
import { BookingService } from '../services/booking.service';
@Component({
  selector: 'app-transaksibooking',
  templateUrl: './transaksibooking.page.html',
  styleUrls: ['./transaksibooking.page.scss'],
})
export class TransaksibookingPage implements OnInit {
  booking: Product[] = [];
  constructor(private bookingService: BookingService, private modalCtrl: ModalController,private alertCtrl: AlertController) { }
 
  ngOnInit() {
    this.booking = this.bookingService.getBooking();
  }
    
  getTotal() {
    return this.booking.reduce((i, j) => i + j.price * j.amount, 0);
  }
}
