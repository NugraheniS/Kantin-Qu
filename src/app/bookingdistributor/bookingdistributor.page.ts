import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { BookingService } from '../services/booking.service';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';



@Component({
  selector: 'app-bookingdistributor',
  templateUrl: './bookingdistributor.page.html',
  styleUrls: ['./bookingdistributor.page.scss'],
})
export class BookingdistributorPage implements OnInit {
 
  booking: Product[] = [];
  pesans: Observable<any[]>;
  toggled: boolean;
  buttonColor: string;
   nama: string = '';
   nomer: number;
   date: number;
   datasRef: AngularFirestoreCollection;
   LikeValue: number;
   
   constructor(private bookingService: BookingService, 
     private db: AngularFirestore,
     private modalCtrl: ModalController,
     private alertCtrl: AlertController,
     private toastr: ToastController,
     private router: Router ) {  this.datasRef = db.collection('pesans')
     this.pesans = this.datasRef.valueChanges();}
  
 
  ngOnInit() {
    this.booking = this.bookingService.getBooking();
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
    return this.booking.reduce((i, j) => i + j.price * j.amount, 0);
  }
}