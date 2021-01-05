import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingmakananPageRoutingModule } from './bookingmakanan-routing.module';

import { BookingmakananPage } from './bookingmakanan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingmakananPageRoutingModule
  ],
  declarations: [BookingmakananPage]
})
export class BookingmakananPageModule {}
