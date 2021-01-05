import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

import { Router } from '@angular/router';
import { BookingService } from '../services/booking.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detailbooking',
  templateUrl: './detailbooking.page.html',
  styleUrls: ['./detailbooking.page.scss'],
})
export class DetailbookingPage implements OnInit {

  
 booking: Product[] = [];
 pesans: Observable<any[]>;

  nama: string = '';
  nomer: number;
  date: number;
  datasRef: AngularFirestoreCollection;

  
  constructor(private bookingService: BookingService, 
    private db: AngularFirestore,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastr: ToastController,
    private router: Router ) {  this.datasRef = db.collection('pesans')
    this.pesans = this.datasRef.valueChanges();}
 
  ngOnInit() {
    this.booking = this.bookingService.getBooking();
  }
 
  decreaseBookingItem(product) {
    this.bookingService.decreaseProduct(product);
  }
 
  increaseBookingItem(product) {
    this.bookingService.addProduct(product);
  }
 
  removeBookingItem(product) {
    this.bookingService.removeProduct(product);
  }
 
  getTotal() {
    return this.booking.reduce((i, j) => i + j.price * j.amount, 0);
  }
  addBooking(){
    this.datasRef.add({
      title: this.nama,
      desc: this.nomer,
      date: this.date
    })
    .then(()=> {
      this.toast('Pembayaran Berhasil','success');
      this.router.navigate(['/buktipembayaranbooking']);
    })
    .catch((error)=>{
      this.toast(error.message, 'danger');
    });
  }
  async toast(message, status)
    {
        const toast = await this.toastr.create({
            message:message,
            position: 'top',
            color: status,
            duration:2000
        });
        toast.present();
     }
}