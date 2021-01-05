import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingminumanPageRoutingModule } from './bookingminuman-routing.module';

import { BookingminumanPage } from './bookingminuman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingminumanPageRoutingModule
  ],
  declarations: [BookingminumanPage]
})
export class BookingminumanPageModule {}
